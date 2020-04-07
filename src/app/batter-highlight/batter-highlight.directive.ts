import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBatterHighlight]'
})
export class BatterHighlightDirective implements OnInit {

  @Input() defaultColor = '#CCFF90';
  @Input() highlightColor = '#64DD17';

  @HostBinding('style.backgroundColor') background: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.background = this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'red'); //1st method to access DOM element
  }

  @HostListener('mouseenter') mouseOver(eventData: Event ) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'red');
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event ) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'white');
    this.background = this.defaultColor;
  }
}
