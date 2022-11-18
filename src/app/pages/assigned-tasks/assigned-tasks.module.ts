import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AssignedTasksPageRoutingModule } from './assigned-tasks-routing.module';
import { AssignedTasksPage } from './assigned-tasks.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
createTranslateLoader

@NgModule({
  imports: [
    CoreModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory:(createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AssignedTasksPageRoutingModule
  ],
  declarations: [
    AssignedTasksPage
  ]
})
export class AssignedTasksPageModule {}