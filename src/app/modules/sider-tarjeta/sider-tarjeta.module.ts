import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidersPageComponent } from './page/siders-page.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';

@NgModule({
  declarations: [DatosPersonalesComponent, SidersPageComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [SidersPageComponent]
})
export class SiderTarjetaModule { }
