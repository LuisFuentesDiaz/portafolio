import { Component } from '@angular/core';
import { TodaExperienciaLaboralComponent } from './components/toda-experiencia-laboral/toda-experiencia-laboral.component';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css'],
  standalone: true,
  imports: [TodaExperienciaLaboralComponent, PanelDifuminadoComponent]
})
export class ExperienciasComponent {

  constructor() { }

}
