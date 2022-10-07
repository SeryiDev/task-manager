import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonManagementPageRoutingModule } from './person-management-routing.module';

import { PersonManagementPage } from './person-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonManagementPageRoutingModule
  ],
  declarations: [PersonManagementPage]
})
export class PersonManagementPageModule {}
