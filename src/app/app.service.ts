import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Estudo } from "./estudo/estudo.model";
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  estudos: Estudo[] = [
    new Estudo(1, 'Estudar Angular', 'Estudar 6 horas por dia Angular'),
    new Estudo(0, 'Estudar .NET Core', 'Estudar 6 horas por dia .NET Core')
  ]

  constructor(private http: HttpClient) {}

  listar(): Observable<Estudo[]> {
      return this.http.get<Estudo[]>(`${env.URL}/listar`)
      //return this.estudos
  }
}
