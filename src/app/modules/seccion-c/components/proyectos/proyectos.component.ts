import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models/proyecto';
import { PantallaService } from 'src/app/core/util/pantalla.service';
import { Habilidad } from 'src/app/core/models/habilidad';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from '../modal-proyecto/modal-proyecto.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, SharedModule, NgbModule, NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class ProyectosComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";
  @Input() data: Proyecto;

  resolucion;
  tecnologias: Habilidad[] = [];

  constructor(private pantallaUtil: PantallaService, private modalService: NgbModal) {
    this.pantallaUtil.resolucion.subscribe(e => {
      this.resolucion = e.resolucion;
    })
  }

  ngOnInit() {
    this.tecnologias = this.data.tecnologias.slice(0, 4);
  }

  openModal() {
    const modalRef = this.modalService.open(ModalProyectoComponent, {
      size: 'md',
    });
    modalRef.componentInstance.data = this.data;
  }

}
