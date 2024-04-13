import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/core/models';
import { Utiles } from 'src/app/core/util';
import { RouterModule } from '@angular/router';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css'],
  standalone: true,
  imports: [RouterModule, NgIf, NgFor, IconoSkillComponent, PanelDifuminadoComponent, NgbCarouselModule, NgSwitch, NgSwitchCase]
})
export class DetalleProyectoComponent extends Utiles implements OnInit {
  isData: boolean = false;
  data: Proyecto;
  @ViewChild('carrousel', { static: true }) carrousel: ElementRef;

  constructor(private config: NgbCarouselConfig) {
    super();
    config.interval = 3000; // Intervalo de cambio de diapositivas en milisegundos (3 segundos en este ejemplo)
    config.wrap = true; // Para hacer que el carrusel se desplace en un bucle
    config.keyboard = false; // Deshabilitar el control del carrusel con el teclado (opcional)
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((item: any) => {
      if (item && item['proyecto']) {
        this.data = this.proyectosService.getProyectos().filter(pro => pro.id == item['proyecto'])[0];
        this.data ?? this.router.navigate(['']);
      } else {
        this.router.navigate(['']);
      }
    })
  }

  redirigirAExterno() {
    window.open(this.data.url, '_blank');
  }
}
