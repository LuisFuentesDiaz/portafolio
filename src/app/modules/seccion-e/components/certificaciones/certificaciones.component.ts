import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  @Input() nombre: string;
  @Input() url: string;
  @Input() certificado: string;


  constructor() { }

  ngOnInit() {
  }

}
