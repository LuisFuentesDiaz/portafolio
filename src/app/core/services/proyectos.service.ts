import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { TG } from 'src/app/core/const/tipos-habilidades';
import { DescripcionProyecto } from '../enum/descripcion-proyecto.enum';
import { UrlCCA, UrlCENCOSUD, UrlGRUPOFIRMA, UrlPERSONAL } from '../enum/directorio.enum';
import { WebUrl } from '../enum/web-url.enum';
import * as dayjs from 'dayjs';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  Proyectos: Proyecto[] = [
    new Proyecto(
      "Guachiman",
      false,
      "Pleyasoft",
      "CCA",
      [TG.JAVA, TG.SPRINGBOOT, TG.MICROSERVICIOS, TG.AZURE, TG.SQLSERVER, TG.GIT, TG.POSTMAN],
      DescripcionProyecto.GUACHIMAN,
      UrlCCA.GUACHIMAN,
      ['guachiman-1'],
      WebUrl.CCA,
      false,
      dayjs("2023-02-01"),
      null,
      true
    ),

    new Proyecto(
      "CCA CCAfast",
      true,
      "Pleyasoft",
      "CCA",
      [TG.ANGULAR, TG.JAVA, TG.SQLSERVER, TG.AZURE, TG.GIT, TG.SPRINGBOOT, TG.TYPESCRIPT],
      DescripcionProyecto.CCAFAST,
      UrlCCA.CCAFAST,
      ['ccafast-1', 'ccafast-2', 'ccafast-3', 'ccafast-4'],
      WebUrl.CCA,
      false,
      dayjs("2022-07-01"),
      dayjs("2023-02-01"),
      true
    ),

    new Proyecto(
      "Autoservicio RRHH",
      true,
      "Pleyasoft",
      "Cencosud S.A",
      [TG.REACTJS, TG.JAVASCRIPT, TG.EXPRESSJS, TG.GITLAB, TG.NODEJS, TG.GIT],
      DescripcionProyecto.AUTOSERVICIORRHH,
      UrlCENCOSUD.AUTOSERVICIORRHH,
      ['autoservicio-1', 'autoservicio-2', 'autoservicio-3', 'autoservicio-4', 'autoservicio-5'],
      WebUrl.CENCOSUD,
      false,
      dayjs("2022-02-01"),
      dayjs("2022-06-30"),
      true
    ),
    new Proyecto(
      "Rentacar",
      false,
      "Grupo Firma",
      "Firma Rent",
      [TG.ANGULAR, TG.EXPRESSJS, TG.MYSQL, TG.GITHUB, TG.JAVASCRIPT, TG.TYPESCRIPT, TG.SEQUELIZE, TG.GIT, TG.NODEJS, TG.APRIREST],
      DescripcionProyecto.RENTACAR,
      UrlGRUPOFIRMA.RENTACAR,
      ['rentacar-1', 'rentacar-2', 'rentacar-3', 'rentacar-4'],
      WebUrl.GRUPOFIRMA,
      false,
      dayjs("2021-05-01"),
      dayjs("2022-01-31"),
      false
    ),
    new Proyecto(
      "Sistema Evidencias (Tesis)",
      false,
      "UCM",
      "UCM",
      [TG.ANGULAR, TG.JAVA, TG.SPRINGBOOT, TG.GIT, TG.HIBERNATE, TG.APRIREST, TG.POSTGRESQL],
      DescripcionProyecto.TESIS,
      UrlPERSONAL.TESIS,
      ['tesis-1'],
      WebUrl.UCM,
      false,
      dayjs("2019-09-01"),
      dayjs("2020-02-29"),
      false
    ),
    new Proyecto(
      "Portafolio",
      false,
      null,
      null,
      [TG.ANGULAR, TG.TYPESCRIPT, TG.CSS, TG.HTML, TG.BOOTSTRAP],
      DescripcionProyecto.TESIS,
      UrlPERSONAL.PORTAFOLIO,
      ['portafolio-1', 'portafolio-2', 'portafolio-3', 'portafolio-4'],
      null,
      "https://github.com/LuisFuentesDiaz/portafolio.git",
      dayjs("2023-10-18"),
      dayjs("2020-11-25"),
      false
    ),
  ]

  getProyectos() {
    return this.Proyectos;
  }
}
