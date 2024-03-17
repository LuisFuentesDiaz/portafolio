/// <reference types="@angular/localize" />

import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import Routes from './app/app-routes'; import { importProvidersFrom } from '@angular/core';
'./app/app-routes'


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(Routes),
    importProvidersFrom([BrowserModule]),

  ]
})
  .catch(err => console.error(err));
