import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {TransacaoService} from '../transacao.service';
import {Saque} from './saque';
import {Canal} from '../../enuns/canal.enum';
import {TipoTransacao} from '../../enuns/tipo-transacao.enum';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  saqueEmConta: Saque;

  constructor( private servico: TransacaoService ) { }

  ngOnInit() {
    this.saqueEmConta = new Saque();
    this.saqueEmConta.nsuOrigem = 1;
    this.saqueEmConta.canal = Canal.EXTRACASH;
    this.saqueEmConta.tipo = TipoTransacao.SAQUE;
  }

  saque( ) {
    moment.locale('pt-br');
    const data = moment().format('DD/MM/YYYY');
    const hora = moment().format('hh:mm:ss');
    this.saqueEmConta.dataHora = data.toString() + ' ' + hora.toString();
    this.servico.saque(this.saqueEmConta);
    console.log('Efetuou o saque');
  }

}
