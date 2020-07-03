import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloBean{
  constructor(public msg:string){ }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
   return this.http.get<HelloBean>(`${API_URL}/hello-bean`) //<HelloBean> -> what response structure i'm expecting  - it is like generic in Java
  }
  executeHelloWorldBeanServiceWithPathVariable(name){
    //let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    //let headers = new HttpHeaders({ //you have to name this headers!! IMPORTANT if you not, ex: u use just the name header than u have to pass like -> {headers : header}
      //Authorization: basicAuthHeaderString
      //})

    return this.http.get<HelloBean>(`${API_URL}/hello-bean/pathvar/${name}`, //{headers}) //<HelloBean> -> what response structure i'm expecting  - it is like generic in Java
    ); 
  } //IMPORTANT TO USE TIK >> ` -> altgr + 7 in order to use ${name}                   //pass headers in a new object 

   //createBasicAuthenticationHttpHeader(){
     //let username = 'sipi' //check these twice or more! 
     //let password = 'password'
     //let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password) //encode with WindowBase64 >> btoa
     //return basicAuthHeaderString
   //}
    
  //Access to XMLHttpRequest at 'http://localhost:8080/hello-bean/pathvar/sipi' 
  

}
