import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';
import { isLowResolution, isLowResolutionSliding as isLowResSlide } from 'src/app/core/utils/screen';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() task: Task
  closeIfLowRes = isLowResSlide
  isLowRes = isLowResolution

  constructor() { }

  ngOnInit() {}

  onEditTask() {
    this.onEdit.emit(this.task)
  }

  onDeleteTask() {
    this.onEdit.emit(this.task)
  }
}