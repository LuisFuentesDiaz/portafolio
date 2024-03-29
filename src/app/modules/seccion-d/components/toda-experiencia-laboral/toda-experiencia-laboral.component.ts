import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/core/models';
import { ExperienciaLaboralDataService } from 'src/app/core/services';
import { ExperienciaLaboralComponent } from '../experiencia-laboral/experiencia-laboral.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-toda-experiencia-laboral',
  templateUrl: './toda-experiencia-laboral.component.html',
  styleUrls: ['./toda-experiencia-laboral.component.css'],
  standalone: true,
  imports: [NgFor, ExperienciaLaboralComponent]
})
export class TodaExperienciaLaboralComponent implements OnInit {
  experiencias: Experiencia[];
  constructor(private experienciaService: ExperienciaLaboralDataService) { }

  ngOnInit() {
    this.experiencias = this.experienciaService.getExperiencias();
  }
}
