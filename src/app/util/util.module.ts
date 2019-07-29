import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MensagemErroComponent} from './mensagem-erro/mensagem-erro.component';
import { MensagemFeedbackComponent } from './mensagem-feedback/mensagem-feedback.component';

@NgModule({
  declarations: [MensagemErroComponent, MensagemFeedbackComponent],
  imports: [
    CommonModule
  ],
  exports: [MensagemErroComponent, MensagemFeedbackComponent]
})
export class UtilModule { }
