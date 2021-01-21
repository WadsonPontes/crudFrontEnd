import { Component } from '@angular/core';
import { EstudoComponent } from './estudo/estudo.component';
import { Estudo } from './estudo/estudo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendendo'

  estudos: Estudo[] = [
    new Estudo(1, 'Estudar Angular', 'Estudar 6 horas por dia Angular'),
    new Estudo(0, 'Estudar .NET Core', 'Estudar 6 horas por dia .NET Core')
]

  novo(): void{
    this.estudos.unshift(new Estudo(this.estudos.length, '', ''));
  }

  remover(): void{
    this.estudos.pop()
  }
}
