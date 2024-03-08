import * as dayjs from 'dayjs';
import { Cargo } from "../enum";
import { Rubro } from "../enum";
export class Experiencia {
  nombre: string;
  inicio: dayjs.Dayjs;
  fin: dayjs.Dayjs;
  duracion: number;
  cargo: Cargo;
  rubro: Rubro;
  nombreLogo: string;

  constructor(nombre: string, inicio: dayjs.Dayjs, fin: dayjs.Dayjs, cargo: Cargo, rubro: Rubro, nombreLogo: string) {
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.calcularDuracion(inicio, fin);
    this.cargo = cargo;
    this.rubro = rubro;
    this.rutaLogo(nombreLogo);
  }


  calcularDuracion(inicio: dayjs.Dayjs, termino: dayjs.Dayjs) {
    termino?.add(1, 'day');
    if (!termino) {
      termino = dayjs();
    }
    if (termino.date() > 15 && termino.date() <= 31) {
      termino.add(1, 'month');
    }
    this.duracion = termino.diff(inicio, 'months');
  }

  rutaLogo(nombreLogo: string) {
    this.nombreLogo = `assets/experiencias/${nombreLogo}`;
  }
}
