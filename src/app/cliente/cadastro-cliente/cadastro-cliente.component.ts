import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClienteService} from "../cliente.service";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      cpf: this.formBuilder.control('')
    });
  }

  cadastra() {
    this.clienteService.cadastra(this.formulario.value).subscribe(() => console.log('Criou a merda'));
  }
}
