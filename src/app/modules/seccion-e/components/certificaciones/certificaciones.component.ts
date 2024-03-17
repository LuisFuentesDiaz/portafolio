import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { Habilidad } from 'src/app/core/models';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css'],
  standalone: true,
  imports: [NgbTooltip, NgFor, IconoSkillComponent]
})
export class CertificacionesComponent {
  @Input() nombre: string;
  @Input() url: string;
  @Input() certificado: string;
  @Input() habilidad: Habilidad[] = [];
  constructor() { }
}
