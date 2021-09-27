import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service ';

@Injectable({
  providedIn: 'root'
})
 export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService : BasicAuthenticationService) { }

  //the request here is actually the http request being called. i want to add header to every http request i call.
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    if(basicAuthString && username){
      request=request.clone({
        setHeaders : {
          Authorization : basicAuthString
        }
      });
    }
    return next.handle(request);
  }
}
