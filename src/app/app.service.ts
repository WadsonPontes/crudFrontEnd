import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Estudo } from "./estudo/estudo.model";
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  estudos: Estudo[] = []

  constructor(private http: HttpClient) {}

  listar(): void {
    this.http.get<Estudo[]>(`${env.URL}/listar`)
      .subscribe(
        (estudos: Estudo[]) => {
          this.estudos = estudos
        },
        (erro: any) => {
          console.error(erro)
        }
      )
  }

  detalhar(id: number): void {
    this.http.get<Estudo>(`${env.URL}/${id}`)
      .subscribe(
        (e: Estudo) => {
          this.estudos[this.estudos.findIndex(x => x.id == id)] = e
        },
        (erro: any) => {
          console.error(erro)
        }
      )
  }

  criar(estudo: Estudo): void {
    this.http.post<Estudo>(`${env.URL}/criar`, estudo)
      .subscribe(
        (e: Estudo) => {
          this.estudos.unshift(e)
          this.estudos[0].editando = true
        },
        (erro: any) => {
          console.error(erro)
        }
      )
  }

  editar(estudo: Estudo): void {
    this.http.put<Estudo>(`${env.URL}/editar`, estudo)
      .subscribe(
        (e: Estudo) => {
          this.estudos[this.estudos.findIndex(x => x.id == estudo.id)] = e
        },
        (erro: any) => {
          console.error(erro)
        }
      )
  }

  apagar(id: number): void {
    this.http.delete<Estudo>(`${env.URL}/${id}`)
      .subscribe(
        (e: Estudo) => {
          this.estudos = this.estudos.filter(x => x.id != id)
        },
        (erro: any) => {
          console.error(erro)
        }
      )
  }
}
