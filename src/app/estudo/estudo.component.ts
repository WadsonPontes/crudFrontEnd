import { Component, Input, OnInit } from '@angular/core';
import { Estudo } from './estudo.model';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {
  @Input() estudos: Estudo[] = [
      {
      'id': 0,
      'titulo': 'Estudar Angular',
      'titulo_final': 'Estudar Angular',
      'descricao': 'Estudar 6 horas por dia Angular',
      'descricao_final': 'Estudar 6 horas por dia Angular',
      'editando': false
    },
    {
      'id': 1,
      'titulo': 'Estudar .NET Core',
      'titulo_final': 'Estudar .NET Core',
      'descricao': 'Estudar 6 horas por dia .NET Core',
      'descricao_final': 'Estudar 6 horas por dia .NET Core',
      'editando': false
    }
  ]
  constructor() {}

  ngOnInit(): void {
  }

  editar(id: number): void {
    this.estudos[id].editando = true
  }

  finalizar(id: number): void {
    this.estudos[id].titulo_final = this.estudos[id].titulo
    this.estudos[id].descricao_final = this.estudos[id].descricao
    this.estudos[id].editando = false
  }

  cancelar(id: number): void {
    this.estudos[id].titulo = this.estudos[id].titulo_final
    this.estudos[id].descricao = this.estudos[id].descricao_final
    this.estudos[id].editando = false
  }

  remover(id: number): void {

  }
}
