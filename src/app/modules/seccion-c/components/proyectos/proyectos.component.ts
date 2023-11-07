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
  isAbierto: boolean = false;



  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.tecnologias = this.data.tecnologias.slice(0, 4);
    document.addEventListener('DOMContentLoaded', () => {
      let proyecto = document.getElementById("web-proyecto" + this.id);
      let portada = document.getElementById("web-portada" + this.id);
      let difuminado = document.getElementById("web-difuminado" + this.id);
      let habilidades = document.getElementById("web-contenedor-habilidades" + this.id);

      if (proyecto && (portada && portada instanceof HTMLElement) && difuminado && habilidades) {
        proyecto.addEventListener('mouseover', () => {
          portada.style.filter = "blur(3px)";
          difuminado.style.display = "block"
          habilidades.style.display = "flex"
          proyecto.style.transform = "scale(1.2)";
          proyecto.style.zIndex = "2";
        })
        proyecto.addEventListener('mouseout', () => {
          portada.style.filter = "blur(0px)";
          difuminado.style.display = "none"
          habilidades.style.display = "none"
          proyecto.style.transform = "scale(1)";
          proyecto.style.zIndex = "1";
        })
      }


      let contenedor = document.getElementById("movil-contenedor-proyecto" + this.id);
      let contenido = document.getElementById("movil-contenido-proyecto" + this.id);
      contenedor.addEventListener('click', () => {

        if (contenedor && contenido) {
          this.isAbierto = !this.isAbierto;
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

  openInfoMovil() {



  }
}
