import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appCopiado]',
  standalone: true
})
export class CopiadoDirective {
  private tooltipElement: HTMLElement;
  el: ElementRef = inject(ElementRef);

  constructor(private render: Renderer2) { }

  @HostListener('click') onClick() {
    this.toggleTooltip();
  }

  private toggleTooltip() {
    if (!this.tooltipElement) {
      this.createTooltip();
    } else {
      this.destroyTooltip();
    }
  }

  private createTooltip() {
    this.tooltipElement = this.render.createElement('div');
    this.tooltipElement.style.color = "white";
    this.tooltipElement.style.backgroundColor = "green";
    this.tooltipElement.style.borderRadius = "25px";
    this.tooltipElement.style.width = "70px";
    this.tooltipElement.style.height = "25px";
    this.tooltipElement.style.fontSize = "15px";
    this.tooltipElement.style.position = "absolute";
    const actualLeft = this.el.nativeElement.offsetLeft;
    const actualTop = this.el.nativeElement.offsetTop;

    const tooltipLeft = 15;
    const tooltipTop = -15;

    this.tooltipElement.style.left = actualLeft + tooltipLeft + 'px';
    this.tooltipElement.style.top = actualTop + tooltipTop + 'px';

    this.tooltipElement.innerText = 'Copiado';
    this.render.addClass(this.tooltipElement, 'custom-tooltip');

    const parent = this.render.parentNode(this.el.nativeElement);
    this.render.appendChild(parent, this.tooltipElement);
  }

  private destroyTooltip() {
    this.render.removeChild(this.el.nativeElement, this.tooltipElement);
    this.tooltipElement = null;
  }

}
