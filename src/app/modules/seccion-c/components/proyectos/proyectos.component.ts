import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() izquierda = false;
  @Input() derecha = false;


  constructor() { }

  ngOnInit() {
  }

}
