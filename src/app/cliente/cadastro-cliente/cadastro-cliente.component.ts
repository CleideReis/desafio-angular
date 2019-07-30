import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  mensageShow: boolean;
  formulario: FormGroup;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit() {
    this.mensageShow = false;
    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      cpf: this.formBuilder.control('')
    });
  }

  cadastra() {
    this.mensageShow = true;
    this.clienteService.cadastra(this.formulario.value).subscribe(
      () => {
        this.mensagemSucesso = 'Cliente cadastrado com sucesso!';
        this.mensagemErro = undefined;
      },
      erro => {
        this.mensagemErro = erro.error.mensagem;
        this.mensagemSucesso = undefined;
      });

    setTimeout(() => {
        this.mensageShow = false;
      }, 3000);
  }
}
