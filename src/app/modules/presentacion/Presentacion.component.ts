import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { EstrellaFugazComponent } from 'src/app/shared/components/estrella-fugaz/estrella-fugaz.component';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';

@Component({
  selector: 'app-presentacion',
  templateUrl: './Presentacion.component.html',
  styleUrls: ['./Presentacion.component.css'],
  standalone: true,
  imports: [CommonModule, IconoSkillComponent]
})
export class PresentacionComponent {

  Habilidad = TG;

  constructor() { }

}
