import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AssignmentManagementPageRoutingModule } from './assignment-management-routing.module';
import { AssignmentManagementPage } from './assignment-management.page';
import { AssignmentComponent } from 'src/app/core/components/assignment/assignment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentManagementPageRoutingModule
  ],
  declarations: [AssignmentManagementPage, AssignmentComponent]
})
export class AssignmentManagementPageModule {}
