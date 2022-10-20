import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentManagementPage } from './assignment-management.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentManagementPageRoutingModule {}
