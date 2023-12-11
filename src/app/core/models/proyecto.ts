import { Habilidad } from "./habilidad";
import * as dayjs from 'dayjs';

export class Proyecto {
  nombre: string;
  dependiente: boolean;
  consultora: string;
  empresa: string;
  tecnologias: Habilidad[];
  informacion: string;
  urlBaseImg: string;
  capturas: string[];
  url: string;
  codigoAbierto: boolean;
  inicio: dayjs.Dayjs;
  termino: dayjs.Dayjs;
  duracionFecha: Number;
  isReciente: boolean;

  constructor(nombre: string, dependiente: boolean, consultora: string, empresa: string, tecnologias: Habilidad[], informacion: string,
    urlBaseImg: string, capturas: string[], url: string, codigoAbierto: boolean, inicio: dayjs.Dayjs, termino: dayjs.Dayjs, isReciente: boolean) {
    this.nombre = nombre;
    this.dependiente = dependiente;
    this.consultora = consultora;
    this.empresa = empresa;
    this.tecnologias = tecnologias;
    this.informacion = informacion;
    this.urlBaseImg = urlBaseImg;
    this.capturas = capturas;
    this.url = url;
    this.codigoAbierto = codigoAbierto;
    this.inicio = inicio;
    this.termino = termino;
    this.calcularDuracion(inicio, termino);
    this.isReciente = isReciente;
  }


  calcularDuracion(inicio: dayjs.Dayjs, termino: dayjs.Dayjs) {
    if (!termino) {
      termino = dayjs();
    }
    if (termino.date() > 15 && termino.date() <= 31) {
      termino.add(1, 'month');
    }
    this.duracionFecha = termino.diff(inicio, 'months');
  }
}
