import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _taskList: Task[] = [
    {
      id: 1,
      name: 'Wash the dishes',
      timeInSeconds: 900 
    },
    {
      id: 2,
      name: "Clean Sergio's room",
      timeInSeconds: 3600 
    },
  ] 

  id: number = this._taskList.length + 1

  constructor() { }

  getTaskList() {
    return this._taskList;
  }

  getTaskById(id: number) {
    return this._taskList.find(p => p.id == id)
  }

  addTask(task: Task) {
    task.id = this.id++
    this._taskList.push(task)
  }

  deleteTaskById(id: number) {
    this._taskList = this._taskList.filter(p => p.id != id)
  }

  updateTask(task: Task) {
    let updatedTask = this._taskList.find(p => p.id == task.id);
    if(updatedTask) {
      updatedTask.name = task.name;
      updatedTask.timeInSeconds = task.timeInSeconds;
    }
  }
}