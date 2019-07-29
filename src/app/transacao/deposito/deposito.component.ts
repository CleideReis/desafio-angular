import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {TransacaoService} from '../transacao.service';
import {Deposito} from './deposito';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  depositoEmConta: Deposito;

  constructor( private servico: TransacaoService ) { }

  ngOnInit() {
    this.depositoEmConta = new Deposito();
    this.depositoEmConta.nsuOrigem = 1;
    this.depositoEmConta.canal = 'EXTRACASH';
    this.depositoEmConta.tipo = 'DEPOSITO';
  }

  deposito( ) {
    moment.locale('pt-br');
    const data = moment().format('DD/MM/YYYY');
    const hora = moment().format('hh:mm:ss');
    this.depositoEmConta.dataHora = data.toString() + ' ' + hora.toString();
    this.servico.deposito(this.depositoEmConta);
    console.log('Efetuou o depósito');
  }

}
