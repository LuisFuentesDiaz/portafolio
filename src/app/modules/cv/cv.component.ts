import { Component } from '@angular/core';
import { HabilidadesEnduranceComponent } from 'src/app/shared/components/habilidades-endurance/habilidades-endurance.component';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone: true,
  imports: [HabilidadesEnduranceComponent]
})
export class CvComponent {

  constructor() { }

}
