import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '' //component property
  password = ''  
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //instance of the Router >> dependeny 
  //Dependency Injection -> dependeny injection is a built in feature in angualr >> constructor(router:Router) -> constructor injection
  //if you pass something in as a constructor argument that will be abel to use as a member variable 
  constructor(private router:Router, 
    private hardcodedAuthentication:HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleBasicAuthLogin(){ //component event 
    
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false      
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}

