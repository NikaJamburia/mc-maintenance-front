import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeft, faEdit, faPlus, faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { miles, toMiles } from 'src/app/dto/odometer';
import { BikeSchedule, DistanceUnit, OdometerReading, ScheduleItem, ScheduleItemEntry } from 'src/app/dto/schedule-data';
import { DistanceStringPipe } from 'src/app/pipes/distance-string.pipe';
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
    this.scheduleUpdated.emit()
  }

  updateOdometer(newValue: string) {
    this.schedule.lastOdometerReading = { value: parseInt(newValue), unit: this.schedule.lastOdometerReading.unit  }
    this.scheduleUpdated.emit()
  }

  nextServiceSeverity(scheduleItem: ScheduleItem, currentOdometer: OdometerReading): string {
    let lastEntry = [...scheduleItem.entries].pop()

    if (!lastEntry) {
      return "success"
    }

    let nextServiceOdometerMiles = toMiles(lastEntry.odometerReading).value + toMiles(scheduleItem.interval).value
    let currentOdometerAsMiles = toMiles(currentOdometer).value

    if(currentOdometerAsMiles > nextServiceOdometerMiles) {
      return "danger"
    }

    let percentage = (currentOdometerAsMiles * 100) / nextServiceOdometerMiles
    return percentage > 75 ? "warning" : "success"

  }

  nextServiceRemiderText(scheduleItem: ScheduleItem): string {
    let lastEntry = [...scheduleItem.entries].pop()!
    let nextServiceOdometer =  miles(toMiles(lastEntry.odometerReading).value + toMiles(scheduleItem.interval).value)

    return `${nextServiceOdometer.value >= toMiles(this.schedule.lastOdometerReading).value ? 'Next' : 'Missed'} service on ${nextServiceOdometer.value} ${nextServiceOdometer.unit.toString().toLowerCase()}`
  }

  addNewItem(item: ScheduleItem) {    
    this.schedule.schedule.push(item)
    this.scheduleUpdated.emit()
  }

  showAddNewScheduleItemForm() {
    const modalRef =this.modal.open(AddScheduleItemFormComponent)

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
    this.itemIntervalUnitToEdit = item.interval.unit
  }

  removeScheduleItem(scheduleItem: ScheduleItem) {
    this.schedule.schedule = this.schedule.schedule.filter(item => item !== scheduleItem)
    this.scheduleUpdated.emit()
  }

  editScheduleItem(nameInput: HTMLInputElement, intervalInput: HTMLInputElement, item: ScheduleItem) {

    if(nameInput.validity.valueMissing || intervalInput.validity.valueMissing) {
      throw new Error("aaa")
    } else {
      item.name = nameInput.value
      item.interval = { value: parseInt(intervalInput.value), unit: this.itemIntervalUnitToEdit! }
      this.scheduleItemToEdit = undefined
      this.scheduleUpdated.emit()
    }

  }

  showAddEntryForm(item: ScheduleItem) {
    const modalRef = this.modal.open(AddScheduleItemEntryFormComponent)

    modalRef.result.then(result => {
      if(result) {
        item.entries.push(result as ScheduleItemEntry)
        this.scheduleUpdated.emit()
      }
    })
  }

  showImgSelectWindow() {
    const modalRef = this.modal.open(BikeImageSelectModalComponent)

    modalRef.result.then(result => {
      if(result) {
        this.schedule.bikeImage = result as string
        this.scheduleUpdated.emit()
      }
    })
  }

}
