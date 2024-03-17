import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesesAFecha',
  standalone: true
})
export class MesesAFechaPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let meses = Math.floor(value < 12 ? value : value % 12);
    let año = Math.floor(value > 12 ? value / 12 : null);

    return `${año ? año > 1 ? año + " Años" : año + " Año" : ""}` + `${meses > 0 ? ((meses && año) && " y ") + meses + " Meses" : ""}`;
  }
}
