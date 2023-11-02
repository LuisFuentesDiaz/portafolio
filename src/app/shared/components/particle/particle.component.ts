import { Component, ElementRef, Input, OnInit, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.css']
})
export class ParticleComponent implements OnInit, AfterViewInit {
  @Input() id = "";
  @Input() intervalo = "5000";
  @Input() right = 0;
  @Input() top = 0;

  ultimaClaseAnimacion = "";

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    let win = this;
    document.addEventListener("DOMContentLoaded", function () {
      const spanFugaz = win.renderer.createElement('div');
      const estrella = win.renderer.createElement('img');

      estrella.style.width = "70px";
      estrella.style.height = "70px";
      estrella.style.top = win.top + "vh";

      estrella.style.right = win.right + "vw";
      estrella.style.zIndex = -1;
      estrella.id = "estrellaFugaz" + win.id;
      estrella.src = "/assets/estrellaFugaz.png"

      win.renderer.addClass(estrella, `estrellaFugaz`);
      win.renderer.addClass(spanFugaz, `contEstrellaFugaz1`);
      spanFugaz.style.display = "none";

      spanFugaz.id = "spanFugaz" + win.id;

      spanFugaz.appendChild(estrella);


      spanFugaz.addEventListener("animationend", function () {
        spanFugaz.style.display = "none";

        console.log("ultima ", win.ultimaClaseAnimacion);
        // estrella.toggleClass(win.ultimaClaseAnimacion);
        if (win.ultimaClaseAnimacion) {
          win.toggleClass(estrella, win.ultimaClaseAnimacion);

        }
      });


      document.getElementById("estrellasFugaces" + win.id).appendChild(spanFugaz);


    })
  }

  ngAfterViewInit(): void {
    setInterval(() => {

      this.showEstrellaFugaz();
    }, parseInt(this.intervalo));
  }



  showEstrellaFugaz = () => {
    let win = this;
    let estrella = document.getElementById("spanFugaz" + this.id);
    if (estrella) {

      let azar = Math.round(Math.random() * (100 - 0) + 0);
      let azarAnimacion = Math.round(Math.random() * (5 - 1) + 1);


      if (azar > 50) {
        console.log("azar ", azar);
        console.log("animacion " + azarAnimacion);

        estrella.style.display = "block";
        this.ultimaClaseAnimacion = "animacionStart" + azarAnimacion;
        this.toggleClass(estrella, "animacionStart" + azarAnimacion);
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






/*

    let habilitado: boolean = true;
    let win = this;
    setInterval(() => {
      let estrella = document.getElementById("spanFugaz" + this.id);
      if (estrella) {

        console.log("aaa ", estrella);
        //this.toggleClass(estrella, "mostrar");
        estrella.style.display = "block";

        this.toggleClass(estrella, "animacionStart");


      }
    }, parseInt(this.intervalo));
    let estrella = document.getElementById("spanFugaz" + this.id);
    if (estrella) {
      estrella.addEventListener("animationend", function () {
        // El código que deseas ejecutar cuando la animación termina
        console.log("La animación ha terminado.");
        estrella.style.display = "none";
        win.toggleClass(estrella, "animacionStart");

      });
    }

  }
*/

