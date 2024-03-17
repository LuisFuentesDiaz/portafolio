import { Component, OnInit } from '@angular/core';
import { CvComponent } from '../cv/cv.component';
import { SeccionAPageComponent } from '../seccion-a/seccion-a-page.component';
import { SeccionBPageComponent } from '../seccion-b/seccion-b-page.component';
import { SeccionCPageComponent } from '../seccion-c/seccion-c-page.component';
import { SeccionDPageComponent } from '../seccion-d/seccion-d-page.component';
import { SeccionEPageComponent } from '../seccion-e/seccion-e-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [SeccionAPageComponent, SeccionBPageComponent, SeccionCPageComponent, SeccionDPageComponent, SeccionEPageComponent, CvComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
