import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor: string = 'transparent';
@Input('appBetterHighlight') highlightColor: string = 'pink';

 @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = this.defaultColor;
  }


  @HostListener('mouseenter') mouseOver(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = this.highlightColor;
  }


  @HostListener('mouseleave') mouseLeave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
