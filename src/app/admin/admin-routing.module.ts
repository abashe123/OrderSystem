import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';

const routes: Routes = [
  {path:'' , component:AdmindashboardComponent},

  {path:'dashboard', 
  children: [
   // {path: 'navbar': AdmindashboardComponent}
  ]

},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashboardRoutingModule { }
