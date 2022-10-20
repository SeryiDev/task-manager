import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonManagementPageRoutingModule } from './person-management-routing.module';

import { PersonManagementPage } from './person-management.page';
import { PersonComponent } from 'src/app/core/components/person/person.component';
import { PersonFormComponent } from 'src/app/core/components/person-form/person-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonManagementPageRoutingModule
  ],
  declarations: [PersonManagementPage, PersonComponent, PersonFormComponent]
})
export class PersonManagementPageModule {}
