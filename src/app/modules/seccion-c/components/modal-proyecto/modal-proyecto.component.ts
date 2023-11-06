import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models/proyecto';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {

  @Input() data: Proyecto = null;
  @Input() tecnologias: string[] = [];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000; // Intervalo de cambio de diapositivas en milisegundos (3 segundos en este ejemplo)
    config.wrap = true; // Para hacer que el carrusel se desplace en un bucle
    config.keyboard = false; // Deshabilitar el control del carrusel con el teclado (opcional)
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.tecnologias = this.data.tecnologias;
  }
}
