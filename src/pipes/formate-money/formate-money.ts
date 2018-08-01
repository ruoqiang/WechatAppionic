import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormateMoneyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formateMoney',
})
export class FormateMoneyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(val: any, ...args) {
    val = val.toString().replace(/\$|\\,/g, '')
    if (isNaN(val)) {
      val = "0"
    }
    // val = val / 100 //临时前端处理一下
    // let sign = (val === (val = Math.abs(val)))
    val = Math.floor(val * 100 + 0.50000000001)
    let cents:any = val % 100
    val = Math.floor(val / 100).toString()
    if (cents < 10) {
       cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((val.length- (1 + i)) / 3); i++) {
        val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3))
    }
    return (val + '.' + cents)
     }
  
}
