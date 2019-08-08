import {Component, OnInit} from '@angular/core';
import {Extrato} from './extrato';
import {Canal} from '../../enuns/canal.enum';
import {TipoTransacao} from '../../enuns/tipo-transacao.enum';
import {TransacaoService} from '../transacao.service';
import * as moment from 'moment';
import {Particao} from './particao';
import {ComprovanteService} from "./comprovante.service";


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
  mensageShow: boolean;

  constructor(private servico: TransacaoService, private comprovanteService: ComprovanteService) {
  }

  ngOnInit() {
    this.extrato = new Extrato();
    this.showExtrato = false;
    this.extrato.nsuOrigem = 1;
    this.extrato.canal = Canal.EXTRACASH;
    this.extrato.tipo = TipoTransacao.EXTRATO;

    this.comprovanteService.notificacao.subscribe((notificacao) => this.particoes = notificacao);
  }

}
