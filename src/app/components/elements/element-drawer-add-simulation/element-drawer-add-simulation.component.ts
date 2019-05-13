import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SimulationInputValidator} from '../../../validators/simulation-input-validator';
import {SimulationService} from '../../../services/simulation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-element-drawer-add-simulation',
  templateUrl: './element-drawer-add-simulation.component.html',
  styleUrls: ['./element-drawer-add-simulation.component.sass']
})
export class ElementDrawerAddSimulationComponent implements OnInit {
  isSubmitted = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    input: new FormControl('', [Validators.required, SimulationInputValidator.isValidInput()])
  });

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private simulationService: SimulationService
  ) { }

  ngOnInit() {
  }

  get isAddSimulationToggled() {
    return this.navigationService.isAddSimulationToggled;
  }

  closeDrawer() {
    this.navigationService.isAddSimulationToggled = false;
  }

  async submitInput() {
    this.isSubmitted = true;
    if (this.form.valid) {
      const result = await this.simulationService.newSimulation(this.form.controls.input.value, this.form.controls.name.value);
      this.navigationService.isAddSimulationToggled = false;
      this.navigationService.isSimulationResultToggled = true;
      this.router.navigate(['/simulations'], {queryParams: {'simulation-id': result.id}});
    }
  }

}
