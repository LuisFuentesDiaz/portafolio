import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionDPageComponent } from './page/seccion-d-page/seccion-d-page.component';
import { TodaExperienciaLaboralComponent } from './components/toda-experiencia-laboral/toda-experiencia-laboral.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeccionDPageComponent, TodaExperienciaLaboralComponent, ExperienciaLaboralComponent],
  exports: [SeccionDPageComponent]
})
export class SeccionDModule { }
