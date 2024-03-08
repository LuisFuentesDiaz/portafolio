import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SeccionAModule } from '../seccion-a/seccion-a.module';
import { SeccionBModule } from '../seccion-b/seccion-b.module';
import { SeccionCModule } from '../seccion-c/seccion-c.module';
import { SeccionDModule } from '../seccion-d/seccion-d.module';
import { SeccionEModule } from '../seccion-e/seccion-e.module';
import { CvComponent } from '../cv/cv.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SeccionAModule, SeccionBModule, SeccionCModule, SeccionDModule, SeccionEModule, SharedModule

  ],
  declarations: [HomeComponent, CvComponent]
})
export class HomeModule { }
