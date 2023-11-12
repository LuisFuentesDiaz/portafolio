import { Component, OnInit } from '@angular/core';
import { TemaWebService } from 'src/app/core/util/temaWeb.service';

@Component({
  selector: 'app-seccion-b-page',
  templateUrl: './seccion-b-page.component.html',
  styleUrls: ['./seccion-b-page.component.css']
})
export class SeccionBPageComponent implements OnInit {

  isTemaOscuro: boolean = false;

  constructor(public temaWeb: TemaWebService) { }

  ngOnInit() {
    this.temaWeb.isTemaOscuro.subscribe(e => {
      this.isTemaOscuro = e;
    })
  }

}
