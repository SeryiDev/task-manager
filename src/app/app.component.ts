import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  language = 0;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  onLanguage() {
    this.language = (this.language + 1) % 2
    switch (this.language) {
      case 0: {
        this.translate.use('en')
        break
      }
      case 1: {
        this.translate.use('es')
        break
      }
    }
  }
}