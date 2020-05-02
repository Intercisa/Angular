import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){ //component event 
    
    //hardcoded login validation
    if(this.username==='sipi' && this.password === '1234'){
      //redirect to Welcome page
      this.router.navigate(['welcome',this.username]) //it accpet an array, the first element is the page you want to go, then a parameter 
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
 
  }
}
