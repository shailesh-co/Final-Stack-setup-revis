import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef , private render : Renderer2) { }
  // @HostListener('mouseenter') onMouseen(){
  //   this.render.setStyle(this.el.nativeElement, 'backgroundColor','yellow')
  // }
  // @HostListener('mouseleave') onMousele(){
  //   this.render.setStyle(this.el.nativeElement,'backgroundColor','')
  // }
    ngOnInit() {

      
    // Set background color to red on initialization
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
