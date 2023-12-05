import * as moment from "moment";
import { Cargo } from "../enum/cargo.enum";

export class Experiencia {
  nombre: string;
  inicio: moment.Moment;
  fin: moment.Moment;
  duracion: number;
  cargo: Cargo;

  constructor(nombre: string, inicio: moment.Moment, fin: moment.Moment, cargo: Cargo,) {
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.calcularDuracion(inicio, fin);
    this.cargo = cargo;
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
