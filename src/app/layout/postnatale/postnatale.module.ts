import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostnataleRoutingModule } from './postnatale-routing.module';
import { StatModule } from '../../shared';
import { PostnataleComponent } from './postnatale.component';

@NgModule({
  declarations: [PostnataleComponent],
  imports: [CommonModule,PostnataleRoutingModule,StatModule]
})
export class PostnataleModule { }
