import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionBModule } from './modules/seccion-b/seccion-b.module';
import { SeccionAModule } from './modules/seccion-a/seccion-a.module';
import { SeccionCModule } from './modules/seccion-c/seccion-c.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './modules/footer/footer.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SeccionDModule } from './modules/seccion-d/seccion-d.module';
import { SeccionEModule } from './modules/seccion-e/seccion-e.module';
import { DetalleProyectoComponent } from './modules/detalle-proyecto/detalle-proyecto.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, DetalleProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    NgbModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
