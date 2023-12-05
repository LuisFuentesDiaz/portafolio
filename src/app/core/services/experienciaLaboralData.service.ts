import { Injectable } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { Cargo } from '../enum/cargo.enum';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralDataService {

  experiencias: Experiencia[] = [
    new Experiencia("Pleyasoft", moment("2022-02-01"), null, Cargo.SOFTWARE_ENGINEER),
    new Experiencia("Grupo Firma", moment("2021-05-03"), moment("2022-1-31"), Cargo.PROGRAMADOR)
  ]

  getExperiencias(): Experiencia[] {
    return this.experiencias;
  }
}
