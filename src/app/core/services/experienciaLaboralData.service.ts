import { Injectable } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { Cargo } from '../enum/cargo.enum';
import * as moment from 'moment';
import { Rubro } from '../enum/rubro.enum';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralDataService {

  experiencias: Experiencia[] = [
    new Experiencia("Pleyasoft", moment("2022-02-01"), null, Cargo.SOFTWARE_ENGINEER, Rubro.TECNOLOGICO),
    new Experiencia("Grupo Firma", moment("2021-05-03"), moment("2022-1-31"), Cargo.PROGRAMADOR, Rubro.TECNOLOGICO)
  ]

  getExperiencias(): Experiencia[] {
    return this.experiencias;
  }
}
