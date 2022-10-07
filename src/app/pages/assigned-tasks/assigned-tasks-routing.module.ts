import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignedTasksPage } from './assigned-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: AssignedTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignedTasksPageRoutingModule {}
