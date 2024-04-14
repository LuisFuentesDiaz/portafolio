import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/core/models';
import { FechaFormatoPipe, MesesAFechaPipe } from 'src/app/core/pipe';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css'],
  standalone: true,
  imports: [FechaFormatoPipe, MesesAFechaPipe, PanelDifuminadoComponent]
})
export class ExperienciaLaboralComponent {
  @Input() data: Experiencia
  constructor() { }

}
