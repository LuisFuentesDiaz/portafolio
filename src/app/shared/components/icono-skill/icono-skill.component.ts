import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icono-skill',
  templateUrl: './icono-skill.component.html',
  styleUrls: ['./icono-skill.component.css']
})
export class IconoSkillComponent implements OnInit {
  @Input() nombre: string = "";
  @Input() ancho: Number = 150;
  @Input() largo: Number = 150;

  constructor() { }

  ngOnInit() {

    console.log("aaaaaaaaaa ", this.nombre, this.ancho, this.largo);


  }

}
