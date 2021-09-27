import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  // a function for hardcoded authentication.
  authenticate( username, password ){
    if( username === "ani_loona31" && password === "bornvita" ){
      sessionStorage.setItem("authenticateUser", username)  
      return true
    }
    return false
  }
  isUserLoggedin(){
    let user = sessionStorage.getItem("authenticateUser")
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem("authenticateUser")
  }
}
