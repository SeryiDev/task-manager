import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { PersonManagementPageRoutingModule } from './person-management-routing.module';
import { PersonManagementPage } from './person-management.page';
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
    PersonManagementPageRoutingModule
  ],
  declarations: [
    PersonManagementPage
  ]
})
export class PersonManagementPageModule {}
