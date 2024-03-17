import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel-difuminado',
  templateUrl: './panel-difuminado.component.html',
  styleUrls: ['./panel-difuminado.component.css'],
  standalone: true
})
export class PanelDifuminadoComponent {
  @Input() isBordeAbajo: boolean = true;
  @Input() isBordeSuperior: boolean = true;
}
