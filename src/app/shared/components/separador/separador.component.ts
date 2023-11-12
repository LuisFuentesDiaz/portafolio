import { Component, OnInit, Input } from '@angular/core';
import { TemaWebService } from 'src/app/core/util/temaWeb.service';

@Component({
  selector: 'app-separador',
  templateUrl: './separador.component.html',
  styleUrls: ['./separador.component.css']
})
export class SeparadorComponent implements OnInit {

  @Input() height = 20;
  @Input() width = 20;
  isTemaOscuro: boolean = false;

  constructor(public temaWeb: TemaWebService) { }

  ngOnInit() {
    this.temaWeb.isTemaOscuro.subscribe(e => {
      this.isTemaOscuro = e;
    })
  }
}
