import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.API}/register`, data);
  }
}