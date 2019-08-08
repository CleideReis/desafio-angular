import { Component, OnInit } from '@angular/core';
import {Extrato} from "../extrato/extrato";
import {Particao} from "../extrato/particao";
import {TransacaoService} from "../transacao.service";
import {Canal} from "../../enuns/canal.enum";
import {TipoTransacao} from "../../enuns/tipo-transacao.enum";
import * as moment from "moment";
import {ComprovanteService} from "../extrato/comprovante.service";

@Component({
  selector: 'app-extrato-todos-lancamentos',
  templateUrl: './extrato-todos-lancamentos.component.html',
  styleUrls: ['./extrato-todos-lancamentos.component.css']
})
export class ExtratoTodosLancamentosComponent implements OnInit {

  extrato: Extrato;
  showExtrato: boolean;
  mensagemErro: string;
  mensageShow: boolean;

  constructor( private servico: TransacaoService, private comprovanteService: ComprovanteService) { }

  ngOnInit() {
    this.extrato = new Extrato();
    this.showExtrato = false;
    this.extrato.nsuOrigem = 1;
    this.extrato.canal = Canal.EXTRACASH;
    this.extrato.tipo = TipoTransacao.EXTRATO;
  }

  consultarExtrato( ) {
    this.mensageShow = true;
    moment.locale('pt-br');
    const data = moment().format('DD/MM/YYYY');
    const hora = moment().format('hh:mm:ss');
    this.extrato.dataHora = data.toString() + ' ' + hora.toString();
    this.servico.extrato(this.extrato).subscribe(autorizacao => {
      if (autorizacao.estado === 'AUTORIZADA') {
        this.mensagemErro = undefined;
        this.comprovanteService.notificar(JSON.parse(autorizacao.particao));
      } else {
        this.mensagemErro = autorizacao.motivoDaNegacao;
      }
    });
    setTimeout(() => {
      this.mensageShow = false;
    }, 3000);
  }

}
