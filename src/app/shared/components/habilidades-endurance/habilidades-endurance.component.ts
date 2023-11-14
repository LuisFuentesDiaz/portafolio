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
    console.log("dir", this.direccion);

    switch (this.direccion) {
      case "right":
        this.gradient = "linear-gradient(to right, #0A17A7 0%, black 51%)";
        break;
      case "left":
        this.gradient = "linear-gradient(to left, #0A17A7 0%, black 51%)";
        break;
      default:
        this.gradient = "linear-gradient(to top, #0A17A7 0%, black 51%)";
        break;
    }
    console.log("grad", this.gradient);


  }

}
