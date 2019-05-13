import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrawerComponent } from './template-drawer.component';

describe('TemplateDrawerComponent', () => {
  let component: TemplateDrawerComponent;
  let fixture: ComponentFixture<TemplateDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
