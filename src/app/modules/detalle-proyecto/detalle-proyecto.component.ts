import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Proyecto } from 'src/app/core/models';
import { ProyectosService } from 'src/app/core/services';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  isData: boolean = false;
  data: Proyecto;

  constructor(private route: ActivatedRoute, private proyectosService: ProyectosService, config: NgbCarouselConfig) {
    config.interval = 3000; // Intervalo de cambio de diapositivas en milisegundos (3 segundos en este ejemplo)
    config.wrap = true; // Para hacer que el carrusel se desplace en un bucle
    config.keyboard = false; // Deshabilitar el control del carrusel con el teclado (opcional)
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.route.params.subscribe((item: any) => {
      if (item && item['proyecto']) {
        this.data = this.proyectosService.getProyectos().filter(pro => pro.id == item['proyecto'])[0];
      } else {
        // Manejo cuando 'proyecto' no está presente en 'item'
      }
    })
  }
}
