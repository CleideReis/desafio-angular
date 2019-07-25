import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaqueComponent } from './saque/saque.component';
import { DepositoComponent } from './deposito/deposito.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import {TransacaoRoutingModule} from './transacao-routing.module';

@NgModule({
  declarations: [SaqueComponent, DepositoComponent, TransferenciaComponent],
  imports: [
    CommonModule,
    TransacaoRoutingModule
  ]
})
export class TransacaoModule { }
