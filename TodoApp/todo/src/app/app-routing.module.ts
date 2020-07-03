import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

//default page
//login
//welcome
//error
const routes: Routes = [
  {path:'', component: LoginComponent}, //makes Login the default page 
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]}, // '/:name' -> parameter expected //canActivate -> RouteGuard Service! 
  {path:'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos/:id', component: TodoComponent,canActivate:[RouteGuardService]},
 
  {path:'contacts', component: ContactComponent},
 
  {path:'**', component: ErrorComponent} // '**' ->   anything else goes to here 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
