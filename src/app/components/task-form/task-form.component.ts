import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('task') set task(task: Task) {
    if (task) {
      this.form.controls.id.setValue(task.id);
      this.form.controls.name.setValue(task.name);
      this.form.controls.timeInSeconds.setValue(task.timeInSeconds);
      this.mode = "Edit";
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required]],
      timeInSeconds: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.modalController.dismiss({ task: this.form.value, mode: this.mode });
  }

  onDismiss() {
    this.modalController.dismiss();
  }
}