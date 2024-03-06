import { Component } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { WebUrl } from 'src/app/core/enum';

@Component({
  selector: 'app-seccion-e-page',
  templateUrl: './seccion-e-page.component.html',
  styleUrls: ['./seccion-e-page.component.css']
})
export class SeccionEPageComponent {
  tg = TG;
  wbURLEnum = WebUrl

}
