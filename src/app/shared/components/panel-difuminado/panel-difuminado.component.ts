import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-difuminado',
  templateUrl: './panel-difuminado.component.html',
  styleUrls: ['./panel-difuminado.component.css'],
  standalone: true
})
export class PanelDifuminadoComponent {
  @Input() isBordeAbajo: boolean = true;
  @Input() isBordeSuperior: boolean = true;
  @Input() opacity: Number = 28;
  @Input() isBordeWeb: boolean = true;
  @Input() isNoMostrarMovil: boolean = false;
  @Input() isNoMostrarWeb: boolean = false;
}
