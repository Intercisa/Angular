import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sipi' //component property
  password = ''  
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //instance of the Router >> dependeny 
  //Dependency Injection -> dependeny injection is a built in feature in angualr >> constructor(router:Router) -> constructor injection
  //if you pass something in as a constructor argument that will be abel to use as a member variable 
  constructor(private router:Router, 
    private hardcodedAuthentication:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){ //component event 
    
    if(this.hardcodedAuthentication.authenticate(this.username, this.password)){
      //redirect to Welcome page
      this.router.navigate(['welcome',this.username]) //it accpet an array, the first element is the page you want to go, then a parameter 
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
 
  }
}
