import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token : string | null = '';

  constructor() { }

  setToken(token: string, email :any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('email',email);
    this.token = token;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getEmail():string | null {
    return localStorage.getItem('email');
  }
  clearToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.token = null;
  }
  
}
