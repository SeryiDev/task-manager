import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskFormComponent } from 'src/app/core/components/task-form/task-form.component';
import { Task } from 'src/app/core/models/task';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { TaskService } from 'src/app/core/services/task.service';
import { isLowResolution, isLowResolutionSliding as isLowResSlide } from 'src/app/core/utils/screen';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.page.html',
  styleUrls: ['./task-management.page.scss'],
})
export class TaskManagementPage {

  closeIfLowRes = isLowResSlide
  isLowRes = isLowResolution
  mode: "Normal" | "Edit" | "Organize" = "Normal";

  constructor(
    private taskService: TaskService,
    private alertController: AlertController,
    private modalController: ModalController,
    private assignmentService: AssignmentService
  ) { }

  getTasksList() {
    return this.taskService.tasksList$;
  }

  getTask(id: number) {
    return this.taskService.getTaskById(id);
  }

  addTask(task: Task) {
    return this.taskService.addTask(task);
  }

  // Opens the new task or modify task form
  async presentTaskForm(task: Task) {
    const modalController = await this.modalController.create({
      component: TaskFormComponent,
      componentProps: {
        task: task
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.taskService.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskService.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }

  onNewTask() {
    this.presentTaskForm(null);
  }

  onEditTask(task: Task) {
    this.presentTaskForm(task);
  }

  onDeleteTask(task: Task) {
    if(!this.hasAssignedPerson(task.id)) {
      this.onDeleteAlert(task)
    } else {
      this.onTaskAssignedAlert(task)
    }
  }

  /**
   * Error message for assigned tasks
   * @param task 
   */
  async onTaskAssignedAlert(task: Task) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'Error',
      message: 'The task "' + task.name + '" has one or more people assigned',
      buttons: ['OK'],
    });
    await alert.present();
  }

  hasAssignedPerson(id: number) {
    var result: boolean;
    if(this.assignmentService.getAssignmentsList().find(a => a.taskId == id))
      result = true;
    else {
      result = false;
    }
    return result;
  }

  deleteTaskById(id: number) {
    return this.taskService.deleteTaskById(id);
  }

  async onDeleteAlert(task: Task) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: '¿Are you sure you want to delete this task?',
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
            this.deleteTaskById(task.id)
          },
        },
      ],
    });

    await alert.present();
  }

  onEditMode() {
    if(this.mode == "Normal") {
      this.mode = "Edit"
    } else if(this.mode == "Edit") {
      this.mode = "Organize"
    } else {
      this.mode = "Normal"
    }
  }
}