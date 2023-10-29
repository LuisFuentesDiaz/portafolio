import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { InfoCabeceraComponent } from './components/info-cabecera/info-cabecera.component';
import { HabilidadesCabeceraComponent } from './components/habilidades-cabecera/habilidades-cabecera.component';
import { SeccionAPageComponent } from './page/seccion-a-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [InfoCabeceraComponent, HabilidadesCabeceraComponent, SeccionAPageComponent],
  exports: [SeccionAPageComponent]
})
export class SeccionAModule { }
