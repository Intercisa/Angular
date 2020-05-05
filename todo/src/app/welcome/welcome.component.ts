//in typescript 1 file for modul! -> moduls is how orginazie classes


//package com.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core'; //'./app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import {AppComponent} from '../app.component' -> import classes 

//@ComponentScan(value="com.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit { //export means you can use this class outside of the boundaries of this file 

  //String message = "Some Welcome Message"; Java
  //message ='Some Welcome Message'; JavaScript
  message : string ='Some Welcome Message'; //even if you remove the ": string" part TypeScript will know it's a string 
  name : ''

  //public SpringBootFirstWebApplication(){
  //ActivatedRouter - parameter acception   
  constructor(private route:ActivatedRoute, 
    private welcomeDataService:WelcomeDataService) { }

  //void init(){
  ngOnInit(): void {
    this.name =  this.route.snapshot.params['name']
    //console.log(this.route.snapshot.params['name']) //picking up parameter and print on the log 
    //console.log(this.message)
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHelloWorldBeanService();
  }

}

export class Class1{} //how you declare a class 
