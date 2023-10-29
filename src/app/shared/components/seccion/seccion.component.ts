import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements AfterViewInit {

  @Input() numArticulo: any;
  @Input() seccionHeigth: string = "60";
  @Input() articleWidth: String = "90";


  ngAfterViewInit(): void {
    if (this.numArticulo) {
      let seccion = document.getElementById("seccion");
      if (seccion) {
        seccion.style.height = `${this.seccionHeigth}vh`;
      }

      let articulo = document.getElementById("articulo");
      if (articulo) {
        articulo.style.width = `${this.articleWidth}%`;
      }
    }
  }


}
