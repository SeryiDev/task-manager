import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AssignmentFormComponent } from 'src/app/core/components/assignment-form/assignment-form.component';
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
export class AssignmentManagementPage {

  person: Person;
  task: Task;

  constructor(
    private assignmentService: AssignmentService,
    private personService: PersonService,
    private taskService: TaskService,
    private alertController: AlertController,
    private modalController: ModalController
    ) { }

  getAssignmentsList() {
    return this.assignmentService.getAssignmentsList();
  }

  /**
   * Gets the person assigned in the assignment list
   * @param personID ID to get the person in the list
   * @returns Person found by the ID
   */
  getPersonAssigned(personID: number) {
    return this.personService.getPersonByID(personID)
  }

  /**
   * Gets the task assigned in the assignment list
   * @param taskID ID to get the task in the list
   * @returns Task found by the ID
   */
  getTaskAssigned(taskID: number) {
    return this.taskService.getTaskByID(taskID)
  }

  deleteAssignmentByID(id: number) {
    this.assignmentService.deleteAssignmentByID(id);
  }

  /**
   * Opens the assignment form with the assignment object data empty/null
   */
  onNewAssignment() {
    this.presentAssignmentForm(null);
  }

  /**
   * Opens the assignment form with the assignment object data loaded
   * @param assignment Assignment object to edit it
   */
  onEditAssignment(assignment: Assignment) {
    this.presentAssignmentForm(assignment);
  }

  /**
   * 
   * @param assignment Assignment object to delete it
   */
  onDeleteAssignment(assignment: Assignment) {
    this.onDeleteAlert(assignment);
  }

  /**
   * Form for the assignment
   * @param assignment Assignment object to modify his data or create a new one
   */
  async presentAssignmentForm(assignment: Assignment) {
    const modalController = await this.modalController.create({
      component: AssignmentFormComponent,
      componentProps: {
        assignment: assignment
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.assignmentService.addAssignment(result.data.assignment);
            break;
          case 'Edit':
            this.assignmentService.updateAssignment(result.data.assignment);
            break;
          default:
        }
      }
    });
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