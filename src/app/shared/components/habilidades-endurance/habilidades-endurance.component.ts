import { Component, Input, OnInit } from '@angular/core';
import { right } from '@popperjs/core';

@Component({
  selector: 'app-habilidades-endurance',
  templateUrl: './habilidades-endurance.component.html',
  styleUrls: ['./habilidades-endurance.component.css']
})
export class HabilidadesEnduranceComponent implements OnInit {

  @Input() direccion: string = "none";
  gradient;

  constructor() { }

  ngOnInit() {
    switch (this.direccion) {
      case "right":
        this.gradient = "linear-gradient(to right, rgb(5, 12, 86) 11%, black 55%, rgb(5, 12, 86) 91%)";
        break;
      case "left":
        this.gradient = "linear-gradient(to right, rgb(5, 12, 86) 11%, black 55%, rgb(5, 12, 86) 91%)";
        break;
      default:
        this.gradient = "linear-gradient(to right, rgb(5, 12, 86) 11%, black 55%, rgb(5, 12, 86) 91%)";
        break;
    }
  }
}
