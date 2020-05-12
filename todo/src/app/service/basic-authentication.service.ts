import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN ='token'
export const AUTHENTICATED_USER = 'authenticatedUser'


@Injectable({ //makes this component available to dependency injection 
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password){
 
    let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password) 
   
    let headers = new HttpHeaders({ 
      Authorization: basicAuthHeaderString
      })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers}).pipe( //if successful do this thing as well 
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN, basicAuthHeaderString) //set the token and the username into the session storage
          return data
        }
      )
    ) 
    } 


    executeJWTAuthenticationService(username, password){
 
     /*
     *  we send this: to ${API_URL}/authenticate
     *   {
     *   "username": "sipi",
     *   "password": "password"
     *    }
     * 
     *  and the response gives as the toke -> data.token !!
     */
  
      return this.http.post<any>(`${API_URL}/authenticate`,{
        username, 
        password
      }).pipe( //if successful do this thing as well 
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`) //set the token and the username into the session storage
            return data
          }
        )
      ) 
      } 





    getAuthenticatedUser(){
      return sessionStorage.getItem(AUTHENTICATED_USER)
    }

    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem(TOKEN)
    }


  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN);
  }

}
export class AuthenticationBean{
  constructor(public msg:string){}
}