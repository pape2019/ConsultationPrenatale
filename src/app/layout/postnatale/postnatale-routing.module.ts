import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PostnataleComponent } from './postnatale.component';
const routes: Routes = [
  {
      path: '', component: PostnataleComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class PostnataleRoutingModule { }
