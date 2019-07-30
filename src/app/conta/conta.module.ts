import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import {ContaRoutingModule} from './conta-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ContaService} from './conta.service';
import {UtilModule} from "../util/util.module";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [CadastroContaComponent],
  imports: [
    CommonModule,
    ContaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule,
    NgxMaskModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
