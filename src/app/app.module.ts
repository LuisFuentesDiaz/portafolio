import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownAndUpComponent } from './modules/downAndUp/downAndUp.component';
import { SiderTarjetaModule } from './modules/sider-tarjeta/sider-tarjeta.module';
import { SeccionBModule } from './modules/seccion-b/seccion-b.module';
import { SeccionAModule } from './modules/seccion-a/seccion-a.module';
import { SeccionCModule } from './modules/seccion-c/seccion-c.module';

@NgModule({
  declarations: [
    AppComponent, DownAndUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeccionAModule,
    SiderTarjetaModule,
    SeccionBModule,
    SeccionCModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
