import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRouting } from './admin.routing';

import { AdminComponent } from './components/admin.component';

@NgModule({
    imports: [
        CommonModule,
        adminRouting
    ],
    declarations: [
        AdminComponent,
    ]
})

export class AdminModule {}