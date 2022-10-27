import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { isLowResolution, isLowResolutionSliding as isLowResSlide } from 'src/app/utils/screen';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() task: Task;
  @Input() mode: String;
  closeIfLowRes = isLowResSlide
  isLowRes = isLowResolution

  constructor() { }

  /**
   * Event that emits the Task object to the father to update it
   */
  onEditTask() {
    this.onEdit.emit(this.task)
  }

  /**
   * Event that emits the Task object to the father to delete it
   */
  onDeleteTask() {
    this.onDelete.emit(this.task)
  }

  /**
   * 
   * @param ev DONT WORK
   */
  handleReorder(ev) {
    console.log(`Moving item from ${ev.detail.from} to ${ev.detail.to}`);
    ev.detail.complete();
  }
}