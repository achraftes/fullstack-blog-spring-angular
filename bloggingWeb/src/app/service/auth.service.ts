import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL ='http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(BASIC_URL +`api/auth/register`, user , { withCredentials: true });
  }

  login(user: any): Observable<any> {
    return this.http.post(BASIC_URL +`api/auth/login`, user);
  }
}
