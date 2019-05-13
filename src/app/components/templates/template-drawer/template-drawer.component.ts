import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-template-drawer',
  templateUrl: './template-drawer.component.html',
  styleUrls: ['./template-drawer.component.sass']
})
export class TemplateDrawerComponent implements OnInit {
  @Input() isDrawerToggled = false;
  @Input () title = 'Title';
  @Output() closeDrawer: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitCloseDrawer(value: string) {
    this.closeDrawer.emit(value);
  }

}
