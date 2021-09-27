import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service ';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string="anirudh" 
  password : string=""
  invalidLogin : boolean=false
  errorMessage : string ="invalid credentials"
  constructor( private router : Router
    , private authentication : HardcodedAuthenticationService 
    , private basicAuth : BasicAuthenticationService) {}    //to create router as dependency of login component pass it as argument to constructor 

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username)  //this will print username in the console not or the screen. console is in the inspect where javascript ususally works.
    //if(this.username==="ani_loona31" && this.password== "bornvita"){
    //  this.invalidLogin=false
    if(this.authentication.authenticate(this.username, this.password)){
      this.router.navigate(["welcome" , this.username ])
      this.invalidLogin=true
      //these are kind  of parameters and i am able to use it here because  i have imported welcome in router and than router is  imported to login.
    }else{
      this.invalidLogin=true
    } 
  
  }

  

  handleBasicAuthLogin(){
    //this is an asynchronous call hence an observable would be returned.
    this.basicAuth.executableJwtAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["welcome",this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
      
   }

}
