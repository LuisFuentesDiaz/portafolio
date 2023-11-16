import { Component, OnInit } from '@angular/core';
import { PantallaService } from 'src/app/core/util/pantalla.service';

@Component({
  selector: 'app-seccion-a-page',
  templateUrl: './seccion-a-page.component.html',
  styleUrls: ['./seccion-a-page.component.css']
})
export class SeccionAPageComponent implements OnInit {

  isMovil: boolean = false;

  constructor(private pantallaService: PantallaService) { }

  ngOnInit() {
    this.pantallaService.resolucion.subscribe(e => {
      console.log("re ", e);

      if (e.resolucion > 401) {
        this.isMovil = false;
      } else {
        this.isMovil = true;
      }
      console.log(this.isMovil);

    })
  }
}
