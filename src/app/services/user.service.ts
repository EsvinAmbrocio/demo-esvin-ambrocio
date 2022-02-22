import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import { UserResponse} from "../models/userResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

  getPerfilUser():Observable<UserResponse>
  {
    const form:FormData = new FormData;
    form.append('credenciales', '{ "USUARIO": "3", "token": "d7403066713e9d99bcc97a8db69bfb67" }');
    return this.http.post<UserResponse>('https://sistema.tutto.gt/public/api/perfil', form)
  }

}
