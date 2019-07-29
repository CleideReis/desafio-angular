import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContaService} from '../conta.service';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {

  formulario: FormGroup;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private formBuilder: FormBuilder, private contaService: ContaService) {
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      agencia: this.formBuilder.control('', Validators.required),
      cpfTitular: this.formBuilder.control('', Validators.required),
      tipoDoPacoteDeServicos: this.formBuilder.control('', Validators.required)
    });
  }

  cadastra() {
    this.contaService.cadastra(this.formulario.value).subscribe(
      () => {
        this.mensagemSucesso = 'Conta cadastrada com sucesso!';
        this.mensagemErro = undefined;
      },
      erro => {
        this.mensagemErro = erro.error.mensagem;
        this.mensagemSucesso = undefined;
      });
  }
}
