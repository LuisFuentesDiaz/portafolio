import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/core/models';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {
  @Input() data: Experiencia
  constructor() { }

}
