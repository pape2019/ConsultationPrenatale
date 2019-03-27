import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviRoutingModule } from './suivi-routing.module';
import { StatModule } from '../../shared';
import { SuiviComponent } from './suivi.component';

@NgModule({
  declarations: [SuiviComponent],
  imports: [CommonModule,SuiviRoutingModule,StatModule]
})
export class SuiviModule { }
