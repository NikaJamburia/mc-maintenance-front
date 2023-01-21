import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseFormComponent } from 'src/app/base-form-component';
import { DistanceUnit, IntervalType, ScheduleItem } from 'src/app/dto/schedule-data';

@Component({
  selector: 'app-add-schedule-item-form',
  templateUrl: './add-schedule-item-form.component.html',
  styleUrls: ['./add-schedule-item-form.component.css']
})
export class AddScheduleItemFormComponent extends BaseFormComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal, 
    formBuilder: FormBuilder,
    ) {
    super(formBuilder.group({
      name: [''],
      intervalValue: ['']
    }))
  }

  selectedIntervalType = IntervalType.DISTANCE
  intervalType = IntervalType

  @Input() public distanceUnit: DistanceUnit = DistanceUnit.KM

  ngOnInit(): void {
  }

  create() {
    console.log("creating");
    
    if(this.form.valid) {
      let newItem: ScheduleItem = {
        name: this.form.controls.name.value,
        interval: parseInt(this.form.controls.intervalValue.value),
        entries: [],
        intervalType: this.selectedIntervalType
      }

      this.activeModal.close(newItem)
    }
  }

}
