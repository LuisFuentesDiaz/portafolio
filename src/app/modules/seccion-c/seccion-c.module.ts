import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionCPageComponent } from './page/seccion-c-page/seccion-c-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgParticlesModule } from "ng-particles";

@NgModule({
  declarations: [SeccionCPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgParticlesModule
  ],
  exports: [SeccionCPageComponent]
})
export class SeccionCModule { }
