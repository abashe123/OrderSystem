import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token: string): void {
    this.set(token);

  } 

  set(token: string): void {
    localStorage.setItem('token',token);
  }
}
