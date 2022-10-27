import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { Person } from '../../models/person';
import { Task } from '../../models/task';
import { isLowResolution, isLowResolutionSliding as isLowResSlide } from 'src/app/utils/screen';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent {

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Input() assignment: Assignment
  @Input() person: Person
  @Input() task: Task
  closeIfLowRes = isLowResSlide
  isLowRes = isLowResolution

  constructor() { }

  /**
   * Event that emits the Assignment object to the father to update it
   */
  onEditAssignment() {
    this.onEdit.emit(this.assignment);
  }

  /**
   * Event that emits the Assignment object to the father to delete it
   */
  onDeleteAssignment() {
    this.onDelete.emit(this.assignment);
  }
}