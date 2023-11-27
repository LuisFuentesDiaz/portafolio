import { Component, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';
import { Habilidad } from 'src/app/core/models/habilidad';

@Component({
  selector: 'app-icono-skill',
  templateUrl: './icono-skill.component.html',
  styleUrls: ['./icono-skill.component.css']
})
export class IconoSkillComponent implements AfterViewInit {
  @Input() data: Habilidad
  @Input() ancho: Number = 65;

  @Input() noScale: boolean = false;
  @Input() borde: boolean = false;
  @Input() margin = 0;

  capacidadString: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const elemento = this.elementRef.nativeElement.querySelector('#skillContenedor' + this.data.id);
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
        if (this.borde) {
          this.renderer.setStyle(entry.target, 'border', "1px solid black");
        }
      }
    });
    observer.observe(element);
  }
}

