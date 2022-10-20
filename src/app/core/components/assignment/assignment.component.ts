import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { Person } from '../../models/person';
import { Task } from '../../models/task';
import { isLowResolution, isLowResolutionSliding as isLowResSlide } from 'src/app/core/utils/screen';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Input() assignment: Assignment
  @Input() person: Person
  @Input() task: Task
  closeIfLowRes = isLowResSlide
  isLowRes = isLowResolution

  constructor() { }

  ngOnInit() {}

  onEditAssignment() {
    this.onEdit.emit(this.assignment);
  }

  onDeleteAssignment() {
    this.onDelete.emit(this.assignment);
  }
}
