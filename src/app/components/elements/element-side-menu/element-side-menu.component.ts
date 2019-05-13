import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';

@Component({
  selector: 'app-element-side-menu',
  templateUrl: './element-side-menu.component.html',
  styleUrls: ['./element-side-menu.component.sass']
})
export class ElementSideMenuComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  get sideMenuItems() {
    return this.navigationService.sideMenuItems
  }

}
