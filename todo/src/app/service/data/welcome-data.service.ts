import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
   return this.http.get<HelloBean>('http://localhost:8080/hello-bean') //<HelloBean> -> what response structure i'm expecting  - it is like generic in Java
  }
  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloBean>(`http://localhost:8080/hello-bean/pathvar/${name}`) //<HelloBean> -> what response structure i'm expecting  - it is like generic in Java
   } //IMPORTANT TO USE TIK >> ` -> altgr + 7 in order to use ${name}

    
  

}
