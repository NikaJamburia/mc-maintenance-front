import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-updeatable-text',
  templateUrl: './updeatable-text.component.html',
  styleUrls: ['./updeatable-text.component.css']
})
export class UpdeatableTextComponent implements OnInit {

  @Input() displayText!: string
  @Input() updateText!: string | number
  @Input() styles!: string
  @Output() updated = new EventEmitter()

  updating = false
  showUpdtBtn = false

  editIcon = faPen
  closeIcon = faTimesCircle

  constructor() { }

  ngOnInit(): void {
  }

  update(newText: string) {
    this.updating = false
    this.updated.emit(newText)
  }

  getInputLength(): number {    
    return this.displayText.length * 2
  }

}
