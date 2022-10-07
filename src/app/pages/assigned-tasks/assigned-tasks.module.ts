import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignedTasksPageRoutingModule } from './assigned-tasks-routing.module';

import { AssignedTasksPage } from './assigned-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignedTasksPageRoutingModule
  ],
  declarations: [AssignedTasksPage]
})
export class AssignedTasksPageModule {}
