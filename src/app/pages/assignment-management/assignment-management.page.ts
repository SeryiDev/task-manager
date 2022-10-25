import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Assignment } from 'src/app/core/models/assignment';
import { Person } from 'src/app/core/models/person';
import { Task } from 'src/app/core/models/task';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { PersonService } from 'src/app/core/services/person.service';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-assignment-management',
  templateUrl: './assignment-management.page.html',
  styleUrls: ['./assignment-management.page.scss'],
})
export class AssignmentManagementPage implements OnInit {

  person: Person;
  task: Task;

  constructor(
    private assignmentService: AssignmentService,
    private personService: PersonService,
    private taskService: TaskService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }

  getAssignmentList() {
    return this.assignmentService.getAssignmentsList();
  }

  getPersonAssigned(personID: number) {
    return this.personService.getPersonByID(personID)
  }

  getTaskAssigned(taskID: number) {
    return this.taskService.getTaskByID(taskID)
  }

  deleteAssignmentByID(id: number) {
    this.assignmentService.deleteAssignmentByID(id);
  }

  onNewAssignment() {

  }

  onEditAssignment(assignment: Assignment) {

  }

  onDeleteAssignment(assignment: Assignment) {
    this.onDeleteAlert(assignment);
  }

  async onDeleteAlert(assignment: Assignment) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: '¿Are you sure you want to delete this assignment?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.deleteAssignmentByID(assignment.id)
          },
        },
      ],
    });
    await alert.present();
  }
}