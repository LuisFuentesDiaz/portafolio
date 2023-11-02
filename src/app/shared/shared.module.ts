import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconoSkillComponent } from './components/icono-skill/icono-skill.component';
import { SiderTarjetaComponent } from './components/sider-tarjeta/sider-tarjeta.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ParticleComponent } from './components/particle/particle.component';
import { EstrellasComponent } from './components/estrellas/estrellas.component';

@NgModule({
  declarations: [IconoSkillComponent, SiderTarjetaComponent,
    SeccionComponent, ArticuloComponent, ParticleComponent, EstrellasComponent],
  imports: [
    CommonModule
  ],
  exports: [IconoSkillComponent, SiderTarjetaComponent, SeccionComponent, ArticuloComponent,
    ParticleComponent, EstrellasComponent]
})
export class SharedModule { }
