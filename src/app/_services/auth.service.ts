import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
interface User{name:string, password:string}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router :Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }

  canAccess(){
    if(!this.isAuthenticated()){ 
        //redirect to login
        this.router.navigate(['/login']);
    }
  }

  register(name:string, email:string, rank:string, phonenumber:string,password:string){
    //send data to register api(firebase)
    
  }
login(data: User){
  return this.http.post("//insert url for api",data)
}

}
