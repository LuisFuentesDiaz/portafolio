import { Component, OnInit } from '@angular/core';
import { CvComponent } from '../cv/cv.component';
import { PresentacionComponent } from '../presentacion/Presentacion.component';
import { SeccionBPageComponent } from '../seccion-b/seccion-b-page.component';
import { SeccionCPageComponent } from '../seccion-c/seccion-c-page.component';
import { SeccionDPageComponent } from '../seccion-d/seccion-d-page.component';
import { SeccionEPageComponent } from '../seccion-e/seccion-e-page.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { EspacioComponent } from 'src/app/shared/components/espacio/espacio.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [PresentacionComponent, SeccionBPageComponent, SeccionCPageComponent, SeccionDPageComponent, SeccionEPageComponent, CvComponent, ContactoComponent, EspacioComponent]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
