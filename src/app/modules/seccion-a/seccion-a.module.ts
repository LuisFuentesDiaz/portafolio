import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SeccionAPageComponent } from './page/seccion-a-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule
  ],
  declarations: [SeccionAPageComponent],
  exports: [SeccionAPageComponent]
})
export class SeccionAModule { }
