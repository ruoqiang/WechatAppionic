import { Component } from '@angular/core';
// import {CustomToastProvider} from '../../providers/custom-toast/custom-toast'
// import { HttpModule } from '@angular/http';
/**
 * Generated class for the CustomToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-toast',
  templateUrl: 'custom-toast.html'
})
export class CustomToastComponent {

  text: string;
  active: boolean = false;
  message: string = '自定义Toast';
  myHide = false;
  
  Timer:any;
  constructor() { //private customToast: CustomToastProvider
    // this.customToast.show = this.show.bind(this);
  }
  show(message, duration?) {
     duration = duration | 500;
      this.message = message;
      this.active = true;
      this.clearTimer(); //
      this.Timer = setTimeout(() => {
        this.myHide = false;  
        this.active = false;
      }, duration);

      // setTimeout(() => {
      //     this.myHide = true;
      //     setTimeout(() => {
      //       this.myHide = false;  
      //       this.active = false;
      //     }, duration)  // 隐藏动画完后再移除
      // }, duration);
    }
    clearTimer() {
      clearTimeout(this.Timer)
      this.Timer = null
    }
}
