import { Component, OnInit } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';

@Component({
  selector: 'app-seccion-e-page',
  templateUrl: './seccion-e-page.component.html',
  styleUrls: ['./seccion-e-page.component.css']
})
export class SeccionEPageComponent implements OnInit {
  tg = TG;
  constructor() { }

  ngOnInit() {
  }

}
