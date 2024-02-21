import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionEPageComponent } from './page/seccion-e-page/seccion-e-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, SharedModule, NgbModule
  ],
  declarations: [SeccionEPageComponent, CertificacionesComponent],
  exports: [SeccionEPageComponent]
})
export class SeccionEModule { }