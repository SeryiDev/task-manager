import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _tasksList: Task[] = [
    {
      id: 1,
      name: 'Wash the dishes',
      timeInSeconds: 900,
      image: 'http://drive.google.com/uc?export=view&id=1j98N9shfO5EpBVUL_Iy59C9Im2ZfQJib'
    },
    {
      id: 2,
      name: "Clean the bedroom",
      timeInSeconds: 3600,
      image: 'http://drive.google.com/uc?export=view&id=1wHBTkmkxsfsA22_J2Nd6ffspTAw8bcv9'
    },
    {
      id: 3,
      name: "Cook",
      timeInSeconds: 1800,
      image: 'http://drive.google.com/uc?export=view&id=1Fy44yu_TicvjywFviqL5u-V88EklS7dr'
    },
    {
      id: 4,
      name: "Put the dish washer",
      timeInSeconds: 300,
      image: 'http://drive.google.com/uc?export=view&id=1N7qQRiQ13gewhqRnC_TFr6UiStKtvgn9'
    },
    {
      id: 5,
      name: "Put the washing machine",
      timeInSeconds: 300,
      image: 'http://drive.google.com/uc?export=view&id=1X5iO2pY4BiecX1224DRXCZOx8dpl_Rem'
    },
    {
      id: 6,
      name: "Do the homework",
      timeInSeconds: 3600,
      image: 'http://drive.google.com/uc?export=view&id=18fRfRWxolevRAclEEJ6Vi-KyjO8j__O1'
    },
    {
      id: 7,
      name: "Study",
      timeInSeconds: 5400,
      image: 'http://drive.google.com/uc?export=view&id=1JcSaIzfuYzKybwJOG_gVlDtBtBVzoxmI'
    }
  ]

  id: number = this._tasksList.length + 1

  constructor() { }

  /**
   * Gets the tasks list
   * @returns List of the Task object
   */
  getTasksList() {
    return this._tasksList;
  }

  /**
   * Finds the task with the ID passed by param
   * @param id ID to find the task
   * @returns Task object found by the ID
   */
  getTaskByID(id: number) {
    return this._tasksList.find(p => p.id == id)
  }

  /**
   * Adds one task to the Task object list
   * @param task Task object to add to the list
   */
  addTask(task: Task) {
    task.id = this.id++
    this._tasksList.push(task)
  }

  /**
   * Removes the task found with the ID passed by param
   * @param id ID to filter the task
   */
  deleteTaskByID(id: number) {
    this._tasksList = this._tasksList.filter(p => p.id != id)
  }

  /**
   * Updates the data of the task found by the ID
   * @param task Task object to update the data
   */
  updateTask(task: Task) {
    let _task = this._tasksList.find(p => p.id == task.id);
    if(_task) {
      _task.name = task.name;
      _task.timeInSeconds = task.timeInSeconds;
    }
  }
}