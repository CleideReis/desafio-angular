import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ConsultaContaComponent } from './consulta-conta/consulta-conta.component';
import {ContaRoutingModule} from './conta-routing.module';

@NgModule({
  declarations: [CadastroContaComponent, ConsultaContaComponent],
  imports: [
    CommonModule,
    ContaRoutingModule
  ]
})
export class ContaModule { }
