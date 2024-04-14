import { Component, ElementRef, Input, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { Habilidad } from 'src/app/core/models';

@Component({
  selector: 'app-icono-skill',
  templateUrl: './icono-skill.component.html',
  styleUrls: ['./icono-skill.component.css'],
  standalone: true,
  imports: [NgxTippyModule]
})
export class IconoSkillComponent implements AfterViewInit, OnInit {
  @Input() data: Habilidad
  @Input() ancho: Number;
  @Input() id: string;
  @Input() noScale: boolean = false;
  @Input() borde: boolean = false;
  @Input() margin = 0;
  @Input() isGray: boolean = false;
  @Input() isNoGrayHover: boolean = false;


  capacidadString: string = '';
  gray: string = "";

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.gray = `grayscale(${this.isGray ? 1 : 0})`;
  }

  ngAfterViewInit(): void {
    const elemento = this.elementRef.nativeElement.querySelector('#skillContenedor' + this.data.id + this.id);
    this.tamanoDeElemento(elemento);
  }

  tamanoDeElemento(element: HTMLElement) {
    const observer = new ResizeObserver(element => {
      for (const item of element) {
        const estilos = getComputedStyle(item.target);
        this.render.setStyle(item.target, 'min-height', estilos.width);
        if (this.noScale) {
          this.render.setStyle(item.target, 'transform', "none");
          this.render.setStyle(item.target, 'cursor', "auto");
        }
        if (this.borde) {
          this.render.setStyle(item.target, 'border', "1px solid black");
        }
      }
    });
    observer.observe(element);
  }
}

