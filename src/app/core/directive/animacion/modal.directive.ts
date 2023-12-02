import { AnimationBuilder, style, animate } from '@angular/animations';
import { Directive, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';

@Directive({
  selector: '[modalAnimacion]',
  standalone: true,
})
export class ModalDirective implements OnInit {

  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  ngOnInit(): void {
    console.log("a");

    const hijos = this.elementRef.nativeElement.querySelectorAll('*');
    hijos.forEach(element => {
      console.log(element);

    });

  }

  private player = this.builder
    .build([
      style({ transform: 'translateX(0)' }),
      animate('300ms', style({ transform: 'scale(0.3),z-index(1)' })),

    ]).create(this.elementRef.nativeElement);


  constructor() { }




}
