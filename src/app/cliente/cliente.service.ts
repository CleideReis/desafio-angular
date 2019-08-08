import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from './cliente';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  cadastra(cliente: Cliente): Observable<any> {
    return this.http.post(`${environment.apiUrl}/cliente/cadastra`, cliente);
  }

  consulta(cliente: Cliente): Observable<Cliente> {
    const cpf = cliente.cpf;
    return this.http.get<Cliente>(`${environment.apiUrl}/cliente/consulta/${cpf}`);
  }
}
