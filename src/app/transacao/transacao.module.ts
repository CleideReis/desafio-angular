import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaqueComponent } from './saque/saque.component';
import { DepositoComponent } from './deposito/deposito.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import {TransacaoRoutingModule} from './transacao-routing.module';
import { SaldoComponent } from './saldo/saldo.component';
import { ExtratoComponent } from './extrato/extrato.component';
import {FormsModule} from '@angular/forms';
import {UtilModule} from '../util/util.module';

@NgModule({
  declarations: [SaqueComponent, DepositoComponent, TransferenciaComponent, SaldoComponent, ExtratoComponent],
  imports: [
    CommonModule,
    TransacaoRoutingModule,
    FormsModule,
    UtilModule
  ]
})
export class TransacaoModule { }
