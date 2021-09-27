import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constant';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }
  
  // authenticate( username, password ){
  //   if( username === "ani_loona31" && password === "bornvita" ){
  //     sessionStorage.setItem("authenticateUser", username)  
  //     return true
  //   }
  //   return false
  // }


  executableJwtAuthenticationService(username, password){
    
    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map (
        data =>{
          sessionStorage.setItem("authenticateUser",username);
          sessionStorage.setItem("token",`Bearer ${data.token}`);
        }
      )
    );
  }



  executableAythenticationService(username, password){
    //console.log(username,password);
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    //console.log(basicAuthString);
    let headers = new HttpHeaders({
      Authorization : basicAuthString
    });
    //console.log(headers);
    return this.http.get<AuthenticationBean>("http://localhost:8080/basicauth",{headers}).pipe(
      map(
        data => {
          sessionStorage.setItem("authenticateUser", username);
          sessionStorage.setItem("token",basicAuthString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser()  { 
    return sessionStorage.getItem("authenticateUser");
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem("token");
    }

  }

  isUserLoggedin(){
    let user = sessionStorage.getItem("authenticateUser")
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem("authenticateUser")
    sessionStorage.removeItem("token");
  }

}

export class AuthenticationBean {
  constructor(public message : string ) { }
}