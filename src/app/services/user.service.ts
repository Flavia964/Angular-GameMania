import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // requisições assíncronas
import { User } from '../models/user'; // import do user model

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    //Injecão de depência do módulo HttpClient
    private httpClient: HttpClient
  ) { }


  urlLogin = "http://http://localhost:4200/login";
  // Post de login - insomnia
  logsrUsuario(usuario: User): Observable<any> {

    

    return this.httpClient.post( this.urlLogin, JSON.stringify(usuario), {
      headers: new HttpHeaders ({"Content-Type": "application/json"}),
      observe: 'response'
    })
  }
}
