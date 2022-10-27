import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonComponent } from './components/person/person.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AssignmentFormComponent } from './components/assignment-form/assignment-form.component';

@NgModule({
  declarations: [
    PersonComponent, 
    PersonFormComponent, 
    TaskComponent,
    TaskFormComponent,
    AssignmentComponent,
    AssignmentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonComponent,
    PersonFormComponent,
    TaskComponent,
    TaskFormComponent,
    AssignmentComponent,
    AssignmentFormComponent
  ]
})
export class CoreModule { }