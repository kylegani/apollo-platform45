import {Component, OnInit} from '@angular/core';
import {SimulationService} from './services/simulation.service';
import {Simulation} from './models/simulation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedSimulation: { id: string, payload: Simulation };
  title = 'Apollo';

  constructor() {
  }

  ngOnInit(): void {
  }

}
