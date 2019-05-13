import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDrawerAddSimulationComponent } from './element-drawer-add-simulation.component';

describe('ElementDrawerAddSimulationComponent', () => {
  let component: ElementDrawerAddSimulationComponent;
  let fixture: ComponentFixture<ElementDrawerAddSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDrawerAddSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDrawerAddSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
