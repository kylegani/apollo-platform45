import { Injectable } from '@angular/core';
import {Simulation} from '../models/simulation';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Stats} from '../models/stats';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  simulationStats$: Observable<{id: string, payload: Stats}>;
  simulations$: Observable<{id: string, payload: Simulation}[]>;

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  newSimulation(input, name) {
    const simulation = new Simulation();
    simulation.name = name;
    simulation.initRoversFromInput(input);
    simulation.initMapFromInput(input);
    simulation.process();
    return this.angularFirestore.collection('simulations').add(JSON.parse(JSON.stringify(simulation)));
  }

  getSimulations() {
    const simulationsCollectionRef = this.angularFirestore
      .collection('simulations', ref => ( ref.orderBy('simulationDate', 'desc')));
    this.simulations$ = simulationsCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const payload = a.payload.doc.data() as unknown as Simulation;
          const id = a.payload.doc.id;
          return {id, payload};
        });
      })
    );
  }

  getSimulation(simulationId) {
    return this.angularFirestore.doc(`/simulations/${simulationId}`).get();
  }

  getsimulationStats() {
    this.simulationStats$ = this.angularFirestore.doc(`/analytics/QpvZjF3lQuUwDPcLS7Wl`).snapshotChanges().pipe(
      map(a => {
        const payload = a.payload.data() as unknown as Stats;
        const id = a.payload.id;
        return {id, payload};
      })
    );
  }
}
