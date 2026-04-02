import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.api}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.api}/register`, data);
  }

  getBalance() {
    return this.http.get(`${this.api}/balance`);
  }

  createBet(data: any) {
    return this.http.post(`${this.api}/bet`, data);
  }

  draw() {
    return this.http.post(`${this.api}/draw`, {});
  }
}
