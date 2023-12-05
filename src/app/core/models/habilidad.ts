export class Habilidad {
  nombre: string;
  id: string
  alt: string;
  ruta: string;
  width: string;
  height: string;

  constructor(nombre: string, alt: string) {
    this.nombre = nombre;
    this.alt = alt;
    this.ruta = `assets/${nombre}`;
    this.width = "50";
    this.height = "50";
    this.id = alt.replaceAll(" ", "");
  }

  public getRuta(): String {
    return this.ruta;
  }

  public getWidth(): string {
    return this.width;
  }

  public getHeight(): string {
    return this.height;
  }
}





