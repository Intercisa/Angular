import { Injectable } from '@angular/core';

@Injectable({ //makes this component available to dependency injection 
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
        //console.log('before: '+this.isUserLoggedIn())

        if(username==='sipi' && password === '1234'){
          sessionStorage.setItem('authenticatedUser', username)
          
          //console.log('after: '+this.isUserLoggedIn())
          return true
        }
        return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

}
