import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private eleRef:ElementRef,private render:Renderer2) { }

  @HostListener("mouseenter")
  mouseHover(){
    this.render.setStyle(this.eleRef.nativeElement,'backgroundColor','orange')
    

  }

  @HostListener("mouseout")
  mouseOut(){
    this.render.setStyle(this.eleRef.nativeElement,'backgroundColor','')
    

  }

}
