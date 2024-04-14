import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { EstrellasComponent } from './shared/components/estrellas/estrellas.component';
import { EstrellaFugazComponent } from './shared/components/estrella-fugaz/estrella-fugaz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HomeComponent, NavbarComponent, FooterComponent, EstrellasComponent, EstrellaFugazComponent]
})
export class AppComponent implements OnInit {

  isTemaOscuro: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
