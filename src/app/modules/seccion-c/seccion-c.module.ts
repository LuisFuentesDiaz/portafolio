import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionCPageComponent } from './page/seccion-c-page/seccion-c-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [SeccionCPageComponent, ProyectosComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [SeccionCPageComponent]
})
export class SeccionCModule { }
