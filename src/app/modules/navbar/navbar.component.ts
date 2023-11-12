import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PantallaService } from 'src/app/core/util/pantalla.service';
import { TemaWebService } from 'src/app/core/util/temaWeb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public pantalla: PantallaService, public temaWebService: TemaWebService) { }

  isScrollArriba: boolean = true;
  tabIndexVisible: string = 'tabIndex1';
  isTemaOscuro: boolean = false;


  ngOnInit() {
    this.pantalla.direccionScroll.subscribe(e => {
      this.isScrollArriba = e.scrollArriba;
    })
    this.pantalla.tabIndexVisible.subscribe(e => {
      this.tabIndexVisible = e.tabId;
    })
    this.temaWebService.isTemaOscuro.subscribe(e => {
      this.isTemaOscuro = e;
    })
  }


  cambiarTema() {
    this.temaWebService.isTemaOscuro.next(!this.temaWebService.isTemaOscuro.value);
  }

  focus(elementoId) {
    let elemento = document.getElementById(elementoId);
    if (elemento) {
      elemento.focus();
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  }
}
