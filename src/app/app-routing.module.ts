import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path : "" , component : LoginComponent },   //this will make the default route as login component 
  { path : "login" , component : LoginComponent },
  { path : "welcome/:name" , component : WelcomeComponent, canActivate : [RouteGuardService] },//name is the parameter that  we have to pass.
  { path : "todos" , component : ListTodosComponent , canActivate : [RouteGuardService] },  //path is the value that will be written on the path window on our page  it can be anything we want.
  { path : "logout" , component : LogoutComponent , canActivate : [RouteGuardService] },
  { path : "todo/:id" , component : TodoComponent , canActivate : [RouteGuardService]},
  { path : "**" , component : ErrorComponent } //error component should come at last elce it will come over other components
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
