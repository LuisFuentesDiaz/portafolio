import { Component } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { WebUrl } from 'src/app/core/enum';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { HabilidadesEnduranceComponent } from 'src/app/shared/components/habilidades-endurance/habilidades-endurance.component';
import { PanelDifuminadoComponent } from 'src/app/shared/components/panel-difuminado/panel-difuminado.component';

@Component({
  selector: 'app-seccion-e-page',
  templateUrl: './seccion-e-page.component.html',
  styleUrls: ['./seccion-e-page.component.css'],
  standalone: true,
  imports: [HabilidadesComponent, CertificacionesComponent, HabilidadesEnduranceComponent, PanelDifuminadoComponent]
})
export class SeccionEPageComponent {
  tg = TG;
  wbURLEnum = WebUrl
}
