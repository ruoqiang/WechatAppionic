import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Platform} from 'ionic-angular'
/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  //api请求地址
  public apiUrl="http://wechat.chepass.com:8021/"; //http://wechat.chepass.com:8021/
  //地址失效请访问 API 接口实时更新地址：https://www.itying.com/article-11.html
  constructor(public platform: Platform) {
    console.log(this.platform.is('mobileweb'))
    if (this.platform.is('mobileweb')) {
      this.apiUrl = '/'
    }
  }
}
