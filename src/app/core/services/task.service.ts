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
      name: "Vacuum",
      timeInSeconds: 1800,
      image: 'http://drive.google.com/uc?export=view&id=1CaHV-KBivJOvbbxZc8v2M5GtkdDqFueI'
    },
    {
      id: 5,
      name: "Put the washing machine",
      timeInSeconds: 300,
      image: 'http://drive.google.com/uc?export=view&id=1X5iO2pY4BiecX1224DRXCZOx8dpl_Rem'
    },
    {
      id: 5,
      name: "Clean the windows",
      timeInSeconds: 600,
      image: 'http://drive.google.com/uc?export=view&id=1WJ1rFKAVFm88u2D1ftgE4AmGaQOmL71Y'
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