import { bootstrap } from '@angular/platform-browser-dynamic';
// Services
import { LoggerService } from './shared/services/logger.service';
// Components
import { AppComponent } from './app.component'

bootstrap(AppComponent, [LoggerService]);