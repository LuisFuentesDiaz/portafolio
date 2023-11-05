import { Component, ElementRef, Input, OnInit, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-icono-skill',
  templateUrl: './icono-skill.component.html',
  styleUrls: ['./icono-skill.component.css']
})
export class IconoSkillComponent implements AfterViewInit {
  @Input() nombre: string = "";
  @Input() ancho: Number = 65;
  @Input() largo: Number = 65;
  @Input() tooltip: string = '';
  @Input() noScale: boolean = false;
  capacidadString: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const elemento = this.elementRef.nativeElement.querySelector('#skillContenedor' + this.nombre);
    this.observeElementResize(elemento);
  }

  observeElementResize(element: HTMLElement) {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const computedStyles = getComputedStyle(entry.target);
        this.renderer.setStyle(entry.target, 'min-height', computedStyles.width);
        if (this.noScale) {
          this.renderer.setStyle(entry.target, 'transform', "none");
          this.renderer.setStyle(entry.target, 'cursor', "auto");
        }
      }
    });
    observer.observe(element);
  }
}

