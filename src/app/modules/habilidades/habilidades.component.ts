import { Component, EventEmitter, Output } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { Habilidad } from 'src/app/core/models';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  @Output() filtro = new EventEmitter<Habilidad>;
  habilidades = TG;
  constructor() { }

  click(tipo: Habilidad): void {
    this.filtro.emit(tipo);
  }
}
