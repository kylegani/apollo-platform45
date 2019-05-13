import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-how-it-works',
  templateUrl: './page-how-it-works.component.html',
  styleUrls: ['./page-how-it-works.component.sass']
})
export class PageHowItWorksComponent implements OnInit {
  pageOptions: any = {hasAddButton: false};
  pageTitle = 'How it works';

  constructor() { }

  ngOnInit() {
  }

}
