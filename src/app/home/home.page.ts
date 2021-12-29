import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ColDef } from 'ag-grid-community';
import { TableImageComponent } from '../components/table-image/table-image.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  columnDefs: ColDef[] = [
      { field: 'country', sortable: true, filter: true , cellRendererFramework: TableImageComponent },
      { field: 'logo', sortable: true, filter: true, cellRendererFramework: TableImageComponent,  },
      { field: 'name', sortable: true, filter: true },
      { field: 'seasons', sortable: true, filter: true },
      { field: 'type', sortable: true, filter: true },
  ];

  tablaCargada = false;
  rowData = [
  ];

  constructor(
    private data: DataService,
  ) {
  }


  ngAfterViewInit() {
    this.data.recogerDatos().then( async(datos)=> {
      datos.forEach(element => {
        delete element['id'];
        element['country'] = element['country']['flag'];
        element['seasons'] = element['seasons'].length;
        this.rowData.push(element);
      });
      this.tablaCargada = true;
      console.log(this.rowData);
    });
  }

}
