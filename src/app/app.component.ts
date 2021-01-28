import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Estudo } from './estudo/estudo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aprendendo'

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.carregar()
  }

  novo(): void{
    let estudo: Estudo = new Estudo(0, '', '')

    this.appService.criar(estudo)
  }

  getEstudos(): Estudo[] {
    return this.appService.estudos
  }

  carregar(): void{
    this.appService.listar()
  }
}
