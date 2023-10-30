import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements AfterViewInit {

  @Input() id: any;
  @Input() height: string = "100";
  @Input() width: string = "100";
  @Input() maxWidth: string = "1100";


  ngAfterViewInit(): void {
    if (this.id) {
      let seccion = document.getElementById("seccion" + this.id)?.style;
      if (seccion) {
        seccion.height = this.height + "%";
        seccion.width = this.width + "%";
        seccion.maxWidth = this.maxWidth + "px";

      }
    }
  }
}
