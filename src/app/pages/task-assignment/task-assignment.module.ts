import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskAssignmentPageRoutingModule } from './task-assignment-routing.module';

import { TaskAssignmentPage } from './task-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskAssignmentPageRoutingModule
  ],
  declarations: [TaskAssignmentPage]
})
export class TaskAssignmentPageModule {}
