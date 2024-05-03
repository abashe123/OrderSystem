import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  formdata={name:"",email:"",phonenumber:"",password:""};
  submit=false;
  errorMessage="";
  loading=false;
  
onSubmit: any
}
