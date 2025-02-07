import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/auth/register', user, { withCredentials: true });
  }

  login(user: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/auth/login', user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
