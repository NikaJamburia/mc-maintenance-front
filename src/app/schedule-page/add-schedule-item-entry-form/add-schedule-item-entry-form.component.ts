import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseFormComponent } from 'src/app/base-form-component';
import { DistanceUnit, ScheduleItemEntry } from 'src/app/dto/schedule-data';

@Component({
  selector: 'app-add-schedule-item-entry-form',
  templateUrl: './add-schedule-item-entry-form.component.html',
  styleUrls: ['./add-schedule-item-entry-form.component.css']
})
export class AddScheduleItemEntryFormComponent extends BaseFormComponent implements OnInit {

  constructor(public modal: NgbActiveModal, formbuilder: FormBuilder) { 
    super(formbuilder.group({
      date: [''],
      odometerValue: ['']
    }))
  }

  distanceUnit = DistanceUnit
  selectedOdometerUnit = DistanceUnit.MILES

  ngOnInit(): void {
  }

  create() {

    let entry: ScheduleItemEntry = {
      entryDate: this.toBackEndString(new Date(this.form.controls.date.value)),
      odometerReading: parseInt(this.form.controls.odometerValue.value)
    }

    this.modal.close(entry)
    
  }

  private toBackEndString(date: Date): string {
    return `${date.getFullYear()}-${this.padLeft(date.getMonth() + 1)}-${this.padLeft(date.getDate())}`    
  }

  private padLeft(num: number): string {
    if(num < 9) {
      return "0" + num
    }
    return num.toString()
  }

}
