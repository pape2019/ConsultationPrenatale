import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatModule } from '../../shared';
import { PrenataleRoutingModule } from './prenatale-routing.module';
import { PrenataleComponent } from './prenatale.component';

@NgModule({
  declarations: [PrenataleComponent],
  imports: [ CommonModule,PrenataleRoutingModule,StatModule ]
})
export class PrenataleModule { }
