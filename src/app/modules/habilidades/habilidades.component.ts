import { Component, EventEmitter, Output } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { Habilidad } from 'src/app/core/models';
import { HabilidadesEnduranceComponent } from 'src/app/shared/components/habilidades-endurance/habilidades-endurance.component';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
  standalone: true,
  imports: [HabilidadesEnduranceComponent, IconoSkillComponent]
})
export class HabilidadesComponent {
  @Output() filtro = new EventEmitter<Habilidad>;
  habilidades = TG;
  constructor() { }

  click(tipo: Habilidad): void {
    this.filtro.emit(tipo);
  }
}
