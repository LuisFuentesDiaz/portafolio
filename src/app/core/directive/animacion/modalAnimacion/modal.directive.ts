import { AfterViewInit, Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[modalAnimacion]',
  standalone: true,
})
export class ModalDirective implements AfterViewInit {

  proyecto: ElementRef = inject(ElementRef);
  posicionInicial = [0, 0];
  cardInner: ElementRef;
  eventoClick: ElementRef;
  cardModal: ElementRef;
  cardBack: ElementRef;

  constructor(private render: Renderer2) { }


  ngAfterViewInit(): void {
    this.eventoClick = this.proyecto.nativeElement.querySelectorAll(".evento-click-animacion-modal")[0];
    this.cardModal = this.proyecto.nativeElement.querySelectorAll(".card-modal-animacion-modal")[0];
    this.cardInner = this.proyecto.nativeElement.querySelectorAll(".card-inner-animacion-modal")[0];
    this.cardBack = this.proyecto.nativeElement.querySelectorAll(".card-back-animacion-modal")[0];

    if (this.eventoClick && this.cardModal && this.cardInner && this.cardBack) {
      this.render.listen(this.eventoClick, 'click', (even: Event) => {
        this.click();
      })

      this.render.listen(this.proyecto.nativeElement, 'animationend', (event: AnimationEvent) => {
        if (event.animationName.includes("mostrarModal")) {
          this.render.setStyle(this.cardModal, "opacity", "100%");
        }
      })
    }
  }


  click(): void {
    const proyectoElemento = this.proyecto.nativeElement;
    const proyectoPropiedades = proyectoElemento.getBoundingClientRect();


    this.posicionInicial = [proyectoPropiedades.width, proyectoPropiedades.height];
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
    this.render.setStyle(this.cardInner, "transform", "rotateY(180deg)");
    this.render.setStyle(this.cardBack, "display", "none");
  }
}
