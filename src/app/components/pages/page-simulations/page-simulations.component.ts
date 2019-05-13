import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';
import {SimulationService} from '../../../services/simulation.service';
import {Observable} from 'rxjs';
import {Simulation} from '../../../models/simulation';
import {Stats} from '../../../models/stats';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-simulations',
  templateUrl: './page-simulations.component.html',
  styleUrls: ['./page-simulations.component.sass']
})
export class PageSimulationsComponent implements OnInit {
  simulations: {id: string, payload: Simulation}[] = [];
  simulationStats: {id: string, payload: Stats} = null;
  pageOptions: any = {hasAddButton: true, addButtonText: 'Add simulation'};
  pageTitle = 'Simulations';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private simulationService: SimulationService
  ) { }

  ngOnInit() {
    this.simulationService.getsimulationStats();
    this.simulationService.getSimulations();
    this.simulationService.simulationStats$.subscribe(simulationStats => this.simulationStats = simulationStats);
    this.simulationService.simulations$.subscribe(simulations => this.simulations = simulations);
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams['simulation-id']) {
        this.navigationService.isSimulationResultToggled = true;
      }
    });
  }

  handleButtonClicked(event) {
    if (event === 'add') {
      this.navigationService.isAddSimulationToggled = true;
    }
  }

  async activateSimulation(simulationId) {
    this.navigationService.isSimulationResultToggled = true;
    this.router.navigate(['/simulations'], {queryParams: {'simulation-id': simulationId}});
  }

}
