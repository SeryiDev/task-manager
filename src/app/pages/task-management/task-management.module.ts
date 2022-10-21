import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TaskManagementPageRoutingModule } from './task-management-routing.module';
import { TaskManagementPage } from './task-management.page';

@NgModule({
  imports: [
    CoreModule,
    TaskManagementPageRoutingModule
  ],
  declarations: [
    TaskManagementPage
  ]
})
export class TaskManagementPageModule {}