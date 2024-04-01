import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { EstrellasComponent } from './shared/components/estrellas/estrellas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HomeComponent, NavbarComponent, FooterComponent, EstrellasComponent]
})
export class AppComponent implements OnInit {

  isTemaOscuro: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
