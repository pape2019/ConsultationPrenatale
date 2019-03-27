import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { StatModule } from 'src/app/shared';
import { AdministrationComponent } from './administration.component';


@NgModule({
  declarations: [AdministrationComponent],
  imports: [CommonModule,AdministrationRoutingModule,StatModule]
})
export class AdministrationModule { }
