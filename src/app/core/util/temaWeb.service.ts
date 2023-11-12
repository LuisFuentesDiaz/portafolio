import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaWebService {
  public isTemaOscuro = new BehaviorSubject<boolean>(false);//Retorna el tema actual de la web

  constructor() { }

}
