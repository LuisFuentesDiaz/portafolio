import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements AfterViewInit {

  @Input() id: any;
  @Input() height: string = "60";

  ngAfterViewInit(): void {
    if (this.id) {
      let seccion = document.getElementById("seccion" + this.id)?.style;
      if (seccion) {
        seccion.height = this.height + "%";
      }
    }
  }
}
