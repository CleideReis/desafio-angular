import { Component, OnInit } from '@angular/core';
import {Transferencia} from './transferencia';
import {Canal} from '../../enuns/canal.enum';
import {TipoTransacao} from '../../enuns/tipo-transacao.enum';
import {TransacaoService} from '../transacao.service';
import * as moment from 'moment';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  transferencia: Transferencia;
  mensagemErro: string;
  mensagemSucesso: string;
  mensageShow: boolean;

  constructor( private servico: TransacaoService ) { }

  ngOnInit() {
    this.transferencia = new Transferencia();
    this.transferencia.nsuOrigem = 1;
    this.transferencia.canal = Canal.EXTRACASH;
    this.transferencia.tipo = TipoTransacao.TRANSFERENCIA;
  }

  transferir( ) {
    this.mensageShow = true;
    moment.locale('pt-br');
    const data = moment().format('DD/MM/YYYY');
    const hora = moment().format('hh:mm:ss');
    this.transferencia.dataHora = data.toString() + ' ' + hora.toString();
    this.servico.transferencia( this.transferencia).subscribe(autorizacao => {
      if (autorizacao.estado === 'AUTORIZADA') {
        this.mensagemErro = undefined;
        this.mensagemSucesso = 'Transferência Autorizada!';
      } else {
        this.mensagemErro = autorizacao.motivoDaNegacao;
        this.mensagemSucesso = undefined;
      }
    });
    setTimeout(() => {
      this.mensageShow = false;
    }, 3000);
  }

}
