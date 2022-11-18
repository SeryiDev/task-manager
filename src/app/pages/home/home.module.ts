import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
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
    HomePageRoutingModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
