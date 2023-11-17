import { Component } from '@angular/core';

@Component({
  selector: 'app-info-cabecera',
  templateUrl: './info-cabecera.component.html',
  styleUrls: ['./info-cabecera.component.css']
})
export class InfoCabeceraComponent {

  urlFotoPersonal: String = "assets/personalFoto.jpg";

  descargarImagen(): void {
    console.log("aa");

    const rutaImagen = 'assets/gmail.png'; // Ruta a la imagen en tu proyecto Angular
    const nombreArchivo = 'gmail.png';

    const enlace = document.createElement('a');
    enlace.href = rutaImagen;
    enlace.download = nombreArchivo;
    enlace.click();
  }
}
