import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-stats-tile',
  templateUrl: './template-stats-tile.component.html',
  styleUrls: ['./template-stats-tile.component.sass']
})
export class TemplateStatsTileComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() value = '';

  constructor() { }

  ngOnInit() {
  }

}
