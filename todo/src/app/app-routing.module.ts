import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

//default page
//login
//welcome
//error
const routes: Routes = [
  {path:'', component: LoginComponent}, //makes Login the default page 
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent}, // '/:name' -> parameter expected
  {path:'todos', component: ListTodosComponent},
  {path:'**', component: ErrorComponent} // '**' ->   anything else goes to here 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
