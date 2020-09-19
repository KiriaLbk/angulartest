import { Directive, OnInit } from '@angular/core';
import {ElementRef, Input} from '@angular/core';
import {TimelineMax} from 'gsap';

@Directive({
  selector: '[appClouds]'
})
export class CloudsDirective implements OnInit {
  @Input() right;
  @Input() top;
  @Input() left;
  @Input() bottom;
  public tl = new TimelineMax();

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
    console.log(typeof(this.right));
    this.tl.to(this.element.nativeElement, 7, {left: `+=${this.left}`,
    right: `+=${this.right}`, top: `+=${this.top}`, bottom: `+=${this.bottom}`, opacity: '0'}, 2);
  }
}
