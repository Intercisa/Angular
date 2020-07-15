import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    //this.firstObsSubscription = interval(1000).subscribe(count => {
     // console.log(count);
   // });

    const customIntervalObservable = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(()=>{
       observer.next(count);
       //if(count == 2) observer.complete();
       //if(count > 3) observer.error(new Error('Count is greater than 3!'))
       count++;
      }, 1000)
    });

    //operators 

   this. firstObsSubscription = customIntervalObservable.pipe(filter((data)=>{
     return data % 2 === 0; //only odd numbers
   }),map((data)=>{ //map operator 
    return `Round: ${data +1}`; 
  })).subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
      //alert(error.message);
    }, () => { //completed 
      console.log('completed');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe(); // prevents memory leaks 
    
  }

}
