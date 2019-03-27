import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningRoutingModule } from './planning-routing.module';
import { StatModule } from '../../shared';
import { PlanningComponent } from './planning.component';

@NgModule({
  declarations: [PlanningComponent],
  imports: [CommonModule,PlanningRoutingModule,StatModule]
})
export class PlanningModule { }
