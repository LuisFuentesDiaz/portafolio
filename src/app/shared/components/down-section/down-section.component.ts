import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-section',
  templateUrl: './down-section.component.html',
  styleUrls: ['./down-section.component.css']
})
export class DownSectionComponent implements OnInit {

  secciones: string[] = ["cabecera",];

  ngOnInit() {
    document.addEventListener("DOMContentLoaded", function () {
      // Obtén una referencia al botón y al elemento al que deseas darle foco
      const boton = document.getElementById("down");
      const elementoFoco = document.getElementById("SegundoArt");

      console.log("sii?? ", boton, elementoFoco);

      // Agrega un controlador de eventos al botón
      boton?.addEventListener("click", function () {
        // Dale foco al elemento al hacer clic en el botón
        if (elementoFoco) {
          elementoFoco.focus();
          elementoFoco.scrollIntoView({ behavior: "instant" });
        }
      });
    });
  }

}
