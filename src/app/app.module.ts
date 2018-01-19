import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonComponent } from './core/button/button.component';
import { NavbarComponent } from './core/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
