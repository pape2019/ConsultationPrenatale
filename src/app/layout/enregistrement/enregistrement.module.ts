import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnregistrementRoutingModule } from './enregistrement-routing.module';
import { StatModule } from '../../shared';
import { EnregistrementComponent } from './enregistrement.component';


@NgModule({
  declarations: [EnregistrementComponent],
  imports: [CommonModule, EnregistrementRoutingModule, StatModule ]
})
export class EnregistrementModule { }
