import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-estrella-fugaz',
  templateUrl: './estrella-fugaz.component.html',
  styleUrls: ['./estrella-fugaz.component.css']
})
export class EstrellaFugazComponent implements OnInit {

  @Input() id = "";
  @Input() intervalo = "5000";
  @Input() right = 0;
  @Input() top = 0;
  @Input() tamaño = 70;

  ultimaClaseAnimacion = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    let win = this;
    document.addEventListener("DOMContentLoaded", function () {
      const spanFugaz = win.renderer.createElement('div');
      const estrella = win.renderer.createElement('img');
      estrella.id = "estrellaFugaz" + win.id;
      estrella.src = "assets/estrellaFugaz.png";
      estrella.alt = "modelo estrella fugaz";
      win.renderer.addClass(estrella, `estrellaFugaz`);
      win.renderer.addClass(spanFugaz, `contEstrellaFugaz1`);
      spanFugaz.style.display = "none";
      spanFugaz.id = "spanFugaz" + win.id;
      spanFugaz.appendChild(estrella);
      document.getElementById("estrellasFugaces" + win.id).appendChild(spanFugaz);
      spanFugaz.addEventListener("animationend", function () {
        spanFugaz.style.display = "none";
        if (win.ultimaClaseAnimacion != null) {
          spanFugaz.classList.remove(`${win.ultimaClaseAnimacion}`);
        }
      });
    })
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.showEstrellaFugaz();
    }, parseInt(this.intervalo));
  }

  showEstrellaFugaz = () => {
    let span = document.getElementById("spanFugaz" + this.id);
    let estrella = document.getElementById("estrellaFugaz" + this.id);

    if (span && estrella) {

      let azar = Math.round(Math.random() * (100 - 0) + 0);
      let azarAnimacion = Math.round(Math.random() * (5 - 1) + 1);
      let azarTamaño = Math.round(Math.random() * (50 - 15) + 15);
      let azarPosicionRight = Math.round(Math.random() * (100 - 0) + 0);

      if (azar > 50) {
        estrella.style.width = `${azarTamaño.toString()}px`;
        estrella.style.height = `${azarTamaño.toString()}px`;

        if (azarPosicionRight == 0) {
          let azarPosicionTop = Math.round(Math.random() * (100 - 0) + 0);
          estrella.style.right = "0%";
          estrella.style.top = `${azarPosicionTop}%`;
        } else {
          estrella.style.top = "0%";
          estrella.style.right = `${azarPosicionRight}%`;
        }

        span.style.display = "block";
        this.ultimaClaseAnimacion = "animacionStart" + azarAnimacion;
        if (this.id == "2") {
        }
        span.classList.add(`animacionStart${azarAnimacion}`);
      } else {
        this.ultimaClaseAnimacion = null;
      }
    }
  }

  toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
}
