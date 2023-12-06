import * as moment from "moment";
import { Cargo } from "../enum/cargo.enum";
import { Rubro } from "../enum/rubro.enum";

export class Experiencia {
  nombre: string;
  inicio: moment.Moment;
  fin: moment.Moment;
  duracion: number;
  cargo: Cargo;
  rubro: Rubro;

  constructor(nombre: string, inicio: moment.Moment, fin: moment.Moment, cargo: Cargo, rubro: Rubro) {
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.calcularDuracion(inicio, fin);
    this.cargo = cargo;
    this.rubro = rubro;
  }


  calcularDuracion(inicio: moment.Moment, termino: moment.Moment) {
    if (!termino) {
      termino = moment(new Date());
    }
    if (termino.date() > 15 && termino.date() <= 31) {
      termino.add(1, 'month');
    }
    this.duracion = termino.diff(inicio, 'months');
  }
}
