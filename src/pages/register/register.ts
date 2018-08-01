// import { Component } from '@angular/core';
// import { NavController, NavParams, ToastController, ViewController, LoadingController } from 'ionic-angular';

// // import { HttpClientModule } from '@angular/common/http'; 
// // import { HttpModule } from '@angular/http';
// // import "../login/login.scss";
// // import { BaseUI } from '../../common/baseui';
// import { RestProvider} from '../../providers/rest/rest';
// /**
//  * Generated class for the RegisterPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @Component({
//   selector: 'page-register',
//   templateUrl: 'register.html'
// })

// // export class RegisterPage extends BaseUI {

// //   mobile: any;
// //   nickname: any;
// //   password: any;
// //   confirmPassword: any;
// //   errorMessage: any;

// //   constructor(public navCtrl: NavController,
// //     public navParams: NavParams,
// //     public viewCtrl: ViewController,
// //     public rest: RestProvider,
// //     public toastCtrl: ToastController,
// //     public loadingCtrl: LoadingController) {
// //     super();
// //   }

// //   ionViewDidLoad() {
// //     console.log('ionViewDidLoad RegisterPage');
// //   }

// //   dismiss() {
// //     this.viewCtrl.dismiss();
// //   }

// //   gotoLogin() {
// //     this.navCtrl.pop();
// //   }

// //   register() {
// //     if (this.password != this.confirmPassword) {
// //       super.showToast(this.toastCtrl, "两次输入的密码不匹配。");
// //     }
// //     else {
// //       var loading = super.showLoading(this.loadingCtrl, "注册中...");
// //       this.rest.register(this.mobile,this.nickname,this.password)
// //       .subscribe(
// //         f=>{
// //           if(f["Status"]=="OK"){
// //             loading.dismiss();
// //             super.showToast(this.toastCtrl,"注册成功。");
// //             this.dismiss();
// //           }
// //           else{
// //             loading.dismiss();
// //             super.showToast(this.toastCtrl,f["StatusContent"]);
// //           }
// //         },
// //         error => this.errorMessage = <any>error);
// //     }
// //   }
// // }

// // export class RegisterPage extends BaseUI
// export class RegisterPage {
//   mobile: any;
//   mscode: any;
//   nickname:any;
//   password: any;
//   // confirmPassword: any;
//   errorMessage: any;
//   constructor(public navCtrl: NavController, 
//     public navParams: NavParams,
//     public toastCtrl: ToastController,
//     public viewCtrl: ViewController,
//     public rest: RestProvider,
//     public loadingCtrl: LoadingController) { //// public rest: RestProvider
//   }

//   dismiss() {
//     this.viewCtrl.dismiss();
//   }
//   showToast(message: string) {
//     let toast = this.toastCtrl.create({
//       message: message,
//       duration: 3000,
//       position: 'top',
//       cssClass: 'toastClass'
//     });
  
//     toast.onDidDismiss(() => {
//       console.log('Dismissed toast');
//     });
  
//     toast.present();
//   }
 
// //   showToast(message: string) {
// //     let toast = this.toastCtrl.create({
// //         message: message,
// //         duration: 3000, //默认展示的时长
// //         position: 'bottom'
// //     });
// //     toast.present();
// //     return toast;
// // }
//   gotologin() {
//     this.navCtrl.parent.select(1);
//   }
//   register() {
//     this.nickname = 'jax_' + new Date().getTime();
//     console.log(this.nickname)
//     console.log(this.mobile)
//     if (this.mobile === '' || this.mobile === null || this.mobile === undefined) {
//       this.showToast("请输入手机号");
//       return;
//     } 
//     if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
//       this.showToast("请输入正确的手机号");
//       return
//     }
//     if (this.password === '' || this.password === null || this.password === undefined) {
//       this.showToast("请输入验证码");
//       return;
//     } 
//     if (this.mscode === '' || this.mscode === null || this.mscode === undefined) {
//       this.showToast("请输入验证码");
//       return;
//     }
//     // var loading = super.showLoading(this.loadingCtrl, "注册中...");
//     let loading = this.loadingCtrl.create({
//       content: 'Please wait...'
//     });
  
//     loading.present();
//     let me = this;
//     this.rest.register(this.mobile,this.nickname,this.password)
//     .subscribe(
//       f=>{
//         if(f["Status"]=="OK"){
//           loading.dismiss();
//           me.showToast("注册成功。");
//           // this.dismiss();
//           this.navCtrl.parent.select(2);
//         }
//         else{
//           loading.dismiss();
//           me.showToast(f["StatusContent"]);
//         }
//       },
//       error => this.errorMessage = <any>error);
//   }
// }

import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage,LoadingController,ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import {HomePage} from '../home/home'
// import {LoginPage} from '../login//login'
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FindpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage extends BaseUI {
   mobile:any = '';
   code:any = '';
   password:any = '';
   
   codeBtnDisable:Boolean = false;
   btnDisable:Boolean = false;
   codeBtnText:any = '发送验证码';
   timer:any;

   isCloseEye: Boolean = true;
   eyeStatus: string = 'eye-off';
   pswType: string = 'password';
   isShowPop:Boolean = false;
   unchose: Boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    public storage:Storage) {
    super(); //调用父类的构造函数 constructor
    this.storage.get('mobile').then((val) => {
      this.mobile = val;
    })
  }
  ionViewDidEnter() {
    this.codeBtnText = '发送验证码';
    this.codeBtnDisable = false;
    this.btnDisable = false;
    this.timer && clearInterval(this.timer)
  }
  getCode() {
    let mobile = this.mobile;
    if (!mobile) {
      super.showToast(this.toastCtrl, '请输入手机号码',1000);
      return
    }
    if (!/1[3|4|5|7|8]\d{9}/.test(mobile)) {
      super.showToast(this.toastCtrl, '请输入正确手机号码',1000);
      return
    }
    this.codeBtnDisable = true
    // console.log(this.codeBtnDisable)
    this.postVcode(mobile)
    let total = 59
    this.codeBtnText = `${total}秒`
    this.timer = setInterval(() => {
      console.log(total)
      --total
      this.codeBtnText = `${total}秒`
      if (total <= 0) {
        clearInterval(this.timer)
        this.codeBtnText = '发送验证码'
        this.codeBtnDisable = false
      }
    }, 1000)
  }
  postVcode(mobile) {
    var that = this
    var api='ComService/PostVcode';
    var params = {
        data: {
          Phone: mobile
        },
        token: 11111
    }
    this.rest.doPost(api, params,(data)=>{
      console.log(data);
       if(data.issuccess){
        super.showToast(this.toastCtrl, data.message,800);
       }else{
          alert(data.message);
          that.codeBtnDisable = false
          clearInterval(that.timer)
          that.codeBtnText = `发送验证码`
          return false
       }
   })
  }
  /**
   * 注册
   * 
   * @returns 
   * @memberof FindpasswordPage
   */
  register() {
    var that = this
    if (this.mobile === '') {
      super.showToast(this.toastCtrl, '请输入手机号码',1000);
      return
    }
    if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
      super.showToast(this.toastCtrl, '请输入正确手机号码',1000);
      return
    }
    if (this.code === '') {
      
      super.showToast(this.toastCtrl, '请输入短信验证码',1000);
      return false
    }
    if (this.password === '') {
      super.showToast(this.toastCtrl, '请输入密码',1000);
      return false
    }
    if (!this.unchose) {
      super.showToast(this.toastCtrl, '请输勾选同意注册协议',1000);
      return false
    }
    // if (!this.isAgree) {
    //   this.tipsText = '请勾同意选协议'
    //   this.$refs.toopTips.show()
    //   return false
    // }
    var api='Login/UserRegister';
    var params = {
      data: {
        Identifier: this.mobile,
        Credential: this.password,
        Additional: this.code
      },
      token: 11111
        // Additional2: this.inviteMoblie
    }
    this.btnDisable = true
    this.rest.doPost(api, params,(data)=>{
      console.log(data);
       if(data.issuccess){
         //登录成功的页面跳转
         //存储接口返回的 token
        super.showToast(this.toastCtrl, data.message,800);
        this.storage.set('token', data.result.Token);
        this.navCtrl.push(HomePage);
        this.btnDisable=true;
       }else{
         alert(data.message);
         that.btnDisable = false
         that.codeBtnDisable = false
          clearInterval(that.timer)
          that.codeBtnText = `发送验证码`
         return false
       }
   })
  }
  /**
   * 密码显示隐藏切换
   * @memberof FindpasswordPage
   */
  eyeSwitch() {
    if(this.isCloseEye) {
      this.eyeStatus = 'eye-off';
      this.pswType = 'password'
    }else {
      this.eyeStatus = 'eye';
      this.pswType = 'text'
    }
    this.isCloseEye = !this.isCloseEye;
  }
    gotologin() {
    this.navCtrl.parent.select(1);
    this.storage.set('mobile', this.mobile);
  }
  switchChoose() {
    this.unchose = !this.unchose
    console.log(this.unchose)
  }
  hidePop() {
    this.isShowPop = false
  }
  showPop() {
    this.isShowPop = true 
  }
}

