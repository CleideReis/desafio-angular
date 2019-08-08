import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Saque} from './saque/saque';
import {Deposito} from './deposito/deposito';
import {Extrato} from './extrato/extrato';
import {Saldo} from './saldo/saldo';
import {Transferencia} from './transferencia/transferencia';
import {Observable} from 'rxjs';
import {Autorizacao} from './autorizacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient) {
  }

  saque(saque: Saque): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/saque`, saque);
  }

  deposito(deposito: Deposito): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/deposito`, deposito);
  }

  transferencia(transferencia: Transferencia): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/transferencia`, transferencia);
  }

  saldo(saldo: Saldo): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/saldo`, saldo);
  }

  extrato(extrato: Extrato): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/extrato`, extrato);
  }

  extratoPorPeriodo(extrato: Extrato): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizar/extrato-por-periodo`, extrato);
  }
}
