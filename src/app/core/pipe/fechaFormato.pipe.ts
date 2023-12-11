import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'fecha'
})
export class FechaFormatoPipe implements PipeTransform {

  transform(value: dayjs.Dayjs, args?: any): any {
    return value?.format("DD/MM/YYYY") || "Actual";
  }

}
