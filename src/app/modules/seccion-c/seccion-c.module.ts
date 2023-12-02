import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionCPageComponent } from './page/seccion-c-page/seccion-c-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from './components/modal-proyecto/modal-proyecto.component';
import { TodoProyectoComponent } from './components/todo-proyecto/todo-proyecto.component';
import { ModalDirective } from 'src/app/core/directive/animacion/modal.directive';

@NgModule({
  declarations: [SeccionCPageComponent, ProyectosComponent, ModalProyectoComponent, TodoProyectoComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,

  ],
  providers: [],
  exports: [SeccionCPageComponent]
})
export class SeccionCModule { }
