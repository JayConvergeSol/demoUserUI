import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'registration' , component : RegistrationComponent},
  {path: 'forgetPassword',component:ForgetpasswordComponent},
  {path: 'resetPass', component: ResetpasswordComponent},
  {path: 'changePass', component: ChangepasswordComponent},
  {path: 'home',component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
