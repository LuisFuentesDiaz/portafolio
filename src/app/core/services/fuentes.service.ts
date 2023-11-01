import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuentesService {

  private isTemaClaro = new BehaviorSubject<boolean>(false);

}
