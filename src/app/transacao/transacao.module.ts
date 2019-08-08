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
import { ExtratoTodosLancamentosComponent } from './extrato-todos-lancamentos/extrato-todos-lancamentos.component';
import { ExtratoPorPeriodoComponent } from './extrato-por-periodo/extrato-por-periodo.component';
import {ComprovanteService} from "./extrato/comprovante.service";

@NgModule({
  declarations: [SaqueComponent, DepositoComponent, TransferenciaComponent, SaldoComponent, ExtratoComponent, ExtratoTodosLancamentosComponent, ExtratoPorPeriodoComponent],
  imports: [
    CommonModule,
    TransacaoRoutingModule,
    FormsModule,
    UtilModule
  ],
  providers: [
    ComprovanteService
  ]
})
export class TransacaoModule { }
