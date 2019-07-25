import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BemVindoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
