import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-separador',
  templateUrl: './separador.component.html',
  styleUrls: ['./separador.component.css']
})
export class SeparadorComponent implements OnInit {

  @Input() height = 20;

  constructor() { }

  ngOnInit() {
  }

}
