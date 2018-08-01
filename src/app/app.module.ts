import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular'; //IonicPageModule 打包时加上该引用   ionic cordova build android --prod --release
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
// import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { ConfigProvider } from '../providers/config/config';
import { UtilsProvider } from '../providers/utils/utils';
import {NativeService} from '../providers/utils/nativeUtils'

import { LoginPage } from '../pages/login/login';
import { FindpasswordPage } from '../pages/findpassword/findpassword';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { UserBaseInfoPage} from '../pages/user-base-info/user-base-info'
import {UserCarinfoPage} from '../pages/user-carinfo/user-carinfo'
import {UserUplaodPage} from '../pages/user-uplaod/user-uplaod'
import {UserAddAddressPage} from '../pages/user-add-address/user-add-address'

import {ApplicationRecordListPage} from '../pages/application-record-list/application-record-list'
import {SelectCarPage} from '../pages/select-car/select-car'

import {RecordCarPage} from '../pages/record-car/record-car'
import {BillListPage} from '../pages/bill-list/bill-list'
import {BillDetailPage} from '../pages/bill-detail/bill-detail'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//导入自定义组件
import { ComponentsModule } from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';
// import {SelectCarNoComponent} from '../components/select-car-no/select-car-no'
import { IonicStorageModule } from '@ionic/storage';
//导入四个外部加载进来的组件，上传图片部分相关组件
import { File } from '@ionic-native/file';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
//版本控制相关
import {AppVersion} from '@ionic-native/app-version';
import {FileOpener} from '@ionic-native/file-opener';

////请求拦截相关
import {Http, XHRBackend, RequestOptions} from "@angular/http";//请求拦截相关 
import {HttpIntercept} from "../providers/http/HttpIntercept";//请求拦截相关
import {HttpInterceptHandle} from '../providers/http/HttpInterceptHandle'

//登录拦截实例化抽取
export function loginHttpInterceptHandleFactory(backend: XHRBackend, defaultOptions: RequestOptions, httpInterceptHandle: HttpInterceptHandle) {
  return new HttpIntercept(backend, defaultOptions, httpInterceptHandle)
}

import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { VersionServiceProvider } from '../providers/version-service/version-service';
@NgModule({
  declarations: [ /*申明组件*/
    MyApp,
    HomePage, //注意入口页面在打包压缩版时不要加入IonicPageModule
    FindpasswordPage, //start
    LoginPage,
    RegisterPage,
    UserBaseInfoPage,
    UserCarinfoPage,
    UserUplaodPage,
    UserAddAddressPage,
    ApplicationRecordListPage,
    RecordCarPage,
    BillListPage,
    BillDetailPage,
    SelectCarPage,//end
    TabsPage
  ],
  imports: [  /*引入的模块 依赖的模块*/
    BrowserModule,
    // //压缩版打包添加开始
    // IonicPageModule.forChild(FindpasswordPage),
    // IonicPageModule.forChild(LoginPage),
    // IonicPageModule.forChild(RegisterPage),
    // IonicPageModule.forChild(UserBaseInfoPage),
    // IonicPageModule.forChild(UserCarinfoPage),
    // IonicPageModule.forChild(UserUplaodPage),
    // IonicPageModule.forChild(UserAddAddressPage),
    // IonicPageModule.forChild(ApplicationRecordListPage),
    // IonicPageModule.forChild(RecordCarPage),
    // IonicPageModule.forChild(BillListPage),
    // IonicPageModule.forChild(BillDetailPage),
    // IonicPageModule.forChild(SelectCarPage),
    //压缩版打包添加结束
    HttpModule, //全局需要导入 HTTP
    ComponentsModule,
    PipesModule,
    IonicModule.forRoot(MyApp,{
      // tabsHideOnSubPages: true, 
      tabsHideOnSubPages: 'true' ,  
      backButtonText: '返回',
      mode: 'ios'
      }),
      IonicStorageModule.forRoot() //全局定义 storage 的模块
  ],
  bootstrap: [IonicApp],
  entryComponents: [  /*配置不会在模板中使用的组件*/
    MyApp,
    LoginPage,
    FindpasswordPage,
    RegisterPage,
    HomePage,
    UserBaseInfoPage,
    UserCarinfoPage,
    UserUplaodPage,
    UserAddAddressPage,
    ApplicationRecordListPage,
    SelectCarPage,
    RecordCarPage,
    BillListPage,
    BillDetailPage,
    TabsPage
  ],
  providers: [ /*配置服务*/
    StatusBar,
    RestProvider, //rest 的定义导入
    ConfigProvider,
    File,
    Transfer,
    FilePath,
    Camera, //
    AppVersion,
    FileOpener,
    SplashScreen,
    ThemeableBrowser,
    InAppBrowser,
    HttpInterceptHandle, //请求拦截相关
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {//请求拦截相关
      provide: Http,
      useFactory: loginHttpInterceptHandleFactory,
      deps: [XHRBackend, RequestOptions, HttpInterceptHandle]
    },
    UtilsProvider,
    NativeService,
    VersionServiceProvider
  ]
})
export class AppModule {}
