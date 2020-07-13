import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  activeToInactiveCounter:number = 0;
  inactiveToActiveCounter:number = 0;
  constructor() {}


  incerementActiveToInactive(){
    console.log(++this.activeToInactiveCounter);
  }

  incerementInactiveToActive(){
    console.log(++this.inactiveToActiveCounter);
  }



}
