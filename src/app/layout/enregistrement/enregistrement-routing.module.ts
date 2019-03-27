import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { EnregistrementComponent } from './enregistrement.component';

const routes: Routes = [
  {
      path: 'enregistrement', component: EnregistrementComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnregistrementRoutingModule { }