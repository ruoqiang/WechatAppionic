// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor() {
    console.log('Hello UtilsProvider Provider');
  }
  hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
  }
  
  addClass(el, className) {
    if (this.hasClass(el, className)) {
      return
    }
  
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
  }
   removeClass(el, className) {
    if (!this.hasClass(el, className)) {
      return
    }
  
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
  }
  getNowDate(addDayCount?) {
    var AddDayCount = addDayCount || 0
    var nowDate = new Date()
    // var newDate = new Date()
    nowDate.setDate(nowDate.getDate() + AddDayCount)
    var year = nowDate.getFullYear()
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
     : nowDate.getMonth() + 1
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
     .getDate()
    var dateStr = year + "-" + month + "-" + day
    return dateStr
  }
}
