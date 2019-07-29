import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Saque} from './saque/saque';
import {Deposito} from './deposito/deposito';
import {Extrato} from './extrato/extrato';
import {Saldo} from './saldo/saldo';
import {Transferencia} from './transferencia/transferencia';
import {Observable} from "rxjs";
import {Autorizacao} from "./autorizacao";

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient) { }

  saque( saque: Saque ) {
    this.http.post(`${environment.apiUrl}/autorizar/saque/`, saque).subscribe();
  }

  deposito( deposito: Deposito ) {
    this.http.post(`${environment.apiUrl}/autorizar/deposito/`, deposito).subscribe();
  }

  transferencia( transferencia: Transferencia ) {
    this.http.post(`${environment.apiUrl}/autorizar/transferencia/`, transferencia).subscribe();
  }

  saldo( saldo: Saldo ): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/saldo/`, saldo);
  }

  extrato( extrato: Extrato ): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/extrato`, extrato);
  }
}
