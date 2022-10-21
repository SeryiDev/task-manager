import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { PersonManagementPageRoutingModule } from './person-management-routing.module';
import { PersonManagementPage } from './person-management.page';


@NgModule({
  imports: [
    CoreModule,
    PersonManagementPageRoutingModule
  ],
  declarations: [
    PersonManagementPage
  ]
})
export class PersonManagementPageModule {}
