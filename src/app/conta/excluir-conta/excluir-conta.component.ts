import { Component, OnInit } from '@angular/core';
import {Conta} from '../conta';
import {ContaService} from '../conta.service';
import {error} from "util";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-excluir-conta',
  templateUrl: './excluir-conta.component.html',
  styleUrls: ['./excluir-conta.component.css']
})
export class ExcluirContaComponent implements OnInit {
  conta: Conta;
  mensageShow: boolean;
  mensagemErro: string;
  mensagemSucesso: string;

  constructor( private servico: ContaService) { }

  ngOnInit() {
    this.conta = new Conta();
  }

  remove() {
    this.mensageShow = true;
    this.servico.remove(this.conta).subscribe(
      () => {
        if (this.conta.agencia != null) {
          this.mensagemErro = undefined;
          this.mensagemSucesso = 'Conta cancelada!!';
        }});
    setTimeout(() => {
      this.mensageShow = false;
    }, 3000);
  }
}
