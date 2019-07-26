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
}
