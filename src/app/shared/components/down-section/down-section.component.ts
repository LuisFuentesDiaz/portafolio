import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-section',
  templateUrl: './down-section.component.html',
  styleUrls: ['./down-section.component.css']
})
export class DownSectionComponent implements OnInit {

  @Input() down: string = "";
  esVisible: boolean = false;
  tab: string[] = ["tabindex1", "tabindex2", "tabindex3"];
  indexActual = 0;

  ngOnInit(): void {
    this.esVisible = true;
  }

  downScroll(): void {
    console.log("doww");
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
