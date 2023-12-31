import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IconoSkillComponent } from './components/icono-skill/icono-skill.component';
import { SiderTarjetaComponent } from './components/sider-tarjeta/sider-tarjeta.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { EstrellaFugazComponent } from './components/estrella-fugaz/estrella-fugaz.component';
import { SeparadorComponent } from './components/separador/separador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HabilidadesEnduranceComponent } from './components/habilidades-endurance/habilidades-endurance.component';

@NgModule({
  declarations: [IconoSkillComponent, SiderTarjetaComponent,
    SeccionComponent, ArticuloComponent, EstrellaFugazComponent, EstrellasComponent, SeparadorComponent, HabilidadesEnduranceComponent],
  imports: [
    CommonModule,
    NgbModule, NgOptimizedImage
  ],
  exports: [IconoSkillComponent, SiderTarjetaComponent, SeccionComponent, ArticuloComponent,
    EstrellaFugazComponent, EstrellasComponent, SeparadorComponent, HabilidadesEnduranceComponent]
})
export class SharedModule { }
