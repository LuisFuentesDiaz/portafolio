import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* const elementos: any = document.querySelectorAll(".skillContenedor");
     const contSk = document.getElementById("contenedorSkill");
     const cantidadCirculos = elementos.length;
     const radio = 100;
 
     for (let i = 0; i < elementos.length; i++) {
       const angulo = (i / cantidadCirculos) * 2 * Math.PI;
 
       const x = radio * Math.cos(angulo) + 150;
       const y = radio * Math.sin(angulo) + 150;
       elementos[i].style.left = x + 'px';
       elementos[i].style.top = y + 'px';
     }
     */
  }

}
