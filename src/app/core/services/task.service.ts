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
      name: "Clean Sergio's room",
      timeInSeconds: 3600,
      image: 'http://drive.google.com/uc?export=view&id=1wHBTkmkxsfsA22_J2Nd6ffspTAw8bcv9'
    },
  ] 

  id: number = this._tasksList.length + 1

  constructor() { }

  getTasksList() {
    return this._tasksList;
  }

  getTaskByID(id: number) {
    return this._tasksList.find(p => p.id == id)
  }

  addTask(task: Task) {
    task.id = this.id++
    this._tasksList.push(task)
  }

  deleteTaskByID(id: number) {
    this._tasksList = this._tasksList.filter(p => p.id != id)
  }

  updateTask(task: Task) {
    let updatedTask = this._tasksList.find(p => p.id == task.id);
    if(updatedTask) {
      updatedTask.name = task.name;
      updatedTask.timeInSeconds = task.timeInSeconds;
    }
  }
}