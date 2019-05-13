import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Simulation} from '../../../models/simulation';
import {NavigationService} from '../../../services/navigation.service';
import {SimulationService} from '../../../services/simulation.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-element-drawer-simulation-results',
  templateUrl: './element-drawer-simulation-results.component.html',
  styleUrls: ['./element-drawer-simulation-results.component.sass']
})
export class ElementDrawerSimulationResultsComponent implements OnInit {
  simulation: {id: string, payload: Simulation} = {id: '', payload: new Simulation()};
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private simulationService: SimulationService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['simulation-id']) {
        this.getSimulation(params['simulation-id']);
      }
    });
  }

  async getSimulation(simulationId) {
    console.log(simulationId);
    try {
      this.isLoading = true;
      this.simulation.id = simulationId;
      const result: Observable<any> = await this.simulationService.getSimulation(simulationId);
      result.forEach(doc => {
        this.simulation.payload = doc.data();
      });
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
    }
  }

  get isSimulationResultsToggled() {
    return this.navigationService.isSimulationResultToggled;
  }

  closeDrawer() {
    this.navigationService.isSimulationResultToggled = false;
  }

}
