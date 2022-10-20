import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../models/person';
import { isLowResolution, isLowResolutionSliding as isLowResSlide } from 'src/app/core/utils/screen';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Output() onEdit = new EventEmitter; // IMPORT EVENT EMITTER FROM ANGULAR CORE
  @Output() onDelete = new EventEmitter;
  @Input() person: Person;
  closeIfLowRes = isLowResSlide
  isLowRes = isLowResolution

  constructor() { }

  ngOnInit() {}

  onEditPerson(){
    this.onEdit.emit(this.person);
  }

  onDeletePerson(){
    this.onDelete.emit(this.person);
  }
}