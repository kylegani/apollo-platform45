import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDrawerSimulationResultsComponent } from './element-drawer-simulation-results.component';

describe('ElementDrawerSimulationResultsComponent', () => {
  let component: ElementDrawerSimulationResultsComponent;
  let fixture: ComponentFixture<ElementDrawerSimulationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDrawerSimulationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDrawerSimulationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
