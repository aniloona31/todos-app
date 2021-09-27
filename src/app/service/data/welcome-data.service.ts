import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {


  constructor(private http : HttpClient) { }

  executableHelloWorldBeanService(){
    return this.http.get("http://localhost:8080/helloworldbean");
  }
  
  executableHelloWorlServiceWithPathVariable(name){
    // let basicAuthHeader = this.createBasicAuthenticationHttpHeaders();

    // let headers = new HttpHeaders({
    //   Authorization : basicAuthHeader
    // });
    //we passed this object to http headers

    return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
  
  //Here is a debugging guide to help you -
  //https://github.com/in28minutes/in28minutes-initiatives/blob/master/The-in28Minutes-TroubleshootingGuide-And-FAQ/fullstack.md#basic-authentication-problems

  // createBasicAuthenticationHttpHeaders(){
  //   let username = "anirudh";
  //   let password = "bornvita";

  //   let basicAuthString = "Basic " + window.btoa(username + ":" + password);
  //   //the authentication is string converted to base 64 and appended basic in front of it.
  //   //window.btoa is function to convert to base 64. 

  //   return basicAuthString;
  // }

}
