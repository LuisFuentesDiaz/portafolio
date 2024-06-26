import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models';
import { PantallaUtil } from 'src/app/core/util/pantallaUtil';
import { Habilidad } from 'src/app/core/models';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Router } from '@angular/router';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, IconoSkillComponent, NgxTippyModule]
})
export class ProyectoComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";
  @Input() data: Proyecto;

  resolucion;
  tecnologias: Habilidad[] = [];

  constructor(private pantallaUtil: PantallaUtil, private router: Router) {
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
