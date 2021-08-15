import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bike-image-select-modal',
  templateUrl: './bike-image-select-modal.component.html',
  styleUrls: ['./bike-image-select-modal.component.css']
})
export class BikeImageSelectModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  closeIcon = faTimes

  ngOnInit(): void {
  }

  select(img: string) {
    this.activeModal.close(img)
  }

  availableImages = [
    "chopper.png",
    "default-p.png",
    "default-p.png",
    "default-p.png",
    "default-p.png",
    "default-p.png",
    "default-p.png",
    "default-p.png",
  ]

}
