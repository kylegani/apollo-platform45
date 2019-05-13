import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  isAddSimulationToggled = false;
  isSimulationResultToggled = false;
  sideMenuItems: any = [
    {url: '/simulations', title: 'Simulations'},
    {url: '/how-it-works', title: 'How it works'},
  ];

  constructor() { }
}
