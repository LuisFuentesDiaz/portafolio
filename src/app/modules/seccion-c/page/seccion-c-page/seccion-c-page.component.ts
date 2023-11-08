import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/models/proyecto';

@Component({
  selector: 'app-seccion-c-page',
  templateUrl: './seccion-c-page.component.html',
  styleUrls: ['./seccion-c-page.component.css']
})
export class SeccionCPageComponent {

  proyectoA: Proyecto = new Proyecto(
    "CCA CCAfast",
    true,
    "Pleyasoft",
    "CCA",
    ['angular', 'java', 'sqlServer', 'azure', 'git', 'spring', 'ts'],
    `CCAFast es una aplicación web desarrollada principalmente con Angular en el front-end y SpringBoot en el back-end.
      Básicamente, es una plataforma web donde la firma puede monitorear todas las transferencias de los bancos a su cargo, como Banco Santander, Banco de Chile, Banco Falabella, entre otros, a través de la mensajería Swift.
     También permite activar o desactivar contingencias para pausar las transferencias entre bancos`,
    'cca/ccafast/',
    ['ccafast-1', 'ccafast-2', 'ccafast-3', 'ccafast-4'],
    "https://www.cca.cl/",
    false);

  proyectoB: Proyecto = new Proyecto(
    "Autoservicio RRHH",
    true,
    "Pleyasoft",
    "Cencosud S.A",
    ['react', 'js', 'express', 'gitlab'],
    `Autoservicio RRHH es una aplicación web desarrollada con React JS en el front-end y Node.js en el back-end.
     Básicamente, se trata de una plataforma de autoservicio dirigida a los colaboradores de Cencosud, donde pueden acceder a diversas funcionalidades,
     como consultar sus liquidaciones, solicitar vacaciones, firmar documentos, responder encuestas, entre otras.`,
    'cencosud/autoservicio-rrhh/',
    ['autoservicio-1', 'autoservicio-2', 'autoservicio-3', 'autoservicio-4', 'autoservicio-5'],
    "https://www.cencosud.com/",
    false);

  proyectoC: Proyecto = new Proyecto(
    "Rentacar",
    false,
    "Grupo Firma",
    "Firma Rent",
    ['angular', 'express', 'mySql', 'gitHub', 'js', 'sequelize', 'git'],
    `Rentacar es una aplicación CRM (Customer Relationship Management) desarrollada con Angular en el front-end y Express.js en el back-end.
    Básicamente, se trata de un sistema CRM en el cual la firma puede gestionar, modificar y registrar todos los aspectos relacionados con el proceso de arrendamiento de vehículos,
    incluyendo funciones como tomar fotografías del estado de los vehículos antes y después del arrendamiento, realizar cálculos de consumo de combustible y elementos de viaje.
     además, permite a los usuarios finales firmar digitalmente los contratos de arrendamiento en tabletas, brindando una experiencia cómoda y eficiente.`,
    'grupo-firma/rentacar/',
    ['rentacar-1', 'rentacar-2', 'rentacar-3', 'rentacar-4'],
    "https://www.imlchile.cl/",
    false);



}
