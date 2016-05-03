import { bootstrap } from 'angular2/platform/browser'
import { ROUTER_PROVIDERS } from 'angular2/router';
// Services
import { LoggerService } from './logger.service';
// Components
import { AppComponent } from './app.component'

bootstrap(AppComponent, [ROUTER_PROVIDERS, LoggerService]);