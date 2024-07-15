import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  patients: any[] = [];
  searchQuery: string = '';
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    this.http.get('http://127.0.0.1:8000/api/patient', { headers }).subscribe(
      (response: any) => {
        console.log('patients', response.data);
        this.patients = response.data;
      },
      error => console.error('Error occurred:', error)
    );
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });

      this.http.get(`http://127.0.0.1:8000/api/patient/search`, { headers, params: { q: this.searchQuery } }).subscribe(
        (response: any) => {
          console.log('search results', response.data);
          this.patients = response.data;
        },
        error => console.error('Error occurred during search:', error)
      );
    }
  }
}
