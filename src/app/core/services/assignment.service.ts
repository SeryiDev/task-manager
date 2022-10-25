import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Assignment } from '../models/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  momentjs: any = moment;

  private _assignmentsList: Assignment[] = [
    {
      id: 1,
      personId: 3,
      taskId: 1,
      createdAt: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, 'days').toISOString()
    },
    {
      id: 2,
      personId: 1,
      taskId: 2,
      createdAt: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, 'days').toISOString()
    },
    {
      id: 3,
      personId: 2,
      taskId: 1,
      createdAt: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, 'days').toISOString()
    }
  ]

  id: number = this._assignmentsList.length + 1;

  constructor() { }

  getAssignmentsList() {
    return this._assignmentsList;
  }

  getAssignmentByID(id: number) {
    return this._assignmentsList.find(a => a.id == id);
  }

  addAssignment(assignment: Assignment) {
    assignment.id = this.id++;
    this._assignmentsList.push(assignment);
  }

  deleteAssignmentByID(id: number) {
    this._assignmentsList = this._assignmentsList.filter(a => a.id != id);
  }

  updateAssignment(assignment: Assignment) {
    let _assignment = this._assignmentsList.find(a => a.id == assignment.id)
    if(_assignment) {
      _assignment.taskId = assignment.taskId;
      _assignment.personId = assignment.personId;
      _assignment.createdAt = assignment.createdAt;
      _assignment.dateTime = assignment.dateTime;
    }
  }
}