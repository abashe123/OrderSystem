import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  // Define any necessary properties here

  constructor() { }

  // Define the addToggle method
  status = false;
addToggle()
{
  this.status = !this.status;       
}
}

  


  