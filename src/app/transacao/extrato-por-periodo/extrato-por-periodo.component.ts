import { Component, OnInit } from '@angular/core';
import {Extrato} from "../extrato/extrato";
import {TransacaoService} from "../transacao.service";
import {ComprovanteService} from "../extrato/comprovante.service";
import {Canal} from "../../enuns/canal.enum";
import {TipoTransacao} from "../../enuns/tipo-transacao.enum";
import * as moment from "moment";

@Component({
  selector: 'app-extrato-por-periodo',
  templateUrl: './extrato-por-periodo.component.html',
  styleUrls: ['./extrato-por-periodo.component.css']
})
export class ExtratoPorPeriodoComponent implements OnInit {

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
    this.extrato.tipo = TipoTransacao.EXTRATO_POR_PERIODO;
  }

  consultarExtrato( ) {
    this.mensageShow = true;
    moment.locale('pt-br');
    const data = moment().format('DD/MM/YYYY');
    const hora = moment().format('hh:mm:ss');
    this.extrato.dataHora = data.toString() + ' ' + hora.toString();
    this.servico.extratoPorPeriodo(this.extrato).subscribe(autorizacao => {
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
