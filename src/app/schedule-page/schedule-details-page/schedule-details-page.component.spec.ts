import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDetailsPageComponent } from './schedule-details-page.component';

describe('ScheduleDetailsPageComponent', () => {
  let component: ScheduleDetailsPageComponent;
  let fixture: ComponentFixture<ScheduleDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
