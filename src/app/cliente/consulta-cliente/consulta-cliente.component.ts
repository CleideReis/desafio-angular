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
  mensageShow: boolean;
  mensagemErro: string;
  showCliente: boolean;

  constructor( private servico: ClienteService) { }

  ngOnInit() {
    this.showCliente = false;
    this.cliente = new Cliente();
  }

  consultaCliente() {
    this.mensageShow = true;

    this.servico.consulta(this.cliente).subscribe(
      () => {
        if (this.cliente.cpf != null) {
          this.mensagemErro = undefined;
          console.log(this.cliente);
          this.showCliente = true;
        }});

    setTimeout(() => {
      this.mensageShow = false;
    }, 2000);
  }
}
