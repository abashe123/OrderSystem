import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { AdmindashboardRoutingModule } from './admin-routing.module';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [
    AdmindashboardComponent,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AdmindashboardRoutingModule,
  
  ]
})
export class AdminModule { }
