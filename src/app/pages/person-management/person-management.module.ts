import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonManagementPageRoutingModule } from './person-management-routing.module';

import { PersonManagementPage } from './person-management.page';
import { PersonFormComponent } from 'src/app/components/person-form/person-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PersonManagementPageRoutingModule
  ],
  declarations: [PersonManagementPage, PersonFormComponent]
})
export class PersonManagementPageModule {}
