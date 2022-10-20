import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskManagementPageRoutingModule } from './task-management-routing.module';

import { TaskManagementPage } from './task-management.page';
import { TaskComponent } from 'src/app/core/components/task/task.component';
import { TaskFormComponent } from 'src/app/core/components/task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaskManagementPageRoutingModule
  ],
  declarations: [TaskManagementPage, TaskComponent, TaskFormComponent]
})
export class TaskManagementPageModule {}
