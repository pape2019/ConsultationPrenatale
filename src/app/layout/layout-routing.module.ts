import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'enregistrements', pathMatch: 'full' },
            { path: 'enregistrements', loadChildren: './enregistrement/enregistrement.module#EnregistrementModule' },
            { path: 'enregistrements/:id', loadChildren: './enregistrement/enregistrement.module#EnregistrementModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'prenatale', loadChildren: './prenatale/prenatale.module#PrenataleModule' },
            { path: 'postnatale', loadChildren: './postnatale/postnatale.module#PostnataleModule' },
            { path: 'planning', loadChildren: './planning/planning.module#PlanningModule' },
            { path: 'depistage', loadChildren: './depistage/depistage.module#DepistageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
