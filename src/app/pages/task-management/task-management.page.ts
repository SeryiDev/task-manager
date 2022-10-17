import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskFormComponent } from 'src/app/components/task-form/task-form.component';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.page.html',
  styleUrls: ['./task-management.page.scss'],
})
export class TaskManagementPage {

  constructor(
    private taskService: TaskService,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  getTaskList() {
    return this.taskService.getTaskList();
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

  onEditTask(task) {
    this.presentTaskForm(task);
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
}