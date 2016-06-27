import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
// Services
import { LoggerService } from './shared/services/logger.service';
// Components
import { AppComponent } from './app.component'

bootstrap(AppComponent, [HTTP_PROVIDERS, LoggerService]);