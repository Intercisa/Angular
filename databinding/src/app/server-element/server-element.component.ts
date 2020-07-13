import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
 
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
//@Input('srvElement') element: {type: string, name: string, content: string}; //assaign as an alias 
 @Input() element: {type: string, name: string, content: string}; //@Input -> now element is reachable -> exposing 
 @Input() name: string;
 @ViewChild('heading') header: ElementRef;
 @ContentChild('contentParagraph', {static:true}) paragraph:ElementRef;
  
  constructor() { 
    console.log('contructor called!');
  }

  
  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
  }

  ngOnInit(): void {
    //console.log('ngOnInit called');
    //console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    //console.log('ngDoCheck');
  }

  ngAfterContentInit(){
   // console.log('ngAfterContentInit');
   // console.log(`content of parag: ${this.paragraph.nativeElement.textContent}`);

  }

  ngAfterContentChecked(){
    //console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
   // console.log('ngAfterViewInit');
   // console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
   // console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
  //  console.log('ngOnDestroy');
  }
}
