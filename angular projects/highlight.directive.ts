import { Directive,ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { 
   el.nativeElement.style.color="Red";
   el.nativeElement.style.backgroundColor="aqua"; 
}
ngOnInit(){
  this.renderer.setStyle(this.el.nativeElement,'background-color','brown');
}
// @HostBinding("style.backgroundColor") bgColor;
// @HostListener('mouseenter') mouseEnter(){
//   this.changeColor("blue");
// }
//  changeColor(color){
//    this.el.nativeElement.style.color=color;
//  }
//  @HostListener('mouseleave') mouseLeave(){
//   this.changeColor("Yellow");
// }
// changeLeaveColor(color){
//   this.el.nativeElement.style.color-color;
// }
}
