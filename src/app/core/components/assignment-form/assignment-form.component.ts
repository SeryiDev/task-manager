import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from '../../models/assignment';
import { PersonService } from '../../services/person.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.scss'],
})
export class AssignmentFormComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";

  peopleList = this.personService.getPeopleList()
  tasksList = this.taskService.getTasksList()

  @Input('assignment') set assignment(assignment: Assignment) {
    if (assignment) {
      this.form.controls.id.setValue(assignment.id);
      this.form.controls.personId.setValue(assignment.personId);
      this.form.controls.taskId.setValue(assignment.taskId);
      this.form.controls.createdAt.setValue(assignment.createdAt);
      this.form.controls.dateTime.setValue(assignment.dateTime);
      this.mode = "Edit";
    }
  }

  constructor(
    private personService: PersonService,
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      personId: ['', [Validators.required]],
      taskId: ['', [Validators.required]],
      createdAt: [''],
      dateTime: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.modalController.dismiss({ assignment: this.form.value, mode: this.mode });
  }

  onDismiss() {
    this.modalController.dismiss();
  }

  changeDate(dateTime) {
    this.form.controls.dateTime.setValue(dateTime.detail.value)
  }
}
