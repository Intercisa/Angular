import { Injectable } from '@angular/core';
// JUST A DUMMY SERVICE ONLY FOR DEMO PURPOSE 

@Injectable({providedIn:'root'})
export class LoggingService{
    lastLog: string;

    printLog(message:string){
        console.log(message);
        console.log(this.lastLog);
        this.lastLog = message;
    }
}