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

  constructor() { }

  ngOnInit(): void {
  }

  selectBike(bikeSchedule: BikeSchedule) {
    this.bikeSelected.emit(bikeSchedule)
  }

  showAddBikeForm() {
    console.log("add bike");
    
  }

}
