import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  patients: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPatients();
  }

  fetchPatients() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/patients').subscribe(data => {
      this.patients = data;
    });
  }
}




