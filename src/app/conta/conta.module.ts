import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ConsultaContaComponent } from './consulta-conta/consulta-conta.component';
import {ContaRoutingModule} from './conta-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CadastroContaComponent, ConsultaContaComponent],
  imports: [
    CommonModule,
    ContaRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContaModule { }
