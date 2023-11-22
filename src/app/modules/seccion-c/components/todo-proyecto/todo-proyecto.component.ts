import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ProyectosService } from 'src/app/core/services/proyectos.service';

@Component({
  selector: 'app-todo-proyecto',
  templateUrl: './todo-proyecto.component.html',
  styleUrls: ['./todo-proyecto.component.css']
})
export class TodoProyectoComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit() {
    this.proyectos = this.proyectoService.Proyectos.filter((e: Proyecto) => !e.isReciente);
  }
}
