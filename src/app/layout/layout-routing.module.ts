import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'enregistrement', loadChildren: './enregistrement/enregistrement.module#EnregistrementModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'prenatale', loadChildren: './prenatale/prenatale.module#PrenataleModule' },
            { path: 'postnatale', loadChildren: './postnatale/postnatale.module#PostnataleModule' },
            { path: 'planning', loadChildren: './planning/planning.module#PlanningModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
