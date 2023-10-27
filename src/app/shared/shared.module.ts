import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconoSkillComponent } from './components/icono-skill/icono-skill.component';
import { DownSectionComponent } from './components/down-section/down-section.component';
import { SiderTarjetaComponent } from './components/sider-tarjeta/sider-tarjeta.component';



@NgModule({
  declarations: [IconoSkillComponent, DownSectionComponent, SiderTarjetaComponent],
  imports: [
    CommonModule
  ],
  exports: [IconoSkillComponent, DownSectionComponent, SiderTarjetaComponent]
})
export class SharedModule { }
