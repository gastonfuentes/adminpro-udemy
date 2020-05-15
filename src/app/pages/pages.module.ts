
import { NgModule } from '@angular/core';


import { PAGES_ROUTES } from './pages.routes';


import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent        
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ],
    providers: [],
})
export class PagesModule { }
