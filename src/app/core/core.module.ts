import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonComponent } from './components/person/person.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonSelectableComponent } from './components/person-selectable/person-selectable.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskSelectableComponent } from './components/task-selectable/task-selectable.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AssignmentFormComponent } from './components/assignment-form/assignment-form.component';
import { DateTimeSelectableComponent } from './components/date-time-selectable/date-time-selectable.component';

// date
import es from '@angular/common/locales/es'
import en from '@angular/common/locales/en'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translate';


// date register
registerLocaleData(es)
registerLocaleData(en)

@NgModule({
  declarations: [
    PersonComponent, 
    PersonFormComponent,
    PersonSelectableComponent,
    TaskComponent,
    TaskFormComponent,
    TaskSelectableComponent,
    AssignmentComponent,
    AssignmentFormComponent,
    DateTimeSelectableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory:(createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonComponent,
    PersonFormComponent,
    PersonSelectableComponent,
    TaskComponent,
    TaskFormComponent,
    TaskSelectableComponent,
    AssignmentComponent,
    AssignmentFormComponent,
    DateTimeSelectableComponent,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ]
})
export class CoreModule { }