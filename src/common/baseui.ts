import { Loading, LoadingController, ToastController, Toast } from 'ionic-angular';

/**
 * UI 层的所有公用方法的抽象类
 * 
 * @export
 * @abstract
 * @class BaseUI
 */
export abstract class BaseUI {
    public loader : any
    public toast:any;
    constructor() { }

    /**
     * 通用的展示 loading 的组件
     * 
     * @protected
     * @param {LoadingController} loadingCtrl 
     * @param {string} message 
     * @returns {Loading} 
     * @memberof BaseUI
     */
    protected showLoading(loadingCtrl: LoadingController,
        message: string): Loading {
        if(!this.loader) {
            this.loader = loadingCtrl.create({
                content: message,
                dismissOnPageChange: true //页面变化的时候自动关闭 loading
            });
            this.loader.present();
            return this.loader;
        }
    }
    protected hideLoading(loadingCtrl: LoadingController): Loading {
        if(this.loader) {
            this.loader.dismissAll();
            return this.loader;
        }
    }

    /**
     * 通用的展示 toast 的组件
     * 
     * @protected
     * @param {ToastController} toastCtrl 
     * @param {string} message 
     * @returns {Toast} 
     * @memberof BaseUI
     */
    protected showToast(toastCtrl: ToastController, message: string,duration?: number): Toast {
        // if(!this.toast) {
            this.toast = toastCtrl.create({
                message: message,
                duration: duration || 3000, //默认展示的时长
                position: 'top'
            });
            this.toast.present();
            
        // }
        return this.toast;
    }

    // protected showTips(message: string) {

    // }
}