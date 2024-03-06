import { Habilidad } from "./habilidad";
import * as dayjs from 'dayjs';

export class Proyecto {
  id: number;
  nombre: string;
  dependiente: boolean;
  consultora: string;
  empresa: string;
  tecnologias: Habilidad[];
  informacion: string;
  urlBaseImg: string;
  capturas: string[];
  imgPreview: string;
  url: string;
  codigoAbierto: any;
  inicio: dayjs.Dayjs;
  termino: dayjs.Dayjs;
  duracionFecha: Number;
  isReciente: boolean;
  extension: string;

  constructor(id: number, nombre: string, dependiente: boolean, consultora: string, empresa: string, tecnologias: Habilidad[], informacion: string,
    urlBaseImg: string, capturas: string[], imgPreview: string, url: string, codigoAbierto: any, inicio: dayjs.Dayjs, termino: dayjs.Dayjs, isReciente: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.dependiente = dependiente;
    this.consultora = consultora;
    this.empresa = empresa;
    this.tecnologias = tecnologias;
    this.informacion = informacion;
    this.urlBaseImg = urlBaseImg;
    this.capturas = capturas;
    this.imgPreview = imgPreview;
    this.url = url;
    this.codigoAbierto = codigoAbierto;
    this.inicio = inicio;
    this.termino = termino;
    this.calcularDuracion(inicio, termino);
    this.isReciente = isReciente;
    this.extension = ".jpg";
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
