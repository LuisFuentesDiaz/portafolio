import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models/proyecto';

@Component({
  selector: 'app-seccion-c-page',
  templateUrl: './seccion-c-page.component.html',
  styleUrls: ['./seccion-c-page.component.css']
})
export class SeccionCPageComponent {

  proyectoA: Proyecto = new Proyecto("CCA CCAfast", true, "Pleyasoft", "CCA", ['angular', 'java', 'sqlServer', 'azure'], `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit a enim tincidunt feugiat. Suspendisse potenti. Morbi vitae ultrices nulla. Fusce efficitur, libero sed eleifend finibus, libero urna volutpat ex, nec laoreet libero orci ac ex. Curabitur auctor dapibus tortor. Sed vel mauris non neque sollicitudin condimentum. Nulla facilisi. Praesent facilisis ac urna in viverra. Pellentesque ac tellus id odio auctor hendrerit. Fusce euismod elit sit amet turpis malesuada, id fringilla massa rhoncus`,
    'cca/ccafast/', ['ccafast-1', 'ccafast-2', 'ccafast-3', 'ccafast-4']);
  proyectoB: Proyecto = new Proyecto("Autoservicio RRHH", true, "Pleyasoft", "Cencosud", ['react', 'js', 'express', 'gitlab'], "AAAA",
    'cencosud/autoservicio-rrhh/', ['autoservicio-1', 'autoservicio-2', 'autoservicio-3', 'autoservicio-4', 'autoservicio-5']);
  proyectoC: Proyecto = new Proyecto("Sistema de evidencias (TESIS)", false, "Universidad Católica", "Universidad Católica del Maule", ['angular', 'spring', 'mySql', 'gitHub'], "AAAA",
    'personal/tesis/', ['tesis-1']);



}
