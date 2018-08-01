import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
// import {RegisterPage} from '../register/register'
// import {UserCarinfoPage} from '../user-carinfo/user-carinfo'
import {HomePage} from '../home/home'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage extends BaseUI {
  btnDisable:Boolean=false;
  mobile: any;
  password: any;
  errorMessage: any;
  isCloseEye: Boolean = true;
  eyeStatus: string = 'eye-off';
  pswType: string = 'password';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    public storage: Storage) {
    super(); //调用父类的构造函数 constructor
    this.storage.get('mobile').then((val) => {
      this.mobile = val;
    })
  }
  // ionViewDidEnter() {
    
  // }
   login(){
    var api='Login/UserLogin';
    var params = {
      data: {
        Identifier: this.mobile,
        Credential: this.password
      },
      token: 11111
    }
    console.log(this.mobile);
    if (!this.mobile) {
      super.showToast(this.toastCtrl, '请输入手机号码',1000);
      return
    }
    if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
      super.showToast(this.toastCtrl, '请输入正确手机号码',1000);
      return
    }
    if (!this.password) {
      super.showToast(this.toastCtrl, '请输入密码',1000);
      return
    }
    this.btnDisable=true;
    this.rest.doPost(api, params,(data)=>{
       console.log(data);
        if(data.issuccess){
          //登录成功的页面跳转
          //存储接口返回的 token
         super.showToast(this.toastCtrl, data.message,800);
         setTimeout(()=>{
          this.storage.set('token', data.result.Token);
          this.storage.set('mobile', this.mobile);
          this.gotoHomePage();
          this.btnDisable=false;
         },1500)
        }else{
          alert(data.message);
          this.btnDisable=false;
        }
    })
  }

  /**
   * 关闭当前页面的方法
   * 
   * @memberof LoginPage
   */
  dismiss() {
    // this.viewCtrl.dismiss();
    this.navCtrl.push(HomePage);
  }
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
  gotofindpassword(){
    this.navCtrl.parent.select(3);
    // alert('gotofindpassword')
    this.storage.set('mobile', this.mobile);
  }
  gotoresigster(){
    this.navCtrl.parent.select(2);
    // this.navCtrl.push(RegisterPage);
    // alert('gotofindpassword')
    this.storage.set('mobile', this.mobile);
  }
  // 
    gotoHomePage() {
    // this.navCtrl.push(HomePage);
    this.navCtrl.parent.select(0);
  }
}
