import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mensagem-feedback',
  templateUrl: './mensagem-feedback.component.html',
  styleUrls: ['./mensagem-feedback.component.css']
})
export class MensagemFeedbackComponent implements OnInit {
  @Input() mensagemErro: string;
  @Input() mensagemSucesso: string;

  constructor() { }

  ngOnInit() {
  }

}
