import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  focus(elemento) {

    let seccion = document.getElementById("tabindex2");
    if (seccion) {
      console.log("ele ", seccion);
      seccion.focus();

    }
  }

}
