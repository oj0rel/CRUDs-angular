import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Premio } from '../../../core/models/premio';

@Injectable({
  providedIn: 'root'
})

export class PremioService {

  private urlPremio = environment.microservice

  constructor(private httpClient: HttpClient) { }

  // Endpoint para listar os premios
  listarPatrocinadores(): Observable<Premio[]> {
    return this.httpClient.get<Premio[]>(`${this.urlPremio}/api/premio`);
  }

  // Endpoint para criar um premio
  criar(premio:Premio): Observable<any> {
    return this.httpClient.post(`${this.urlPremio}/api/premio`, premio)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  
  // Endpoint para apagar um premio criado
  apagar(id:number) {
    return this.httpClient.delete(`${this.urlPremio}/api/premio/` + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
    // Endpoint para ver um premio (por id)
  buscar(id:number): Observable<any> {
    return this.httpClient.get(`${this.urlPremio}/api/premio/` + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  
  // Endpoint para atualizar um premio (por id)
  atualizar(id:number, premio: Premio): Observable<any>{
    return this.httpClient.put(`${this.urlPremio}/api/premio/`+ id, premio)
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
