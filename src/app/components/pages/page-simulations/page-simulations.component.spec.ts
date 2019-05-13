import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSimulationsComponent } from './page-simulations.component';

describe('PageSimulationsComponent', () => {
  let component: PageSimulationsComponent;
  let fixture: ComponentFixture<PageSimulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSimulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSimulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
