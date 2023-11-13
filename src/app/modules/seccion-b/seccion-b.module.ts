import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionBPageComponent } from './page/seccion-b-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilProfesionalComponent } from './components/perfil-profesional/perfil-profesional.component';
import { FotoPersonalComponent } from './components/foto-personal/foto-personal.component';

@NgModule({
  declarations: [SeccionBPageComponent, PerfilProfesionalComponent, FotoPersonalComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [SeccionBPageComponent]
})
export class SeccionBModule { }
