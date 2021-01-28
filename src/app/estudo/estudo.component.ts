import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Estudo } from './estudo.model';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {
  @Input() estudo: Estudo = new Estudo(0, '', '')

  constructor(private appService: AppService) {}

  ngOnInit(): void {
  }

  editar(): void {
    this.estudo.editando = true
  }

  finalizar(): void {
    this.appService.editar(this.estudo)
  }

  cancelar(): void {
    this.appService.detalhar(this.estudo.id)
  }

  remover(): void {
    this.appService.apagar(this.estudo.id)
  }
}
