import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  
  patients:any[]=[]
  
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/patient').subscribe(
      (response:any) =>  {
        console.log('patients', response.data)
        return this.patients = response.data
      },
      error => console.error('Error occurred:', error)
    );
  }
  
  };