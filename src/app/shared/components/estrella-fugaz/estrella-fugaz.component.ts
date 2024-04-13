import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estrella-fugaz',
  templateUrl: './estrella-fugaz.component.html',
  styleUrls: ['./estrella-fugaz.component.css'],
  standalone: true
})
export class EstrellaFugazComponent implements OnInit {

  animar: boolean = false;
  isHidden: boolean = false;
  x: number = -30;
  y: number = -30;
  duracion: number = 2;
  tamano: number = 100;
  ultimoRandomPosicion = 0;

  posiciones = [
    { x: 0, y: -30 },
    { x: 10, y: -30 },
    { x: 20, y: -30 },
    { x: 30, y: -30 },
    { x: 40, y: -30 },
    { x: 50, y: -30 },
    { x: 60, y: -30 },
    { x: 70, y: -30 },
    { x: 80, y: -30 },
    { x: -30, y: 20 },
    { x: -30, y: 40 },
  ];

  duraciones = [
    { duracion: 0.5, tamaño: 100 },
    { duracion: 1, tamaño: 80 },
    { duracion: 1.5, tamaño: 60 },
    { duracion: 2, tamaño: 50 },
  ];

  constructor() { }

  ngOnInit(): void {
    this.animar = true;

  }

  animationEnd() {
    this.isHidden = true;
    this.animar = false;
    this.cambiarStyle();
  }

  cambiarStyle() {
    let tiempo = this.numeroRandom(3000, 5000);
    this.isHidden = false;
    let numPosicion = this.numeroRandom(0, this.posiciones.length - 1);
    while (numPosicion == this.ultimoRandomPosicion) {
      numPosicion = this.numeroRandom(0, this.posiciones.length - 1);
    }
    let numDuracion = this.numeroRandom(0, this.duraciones.length - 1);
    this.ultimoRandomPosicion = numPosicion;

    setTimeout(() => {
      this.x = this.posiciones[numPosicion].x;
      this.y = this.posiciones[numPosicion].y;
      this.tamano = this.duraciones[numDuracion].tamaño;
      this.duracion = this.duraciones[numDuracion].duracion;
      this.animar = true;
    }, tiempo);
  }

  numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
