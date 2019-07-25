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
}
