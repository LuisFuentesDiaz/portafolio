import { Component, Input, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from '../modal-proyecto/modal-proyecto.component';
import { Proyecto } from 'src/app/core/models/proyecto';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";
  @Input() data: Proyecto;
  tecnologias: string[] = [];
  isAbiertoMovile: boolean = false;

  constructor(private modalService: NgbModal) { }

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
          proyecto.style.zIndex = "2";
          disponibilidad.style.display = "block";
          proyecto.style.top = "-250px";
          infoCaja.style.display = "block"
        })

        principal.addEventListener('mouseleave', () => {
          portada.style.filter = "blur(0px)";
          proyecto.style.top = "0px";
          proyecto.style.transform = "scale(1)";
          proyecto.style.zIndex = "1";
          difuminado.style.display = "none"
          disponibilidad.style.display = "none";
          infoCaja.style.display = "none"
        })
      }

      let contenedor = document.getElementById("movil-contenedor-proyecto" + this.id);
      let contenido = document.getElementById("movil-contenido-proyecto" + this.id);

      contenedor.addEventListener('click', () => {
        if (contenedor && contenido && disponibilidad) {
          this.isAbiertoMovile = !this.isAbiertoMovile;
          if (this.isAbiertoMovile) {
            contenedor.style.borderBottomLeftRadius = "25px";
            contenedor.style.borderBottomRightRadius = "25px";
          } else {
            contenedor.style.borderBottomLeftRadius = "0px";
            contenedor.style.borderBottomRightRadius = "0px";
          }
        }
      });
    })
  }

  openModal() {
    const modalRef = this.modalService.open(ModalProyectoComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = this.data;
  }
}
