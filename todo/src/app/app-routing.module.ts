import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

//default page
//login
//welcome
//error
const routes: Routes = [
  {path:'', component: LoginComponent}, //makes Login the default page 
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent}, // '/:name' -> parameter expected
  {path:'**', component: ErrorComponent} // '**' ->   anything else goes to here 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
