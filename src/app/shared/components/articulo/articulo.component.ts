import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {


  @Input() id: any;
  @Input() Width: String = "90";
  @Input() bGColor: string = "transparent";
  @Input() heigth: string = "100";


  ngAfterViewInit(): void {
    if (this.id) {
      let articulo = document.getElementById("articulo" + this.id)?.style;
      if (articulo) {
        console.log("wid " + this.Width);

        articulo.width = `${this.Width}%`;
        articulo.backgroundColor = this.bGColor;
        articulo.height = `${this.heigth}vh`;
      }
    }
  }
}
