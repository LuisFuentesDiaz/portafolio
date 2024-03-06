import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Proyecto } from 'src/app/core/models';
import { ProyectosService } from 'src/app/core/services';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  isData: boolean = false;
  data: Proyecto;

  constructor(private route: ActivatedRoute, private proyectosService: ProyectosService) {
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
