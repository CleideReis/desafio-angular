import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
