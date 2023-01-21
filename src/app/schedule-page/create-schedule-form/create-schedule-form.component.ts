import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseFormComponent } from 'src/app/base-form-component';
import { BikeSchedule, DistanceUnit } from 'src/app/dto/schedule-data';
import { BikeImageSelectModalComponent } from '../bike-image-select-modal/bike-image-select-modal.component';

@Component({
  selector: 'app-create-schedule-form',
  templateUrl: './create-schedule-form.component.html',
  styleUrls: ['./create-schedule-form.component.css']
})
export class CreateScheduleFormComponent extends BaseFormComponent implements OnInit {

  @Output() cancel = new EventEmitter()
  @Output() created = new EventEmitter()

  constructor(private modal: NgbModal, formBuilder: FormBuilder) {
    super(formBuilder.group({
      bikeName: [''],
    }))
   }

   editIcon = faEdit
   showImgEditIcon = false
   selectedImg = "chopper.png"

  ngOnInit(): void {
  }

  create() {
    let newSchedule: BikeSchedule = {
      bikeName: this.form.controls.bikeName.value,
      bikeImage: this.selectedImg,
      lastOdometerReading: 0,
      odometerUnits: DistanceUnit.KM,
      schedule: []
    }

    this.created.emit(newSchedule)
  }

  showImgSelectWindow() {
    const modalRef = this.modal.open(BikeImageSelectModalComponent)

    modalRef.result.then(result => {
      if(result) {
        this.selectedImg = result as string
      }
    })
  }

}
