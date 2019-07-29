import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroContaComponent} from './cadastro-conta/cadastro-conta.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroContaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule {

}
