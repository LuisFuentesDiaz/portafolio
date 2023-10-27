import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoCabeceraComponent } from './modules/info-cabecera/info-cabecera.component';
import { SharedModule } from './shared/shared.module';
import { HabilidadesCabeceraComponent } from './modules/habilidades-cabecera/habilidades-cabecera.component';
import { DatoSiderModule } from './modules/datos-sider/datos-sider.module';
import { ContactoSiderComponent } from './modules/contacto-sider/contacto-sider.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCabeceraComponent,
    HabilidadesCabeceraComponent,
    ContactoSiderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DatoSiderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
