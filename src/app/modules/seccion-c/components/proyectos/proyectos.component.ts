import { Component, Input, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from '../modal-proyecto/modal-proyecto.component';
import { Proyecto } from 'src/app/core/models/proyecto';
import { PantallaService } from 'src/app/core/util/pantalla.service';
import { Habilidad } from 'src/app/core/models/habilidad';
import { ProyectoDirectorioBase } from 'src/app/core/enum/directorio.enum';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";
  @Input() data: Proyecto;

  resolucion;
  tecnologias: Habilidad[] = [];

  constructor(private modalService: NgbModal, private pantallaUtil: PantallaService) {
    this.pantallaUtil.resolucion.subscribe(e => {
      this.resolucion = e.resolucion;
    })
  }

  ngOnInit() {
    this.tecnologias = this.data.tecnologias.slice(0, 4);
    console.log("tex", this.tecnologias);

  }

  openModal() {
    const modalRef = this.modalService.open(ModalProyectoComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = this.data;
  }
}
