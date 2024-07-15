import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient = {
    //user_id: '', // Ensure to include user_id if needed
    name: '',
    age: null,
    gender: '',
    sampletype: '',
    clinicalhistory: '',
    diagnosis: ''
  };

  token: string = ''; // Initialize token variable

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch token from localStorage on component initialization
    this.token = localStorage.getItem('token') || '';
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });

      this.http.post('http://127.0.0.1:8000/api/patient', this.patient, { headers }).subscribe(
        response => {
          console.log('Response from server:', response);
          form.resetForm();
        },
        error => {
          console.error('Error occurred:', error);
          // Handle error as needed
        }
      );
    }
  }
}
