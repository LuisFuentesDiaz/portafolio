import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { InfoCabeceraComponent } from './components/info-cabecera/info-cabecera.component';
import { SeccionAPageComponent } from './page/seccion-a-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule
  ],
  declarations: [InfoCabeceraComponent, SeccionAPageComponent],
  exports: [SeccionAPageComponent]
})
export class SeccionAModule { }
