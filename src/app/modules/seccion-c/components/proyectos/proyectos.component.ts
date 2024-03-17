import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models';
import { PantallaUtil } from 'src/app/core/util/pantallaUtil';
import { Habilidad } from 'src/app/core/models';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, IconoSkillComponent, NgbTooltip]
})
export class ProyectosComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";
  @Input() data: Proyecto;

  resolucion;
  tecnologias: Habilidad[] = [];

  constructor(private pantallaUtil: PantallaUtil, private modalService: NgbModal, private router: Router) {
    this.pantallaUtil.resolucion.subscribe(e => {
      this.resolucion = e.resolucion;
    })
  }

  ngOnInit() {
    this.tecnologias = this.data.tecnologias.slice(0, 4);
  }

  openModal() {
    this.router.navigate(['/detalle-proyecto/' + this.data.id]);
  }

}
