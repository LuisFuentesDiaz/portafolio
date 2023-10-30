import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-downAndUp',
  templateUrl: './downAndUp.component.html',
  styleUrls: ['./downAndUp.component.css']
})
export class DownAndUpComponent implements OnInit {

  @Input() down: string = "";
  esVisible: boolean = false;
  tab: string[] = ["tabindex1", "tabindex2", "tabindex3"];
  indexActual = 0;

  ngOnInit(): void {
    this.esVisible = true;
  }

  downScroll(): void {
    let elemento;
    if ((this.indexActual + 1) <= this.tab.length) {
      elemento = document.getElementById(this.tab[this.indexActual + 1]);
    }
    if (elemento) {
      elemento.focus();
      elemento.scrollIntoView({ behavior: "smooth" });
      this.indexActual++;
    }
  }

  upScroll(): void {
    let elemento;
    if ((this.indexActual - 1) >= 0) {
      elemento = document.getElementById(this.tab[this.indexActual - 1]);
    }
    if (elemento) {
      elemento.focus();
      elemento.scrollIntoView({ behavior: "smooth" });
      this.indexActual--;
    }
  }
}
