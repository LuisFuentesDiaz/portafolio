import { Component, OnInit } from '@angular/core';
import { PantallaService } from 'src/app/core/util/pantalla.service';

@Component({
  selector: 'app-seccion-b-page',
  templateUrl: './seccion-b-page.component.html',
  styleUrls: ['./seccion-b-page.component.css']
})
export class SeccionBPageComponent implements OnInit {

  isMovil: boolean = false;

  constructor(private pantallaService: PantallaService) { }

  ngOnInit() {
    this.pantallaService.resolucion.subscribe(e => {
      if (e.resolucion > 1001) {
        this.isMovil = false;
      } else {
        this.isMovil = true;
      }
    })
  }

}
