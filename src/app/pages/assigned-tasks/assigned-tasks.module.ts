import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AssignedTasksPageRoutingModule } from './assigned-tasks-routing.module';
import { AssignedTasksPage } from './assigned-tasks.page';

@NgModule({
  imports: [
    CoreModule,
    AssignedTasksPageRoutingModule
  ],
  declarations: [
    AssignedTasksPage
  ]
})
export class AssignedTasksPageModule {}