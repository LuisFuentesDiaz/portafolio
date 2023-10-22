import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconoSkillComponent } from './components/icono-skill/icono-skill.component';



@NgModule({
  declarations: [IconoSkillComponent],
  imports: [
    CommonModule
  ],
  exports: [IconoSkillComponent]
})
export class SharedModule { }
