import { Component, OnInit, ViewChild } from '@angular/core';
import { EnregistrementService } from 'src/app/service/enregistement.service';
import { Enregistrement } from 'src/app/model/model.enregistrement';

declare var $;
@Component({
  selector: 'app-enregistrement-list',
  templateUrl: './enregistrement-list.component.html',
  styleUrls: ['./enregistrement-list.component.scss']
})
export class EnregistrementListComponent implements OnInit {
  
  @ViewChild('dataTable') table;
   dataTable: any;
    dtOptions: any; 
    title = 'Une liste'; 
    dataTableResult: any;
    listefemme: Enregistrement[] = [];
   
  constructor(private enregistrementservice: EnregistrementService) { }

  ngOnInit() {
    this.enregistrementservice.getListeFemme().subscribe(data=>{

     console.log('la liste des femmes',data)
      this.listefemme=data;
      this.dataTable.DataTable().clear();
      this.dataTable.DataTable().rows.add(data);
      this.dataTable.DataTable().draw();
      this.dataTable = $(this.table.nativeElement);
    this.dataTableResult = this.dataTable.DataTable({
      data: this.listefemme,
      columns: [
        {
          data: 'prenom',
          render: function (data, type, enregistrement:EnregistrementListComponent) {
            if(data == undefined) return "";
            return data;
          }
        },
        { data: 'nom',
        render: function (data, type, full) {
          if (data == undefined) return "";
          return data;
        }
       },
        {
          data: 'age',
          render: function (data, type, full) {
            if (data == undefined) return "";
            return data;
          }
        },
        {
          data: 'adresse',
          render: function (data, type, full) {
            if(data == undefined) return "";
          
          }
        }
      ],
    })
    }, err => {
      console.log(err);
      
    });

  }

    
}
