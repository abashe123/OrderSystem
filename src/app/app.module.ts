import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { AfterLoginService } from './_services/after-login.service';
import { BeforeLoginService } from './_services/before-login.service';

export const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent,
    canActivate : [BeforeLoginService]
  },
  {path:'login',component:LoginComponent,
  canActivate : [BeforeLoginService]
  },
  {path:'dashboard',component:DashboardComponent,
  canActivate : [AfterLoginService]
  },
  {path:'dialog',component:DialogComponent},

];
  



