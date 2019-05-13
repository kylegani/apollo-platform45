import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageSimulationsComponent } from './components/pages/page-simulations/page-simulations.component';
import { PageHowItWorksComponent } from './components/pages/page-how-it-works/page-how-it-works.component';

import { TemplatePageComponent } from './components/templates/template-page/template-page.component';
import { TemplateDrawerComponent } from './components/templates/template-drawer/template-drawer.component';

import { ElementDrawerAddSimulationComponent } from './components/elements/element-drawer-add-simulation/element-drawer-add-simulation.component';
import { ElementSideMenuComponent } from './components/elements/element-side-menu/element-side-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateStatsTileComponent } from './components/templates/template-stats-tile/template-stats-tile.component';
import {environment} from '../environments/environment';
import { ElementDrawerSimulationResultsComponent } from './components/elements/element-drawer-simulation-results/element-drawer-simulation-results.component';

@NgModule({
  declarations: [
    AppComponent,
    PageSimulationsComponent,
    PageHowItWorksComponent,
    TemplatePageComponent,
    TemplateDrawerComponent,
    TemplateStatsTileComponent,
    ElementSideMenuComponent,
    ElementDrawerAddSimulationComponent,
    ElementDrawerSimulationResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
