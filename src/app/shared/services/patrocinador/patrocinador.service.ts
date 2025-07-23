import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Patrocinador } from '../../../core/models/patrocinador';

@Injectable({
  providedIn: 'root'
})

export class PatrocinadorService {

  private urlPatrocinador = environment.microservice

  constructor(private httpClient: HttpClient) { }

  // Endpoint para listar os patrocinadores
  listarPatrocinadores(): Observable<Patrocinador[]> {
    return this.httpClient.get<Patrocinador[]>(`${this.urlPatrocinador}/api/patrocinador`);
  }

  // Endpoint para criar um patrocinador
  criar(patrocinador:Patrocinador): Observable<any> {
    return this.httpClient.post(`${this.urlPatrocinador}/api/patrocinador`, patrocinador)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  // Endpoint para apagar um patrocinador criado
  apagar(id:number) {
    return this.httpClient.delete(`${this.urlPatrocinador}/api/patrocinador/` + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // Endpoint para ver um patrocinador (por id)
  buscar(id:number): Observable<any> {
    return this.httpClient.get(`${this.urlPatrocinador}/api/patrocinador/` + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  // Endpoint para atualizar um patrocinador (por id)
  atualizar(id:number, patrocinador: Patrocinador): Observable<any>{
    return this.httpClient.put(`${this.urlPatrocinador}/api/patrocinador/`+ id, patrocinador)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
