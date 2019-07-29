import { Component, OnInit } from '@angular/core';
import {Saldo} from './saldo';
import {Canal} from '../../enuns/canal.enum';
import {TipoTransacao} from '../../enuns/tipo-transacao.enum';
import {TransacaoService} from '../transacao.service';
import * as moment from 'moment';


@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  saldo: Saldo;
  resposta: object;
  showSaldo: boolean;

  constructor( private servico: TransacaoService ) { }

  ngOnInit() {
    this.showSaldo = false;
    this.saldo = new Saldo();
    this.saldo.nsuOrigem = 1;
    this.saldo.canal = Canal.EXTRACASH;
    this.saldo.tipo = TipoTransacao.SALDO;
  }

  consultarSaldo( ) {
    moment.locale('pt-br');
    const data = moment().format('DD/MM/YYYY');
    const hora = moment().format('hh:mm:ss');
    this.saldo.dataHora = data.toString() + ' ' + hora.toString();
    this.servico.saldo(this.saldo).subscribe(autorizacao => {
      this.resposta = JSON.parse(autorizacao.particao);
      this.showSaldo = true;
    });
  }

}
