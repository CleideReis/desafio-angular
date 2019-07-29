import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  formulario: FormGroup;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      cpf: this.formBuilder.control('')
    });
  }

  cadastra() {
    this.clienteService.cadastra(this.formulario.value).subscribe(
      () => {
        this.mensagemSucesso = 'Cliente cadastrado com sucesso!';
        this.mensagemErro = undefined;
      },
      erro => {
        this.mensagemErro = erro.error.mensagem;
        this.mensagemSucesso = undefined;
      });
  }
}
