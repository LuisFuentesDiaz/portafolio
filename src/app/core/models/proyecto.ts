export class Proyecto {
  nombre: string;
  dependiente: boolean;
  consultora: string;
  empresa: string;
  tecnologias: string[];
  informacion: string;
  urlBaseImg: string;
  capturas: string[];
  url: string;
  codigoAbierto: boolean;

  constructor(nombre: string, dependiente: boolean, consultora: string, empresa: string, tecnologias: string[], informacion: string,
    urlBaseImg: string, capturas: string[], url: string, codigoAbierto: boolean) {
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

  }
}
