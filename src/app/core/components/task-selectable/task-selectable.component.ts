import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

const TASK_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
  providers: [TASK_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements ControlValueAccessor {

  taskSelected: Task = null;
  isDisabled: boolean = false;
  propagateChange = (_:any) => { }

  constructor(
    private taskService: TaskService
    ) { }
  
  /**
   * Receives the formControllerName used in the component tag
   * @param taskId ID of the task received by the assignment form
   */
  writeValue(taskId: any): void {
    this.taskSelected = this.taskService.getTaskByID(taskId)
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getTasksList() {
    return this.taskService.getTasksList();
  }

  onTaskClick(task: Task, accordion: IonAccordionGroup) {
    this.taskSelected = task;
    accordion.value = '';
    this.propagateChange(this.taskSelected.id); // Propagates the new ID
  }
}