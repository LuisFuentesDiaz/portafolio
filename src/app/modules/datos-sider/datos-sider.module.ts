import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { DatosSiderPageComponent } from './pages/datos-sider-page/datos-sider-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FormComponent, DatosSiderPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DatosSiderPageComponent]
})
export class DatoSiderModule { }
