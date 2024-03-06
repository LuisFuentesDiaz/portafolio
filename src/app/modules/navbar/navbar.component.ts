import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PantallaService } from 'src/app/core/util/pantalla.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDetalle: boolean = false;

  constructor(public pantalla: PantallaService, private router: Router) { }
  tabIndexVisible: string = 'tabIndex1';
  ngOnInit() {
    this.pantalla.tabIndexVisible.subscribe(e => {
      this.tabIndexVisible = e.tabId;
    })
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes("detalle-proyecto")) this.isDetalle = true;
        else this.isDetalle = false;
      }
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
