import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuiviComponent } from './suivi.component';
const routes: Routes = [
  {
      path: '', component: SuiviComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SuiviRoutingModule { }
