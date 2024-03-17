import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { EstrellaFugazComponent } from 'src/app/shared/components/estrella-fugaz/estrella-fugaz.component';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';

@Component({
  selector: 'app-seccion-a-page',
  templateUrl: './seccion-a-page.component.html',
  styleUrls: ['./seccion-a-page.component.css'],
  standalone: true,
  imports: [CommonModule, EstrellaFugazComponent, IconoSkillComponent]
})
export class SeccionAPageComponent {

  Habilidad = TG;

  constructor() { }

}
