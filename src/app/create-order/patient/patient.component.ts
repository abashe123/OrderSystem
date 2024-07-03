import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patient = {
    name: '',
    age: null,
    gender: '',
    sampleType: '',
    clinicalHistory: '',
    diagnosis: ''
  };

  constructor(private http: HttpClient) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.http.post('http://127.0.0.1:8000/api/patient', this.patient).subscribe(
        response => {
          console.log('Response from server:', response);
          form.resetForm();
        },
        error => console.error('Error occurred:', error)
      );
    }
  }
}


