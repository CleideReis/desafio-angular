import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import {ClienteRoutingModule} from './cliente-routing.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ClienteService} from './cliente.service';
import {ReactiveFormsModule} from '@angular/forms';
import {UtilModule} from '../util/util.module';
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [CadastroClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UtilModule,
    NgxMaskModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
