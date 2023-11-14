import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownAndUpComponent } from './modules/downAndUp/downAndUp.component';
import { SiderTarjetaModule } from './modules/sider-tarjeta/sider-tarjeta.module';
import { SeccionBModule } from './modules/seccion-b/seccion-b.module';
import { SeccionAModule } from './modules/seccion-a/seccion-a.module';
import { SeccionCModule } from './modules/seccion-c/seccion-c.module';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './modules/footer/footer.component';
import { HabilidadesComponent } from './modules/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent, DownAndUpComponent, NavbarComponent, FooterComponent, HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeccionAModule,
    SiderTarjetaModule,
    SeccionBModule,
    SeccionCModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
