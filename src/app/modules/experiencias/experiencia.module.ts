import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciasPageComponent } from './page/experiencias-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExperienciasPageComponent],
  exports: [ExperienciasPageComponent]
})
export class ExperienciaModule { }
