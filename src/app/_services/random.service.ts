import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RandomService {
 // private baseURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  register(data: any){
    return this.http.post('http://127.0.0.1:8000/api/testurl', data)
  }

  login(data: any){
    return this.http.post('http://127.0.0.1:8000/api/login', data)
  }
}
