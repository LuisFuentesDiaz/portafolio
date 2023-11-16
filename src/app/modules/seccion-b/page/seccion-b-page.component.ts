import { Component, OnInit } from '@angular/core';
import { PantallaService } from 'src/app/core/util/pantalla.service';
import { TemaWebService } from 'src/app/core/util/temaWeb.service';

@Component({
  selector: 'app-seccion-b-page',
  templateUrl: './seccion-b-page.component.html',
  styleUrls: ['./seccion-b-page.component.css']
})
export class SeccionBPageComponent implements OnInit {

  isTemaOscuro: boolean = false;
  isMovil: boolean = false;

  constructor(public temaWeb: TemaWebService, private pantallaService: PantallaService) { }

  ngOnInit() {
    this.temaWeb.isTemaOscuro.subscribe(e => {
      this.isTemaOscuro = e;
    })

    this.pantallaService.resolucion.subscribe(e => {
      if (e.resolucion > 1001) {
        this.isMovil = false;
      } else {
        this.isMovil = true;
      }
    })
  }

}
