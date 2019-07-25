import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BemVindoComponent} from './bem-vindo/bem-vindo.component';

const routes: Routes = [
  {path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule'},
  {path: 'conta', loadChildren: './conta/conta.module#ContaModule'},
  {path: 'transacao', loadChildren: './transacao/transacao.module#TransacaoModule'},
  {path: 'bem-vindo', component: BemVindoComponent},
  {path: '', redirectTo: 'bem-vindo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
