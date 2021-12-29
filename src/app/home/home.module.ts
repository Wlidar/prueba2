import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TableImageComponent } from '../components/table-image/table-image.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgGridModule.withComponents([TableImageComponent])
  ],
  declarations: [HomePage, TableImageComponent]
})
export class HomePageModule {}
