import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionBPageComponent } from './page/seccion-b-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilProfesionalComponent } from './components/perfil-profesional/perfil-profesional.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

@NgModule({
  declarations: [SeccionBPageComponent, PerfilProfesionalComponent, HabilidadesComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [SeccionBPageComponent]
})
export class SeccionBModule { }