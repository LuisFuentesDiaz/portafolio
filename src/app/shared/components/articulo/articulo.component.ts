import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnChanges {
  @Input() id: any;
  @Input() Width: String = "90";
  @Input() bGColor: string = "transparent";
  @Input() bGImage: string = "transparent";
  @Input() heigth: string = "100";


  ngAfterViewInit(): void {
    if (this.id) {
      let articulo = document.getElementById("articulo" + this.id)?.style;
      if (articulo) {
        console.log("wid " + this.bGImage);
        articulo.width = `${this.Width}%`;
        articulo.backgroundColor = this.bGColor;

        articulo.backgroundImage = this.bGImage;
        articulo.height = `${this.heigth}vh`;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id) {
      let articulo = document.getElementById("articulo" + this.id)?.style;
      if (articulo) {
        console.log("cambiooo");

        if ('heigth' in changes) {
          console.log("siiiiiheight");
          articulo.height = changes['heigth'].currentValue + "vh";

        }
        if ('width' in changes) {
          console.log("siiiiiwidth", changes['width']);
          articulo.width = changes['width'].currentValue + "%";

        }
        if ('maxWidth' in changes) {
          console.log("siiiiimaxWidth");
          articulo.maxWidth = changes['maxWidth'].currentValue + "%";
        }
        if ('bGColor' in changes) {
          console.log("siiiiimaxWidth");
          articulo.backgroundColor = changes['bGColor'].currentValue + "%";
        }
      }
    }
  }
}
