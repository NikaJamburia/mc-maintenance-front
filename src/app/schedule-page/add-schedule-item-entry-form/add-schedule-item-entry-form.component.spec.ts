import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleItemEntryFormComponent } from './add-schedule-item-entry-form.component';

describe('AddScheduleItemEntryFormComponent', () => {
  let component: AddScheduleItemEntryFormComponent;
  let fixture: ComponentFixture<AddScheduleItemEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduleItemEntryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleItemEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
