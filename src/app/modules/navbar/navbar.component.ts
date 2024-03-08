import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProyectosService } from 'src/app/core/services';
import { PantallaUtil } from 'src/app/core/util/pantallaUtil';
import { Utiles } from 'src/app/core/util/utiles';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDetalle: boolean = false;
  utiles: Utiles;
  proyectoActual: number = 0;

  constructor(public pantalla: PantallaUtil, private router: Router, utiles: Utiles, private route: ActivatedRoute) {
    this.utiles = utiles;
  }

  tabIndexVisible: string = 'tabIndex1';
  ngOnInit() {
    this.pantalla.tabIndexVisible.subscribe(e => {
      this.tabIndexVisible = e.tabId;
    })
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes("detalle-proyecto")) {
          this.isDetalle = true;
          this.proyectoActual = Number.parseInt(event.url.split("detalle-proyecto/")[1]) ?? 0;
        }
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
