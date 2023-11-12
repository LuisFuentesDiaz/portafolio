import { Component, OnInit } from '@angular/core';
import { TemaWebService } from 'src/app/core/util/temaWeb.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isTemaOscuro: boolean = false;

  constructor(public temaWeb: TemaWebService) { }

  ngOnInit() {
    this.temaWeb.isTemaOscuro.subscribe(e => {
      this.isTemaOscuro = e;
    })
  }

}
