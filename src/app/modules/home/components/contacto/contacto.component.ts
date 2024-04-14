import { Component, OnInit } from '@angular/core';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';
import { HabilidadesEnduranceComponent } from 'src/app/shared/components/habilidades-endurance/habilidades-endurance.component';
import { WebUrl } from 'src/app/core/enum';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  standalone: true,
  imports: [PanelDifuminadoComponent, HabilidadesEnduranceComponent]
})
export class ContactoComponent implements OnInit {

  wbURLEnum = WebUrl

  constructor() { }

  ngOnInit() {
  }

}
