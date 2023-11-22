import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionCPageComponent } from './page/seccion-c-page/seccion-c-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from './components/modal-proyecto/modal-proyecto.component';
import * as moment from "moment";
import { ProyectosRecientesComponent } from './components/proyectos-recientes/proyectos-recientes.component';
import { TodoProyectoComponent } from './components/todo-proyecto/todo-proyecto.component';

@NgModule({
  declarations: [SeccionCPageComponent, ProyectosComponent, ModalProyectoComponent, ProyectosRecientesComponent, TodoProyectoComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
  ],
  exports: [SeccionCPageComponent]
})
export class SeccionCModule { }
