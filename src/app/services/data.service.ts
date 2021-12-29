import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams } from '@angular/common/http';
import { DataOfflineService } from './data-offline.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  path = 'https://v1.basketball.api-sports.io/leagues';

  constructor(
    private http: HttpClient,

    // DATOS OFFLINE EN CASO DE QUE LA API SE AGOTASE EL NUMERO DE USOS;
    private data: DataOfflineService,
  ) {

  }

  recogerDatos<T>() {
    const httpHeaders = new HttpHeaders({
      // 'x-rapidapi-key': '8a2d2671cd5d3f5b3c0966ef376c39c6', // EXCEDIDO EL NUMERO DE USOS PARA EL DIA 29/12/2021
      'x-rapidapi-key': '1914088878c9fdf32aeb7f55547a1f9c',
      'x-rapidapi-host': 'v1.basketball.api-sports.io',
    });
    return this.http.get<T>(this.path, { headers: httpHeaders, observe: 'response' }).toPromise().then( async(resp) => {
      // LA API TIENE UN NUMERO DE USOS MUY LIMITADO SI NO PAGAS ASI QUE COGI LOS DATOS Y LOS GUARDE PARA QUE AL MENOS SE VIESE ALGO EN LA PRUEBA EN CASO DE AGOTARSE.
      return resp['body']['response'] ? resp['body']['response']: this.data.data;
    });
  }



}
