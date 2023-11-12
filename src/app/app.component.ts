import { Component, OnInit, OnChanges } from '@angular/core';
import { TemaWebService } from './core/util/temaWeb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isTemaOscuro: boolean = false;

  constructor(public temaWeb: TemaWebService) { }

  ngOnInit() {
    this.temaWeb.isTemaOscuro.subscribe(e => {
      this.isTemaOscuro = e;
      if (e) {
        document.body.style.backgroundImage = "linear-gradient(to top, #5b41b8 150%, #0a17a7 0%)";
      } else {
        document.body.style.backgroundImage = "linear-gradient(to top, ghostwhite 150%, #0a17a7 0%)";
      }
    })
  }
}
