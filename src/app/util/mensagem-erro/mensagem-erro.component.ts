import {Component, Input, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-mensagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.css']
})
export class MensagemErroComponent implements OnInit {

  @Input('model') ngModel: NgModel;

  constructor() { }

  ngOnInit() {
  }

}
