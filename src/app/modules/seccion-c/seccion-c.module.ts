import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionCPageComponent } from './page/seccion-c-page/seccion-c-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoProyectoComponent } from './components/todo-proyecto/todo-proyecto.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';

@NgModule({
  declarations: [SeccionCPageComponent, TodoProyectoComponent, HabilidadesComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ProyectosComponent
  ],
  providers: [],
  exports: [SeccionCPageComponent]
})
export class SeccionCModule { }
