import { Component, OnInit } from '@angular/core';
import { TG } from 'src/app/core/const/tipos-habilidades';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades = TG;
  constructor() { }

  ngOnInit() {
  }

}
