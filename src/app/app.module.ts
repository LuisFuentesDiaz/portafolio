import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DatoSiderModule } from './modules/datos-sider/datos-sider.module';
import { ContactoSiderComponent } from './modules/contacto-sider/contacto-sider.component';
import { PrimeraSeccionModule } from './modules/seccion-uno/primera-seccion.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactoSiderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DatoSiderModule,
    PrimeraSeccionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
