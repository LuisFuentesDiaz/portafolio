import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraSeccionModule } from './modules/seccion-a/primera-seccion.module';
import { DownAndUpComponent } from './modules/downAndUp/downAndUp.component';
import { SiderTarjetaModule } from './modules/sider-tarjeta/sider-tarjeta.module';

@NgModule({
    declarations: [
        AppComponent, DownAndUpComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PrimeraSeccionModule,
        SiderTarjetaModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
