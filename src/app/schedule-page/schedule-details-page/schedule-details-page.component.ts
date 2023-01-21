import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeft, faEdit, faPlus, faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BikeSchedule, DistanceUnit, IntervalType, ScheduleItem, ScheduleItemEntry } from 'src/app/dto/schedule-data';
import { AddScheduleItemEntryFormComponent } from '../add-schedule-item-entry-form/add-schedule-item-entry-form.component';
import { AddScheduleItemFormComponent } from '../add-schedule-item-form/add-schedule-item-form.component';
import { BikeImageSelectModalComponent } from '../bike-image-select-modal/bike-image-select-modal.component';

@Component({
  selector: 'app-schedule-details-page',
  templateUrl: './schedule-details-page.component.html',
  styleUrls: ['./schedule-details-page.component.css']
})
export class ScheduleDetailsPageComponent implements OnInit {

  @Input() schedule!: BikeSchedule
  @Output() scheduleUpdated = new EventEmitter()
  @Output() back = new EventEmitter()

  editIcon = faEdit
  questionIcon = faQuestionCircle
  addIcon = faPlus
  closeIcon = faTimesCircle
  backIcon = faArrowLeft

  showAddNewForm = false
  showImgEditIcon = false

  scheduleItemToEdit?: ScheduleItem
  itemIntervalUnitToEdit?: DistanceUnit

  distanceUnit = DistanceUnit


  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  updateName(newName: string) {
    this.schedule.bikeName = newName
    this.scheduleUpdated.emit(this.schedule)
  }

  updateOdometer(newValue: string) {
    this.schedule.lastOdometerReading = parseInt(newValue)
    this.scheduleUpdated.emit(this.schedule)
  }

  nextServiceSeverity(scheduleItem: ScheduleItem, currentOdometer: number): string {
    let lastEntry = [...scheduleItem.entries].pop()

    if (!lastEntry) {
      return "success"
    }

    if(scheduleItem.nextServiceMileage) {
      if(currentOdometer > scheduleItem.nextServiceMileage!!) {
        return "danger"
      }
  
      let percentage = (currentOdometer * 100) / scheduleItem.nextServiceMileage
      return percentage > 75 ? "warning" : "success"
    }

    if(scheduleItem.nextServiceDate) {
      let today = new Date()
      let serviceDate = new Date(scheduleItem.nextServiceDate)

      if(today > serviceDate) {
        return "danger"
      }

      let diffTime = Math.abs(serviceDate.valueOf() - today.valueOf());
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      return diffDays <= 30 ? "warning" : "success"
    }

    return ""

  }

  nextServiceRemiderText(scheduleItem: ScheduleItem): string {
    if(scheduleItem.nextServiceMileage) {
      let isLate = this.schedule.lastOdometerReading > scheduleItem.nextServiceMileage
      return `${isLate ? 'Missed' : ''} Service on ${scheduleItem.nextServiceMileage}`
    }

    if(scheduleItem.nextServiceDate) {
      let today = new Date()
      let nextServiceDay = new Date(scheduleItem.nextServiceDate)
      let isLate = today > nextServiceDay
      return `${isLate ? 'Missed' : ''} Service on ${scheduleItem.nextServiceDate}`
    }

    return ""
  }

  addNewItem(item: ScheduleItem) {    
    this.schedule.schedule.push(item)
    this.scheduleUpdated.emit(this.schedule)
  }

  showAddNewScheduleItemForm() {
    const modalRef = this.modal.open(AddScheduleItemFormComponent)
    modalRef.componentInstance.distanceUnit = this.schedule.odometerUnits

    modalRef.result.then(result => {
      if(result) {
        this.addNewItem(result as ScheduleItem)
      }
    })
  }

  isBeingUpdated(item: ScheduleItem) {
    return this.scheduleItemToEdit === item
  }

  showEditForm(item: ScheduleItem) {
    this.scheduleItemToEdit = item
  }

  removeScheduleItem(scheduleItem: ScheduleItem) {
    this.schedule.schedule = this.schedule.schedule.filter(item => item !== scheduleItem)
    this.scheduleUpdated.emit(this.schedule)
  }

  editScheduleItem(nameInput: HTMLInputElement, intervalInput: HTMLInputElement, item: ScheduleItem) {

    if(nameInput.validity.valueMissing || intervalInput.validity.valueMissing) {
      throw new Error("aaa")
    } else {
      item.name = nameInput.value
      item.interval = parseInt(intervalInput.value)
      this.scheduleItemToEdit = undefined
      this.scheduleUpdated.emit(this.schedule)
    }

  }

  showAddEntryForm(item: ScheduleItem) {
    const modalRef = this.modal.open(AddScheduleItemEntryFormComponent)

    modalRef.result.then(result => {
      if(result) {
        item.entries.push(result as ScheduleItemEntry)
        this.scheduleUpdated.emit(this.schedule)
      }
    })
  }

  showImgSelectWindow() {
    const modalRef = this.modal.open(BikeImageSelectModalComponent)

    modalRef.result.then(result => {
      if(result) {
        this.schedule.bikeImage = result as string
        this.scheduleUpdated.emit(this.schedule)
      }
    })
  }
  

}
