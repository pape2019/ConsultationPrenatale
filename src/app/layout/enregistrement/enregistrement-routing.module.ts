import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { EnregistrementListComponent } from './enregistrement-list/enregistrement-list.component';
import { EnregistrementficheComponent } from './enregistrementfiche/enregistrementfiche.component';

const routes: Routes = [
  {
      path: '', component: EnregistrementListComponent },

  { path: ':id', component: EnregistrementficheComponent,}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnregistrementRoutingModule { }