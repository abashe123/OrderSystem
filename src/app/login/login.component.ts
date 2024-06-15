import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RandomService } from '../_services/random.service';
import { TokenService } from '../_services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formdata={email:"", password:""};
  submit=true;
  loading=false;
  errorMessage="";
  
  public error = null;
  constructor(
    private random: RandomService,
    private Token: TokenService
  
  ){}

  
  onSubmit() {
    this.loading = true;
    this.random.login(this.formdata).subscribe(
      data => {
        this.handleResponse(data);
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.handleError(error);
        this.loading = false;
      }
    );
  }

  handleResponse(data: any){
    this.Token.handle(data.access_token);

  }

  handleError(error: HttpErrorResponse) {
    this.errorMessage = error.error.error;
  }
  
  ngOnit(){
    
  }
}



// data => console.log(data)
// error => this.handleError(error)
// );
// }