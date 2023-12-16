import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/core/models';
import { PantallaService } from 'src/app/core/util/pantalla.service';

@Component({
  selector: 'app-seccion-c-page',
  templateUrl: './seccion-c-page.component.html',
  styleUrls: ['./seccion-c-page.component.css']
})
export class SeccionCPageComponent {

  isMovil: boolean = false;
  verTodos: boolean = false;
  filtro: Habilidad = null;

  constructor(private pantallaService: PantallaService, config: NgbCarouselConfig) {
    config.interval = 2400; // Intervalo de cambio de diapositivas en milisegundos (3 segundos en este ejemplo)
    config.wrap = true; // Para hacer que el carrusel se desplace en un bucle
    config.keyboard = false; // Deshabilitar el control del carrusel con el teclado (opcional)
    config.showNavigationIndicators = false;
    config.pauseOnFocus = true;
  }

  ngOnInit() {
    this.pantallaService.resolucion.subscribe(e => {
      if (e.resolucion > 1000) {
        this.isMovil = false;
      } else {
        this.isMovil = true;
      }
    })
  }

  filtrar(event): void {
    console.log("filtrando", event);


  }
}
