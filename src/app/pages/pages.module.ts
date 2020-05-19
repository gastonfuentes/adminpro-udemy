
import { NgModule } from '@angular/core';


import { PAGES_ROUTES } from './pages.routes';


import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

//graficas
import { ChartsModule } from 'ng2-charts';



import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent        
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    providers: [],
})
export class PagesModule { }
