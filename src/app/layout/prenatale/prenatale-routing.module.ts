import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PrenataleComponent } from './prenatale.component';

const routes: Routes = [
  {
      path: '', component: PrenataleComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrenataleRoutingModule { }