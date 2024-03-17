import { Component, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css'],
  standalone: true
})
export class EstrellasComponent implements OnInit {
  @Input() id;
  @Input() height: string = "100";
  @Input() maxTamaño: string = "5";
  @Input() estrellas = 150;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    let win = this;
    let tipoEscala = 1;

    document.addEventListener("DOMContentLoaded", function () {
      for (let i = 0; i < win.estrellas; i++) {

        if (tipoEscala == 10) {
          tipoEscala = 1;
        }

        let tamaño = Math.random() * (parseInt(win.maxTamaño) - 1) + 1;
        let x = 0;

        let y = Math.random() * (parseInt(win.height) - 0) + 0;

        if (i <= (win.estrellas / 4)) {
          x = Math.random() * (25 - 1) + 0;
        } else if (i <= (win.estrellas / 4) * 2) {
          x = Math.random() * (50 - 25) + 25;
        } else if (i <= (win.estrellas / 4) * 3) {
          x = Math.random() * (75 - 50) + 50;
        } else if (i <= (win.estrellas / 4) * 4) {
          x = Math.random() * (99 - 75) + 75;
        }
        const estrella = win.renderer.createElement('i');
        estrella.style.width = `${tamaño}px`;
        estrella.style.height = `${tamaño}px`;
        estrella.style.boxShadow = "0px 0px 2px 1px white";
        estrella.style.position = "absolute";
        estrella.style.left = `${x}%`;
        estrella.style.top = `${y}%`;
        estrella.style.borderRadius = "50px";
        estrella.style.backgroundColor = "white";
        estrella.style.zIndex = "-1";
        estrella.id = "estrella" + i + win.id
        win.renderer.addClass(estrella, `escalar${tipoEscala}`);
        // win.renderer.appendChild(win.el.nativeElement, estrella);
        document.getElementById("estrella" + win.id).appendChild(estrella);
        tipoEscala++;
      }
    })
  }
}
