import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { AboutDetailsComponent } from './about/about-details/about-details/about-details.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ComplaintsComponent } from './Admin/complaints/complaints.component';
import { UsersComponent } from './Admin/users/users.component';
import { NotificationsComponent } from './Admin/notifications/notifications.component';
import { MessagesComponent } from './Admin/messages/messages.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
 {component:BlogComponent,path:'blogs'},
 {component:AboutComponent, path:'about'},
 {component:AboutDetailsComponent,path:'aboutDetails'},
 {
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'complaints', component:ComplaintsComponent },
    { path: 'user', component:UsersComponent },
    { path: 'notifications', component:NotificationsComponent },
    { path: 'messaging ', component:MessagesComponent },
   
   
  ]
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
