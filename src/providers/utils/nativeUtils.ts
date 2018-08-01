/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import {Injectable} from '@angular/core';
import {Platform, AlertController} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {File} from '@ionic-native/file';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {FileOpener} from '@ionic-native/file-opener';
import {InAppBrowser} from '@ionic-native/in-app-browser';
// import {APP_DOWNLOAD, APK_DOWNLOAD} from "./Constants";

@Injectable()


export class NativeService {
   public APP_DOWNLOAD = 'http://wechat.chepass.com:8021/Content/dist/';//ios app下载地址
   public APK_DOWNLOAD = 'http://wechat.chepass.com:8021/Content/dist/android-release.apk';//apk下载完整地址
  constructor(private platform: Platform,
              private alertCtrl: AlertController,
              private transfer: Transfer,
              private appVersion: AppVersion,
              private file: File,
              private fileOpener: FileOpener,
              private inAppBrowser: InAppBrowser) {
  }


  /**
   * 检查app是否需要升级
   */
  detectionUpgrade() {
    //这里连接后台获取app最新版本号,然后与当前app版本号(this.getVersionNumber())对比
    //版本号不一样就需要申请,不需要升级就return
    this.alertCtrl.create({
      title: '升级',
      subTitle: '发现新版本,是否立即升级？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.downloadApp();
          }
        }
      ]
    }).present();
  }

  /**
   * 下载安装app
   */
  downloadApp() {
    if (this.isAndroid()) {
      let alert = this.alertCtrl.create({
        title: '下载进度：0%',
        enableBackdropDismiss: false,
        buttons: ['后台下载']
      });
      alert.present();

      const fileTransfer: TransferObject = this.transfer.create();
      const apk = this.file.externalRootDirectory + 'android.apk'; //apk保存的目录
      console.log('apk--externalRootDirectory-', this.file.externalRootDirectory)
      fileTransfer.download(this.APK_DOWNLOAD, apk).then(() => {
          console.log('this.APK_DOWNLOAD---', this.APK_DOWNLOAD)
       this.fileOpener.open(apk,'application/vnd.android.package-archive');
      });

      fileTransfer.onProgress((event: ProgressEvent) => {
        let num = Math.floor(event.loaded / event.total * 100);
        if (num === 100) {
          alert.dismiss();
        } else {
          let title = document.getElementsByClassName('alert-title')[0];
          // console.log('num---', num)
          title && (title.innerHTML = '下载进度：' + num + '%');
        }
      });
    }
    if (this.isIos()) {
      this.openUrlByBrowser(this.APP_DOWNLOAD);
    }
  }

  /**
   * 通过浏览器打开url
   */
  openUrlByBrowser(url:string):void {
    this.inAppBrowser.create(url, '_system');
  }

  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   * @return {boolean}
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   * @return {boolean}
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  /**
   * 获得app版本号,如0.01
   * @description  对应/config.xml中version的值
   * @returns {Promise<string>}
   */
  getVersionNumber(): Promise<string> {
    return new Promise((resolve) => {
      this.appVersion.getVersionNumber().then((value: string) => {
        resolve(value);
      }).catch(err => {
        console.log('getVersionNumber:' + err);
      });
    });
  }
}
