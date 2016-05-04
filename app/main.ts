import { bootstrap } from '@angular/platform-browser-dynamic';
// Services
import { LoggerService } from './logger.service';
// Components
import { AppComponent } from './app.component'

bootstrap(AppComponent, [LoggerService]);