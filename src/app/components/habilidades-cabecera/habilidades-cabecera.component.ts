import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades-cabecera',
  templateUrl: './habilidades-cabecera.component.html',
  styleUrls: ['./habilidades-cabecera.component.css']
})
export class HabilidadesCabeceraComponent implements OnInit {


  ngOnInit() {
    const elementos: any = document.querySelectorAll(".skillContenedor");
    const contSk = document.getElementById("contenedorSkill");
    const cantidadCirculos = elementos.length;
    const radio = 220;

    for (let i = 0; i < elementos.length; i++) {
      const angulo = (i / cantidadCirculos) * 2 * Math.PI;

      const x = radio * Math.cos(angulo) + 150;
      const y = radio * Math.sin(angulo) + 150;

      const nuevoCirculo = document.createElement('div');
      nuevoCirculo.classList.add('circulo');
      nuevoCirculo.style.left = x + 'px';
      nuevoCirculo.style.top = y + 'px';

      elementos[i].style.left = x + 'px';
      elementos[i].style.top = y + 'px';
    }
  }
}
