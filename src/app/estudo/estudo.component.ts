import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Estudo } from './estudo.model';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {
  @Input() estudo: Estudo = new Estudo(0, '', '')

  constructor() {}

  ngOnInit(): void {
  }

  editar(): void {
    this.estudo.editando = true
  }

  finalizar(): void {
    this.estudo.titulo_final = this.estudo.titulo
    this.estudo.descricao_final = this.estudo.descricao
    this.estudo.editando = false
  }

  cancelar(): void {
    this.estudo.titulo = this.estudo.titulo_final
    this.estudo.descricao = this.estudo.descricao_final
    this.estudo.editando = false
  }

  remover(): void {
    
  }
}
