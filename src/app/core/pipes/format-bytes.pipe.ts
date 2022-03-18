import { Pipe, PipeTransform } from '@angular/core';
import { Numbers } from '../enums/numbers';
import { sizes } from '@core/helpers';


@Pipe({
  name: 'formatBytes'
})
export class FormatBytesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return this.formatBytes(value);
  }

  formatBytes(bytes: number): string {
    if (bytes === 0) return '0' + sizes[0];

    let decimals = 0;
    const k = Numbers.K24;

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const result = bytes / Math.pow(k, i);

    if (result < Numbers.TEN) {
      decimals = 2;
    }else if (result < Numbers.HUNDRED) {
      decimals = 1;
    }

    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
  }

}
