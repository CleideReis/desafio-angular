import { Component, OnInit } from '@angular/core';
import {Extrato} from './extrato';
import {Canal} from '../../enuns/canal.enum';
import {TipoTransacao} from '../../enuns/tipo-transacao.enum';
import {TransacaoService} from '../transacao.service';
import * as moment from 'moment';
import {Particao} from './particao';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extrato: Extrato;
  particoes: Particao[];
  showExtrato: boolean;
  mensagemErro: string;

  constructor( private servico: TransacaoService ) { }

  ngOnInit() {
    this.extrato = new Extrato();
    this.showExtrato = false;
    this.extrato.nsuOrigem = 1;
    this.extrato.canal = Canal.EXTRACASH;
    this.extrato.tipo = TipoTransacao.EXTRATO;
  }

  consultarExtrato( ) {
    moment.locale('pt-br');
    const data = moment().format('DD/MM/YYYY');
    const hora = moment().format('hh:mm:ss');
    this.extrato.dataHora = data.toString() + ' ' + hora.toString();
    this.servico.extrato(this.extrato).subscribe(autorizacao => {
      if (autorizacao.estado === 'AUTORIZADA') {
        this.mensagemErro = undefined;
        this.particoes = JSON.parse(autorizacao.particao);
        this.showExtrato = true;
      } else {
        this.mensagemErro = autorizacao.motivoDaNegacao;
      }
    });
  }

}
