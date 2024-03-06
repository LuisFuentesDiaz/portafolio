import { Component } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';

@Component({
  selector: 'app-seccion-a-page',
  templateUrl: './seccion-a-page.component.html',
  styleUrls: ['./seccion-a-page.component.css']
})
export class SeccionAPageComponent {

  Habilidad = TG;

  constructor() { }

}
