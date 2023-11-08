import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PantallaService } from 'src/app/core/util/pantalla.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public pantalla: PantallaService) { }

  isScrollArriba: boolean = true;
  tabIndexVisible: string = 'tabIndex1';


  ngOnInit() {
    this.pantalla.direccionScroll.subscribe(e => {
      this.isScrollArriba = e.scrollArriba;
    })
    this.pantalla.tabIndexVisible.subscribe(e => {
      this.tabIndexVisible = e.tabId;
    })
  }


  focus(elementoId) {
    let elemento = document.getElementById(elementoId);
    if (elemento) {
      elemento.focus();
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  }
}
