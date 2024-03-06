import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IconoSkillComponent } from './components/icono-skill/icono-skill.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { EstrellaFugazComponent } from './components/estrella-fugaz/estrella-fugaz.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HabilidadesEnduranceComponent } from './components/habilidades-endurance/habilidades-endurance.component';
import { PanelDifuminadoComponent } from './components/panel-difuminado/panel-difuminado.component';

@NgModule({
  declarations: [IconoSkillComponent,
    SeccionComponent, EstrellaFugazComponent, EstrellasComponent, HabilidadesEnduranceComponent, PanelDifuminadoComponent],
  imports: [
    CommonModule,
    NgbModule, NgOptimizedImage
  ],
  exports: [IconoSkillComponent, SeccionComponent,
    EstrellaFugazComponent, EstrellasComponent, HabilidadesEnduranceComponent, PanelDifuminadoComponent]
})
export class SharedModule { }
