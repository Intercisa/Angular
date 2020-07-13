import { Component } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = []; 
  evenNumbers = [] 
  value = 10;
  onlyOdd = false;

  ngOnInit(): void {
    this.fillUpArrays();
    console.log(this.oddNumbers);
    console.log(this.evenNumbers);
   

  }

  fillUpArrays(){
    this.numbers.map(e =>{
       if(e%2 !==0) this.oddNumbers.push(e);
       else this.evenNumbers.push(e);
    });
  }
}
