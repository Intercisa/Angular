import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.None //won't use view encapsulation 
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testserver', content: 'Just a test!'}];
  oddNumbers:number[] = [];
  evenNumbers:number[] = []

  
  onServerAdded(serverData:{serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'server',
      name:  serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
 }
 onChangeFirst(){
   this.serverElements[0].name = 'Changed';
 }

 onDestroyFirst(){
   this.serverElements.splice(0,1);
 }

 onIntervalFired(firedNumber:number){
  firedNumber % 2 !== 0 ? this.oddNumbers.push(firedNumber) : this.evenNumbers.push(firedNumber);
 }



}