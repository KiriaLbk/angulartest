import { Directive } from '@angular/core';
import {ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {TimelineMax} from 'gsap';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective {
  @Input() duration;
  @Input() delay;
  public tl = new TimelineMax();

  constructor(private element: ElementRef) {
    this.tl.to(this.element.nativeElement, 1, {left: '+=60px'})
     .to(this.element.nativeElement, 1, {bottom: '-=60px'})
     .to(this.element.nativeElement, 1, {left: '+=30px'}, 5);
    // TweenMax.to(this.element.nativeElement, 1, {left: '300px'});
  }

}
