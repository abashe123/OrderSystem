
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RandomService } from '../_services/random.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  formdata={name:"",email:"",rank:"",phonenumber:"",password:""};
  submit=false;
  errorMessage="";
  loading=false;

public error = null;

constructor(private random: RandomService){ }

onSubmit() {
  this.loading = true;
  this.random.register(this.formdata).subscribe(
    data => {
      console.log(data);
      this.loading = false;
    },

    (error: HttpErrorResponse) => { 

      this.handleError(error);
    }
  );
}

handleError(error: HttpErrorResponse) { 
  this.errorMessage = error.error.error;
  this.loading = false;
}
}

  // onSubmit(){
  //   let formdata = this.formdata;
  //   this.loading=true;

  //   const url = 'http://127.0.0.1:8000/api/testurl';
  //   console.log(formdata)

  //   this.http.post(url, formdata).subscribe(
  //     (data: any) => {
  //       console.log(`This is from HttpClient:`, data);
  //     },
  //     (error) => {
  //       console.error('error:', error);
  //     },
  //     () => {
  //       this.loading=false;
  //     } 

  //   );
  // }

//   ngOnInit(): void{
//   }
//   constructor(private http: HttpClient) { }
// }
