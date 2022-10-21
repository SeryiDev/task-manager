import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AssignmentManagementPageRoutingModule } from './assignment-management-routing.module';
import { AssignmentManagementPage } from './assignment-management.page';

@NgModule({
  imports: [
    CoreModule,
    AssignmentManagementPageRoutingModule
  ],
  declarations: [
    AssignmentManagementPage
  ]
})
export class AssignmentManagementPageModule {}
