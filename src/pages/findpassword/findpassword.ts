import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ToastController } from 'ionic-angular'; //IonicPage
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import {HomePage} from '../home/home'
// import {LoginPage} from '../login/login'
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FindpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-findpassword',
  templateUrl: 'findpassword.html',
})
export class FindpasswordPage extends BaseUI {
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
  goBackLogin() {
    this.navCtrl.parent.select(1);
  }
  ionViewDidEnter() {
    this.codeBtnText = '发送验证码';
    this.codeBtnDisable = false;
    this.btnDisable = false;
    this.timer && clearInterval(this.timer)
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad FindpasswordPage');
  }
  getCode() {
    let mobile = this.mobile;
    if (!mobile) {
      super.showToast(this.toastCtrl, '请输入手机号码',1000);
      return false
    }
    if (!/1[3|4|5|7|8]\d{9}/.test(mobile)) {
      super.showToast(this.toastCtrl, '请输入正确手机号码',1000);
      return false
    }
    this.codeBtnDisable = true
    console.log(this.codeBtnDisable)
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
  registerCheck() {
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
        that.btnDisable = false
       }else{
         alert(data.message);
         that.btnDisable = false
         that.codeBtnDisable = false
          clearInterval(that.timer)
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
}
