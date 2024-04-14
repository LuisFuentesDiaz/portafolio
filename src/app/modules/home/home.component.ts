import { Component, OnInit } from '@angular/core';
import { CvComponent } from './components/cv/cv.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EspacioComponent } from 'src/app/shared/components/espacio/espacio.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { SobreMiComponent } from './components/sobreMi/sobreMi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [PresentacionComponent, SobreMiComponent, ProyectosComponent, ExperienciasComponent, CertificacionesComponent, CvComponent, ContactoComponent, EspacioComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
