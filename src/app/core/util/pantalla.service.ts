import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PantallaService {

  private resolucion = new BehaviorSubject<any>({ resolucion: window.innerWidth });
  public direccionScroll = new BehaviorSubject<any>({ scrollArriba: true });
  public tabIndexVisible = new BehaviorSubject<any>({ tabId: 'tabindex1' });


  constructor() {
    this.tabIndexEnPantalla();
    window.addEventListener('scroll', () => {
      this.scrollDirection();
      this.tabIndexEnPantalla();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resolucion.next(window.innerWidth);
  }

  ultimoScrollPosicion = window.scrollY;
  isUltimoScrollArriba = null;
  scrollDirection() {
    const actualScrollPosicion = window.scrollY;
    if (actualScrollPosicion > this.ultimoScrollPosicion) {
      if (this.isUltimoScrollArriba || this.isUltimoScrollArriba == null) {
        this.direccionScroll.next({ scrollArriba: false });
        this.isUltimoScrollArriba = false;
      }
    } else if (actualScrollPosicion < this.ultimoScrollPosicion) {
      if (!this.isUltimoScrollArriba || this.isUltimoScrollArriba == null) {
        this.direccionScroll.next({ scrollArriba: true });
        this.isUltimoScrollArriba = true;
      }
    }
    this.ultimoScrollPosicion = actualScrollPosicion;
  }

  ultimoTabIndexEnPantalla = null;
  tabIndexEnPantalla() {
    let elementosTabIndex = document.querySelectorAll('.tab-index');
    if (elementosTabIndex.length > 0) {
      elementosTabIndex.forEach(e => {
        if (this.ultimoTabIndexEnPantalla != e.id || this.ultimoTabIndexEnPantalla == null) {
          const tab = e.getBoundingClientRect();
          const centroPantallaX = window.innerWidth / 2;
          const centroPantallaY = window.innerHeight / 2;

          const estaEnElCentro = (
            tab.left <= centroPantallaX &&
            tab.right >= centroPantallaX &&
            tab.top <= centroPantallaY &&
            tab.bottom >= centroPantallaY
          );

          if (estaEnElCentro) {
            this.ultimoTabIndexEnPantalla = e.id;
            this.tabIndexVisible.next({ tabId: e.id })
          }
        }
      })
    }
  }
}
