import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStatsTileComponent } from './template-stats-tile.component';

describe('TemplateStatsTileComponent', () => {
  let component: TemplateStatsTileComponent;
  let fixture: ComponentFixture<TemplateStatsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStatsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStatsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
