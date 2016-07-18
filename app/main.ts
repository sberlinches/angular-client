import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
// Services
import { LoggerService } from './shared/services/logger.service';
// Components
import { AppComponent } from './app.component'

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    LoggerService
]).catch((err: any) => console.error(err));