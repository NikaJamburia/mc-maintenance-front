import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleItemFormComponent } from './add-schedule-item-form.component';

describe('AddScheduleItemFormComponent', () => {
  let component: AddScheduleItemFormComponent;
  let fixture: ComponentFixture<AddScheduleItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduleItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
