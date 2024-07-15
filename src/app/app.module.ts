import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { AfterLoginService } from './_services/after-login.service';
import { BeforeLoginService } from './_services/before-login.service';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { MessagesComponent } from './messages/messages.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService] },
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], data: { expectedRole: 'admin' },
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AfterLoginService] }
    ]
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AfterLoginService] },
  { path: 'dialog', component: DialogComponent },
  { path: 'messages', component: MessagesComponent, canActivate: [AfterLoginService] },
  { path: 'create-order', component: CreateOrderComponent, canActivate: [AfterLoginService] },
  { path: 'order-status', component: OrderStatusComponent, canActivate: [AfterLoginService] },


];


  



