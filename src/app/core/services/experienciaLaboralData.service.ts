import { Injectable } from '@angular/core';
import { Experiencia } from '../models';
import { Cargo } from '../enum';
import { Rubro } from '../enum';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralDataService {

  experiencias: Experiencia[] = [
    new Experiencia("Pleyasoft", dayjs("2022-02-01"), null, Cargo.SOFTWARE_ENGINEER, Rubro.TECNOLOGICO, "pleyasoft-logo"),
    new Experiencia("Grupo Firma", dayjs("2021-05-02"), dayjs("2022-01-31"), Cargo.PROGRAMADOR, Rubro.TECNOLOGICO, "gf-logo")
  ]

  getExperiencias(): Experiencia[] {
    return this.experiencias;
  }
}
