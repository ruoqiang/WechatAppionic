import {Injectable} from '@angular/core';
import {ToastController,LoadingController,Events } from 'ionic-angular';
import {BaseUI} from "../../common/baseui";
// import {LoginPage} from '../../pages/login/login'
@Injectable()
export class HttpInterceptHandle extends BaseUI {
  constructor(public events: Events, public toastCtrl: ToastController,public loadingCtrl: LoadingController) {
      super();
    events.subscribe('request:before', (url, options) => {
      console.log('loading..')
     
      if((url).indexOf('needload') >-1) { //如果有需要加载的标记
        super.showLoading(this.loadingCtrl,'数据加载。。');
      }
      console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
    });

    events.subscribe('request:success', (url, options, res) => {
      if((url).indexOf('needload') <0) { //如果没有需要加载的标记，说明需要去除loading
        super.hideLoading(this.loadingCtrl);
      }
      console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
    });

    events.subscribe('request:error', (url, options, error) => {
      console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'error', error);
      let status = error.status;
      if (status === 0) {
        // nativeService.showToast('请求响应错误，请检查网络');
        super.showToast(this.toastCtrl, '请求响应错误，请检查网络',1000);
      } else if (status === 404) {
        // nativeService.showToast('请求链接不存在，请联系管理员');
        super.showToast(this.toastCtrl, '请求链接不存在，请联系管理员',1000);
      } else if (status === 500) {
        // nativeService.showToast('服务器出错，请稍后再试');
        super.showToast(this.toastCtrl, '服务器出错，请稍后再试',1000);
        
      } else {
        // nativeService.showToast('未知错误，请检查网络');
        super.showToast(this.toastCtrl, '未知错误，请检查网络',1000);
        
      }
    });
  }

}

