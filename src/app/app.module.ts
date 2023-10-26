import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoCabeceraComponent } from './components/info-cabecera/info-cabecera.component';
import { SharedModule } from './shared/shared.module';
import { HabilidadesCabeceraComponent } from './components/habilidades-cabecera/habilidades-cabecera.component';
import { ContactoTarjetaComponent } from './components/contacto-tarjeta/contacto-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCabeceraComponent,
    HabilidadesCabeceraComponent,
    ContactoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
