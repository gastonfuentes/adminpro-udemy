
import { NgModule } from '@angular/core';


import { PAGES_ROUTES } from './pages.routes';


import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent        
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ],
    providers: [],
})
export class PagesModule { }
