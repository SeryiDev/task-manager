import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskManagementPageRoutingModule } from './task-management-routing.module';

import { TaskManagementPage } from './task-management.page';
import { TaskFormComponent } from 'src/app/core/components/task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaskManagementPageRoutingModule
  ],
  declarations: [TaskManagementPage, TaskFormComponent]
})
export class TaskManagementPageModule {}
