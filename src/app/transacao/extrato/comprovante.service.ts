import {EventEmitter, Injectable} from '@angular/core';
import {Particao} from "./particao";

@Injectable({
  providedIn: 'root'
})
export class ComprovanteService {

  notificacao = new EventEmitter<Particao[]>();

  constructor() {
  }

  notificar(particoes: Particao[]) {
    this.notificacao.emit(particoes);
  }
}
