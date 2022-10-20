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
      personId: 1,
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
    return this._assignmentsList.find(a => a.id == id)
  }

  deleteAssignmentByID(id: number) {
    this._assignmentsList = this._assignmentsList.filter(a => a.id != id)
  }
}