import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";


  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {

      let proyecto = document.getElementById("proyecto" + this.id);
      let portada = document.getElementById("portada" + this.id);
      let img = document.getElementById("expandir-img" + this.id);
      let difuminado = document.getElementById("difuminado" + this.id);
      let habilidades = document.getElementById("contenedor-habilidades" + this.id);


      console.log("sii?", proyecto);

      if (proyecto && (portada && portada instanceof HTMLElement) && img && difuminado && habilidades) {
        proyecto.addEventListener('mouseover', () => {
          portada.style.filter = "blur(3px)";
          img.style.display = "block";
          difuminado.style.display = "block"
          habilidades.style.display = "flex"

        })

        proyecto.addEventListener('mouseout', () => {
          portada.style.filter = "blur(0px)";
          img.style.display = "none";
          difuminado.style.display = "none"
          habilidades.style.display = "none"

        })
      }
    })
  }
}
