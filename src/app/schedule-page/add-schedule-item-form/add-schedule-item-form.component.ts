import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseFormComponent } from 'src/app/base-form-component';
import { DistanceUnit, ScheduleItem } from 'src/app/dto/schedule-data';

@Component({
  selector: 'app-add-schedule-item-form',
  templateUrl: './add-schedule-item-form.component.html',
  styleUrls: ['./add-schedule-item-form.component.css']
})
export class AddScheduleItemFormComponent extends BaseFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, formBuilder: FormBuilder) {
    super(formBuilder.group({
      name: [''],
      intervalValue: ['']
    }))
  }

  selectedIntervalUnit = DistanceUnit.MILES
  distanceUnit = DistanceUnit

  ngOnInit(): void {
  }

  create() {
    console.log("creating");
    
    if(this.form.valid) {
      let newItem: ScheduleItem = {
        name: this.form.controls.name.value,
        interval: {
          value: this.form.controls.intervalValue.value,
          unit: this.selectedIntervalUnit,
        },
        entries: []
      }

      this.activeModal.close(newItem)
    }
  }

}
