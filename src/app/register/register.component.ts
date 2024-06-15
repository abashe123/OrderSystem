
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RandomService } from '../_services/random.service';
import { TokenService } from '../_services/token.service';
import { Router } from '@angular/router';



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

//public error = null;

constructor(private random: RandomService, private token: TokenService, private router: Router){ }
public error: any = []
ngOnInit(): void{
  }
onSubmit() {

  console.log(this.formdata)
  return this.random.register(this.formdata).subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
  ); 
}

handleResponse(data:any){
    console.log(data.access_token);
    this.token.handle(data.access_token);
    //this.Auth.ChangeAuthStatus(true);
    this.router.navigateByUrl('dashboard');
    // this.auth.canAuthenticate();
  }

handleError(error:any){
this.error = error.error.error;
}

//   this.loading = true;
//   this.random.register(this.formdata).subscribe(
//     data => {
//       console.log(data);
//       this.loading = false;
//     },

//     (error: HttpErrorResponse) => { 

//       this.handleError(error);
//     }
//   );
// }

// handleError(error: HttpErrorResponse) { 
//   this.errorMessage = error.error.error;
//   this.loading = false;
// }
// }




//   constructor(private http: HttpClient) { }
// 
}
