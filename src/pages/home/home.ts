import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import {UserBaseInfoPage} from '../user-base-info/user-base-info'

import {ApplicationRecordListPage} from '../application-record-list/application-record-list'
import {SelectCarPage} from '../select-car/select-car'
import {LoginPage} from '../login/login'
import {RestProvider} from '../../providers/rest/rest'
import { Storage } from '@ionic/storage'
import { ThemeableBrowser,ThemeableBrowserObject  } from '@ionic-native/themeable-browser';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  isShowPop1:Boolean = false;
  isShowPop2:Boolean = false;
  constructor(public navCtrl: NavController,
  public rest: RestProvider,
  public storage: Storage,
  private themeableBrowser: ThemeableBrowser,
  private iab: InAppBrowser) {

  }
  ionViewWillEnter() {
    
  }
  btnClick0() {
   
  }
  btnClick2() {
   
    const options: InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
      footer:'yes'
    }
    const browser = this.iab.create('https://www.baidu.com/','_blank', options);
    browser.on('loadstop').subscribe(event => {
      alert('loadstop')
      browser.insertCSS({ code: "body{color: red;" });
      setTimeout(() => {
        browser.close();
      },5000)
   });
   browser.on('loaderror').subscribe(event => {
    alert('loaderror')
    browser.insertCSS({ code: "body{color: red;" });
 });
 browser.on('exit').subscribe(event => {
  alert('exit')
});
  //  browser.close();
  }
  btnClick(target) {
    
    const options = {
      statusbar: {
        color: '#ffffffff'
    },
    toolbar: {
        height: 44,
        color: '#f0f0f0ff'
    },
    title: {
        color: '#003264ff',
        showPageTitle: true
    },
    backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        image: 'forward',
        imagePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        image: 'close',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
            {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }
        ]
    },
    backButtonCanClose: true
 };
 //加allow-navigation时_self当前ionicWebView内部打开但无头部 ,_blank也是ionicWebView内部打开但无头部
 //没有加allow-navigation时 _self _blank都是在默认qq浏览器下打开
 const browser:ThemeableBrowserObject  = this.themeableBrowser.create('http://wechat.chepass.com:8021/Content/dist/#/process/userAddAddress?isTest', '_blank', options); //_blank 
 browser.on('closePressed').subscribe(res=> {
   browser.close();
 })
}
  ionViewDidEnter() {
    //修复轮播手动滑动后不能自动轮播问题
    this.slides.autoplayDisableOnInteraction = false; 
  }
  checkToken (cb) {
    var api='Main/MainQuest?needload'; //验证token接口
    this.storage.get('token').then((val) => {
      var params = {
        token: val
      }
      if (!val) {
        // this.navCtrl.push(LoginPage);
        this.navCtrl.setRoot(LoginPage);
        return
      }
      this.rest.doPost(api,params, (data)=> {
        if(!data.issuccess) {
          this.navCtrl.setRoot(LoginPage);
        } else {
          cb&&cb()
          
        }
      })
    })
  }
  gotoUserInfo() {
    this.checkToken(()=> {
      this.navCtrl.push(UserBaseInfoPage);
    })
  }
  waiting() {

  }
  // gotoCarSelect() {
  //   // this.navCtrl.parent.select(4);
  //   // alert('gotoCarSelect')
    
  //   this.checkToken(()=> {
  //     this.navCtrl.push(SelectCarPage);
  //   })
  // }
  gotoCarSelect(type) {
    this.checkToken(()=> {
      this.storage.set('type',type)
      this.navCtrl.push(SelectCarPage);
    })
  }
  gotoApplicationRecordList() {
    // this.navCtrl.parent.select(5);
    this.checkToken(()=> {
      this.navCtrl.push(ApplicationRecordListPage);
    })
    
  }
  hidePop1() {
    this.isShowPop1 = false
  }
  showPop1() {
    this.isShowPop1 = true 
  }
  hidePop2() {
    this.isShowPop2 = false
  }
  showPop2() {
    this.isShowPop2 = true 
  }
}
