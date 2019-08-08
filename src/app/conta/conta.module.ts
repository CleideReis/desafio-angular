import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import {ContaRoutingModule} from './conta-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ContaService} from './conta.service';
import {UtilModule} from "../util/util.module";
import {NgxMaskModule} from "ngx-mask";
import { ExcluirContaComponent } from './excluir-conta/excluir-conta.component';

@NgModule({
  declarations: [CadastroContaComponent, ExcluirContaComponent],
  imports: [
    CommonModule,
    ContaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule,
    NgxMaskModule,
    FormsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
