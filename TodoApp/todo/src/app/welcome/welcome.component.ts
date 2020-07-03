//in typescript 1 file for modul! -> moduls is how orginazie classes


import { Component, OnInit } from '@angular/core'; //'./app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import {AppComponent} from '../app.component' -> import classes 


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit { //export means you can use this class outside of the boundaries of this file 

  //String message = "Some Welcome Message"; Java
  //message ='Some Welcome Message'; JavaScript
  messageFromService : String 
  errorMsg : String
  name : ''


  //ActivatedRouter - parameter acception   
  constructor(
    private route:ActivatedRoute, 
    private welcomeDataService:WelcomeDataService) { }


  ngOnInit(): void {
    this.name =  this.route.snapshot.params['name']
    //console.log(this.route.snapshot.params['name']) //picking up parameter and print on the log 
    //console.log(this.message)
  }

  getWelcomeMessage(){
    console.log(this.welcomeDataService.executeHelloWorldBeanService())
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(   //very important to subscribe this observable! - it's an asynchronous call!
      response => this.handlSuccessfulResponse(response), 
      error => this.handleErrorResponse(error)
      //response => console.log(response.msg) //it's the same as the above but with the response data //you have to decalre a class structure with msg in welcome-data.service to get msg  
    ); 

    console.log('last line of getWelcomeMessage ') //will exacuted first, because of observables are asynchronous and let the other codes execute 
  }


  getWelcomeMessageWithParameter(){
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handlSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

handlSuccessfulResponse(response){
  console.log(response.msg)
  this.messageFromService = response.msg
}

handleErrorResponse(error){
  this.errorMsg = error.error.message
}

}

export class Class1{} //how you declare a class 
