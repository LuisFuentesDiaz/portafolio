import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icono-skill',
  templateUrl: './icono-skill.component.html',
  styleUrls: ['./icono-skill.component.css']
})
export class IconoSkillComponent {
  @Input() nombre: string = "";
  @Input() ancho: Number = 150;
  @Input() largo: Number = 150;
  @Input() capacidad: string = '0';
  @Input() tooltip: string = '';
  capacidadString: string = '';

  constructor() { }

  ngAfterViewInit() {
    const elementocontainer = document.getElementById('skillContenedor' + this.nombre);
    const elementoSpan = document.getElementById('capacidad' + this.nombre)?.style;
    const elementoA = document.getElementById('a-capacidad' + this.nombre)?.style;
    let capacidadInt = parseInt(this.capacidad);

    switch (true) {
      case capacidadInt >= 50 && capacidadInt < 60:
        this.capacidadString = "Moderado";
        break;
      case capacidadInt >= 60 && capacidadInt < 70:
        this.capacidadString = "Suficiente";
        break;
      case capacidadInt >= 70 && capacidadInt < 90:
        this.capacidadString = "Avanzado";
        break;
      case capacidadInt >= 90 && capacidadInt < 10:
        this.capacidadString = "Experto";
        break;
      default:
        break;
    }

    elementocontainer?.addEventListener('mouseover', () => {
      if (elementoSpan && elementoA) {
        elementoSpan.height = this.capacidad + '%';
        elementoA.display = "block";
      }
    })

    elementocontainer?.addEventListener('mouseout', () => {
      if (elementoSpan && elementoA) {
        elementoSpan.height = '0%';
        elementoA.display = "none";
      }
    })
  }
}
