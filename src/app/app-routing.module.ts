import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PageSimulationsComponent} from './components/pages/page-simulations/page-simulations.component';
import {PageHowItWorksComponent} from './components/pages/page-how-it-works/page-how-it-works.component';

const routes: Routes = [
  { path: '', redirectTo: 'simulations', pathMatch: 'full'},
  { path: 'simulations', component: PageSimulationsComponent },
  { path: 'how-it-works', component: PageHowItWorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
