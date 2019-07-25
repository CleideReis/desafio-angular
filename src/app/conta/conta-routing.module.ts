import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroContaComponent} from './cadastro-conta/cadastro-conta.component';
import {ConsultaContaComponent} from './consulta-conta/consulta-conta.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroContaComponent},
  {path: 'consulta', component: ConsultaContaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule {

}
