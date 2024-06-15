import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RandomService } from '../_services/random.service';
import { TokenService } from '../_services/token.service';
import { AuthService } from '../_services/auth.service';


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
  handlerError: any;
  
  constructor(private RandomService: RandomService, private token: TokenService, private router: Router, private Auth: AuthService  //private http: HttpClient
  
  ){}

  ngOnIt(): void{
}
  public error = null;
  onSubmit() {
    this.loading = true;
    return this.RandomService.login(this.formdata).subscribe(
      data => {
        this.handleResponse(data);
        this.loading = false;  // Stop spinner on success
      },

      error => {
        this.handlerError (error);
        this.loading = true;  // Stop spinner on error
      },
    );

  }

  handleResponse(data:any){
    console.log(data.access_token);
    this.token.handle(data.access_token);
    this.Auth.ChangeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

    handleError(error: HttpErrorResponse) { 
      this.errorMessage = error.error.error;
      // this.loading = false;
    }


  
}
  
  

  //     data => {
  //       this.handleResponse(data);
  //       this.loading = false;
  //     },
  //     (error: HttpErrorResponse) => {
  //       this.handleError(error);
  //       this.loading = false;
  //     }
  //   );
  // }

  // handleResponse(data: any){


  // }

  // handleError(error: HttpErrorResponse) {
  //   this.errorMessage = error.error.error;
  // }



// data => console.log(data)
// error => this.handleError(error)
// );
// }
  