import { Component } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { WebUrl } from 'src/app/core/enum';
import { HabilidadesComponent } from '../proyectos/components/habilidades/habilidades.component';
import { CertificacionComponent } from './components/certificaciones/certificacion.component';
import { HabilidadesEnduranceComponent } from 'src/app/shared/components/habilidades-endurance/habilidades-endurance.component';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css'],
  standalone: true,
  imports: [HabilidadesComponent, CertificacionComponent, HabilidadesEnduranceComponent, PanelDifuminadoComponent]
})
export class CertificacionesComponent {
  tg = TG;
  wbURLEnum = WebUrl
}
