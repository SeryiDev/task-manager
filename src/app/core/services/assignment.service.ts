import { Injectable, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Assignment } from '../models/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService implements OnDestroy {

  momentjs: any = moment;

  private _assignmentsList: Assignment[] = [
    {
      id: 1,
      personId: 3,
      taskId: 1,
      createdAt: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, "day").toISOString()
    },
    {
      id: 2,
      personId: 1,
      taskId: 2,
      createdAt: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, "day").toISOString()
    },
    {
      id: 3,
      personId: 2,
      taskId: 1,
      createdAt: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, "day").toISOString()
    }
  ]

  private _assignmentSubject: BehaviorSubject<Assignment[]> = new BehaviorSubject(this._assignmentsList);
  public assignmentsList$ = this._assignmentSubject.asObservable();
  id: number = this._assignmentsList.length + 1;

  constructor() {}

  ngOnDestroy(): void {
    this._assignmentSubject.complete(); // Avoid leaks of data
  }

  /**
   * Gets the assignment list
   * @returns List of the Assignment object
   */
  getAssignmentsList() {
    return this._assignmentsList;
  }

  /**
   * Finds the assignment with the ID passed by param
   * @param id ID to find the assignment
   * @returns Assignment object found by the ID
   */
  getAssignmentById(id: number) {
    return this._assignmentsList.find(a => a.id == id);
  }

  /**
   * Adds one assignment to the Assignment object list
   * @param assignment Assignment object to add to the list
   */
  addAssignment(assignment: Assignment) {
    assignment.id = this.id++;
    assignment.createdAt = this.momentjs().toISOString();
    this._assignmentsList.push(assignment);
    this._assignmentSubject.next(this._assignmentsList)
  }

  /**
   * Removes the assignment found with the ID passed by param
   * @param id ID to filter the assignment
   */
  deleteAssignmentByID(id: number) {
    this._assignmentsList = this._assignmentsList.filter(a => a.id != id);
    this._assignmentSubject.next(this._assignmentsList);
  }

  /**
   * Updates the data of the assignment found by the ID
   * @param assignment Assignment object to update the data
   */
  updateAssignment(assignment: Assignment) {
    let _assignment = this._assignmentsList.find(a => a.id == assignment.id)
    if(_assignment) {
      _assignment.taskId = assignment.taskId;
      _assignment.personId = assignment.personId;
      _assignment.createdAt = assignment.createdAt;
      _assignment.dateTime = assignment.dateTime;
    }
    this._assignmentSubject.next(this._assignmentsList);
  }
}