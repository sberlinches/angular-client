import { NgModule } from '@angular/core';
import { WebStorageService } from '../shared/services/web-storage.service';

@NgModule({
    providers: [
        WebStorageService
    ],
})

export class SharedModule {}