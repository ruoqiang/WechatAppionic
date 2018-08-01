import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
// import {HomePage} from '../pages/home/home'
// import {LoginPage} from '../pages/login/login'

import {RestProvider} from '../providers/rest/rest'
import { Storage } from '@ionic/storage'

import {NativeService} from '../providers/utils/nativeUtils'
import { AppVersion } from '@ionic-native/app-version'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  // rootPage:any = '';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage,public rest:RestProvider,public nativeService:NativeService,public appVersion:AppVersion) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
      statusBar.backgroundColorByHexString('transparent');// statusBar.styleDefault();
      //**************************** */
      // var api='Main/MainQuest'; //验证token接口
      // this.storage.get('token').then((val) => {
      //   console.log('token！！！！:', val)
      //   var params = {
      //     token: val
      //   }
      //   if (!val) {
      //     // this.rootPage= LoginPage;
      //     return
      //   }
      //   this.rest.doPost(api,params, (data)=> {
      //     console.log('data:', data)
      //     if(!data.issuccess) {
      //       // this.rootPage= LoginPage;
      //     }
      //   })
      // })
      var api='api/Webank/GetVersion'; //验证token接口
      var params = {}
      this.rest.doPost(api,params, (res)=> {
        console.log('data:', res)
        if(res.issuccess) {
          let serverVersion:any = res.result
          let curVersion:any = '1.0'

          if (!platform.is('mobileweb')) {
            this.appVersion.getVersionNumber().then(v => {
              // alert('当前app版本号'+ v)
              curVersion = v
              let isNewVersion = this.compareVersionIsnNew(serverVersion, curVersion)
              // alert(isNewVersion)
              
              if (isNewVersion) this.nativeService.detectionUpgrade() //版本更新
            });
          }
        }
      });
      // this.nativeService.detectionUpgrade() //是检查否版本更新
    });
  }
  /**
   * 比较app是否有新版本
   * @param Str1 服务器版本
   * @param Str2 当前app版本
   */
  compareVersionIsnNew (Str1, Str2) {
    var nStr1 =Str1.replace(/(^\s+)|(\s+$)/gi,"");
    var nStr2 = Str2.replace(/(^\s+)|(\s+$)/gi,"");
    var req=/\d(\.|\d)*\d/gi; //这个是匹配**.**.**数字的正则
      nStr1=nStr1.match(req)[0]; //match出来的是一个数组，这个匹配出来在第0个
      nStr2=nStr2.match(req)[0];
      //第四步：版本比较，先把版本号字符串切割成数组，[主版本号，次版本号，修订号]
      var arr1 = nStr1.split('.'); //[**,**,**]
      var arr2 = nStr2.split('.');
      //第五步：开始比较
      var minL=Math.min(arr1.length,arr2.length);
      var index=0;
      var diff=0;
      while(index<minL){
        //循环数组的每一项，相减的差额来做判断
       diff=parseInt(arr1[index])-parseInt(arr2[index]);
       if(diff!=0){
          break;
       }
       index++;
      }
      diff=(diff!=0)?diff:(arr1.length-arr2.length);
      //通过diff的值与0比较，生成true（第一个大于第二个） 或者是false（不大于）
      return diff>0;
  }
}
