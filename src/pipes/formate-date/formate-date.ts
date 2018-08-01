import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormateDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formateDate',
})
export class FormateDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(val: string, ...args) {
    val = val && val.substring(0, val.length - 3) //去除秒
    return val ? val.replace('T', ' ') : '' //去除T
  }
}
