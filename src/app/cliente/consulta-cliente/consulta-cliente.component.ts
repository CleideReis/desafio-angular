import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {
  cliente: Cliente;
  mensagemErro: string;
  showCliente: boolean;

  constructor( private servico: ClienteService) { }

  ngOnInit() {
    this.showCliente = false;
    this.cliente = new Cliente();
  }

  consultaCliente() {
    this.servico.consulta(this.cliente).subscribe(
      (cliente) => {
        this.cliente = cliente;
        this.showCliente = true;
      },
      (error => this.mensagemErro = error.error.mensagem));

    setTimeout(() => {
      this.mensagemErro = undefined;
    }, 2000);
  }
}
