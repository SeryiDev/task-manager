import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonManagementPage } from './person-management.page';

const routes: Routes = [
  {
    path: '',
    component: PersonManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonManagementPageRoutingModule {}
