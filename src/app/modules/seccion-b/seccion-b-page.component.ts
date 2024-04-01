import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PantallaUtil } from 'src/app/core/util/pantallaUtil';
import { PerfilProfesionalComponent } from './components/perfil-profesional/perfil-profesional.component';
import { FotoPersonalComponent } from './components/foto-personal/foto-personal.component';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';

@Component({
  selector: 'app-seccion-b-page',
  templateUrl: './seccion-b-page.component.html',
  styleUrls: ['./seccion-b-page.component.css'],
  standalone: true,
  imports: [CommonModule, PerfilProfesionalComponent, FotoPersonalComponent, PanelDifuminadoComponent]
})
export class SeccionBPageComponent implements OnInit {

  isMovil: boolean = false;

  constructor(private pantallaService: PantallaUtil) { }

  ngOnInit() {
    this.pantallaService.resolucion.subscribe(e => {
      if (e.resolucion >= 1000) {
        this.isMovil = false;
      } else {
        this.isMovil = true;
      }
    })
  }
}
