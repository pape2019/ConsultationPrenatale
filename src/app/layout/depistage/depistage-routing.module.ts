import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DepistageComponent } from './depistage.component';

const routes: Routes = [
  {
      path: 'depistage', component: DepistageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class DepistageRoutingModule { }
