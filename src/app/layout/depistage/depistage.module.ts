import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepistageRoutingModule } from './depistage-routing.module';
import {DepistageComponent } from './depistage.component';
import { StatModule } from '../../shared';


@NgModule({
  declarations: [DepistageComponent],
  imports: [CommonModule, DepistageRoutingModule, StatModule],


})
export class DepistageModule { }
