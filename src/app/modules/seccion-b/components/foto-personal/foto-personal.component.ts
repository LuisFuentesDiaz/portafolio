import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-personal',
  templateUrl: './foto-personal.component.html',
  styleUrls: ['./foto-personal.component.css']
})
export class FotoPersonalComponent implements OnInit {

  @Input() width: "20";

  constructor() { }

  ngOnInit() {

    document.addEventListener('DOMContentLoaded', () => {

      let element = document.getElementById("contenedor-imagen-personal");
      if (element) {
        //  element.style.width = this.width + "%";
      }

    })
  }

}
