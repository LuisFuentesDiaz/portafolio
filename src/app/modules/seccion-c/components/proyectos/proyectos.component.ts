import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from '../modal-proyecto/modal-proyecto.component';
import { Proyecto } from 'src/app/core/models/proyecto';
import { PantallaService } from 'src/app/core/util/pantalla.service';
import { Habilidad } from 'src/app/core/models/habilidad';

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

  @ViewChild("proyecto", { static: true }) proyecto: ElementRef;
  @ViewChild("cardInner", { static: true }) cardInner: ElementRef;
  @ViewChild("cardModal", { static: true }) cardModal: ElementRef;
  @ViewChild('cardBack', { static: true }) cardBack: ElementRef;

  constructor(private modalService: NgbModal, private pantallaUtil: PantallaService, private render: Renderer2) {
    this.pantallaUtil.resolucion.subscribe(e => {
      this.resolucion = e.resolucion;
    })
  }

  ngOnInit() {
    this.tecnologias = this.data.tecnologias.slice(0, 4);

  }

  openModal() {
    const modalRef = this.modalService.open(ModalProyectoComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = this.data;
  }

  ampliar(): void {
    /*const proyectoElemento = this.proyecto.nativeElement;
    const proyectoPropiedades = proyectoElemento.getBoundingClientRect();
    const cardModal = this.cardModal.nativeElement;
    const cardInner = this.cardInner.nativeElement;
    const cardBack = this.cardBack.nativeElement;

    this.render.setStyle(proyectoElemento, "position", "fixed");
    this.render.setStyle(proyectoElemento, "margin", "auto");
    this.render.setStyle(proyectoElemento, "width", `${proyectoPropiedades.width}px`);
    this.render.setStyle(proyectoElemento, "height", `${proyectoPropiedades.height}px`);
    this.render.setStyle(proyectoElemento, "top", `${proyectoPropiedades.y}px`);
    this.render.setStyle(proyectoElemento, "left", `${proyectoPropiedades.x}px`);
    this.render.setStyle(proyectoElemento, "transition", "transform 2s");
    this.render.setStyle(proyectoElemento, "animation", "mostrarModal 5s infinity");

    proyectoElemento.classList.add('mostrarModal');
    proyectoElemento.classList.remove('animacionFlip');
    this.render.setStyle(cardInner, "transform", "rotateY(180deg)");
    this.render.setStyle(cardBack, "display", "none");


    this.render.listen(proyectoElemento, 'animationend', (event: AnimationEvent) => {
      if (event.animationName.includes("mostrarModal")) {
        this.render.setStyle(cardModal, "opacity", "100%");
        console.log(event);

      }
    })*/
  }


}
