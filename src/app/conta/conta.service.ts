import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Conta} from './conta';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  cadastra(conta: Conta): Observable<any> {
    return this.http.post(`${environment.apiUrl}/conta/cadastra`, conta);
  }

  remove(conta: Conta): Observable<any> {
    const agencia = conta.agencia;
    const numero = conta.numero;
    return  this.http.delete(`${environment.apiUrl}/conta/remove/${agencia}/${numero}`);
  }
}
