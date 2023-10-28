import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sider-tarjeta',
  templateUrl: './sider-tarjeta.component.html',
  styleUrls: ['./sider-tarjeta.component.css']
})
export class SiderTarjetaComponent {

  @Input() top: string = "";
  @Input() img: string = "";
  @Input() id: string = 'miElemento';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const elemento = this.elementRef.nativeElement.querySelector('#' + this.id);

    if (elemento) {
      this.renderer.listen(elemento, 'mouseover', () => {
        this.renderer.setStyle(elemento, 'width', '300px');
        this.renderer.setStyle(elemento, 'height', '400px');
      });

      this.renderer.listen(elemento, 'mouseout', () => {
        this.renderer.setStyle(elemento, 'width', '50px');
        this.renderer.setStyle(elemento, 'height', '50px');
      });
    }
  }
}
