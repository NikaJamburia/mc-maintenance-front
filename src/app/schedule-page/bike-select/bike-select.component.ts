import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BikeSchedule } from 'src/app/dto/schedule-data';

@Component({
  selector: 'app-bike-select',
  templateUrl: './bike-select.component.html',
  styleUrls: ['./bike-select.component.css']
})
export class BikeSelectComponent implements OnInit {

  @Input() schedules!: BikeSchedule[]
  @Output() bikeSelected = new EventEmitter()

  plusIcon = faPlus

  creatingSchedule = false

  constructor() { }

  ngOnInit(): void {
  }

  selectBike(bikeSchedule: BikeSchedule) {
    this.bikeSelected.emit(bikeSchedule)

  }

  showCreateScheduleForm() {
    this.creatingSchedule = true
  }

  newScheduleCreated(schedule: BikeSchedule) {
    this.creatingSchedule = false
    this.schedules.push(schedule)
    
  }

}
