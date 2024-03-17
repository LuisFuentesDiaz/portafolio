import { Component } from '@angular/core';
import { TodaExperienciaLaboralComponent } from './components/toda-experiencia-laboral/toda-experiencia-laboral.component';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';

@Component({
  selector: 'app-seccion-d-page',
  templateUrl: './seccion-d-page.component.html',
  styleUrls: ['./seccion-d-page.component.css'],
  standalone: true,
  imports: [TodaExperienciaLaboralComponent, PanelDifuminadoComponent]
})
export class SeccionDPageComponent {

  constructor() { }

}
