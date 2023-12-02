import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from '../modal-proyecto/modal-proyecto.component';
import { Proyecto } from 'src/app/core/models/proyecto';
import { PantallaService } from 'src/app/core/util/pantalla.service';
import { Habilidad } from 'src/app/core/models/habilidad';
import { NgFor, NgIf } from '@angular/common';
import { ModalDirective } from 'src/app/core/directive';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  standalone: true,
  imports: [ModalDirective, NgFor, NgIf]
})
export class ProyectosComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";
  @Input() data: Proyecto;

  resolucion;
  tecnologias: Habilidad[] = [];


  constructor(private pantallaUtil: PantallaService) {
    this.pantallaUtil.resolucion.subscribe(e => {
      this.resolucion = e.resolucion;
    })
  }

  ngOnInit() {
    this.tecnologias = this.data.tecnologias.slice(0, 4);
    console.log(this.tecnologias);

  }
}
