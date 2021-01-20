import { Component, Input, OnInit } from '@angular/core';
import { Estudo } from './estudo.model';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {
    @Input() estudos: Estudo = {
    'titulo': 'wadson',
    'descricao': 'pontes',
    'editando': true
  }
  constructor() {}

  ngOnInit(): void {
  }

  editar(): void {
    this.estudos.editando = true
  }

  editado(estudo: Estudo): void {
    this.estudos.titulo = estudo.titulo
    this.estudos.descricao = estudo.descricao
    this.estudos.editando = false
  }

  remover(): void {

  }
}
