import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Utiles } from 'src/app/core/util';
import { RouterModule } from '@angular/router';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css'],
  standalone: true,
  imports: [RouterModule, NgbModule, NgIf, NgFor, IconoSkillComponent, PanelDifuminadoComponent]
})
export class DetalleProyectoComponent extends Utiles implements OnInit {
  isData: boolean = false;
  data: Proyecto;

  constructor(config: NgbCarouselConfig) {
    super();
    config.interval = 3000; // Intervalo de cambio de diapositivas en milisegundos (3 segundos en este ejemplo)
    config.wrap = true; // Para hacer que el carrusel se desplace en un bucle
    config.keyboard = false; // Deshabilitar el control del carrusel con el teclado (opcional)
    config.showNavigationIndicators = true;
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
