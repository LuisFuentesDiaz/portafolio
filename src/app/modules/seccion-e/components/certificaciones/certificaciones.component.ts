import { Component, Input, OnInit } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { Habilidad } from 'src/app/core/models';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  @Input() nombre: string;
  @Input() url: string;
  @Input() certificado: string;
  @Input() habilidad: Habilidad[] = [];
  constructor() { }

  ngOnInit() {
  }

}
