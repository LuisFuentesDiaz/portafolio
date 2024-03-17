import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { right } from '@popperjs/core';

@Component({
  selector: 'app-habilidades-endurance',
  templateUrl: './habilidades-endurance.component.html',
  styleUrls: ['./habilidades-endurance.component.css'],
  standalone: true,
  imports: [NgStyle]
})
export class HabilidadesEnduranceComponent implements OnInit {

  @Input() direccion: string = "none";
  gradient;

  constructor() { }

  ngOnInit() {
  }
}
