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

  constructor() { }

  ngAfterViewInit() {
    const elementocontainer = document.getElementById('skillContenedor' + this.nombre);
    const elementoSpan = document.getElementById('capacidad' + this.nombre);

    elementocontainer?.addEventListener('mouseover', () => {
      if (elementoSpan) {
        elementoSpan.style.height = this.capacidad + '%';
      }
    })

    elementocontainer?.addEventListener('mouseout', () => {
      if (elementoSpan) {
        elementoSpan.style.height = '0%';
      }
    })
  }
}
