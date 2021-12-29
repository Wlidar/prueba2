import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
// import { ImageFormatterComponent } from "./album/ImageFormatterComponent";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AgGridModule.withComponents([]), HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
