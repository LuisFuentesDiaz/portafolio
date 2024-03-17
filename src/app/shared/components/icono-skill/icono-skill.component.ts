import { Component, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/core/models';

@Component({
  selector: 'app-icono-skill',
  templateUrl: './icono-skill.component.html',
  styleUrls: ['./icono-skill.component.css'],
  standalone: true,
  imports: [NgbTooltip]
})
export class IconoSkillComponent implements AfterViewInit {
  @Input() data: Habilidad
  @Input() ancho: Number = 65;
  @Input() id: string;
  @Input() noScale: boolean = false;
  @Input() borde: boolean = false;
  @Input() margin = 0;

  capacidadString: string = '';

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngAfterViewInit(): void {
    const elemento = this.elementRef.nativeElement.querySelector('#skillContenedor' + this.data.id + this.id);
    this.tamanoDeElemento(elemento);
  }

  tamanoDeElemento(element: HTMLElement) {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const estilos = getComputedStyle(entry.target);
        this.render.setStyle(entry.target, 'min-height', estilos.width);
        if (this.noScale) {
          this.render.setStyle(entry.target, 'transform', "none");
          this.render.setStyle(entry.target, 'cursor', "auto");
        }
        if (this.borde) {
          this.render.setStyle(entry.target, 'border', "1px solid black");
        }
      }
    });
    observer.observe(element);
  }
}

