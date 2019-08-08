import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaqueComponent} from './saque/saque.component';
import {DepositoComponent} from './deposito/deposito.component';
import {TransferenciaComponent} from './transferencia/transferencia.component';
import {SaldoComponent} from './saldo/saldo.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {ExtratoTodosLancamentosComponent} from "./extrato-todos-lancamentos/extrato-todos-lancamentos.component";
import {ExtratoPorPeriodoComponent} from "./extrato-por-periodo/extrato-por-periodo.component";

const routes: Routes = [
  {path: 'saque', component: SaqueComponent},
  {path: 'deposito', component: DepositoComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'saldo', component: SaldoComponent},
  {
    path: 'extrato', component: ExtratoComponent, children: [
      {path: 'todos-lancamentos', component: ExtratoTodosLancamentosComponent},
      {path: 'por-periodo', component: ExtratoPorPeriodoComponent},
      {path: '', redirectTo: 'todos-lancamentos', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacaoRoutingModule {

}
