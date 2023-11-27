import { Component, Input } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';

@Component({
  selector: 'app-info-cabecera',
  templateUrl: './info-cabecera.component.html',
  styleUrls: ['./info-cabecera.component.css']
})
export class InfoCabeceraComponent {
  @Input() isMovil: boolean = false;
  Habilidad = TG;
  urlFotoPersonal: String = "assets/personalFoto.jpg";

  descargarImagen(): void {
    const rutaImagen = 'assets/gmail.png'; // Ruta a la imagen en tu proyecto Angular
    const nombreArchivo = 'gmail.png';

    const enlace = document.createElement('a');
    enlace.href = rutaImagen;
    enlace.download = nombreArchivo;
    enlace.click();
  }
}
