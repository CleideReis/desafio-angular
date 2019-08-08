import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroContaComponent} from './cadastro-conta/cadastro-conta.component';
import {ExcluirContaComponent} from './excluir-conta/excluir-conta.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroContaComponent},
  {path: 'cancela', component: ExcluirContaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule {

}
