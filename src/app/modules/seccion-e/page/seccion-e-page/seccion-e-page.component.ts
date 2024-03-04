import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { WebUrl } from 'src/app/core/enum';

@Component({
  selector: 'app-seccion-e-page',
  templateUrl: './seccion-e-page.component.html',
  styleUrls: ['./seccion-e-page.component.css']
})
export class SeccionEPageComponent implements AfterViewInit {
  // @ViewChild('gmail', { static: false }) gmailContacto: ElementRef;

  tg = TG;
  wbURLEnum = WebUrl
  constructor() { }

  ngAfterViewInit() {

  }

  copiarCorreo() {

  }

}
