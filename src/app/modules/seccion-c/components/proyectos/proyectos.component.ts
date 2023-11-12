import { Component, Input, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from '../modal-proyecto/modal-proyecto.component';
import { Proyecto } from 'src/app/core/models/proyecto';
import { elementAt } from 'rxjs';
import { PantallaService } from 'src/app/core/util/pantalla.service';

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
  tecnologias: string[] = [];
  isAbiertoMovile: boolean = false;

  constructor(private modalService: NgbModal, private pantallaUtil: PantallaService) {
    this.pantallaUtil.resolucion.subscribe(e => {
      this.resolucion = e.resolucion;
    })
  }

  ngOnInit() {

    this.tecnologias = this.data.tecnologias.slice(0, 4);
    document.addEventListener('DOMContentLoaded', () => {
      let proyecto = document.getElementById("web-proyecto" + this.id);
      let portada = document.getElementById("web-portada" + this.id);
      let difuminado = document.getElementById("web-difuminado" + this.id);
      let disponibilidad = document.getElementById("web-disponibilidad" + this.id);
      let infoCaja = document.getElementById("web-caja-info" + this.id);
      let principal = document.getElementById("contenedor-principal" + this.id);

      if (proyecto && (portada && portada instanceof HTMLElement) && difuminado && disponibilidad) {
        proyecto.addEventListener('mouseover', () => {
          portada.style.filter = "blur(3px)";
          difuminado.style.display = "flex"
          disponibilidad.style.display = "block";
          proyecto.style.zIndex = "2";

          if (this.resolucion > 1000) {
            proyecto.style.top = "-250px";
            infoCaja.style.display = "block"
          }
        })

        principal.addEventListener('mouseleave', () => {
          portada.style.filter = "grayScale(1)";
          proyecto.style.zIndex = "1";

          if (this.resolucion > 1000) {
            proyecto.style.transform = "scale(1)";
            proyecto.style.top = "0px";
            difuminado.style.display = "none"
            disponibilidad.style.display = "none";
            infoCaja.style.display = "none"
          }
        })
      }

      /*let contenedor = document.getElementById("movil-contenedor-proyecto" + this.id);

      contenedor.addEventListener('click', () => {

      });*/
    })
  }

  openModal() {
    const modalRef = this.modalService.open(ModalProyectoComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = this.data;
  }
}
