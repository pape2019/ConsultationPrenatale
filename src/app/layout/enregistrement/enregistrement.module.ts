import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnregistrementRoutingModule } from './enregistrement-routing.module';
import { StatModule } from '../../shared';
import { EnregistrementAddComponent } from './enregistrement-add/enregistrement-add.component';
import { EnregistrementListComponent } from './enregistrement-list/enregistrement-list.component';
import { EnregistrementEditComponent } from './enregistrement-edit/enregistrement-edit.component';
import { EnregistrementficheComponent } from './enregistrementfiche/enregistrementfiche.component';
import { EnregistrementService } from 'src/app/service/enregistement.service';


@NgModule({
  declarations: [EnregistrementAddComponent, EnregistrementListComponent, EnregistrementEditComponent, EnregistrementficheComponent],
  imports: [CommonModule, EnregistrementRoutingModule, StatModule ],
  providers:[EnregistrementService]

})
export class EnregistrementModule { }
