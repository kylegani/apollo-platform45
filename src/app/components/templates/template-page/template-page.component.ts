import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.sass']
})
export class TemplatePageComponent implements OnInit {
  @Input() options: {
    hasAddButton: boolean
    addButtonText: string;
  } = {
    hasAddButton: true,
    addButtonText: 'Add item'
  };
  @Input() title = 'Title';
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitButtonClicked(value: string) {
    this.buttonClicked.emit(value);
  }

}
