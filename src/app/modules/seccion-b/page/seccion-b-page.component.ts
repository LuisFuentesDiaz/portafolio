import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-b-page',
  templateUrl: './seccion-b-page.component.html',
  styleUrls: ['./seccion-b-page.component.css']
})
export class SeccionBPageComponent implements OnInit {
  screenWidth: any;
  widthSeccion = "80";
  heigthArticulo = "45";
  constructor() { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 400) {
      this.widthSeccion = "100";
      this.heigthArticulo = "70";
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 400) {
      console.log("menor");

      this.widthSeccion = "100";
      this.heigthArticulo = "80";
    } else {
      console.log("no");

      this.widthSeccion = "80";
      this.heigthArticulo = "45";
    }
  }

}
