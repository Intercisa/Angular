import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler){ //we intercept the request
    //let username = 'sipi' //check these twice or more! 
    //let password = 'password'
    //let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password) //encode with WindowBase64 >> btoa
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString //adding the basic auth  on top of the original request
        }
      })
    }
      return next.handle(request) //sending to the next httphandler 
  }
}
