import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionDPageComponent } from './page/seccion-d-page/seccion-d-page.component';
import { TodaExperienciaLaboralComponent } from './components/toda-experiencia-laboral/toda-experiencia-laboral.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { FechaFormatoPipe } from 'src/app/core/pipe';
import { MesesAFechaPipe } from 'src/app/core/pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [SeccionDPageComponent, TodaExperienciaLaboralComponent, ExperienciaLaboralComponent, FechaFormatoPipe, MesesAFechaPipe],
  exports: [SeccionDPageComponent]
})
export class SeccionDModule { }
