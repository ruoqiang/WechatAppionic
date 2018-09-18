webpackJsonp([1],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';


/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConfigProvider = /** @class */ (function () {
    //地址失效请访问 API 接口实时更新地址：https://www.itying.com/article-11.html
    function ConfigProvider(platform) {
        this.platform = platform;
        //api请求地址
        this.apiUrl = "http://wechat.chepass.com:8021/"; //http://wechat.chepass.com:8021/
        console.log(this.platform.is('mobileweb'));
        if (this.platform.is('mobileweb')) {
            this.apiUrl = '/';
        }
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
// import { Component } from '@angular/core';
// import { NavController, NavParams, ToastController, ViewController, LoadingController } from 'ionic-angular';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
//template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-icon name="arrow-back" (click)="gotologin()"><span>返回</span></ion-icon>\n      <ion-title>用户注册</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <div  id="">\n      <div class="title">\n        <div>用户注册</div>\n      </div>\n      <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n        <div data-v-1a32f292="" class="input size-0 align-1">\n          <label data-v-3c0fb276="" data-v-1a32f292="">手机号</label>\n          <input data-v-3c0fb276="" data-v-1a32f292="" type="tel" name="" placeholder="请输入手机号" [(ngModel)]="mobile" maxlength="11">\n        </div>\n      </div>\n      <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n        <div data-v-1a32f292="" class="input size-0 align-1">\n          <label data-v-3c0fb276="" data-v-1a32f292="">验证码</label>\n          <input data-v-3c0fb276="" data-v-1a32f292="" name="" placeholder="请输入验证码" [(ngModel)]="code"\n          maxlength="5">\n             <div class="send-smg-code " (click)="getCode()" [ngClass]="{\'disable\': codeBtnDisable}">{{codeBtnText}}</div>\n        </div>\n      </div>\n      <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n        <div data-v-1a32f292="" class="input size-0 align-1">\n          <label data-v-3c0fb276="" data-v-1a32f292="">新密码</label>\n          <input data-v-3c0fb276="" data-v-1a32f292="" name="" placeholder="请输入新密码" [(ngModel)]="password"\n            maxlength="16"  [type]="pswType">\n            <ion-icon [name]="eyeStatus" class="eye" (click)="eyeSwitch()"></ion-icon>\n        </div>\n      </div>\n      <div class="agree-register">\n        <div class="agree-check" [ngClass]="{unchose:unchose===false}" (click)="switchChoose()"></div>\n        <div class="agree-text">\n            同意《\n            <a class="agree-text2" (click)="showPop()">\n                注册协议\n            </a>\n            》\n        </div>\n    </div>\n      <div  class="buttonBox" [ngClass]="{\'disable\':btnDisable===true}">\n          <div data-v-766fd0c5="" class="button">\n            <button ion-button block (click)="register()" [color]="btnDisable===true?\'light\':\'\'">确定</button>\n          </div>\n      </div>\n      \n      <div  class="buttonBox mt20" (click)="gotologin()" >\n        <button ion-button block outline >已有账号，去登录</button>\n    </div>\n      <div class="top-tip" style="display: none;">\n        请输入。。\n      </div>\n      <div data-v-7811bac2=""  class="confirm" style="display: none;">\n        <div data-v-7811bac2="" class="confirm-wrapper">\n          <div data-v-7811bac2="" class="confirm-content">\n            <p data-v-7811bac2="" class="text">请输入。。</p>\n            <div data-v-7811bac2="" class="operate">\n              <!---->\n              <div data-v-7811bac2="" class="operate-btn">确定</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ion-scroll scrollY="true"  class="register-pop-scroll" [hidden]="!isShowPop">\n      <div class="register-pop">\n        <h2>一、特别提示 </h2>\n        <p>在此特别提醒您（用户）在注册成为上海易路通达车联网信息科技有限公司（以下简称“易路通达”）用户之前，请认真阅读本《用户服务协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。 </p>\n        <p>本协议约定易路通达与用户之间关于“易路通达服务”（以下简称“服务”）的权利义务。“用户”是指注册、登录、使用本服务的公司或个人。本协议可由易路通达随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本站中查阅最新版协议条款。在修改协议条款后，如果用户不接受修改后的条款，请立即停止使用易路通达提供的服务，用户继续使用易路通达提供的服务将被视为接受修改后的协议。 </p>\n        <h2>二、账号注册 </h2>\n        <p>1、用户在使用本服务前需要注册一个“易路通达”账号。“易路通达”账号应当使用手机号码绑定注册，请用户使用尚未与“易路通达”账号绑定的手机号码，以及未被易路通达根据本协议封禁的手机号码注册“易路通达”账号。易路通达可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。 </p>\n        <p>2、如果注册申请者有被易路通达封禁的先例或涉嫌虚假注册及滥用他人名义注册，及其他不能得到许可的理由， 易路通达将拒绝其注册申请。 </p>\n        <p>3、鉴于“易路通达”账号的绑定注册方式，您同意易路通达在注册时将允许您的手机号码及手机设备识别码等信息用于注册。 </p>\n        <p>4、在用户注册及使用本服务时，易路通达需要搜集能识别用户身份的个人信息以便易路通达可以在必要时联系用户，或为用户提供更好的使用体验。易路通达搜集的信息包括但不限于用户的姓名、地址。</p>\n        <h2>三、账户安全 </h2>\n        <p>1、用户一旦注册成功，成为易路通达的用户，将得到一个用户名和密码，并有权利使用自己的用户名及密码随时登陆易路通达。</p>\n        <p>2、用户对用户名和密码的安全负全部责任，同时对以其用户名进行的所有活动和事件负全责。 </p>\n        <p>3、用户不得以任何形式擅自转让或授权他人使用自己的易路通达用户名。</p>\n        <p>4、如果用户泄漏了密码，有可能导致不利的法律后果，因此不管任何原因导致用户的密码安全受到威胁，应该立即和易路通达客服人员取得联系，否则后果自负。 </p>\n        <h2>四、用户个人信息保护</h2>\n        <p>1、保护用户个人信息是易路通达的一项基本原则。</p>\n        <p>2、您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，则无法使用本服务或在使用过程中受到限制。</p>\n        <p>3、一般情况下，您可随时浏览、修改自己提交的信息，但出于安全性和身份识别（如号码申诉服务）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。</p>\n        <p>4、易路通达将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。</p>\n        <p>5、易路通达保证不对外公开或向第三方披露或提供用户注册资料及用户在使用网络服务时存储在易路通达平台、服务器或数据库的非公开内容和信息，但下列情况除外：</p>\n        <p>1) 事先获得用户的明确授权；</p>\n        <p>2) 根据有关的法律法规要求；</p>\n        <p>3) 按照相关政府主管部门和司法机关的要求；</p>\n        <p>4) 为维护社会公众的利益；</p>\n        <p>5) 为维护易路通达的合法权益。</p>\n        <h2>五、用户声明与保证</h2>\n        <p>1、用户承诺其为具有完全民事行为能力的民事主体，且具有达成交易履行其义务的能力。</p>\n        <p>2、用户有义务在注册时提供自己的真实资料，并保证诸如手机号码、姓名、所在地区等内容的有效性及安全性，保证易路通达工作人员可以通过上述联系方式与用户取得联系。同时，用户也有义务在相关资料实际变更时及时更新有关注册资料。 </p>\n        <p>3、用户通过使用服务的过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复和相关链接页面，以及其他使用账号或本服务所产生的内容，不得违反国家相关法律制度，包含但不限于如下原则： </p>\n        <p>（1）反对宪法所确定的基本原则的； </p>\n        <p>（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的； </p>\n        <p>（3）损害国家荣誉和利益的； </p>\n        <p>（4）煽动民族仇恨、民族歧视，破坏民族团结的； </p>\n        <p>（5）破坏国家宗教政策，宣扬邪教和封建迷信的； </p>\n        <p>（6）散布谣言，扰乱社会秩序，破坏社会稳定的； </p>\n        <p>（7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>\n        <p>（8）侮辱或者诽谤他人，侵害他人合法权益的； </p>\n        <p>9）含有法律、行政法规禁止的其他内容的。 </p>\n        <p>4、用户不得利用“易路通达”账号或本服务制作、上载、复制、发布、传播下干扰易路通达正常运营，以及侵犯其他用户或第三方合法权益的内容： </p>\n        <p>（1）含有任何性或性暗示的； </p>\n        <p>（2）含有辱骂、恐吓、威胁内容的； </p>\n        <p>（3）含有骚扰、垃圾广告、恶意信息、诱骗信息的；</p>\n        <p>（4）涉及他人隐私、个人信息或资料的； </p>\n        <p>（5）侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；</p>\n        <p>（6）含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益内容的信息。</p>\n        <h2>六、服务内容 </h2>\n        <p>1、易路通达具体服务内容由易路通达根据实际情况提供，包括但不限于：</p>\n        <p>（1）在线咨询服务； </p>\n        <p>（2）服务商收入结算和用户支付费用：具体金额以易路通达产生的统计数据为准。 </p>\n        <p>2、易路通达有权随时审核或删除用户发布/传播的涉嫌违法或违反社会主义精神文明，或者被易路通达认为不妥当的内容（包括但不限于文字、语音、图片、视频、图文等）。 </p>\n        <p>3、所有发给用户的通告及其他消息都可通过本站或者用户所提供的联系方式发送。 </p>\n        <h2>七、服务的终止 </h2>\n        <p>1、在下列情况下，易路通达有权终止向用户提供服务： </p>\n        <p>（1）在用户违反本服务协议相关规定时，易路通达有权终止向该用户提供服务。如该用户再一次直接或间接或以他人名义注册为用户的，一经发现，易路通达有权直接单方面终止向该用户提供服务； </p>\n        <p>（2）如易路通达通过用户提供的信息与用户联系时，发现用户在注册时填写的联系方式已不存在或无法接通，易路通达以其它联系方式通知用户更改，而用户在三个工作日内仍未能提供新的联系方式，易路通达有权终止向该用户提供服务； </p>\n        <p>（3）用户不得通过程序或人工方式进行刷量或作弊，若发现用户有作弊行为，易路通达将立即终止服务，并有权扣留账户内金额；</p>\n        <p>（4）一旦易路通达发现用户提供的数据或信息中含有虚假内容，易路通达有权随时终止向该用户提供服务； </p>\n        <p>（5）本服务条款终止或更新时，用户明示不愿接受新的服务条款；</p>\n        <p>（6）其它易路通达认为需终止服务的情况。 </p>\n        <p>2、服务终止后，易路通达没有义务为用户保留原账号中或与之相关的任何信息，或转发任何未曾阅读或发送的信息给用户或第三方。</p>\n      </div>\n      <div class="back-btn-close" (click)="hidePop()">\n        <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n      </div>\n    </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\register\register.html"*/
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





// import {LoginPage} from '../login//login'

/**
 * Generated class for the FindpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(navCtrl, navParams, loadingCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.mobile = '';
        _this.code = '';
        _this.password = '';
        _this.codeBtnDisable = false;
        _this.btnDisable = false;
        _this.codeBtnText = '发送验证码';
        _this.isCloseEye = true;
        _this.eyeStatus = 'eye-off';
        _this.pswType = 'password';
        _this.isShowPop = false;
        _this.unchose = true;
        _this.storage.get('mobile').then(function (val) {
            _this.mobile = val;
        });
        return _this;
    }
    RegisterPage.prototype.ionViewDidEnter = function () {
        this.codeBtnText = '发送验证码';
        this.codeBtnDisable = false;
        this.btnDisable = false;
        this.timer && clearInterval(this.timer);
    };
    RegisterPage.prototype.getCode = function () {
        var _this = this;
        var mobile = this.mobile;
        if (!mobile) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入手机号码', 1000);
            return;
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(mobile)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确手机号码', 1000);
            return;
        }
        this.codeBtnDisable = true;
        // console.log(this.codeBtnDisable)
        this.postVcode(mobile);
        var total = 59;
        this.codeBtnText = total + "\u79D2";
        this.timer = setInterval(function () {
            console.log(total);
            --total;
            _this.codeBtnText = total + "\u79D2";
            if (total <= 0) {
                clearInterval(_this.timer);
                _this.codeBtnText = '发送验证码';
                _this.codeBtnDisable = false;
            }
        }, 1000);
    };
    RegisterPage.prototype.postVcode = function (mobile) {
        var _this = this;
        var that = this;
        var api = 'ComService/PostVcode';
        var params = {
            data: {
                Phone: mobile
            },
            token: 11111
        };
        this.rest.doPost(api, params, function (data) {
            console.log(data);
            if (data.issuccess) {
                _super.prototype.showToast.call(_this, _this.toastCtrl, data.message, 800);
            }
            else {
                alert(data.message);
                that.codeBtnDisable = false;
                clearInterval(that.timer);
                that.codeBtnText = "\u53D1\u9001\u9A8C\u8BC1\u7801";
                return false;
            }
        });
    };
    /**
     * 注册
     *
     * @returns
     * @memberof FindpasswordPage
     */
    RegisterPage.prototype.register = function () {
        var _this = this;
        var that = this;
        if (this.mobile === '') {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入手机号码', 1000);
            return;
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确手机号码', 1000);
            return;
        }
        if (this.code === '') {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入短信验证码', 1000);
            return false;
        }
        if (this.password === '') {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入密码', 1000);
            return false;
        }
        if (!this.unchose) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输勾选同意注册协议', 1000);
            return false;
        }
        // if (!this.isAgree) {
        //   this.tipsText = '请勾同意选协议'
        //   this.$refs.toopTips.show()
        //   return false
        // }
        var api = 'Login/UserRegister';
        var params = {
            data: {
                Identifier: this.mobile,
                Credential: this.password,
                Additional: this.code
            },
            token: 11111
            // Additional2: this.inviteMoblie
        };
        this.btnDisable = true;
        this.rest.doPost(api, params, function (data) {
            console.log(data);
            if (data.issuccess) {
                //登录成功的页面跳转
                //存储接口返回的 token
                _super.prototype.showToast.call(_this, _this.toastCtrl, data.message, 800);
                _this.storage.set('token', data.result.Token);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                _this.btnDisable = true;
            }
            else {
                alert(data.message);
                that.btnDisable = false;
                that.codeBtnDisable = false;
                clearInterval(that.timer);
                that.codeBtnText = "\u53D1\u9001\u9A8C\u8BC1\u7801";
                return false;
            }
        });
    };
    /**
     * 密码显示隐藏切换
     * @memberof FindpasswordPage
     */
    RegisterPage.prototype.eyeSwitch = function () {
        if (this.isCloseEye) {
            this.eyeStatus = 'eye-off';
            this.pswType = 'password';
        }
        else {
            this.eyeStatus = 'eye';
            this.pswType = 'text';
        }
        this.isCloseEye = !this.isCloseEye;
    };
    RegisterPage.prototype.gotologin = function () {
        this.navCtrl.parent.select(1);
        this.storage.set('mobile', this.mobile);
    };
    RegisterPage.prototype.switchChoose = function () {
        this.unchose = !this.unchose;
        console.log(this.unchose);
    };
    RegisterPage.prototype.hidePop = function () {
        this.isShowPop = false;
    };
    RegisterPage.prototype.showPop = function () {
        this.isShowPop = true;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-icon name="arrow-back" (click)="gotologin()"><span>返回</span></ion-icon>\n      <ion-title>用户注册</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <div  id="">\n      <div class="title">\n        <div>用户注册</div>\n      </div>\n      <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n        <div data-v-1a32f292="" class="input size-0 align-1">\n          <label data-v-3c0fb276="" data-v-1a32f292="">手机号</label>\n          <input data-v-3c0fb276="" data-v-1a32f292="" type="tel" name="" placeholder="请输入手机号" [(ngModel)]="mobile" maxlength="11">\n        </div>\n      </div>\n      <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n        <div data-v-1a32f292="" class="input size-0 align-1">\n          <label data-v-3c0fb276="" data-v-1a32f292="">验证码</label>\n          <input data-v-3c0fb276="" data-v-1a32f292="" name="" placeholder="请输入验证码" [(ngModel)]="code"\n          maxlength="5">\n             <div class="send-smg-code " (click)="getCode()" [ngClass]="{\'disable\': codeBtnDisable}">{{codeBtnText}}</div>\n        </div>\n      </div>\n      <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n        <div data-v-1a32f292="" class="input size-0 align-1">\n          <label data-v-3c0fb276="" data-v-1a32f292="">新密码</label>\n          <input data-v-3c0fb276="" data-v-1a32f292="" name="" placeholder="请输入新密码" [(ngModel)]="password"\n            maxlength="16"  [type]="pswType">\n            <ion-icon [name]="eyeStatus" class="eye" (click)="eyeSwitch()"></ion-icon>\n        </div>\n      </div>\n      <div class="agree-register">\n        <div class="agree-check" [ngClass]="{unchose:unchose===false}" (click)="switchChoose()"></div>\n        <div class="agree-text">\n            同意《\n            <a class="agree-text2" (click)="showPop()">\n                注册协议\n            </a>\n            》\n        </div>\n    </div>\n      <div  class="buttonBox" [ngClass]="{\'disable\':btnDisable===true}">\n          <div data-v-766fd0c5="" class="button">\n            <button ion-button block (click)="register()" [color]="btnDisable===true?\'light\':\'\'">确定</button>\n          </div>\n      </div>\n      \n      <div  class="buttonBox mt20" (click)="gotologin()" >\n        <button ion-button block outline >已有账号，去登录</button>\n    </div>\n      <div class="top-tip" style="display: none;">\n        请输入。。\n      </div>\n      <div data-v-7811bac2=""  class="confirm" style="display: none;">\n        <div data-v-7811bac2="" class="confirm-wrapper">\n          <div data-v-7811bac2="" class="confirm-content">\n            <p data-v-7811bac2="" class="text">请输入。。</p>\n            <div data-v-7811bac2="" class="operate">\n              <!---->\n              <div data-v-7811bac2="" class="operate-btn">确定</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ion-scroll scrollY="true"  class="register-pop-scroll" [hidden]="!isShowPop">\n      <div class="register-pop">\n        <h2>一、特别提示 </h2>\n        <p>在此特别提醒您（用户）在注册成为上海易路通达车联网信息科技有限公司（以下简称“易路通达”）用户之前，请认真阅读本《用户服务协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。 </p>\n        <p>本协议约定易路通达与用户之间关于“易路通达服务”（以下简称“服务”）的权利义务。“用户”是指注册、登录、使用本服务的公司或个人。本协议可由易路通达随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本站中查阅最新版协议条款。在修改协议条款后，如果用户不接受修改后的条款，请立即停止使用易路通达提供的服务，用户继续使用易路通达提供的服务将被视为接受修改后的协议。 </p>\n        <h2>二、账号注册 </h2>\n        <p>1、用户在使用本服务前需要注册一个“易路通达”账号。“易路通达”账号应当使用手机号码绑定注册，请用户使用尚未与“易路通达”账号绑定的手机号码，以及未被易路通达根据本协议封禁的手机号码注册“易路通达”账号。易路通达可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。 </p>\n        <p>2、如果注册申请者有被易路通达封禁的先例或涉嫌虚假注册及滥用他人名义注册，及其他不能得到许可的理由， 易路通达将拒绝其注册申请。 </p>\n        <p>3、鉴于“易路通达”账号的绑定注册方式，您同意易路通达在注册时将允许您的手机号码及手机设备识别码等信息用于注册。 </p>\n        <p>4、在用户注册及使用本服务时，易路通达需要搜集能识别用户身份的个人信息以便易路通达可以在必要时联系用户，或为用户提供更好的使用体验。易路通达搜集的信息包括但不限于用户的姓名、地址。</p>\n        <h2>三、账户安全 </h2>\n        <p>1、用户一旦注册成功，成为易路通达的用户，将得到一个用户名和密码，并有权利使用自己的用户名及密码随时登陆易路通达。</p>\n        <p>2、用户对用户名和密码的安全负全部责任，同时对以其用户名进行的所有活动和事件负全责。 </p>\n        <p>3、用户不得以任何形式擅自转让或授权他人使用自己的易路通达用户名。</p>\n        <p>4、如果用户泄漏了密码，有可能导致不利的法律后果，因此不管任何原因导致用户的密码安全受到威胁，应该立即和易路通达客服人员取得联系，否则后果自负。 </p>\n        <h2>四、用户个人信息保护</h2>\n        <p>1、保护用户个人信息是易路通达的一项基本原则。</p>\n        <p>2、您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，则无法使用本服务或在使用过程中受到限制。</p>\n        <p>3、一般情况下，您可随时浏览、修改自己提交的信息，但出于安全性和身份识别（如号码申诉服务）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。</p>\n        <p>4、易路通达将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。</p>\n        <p>5、易路通达保证不对外公开或向第三方披露或提供用户注册资料及用户在使用网络服务时存储在易路通达平台、服务器或数据库的非公开内容和信息，但下列情况除外：</p>\n        <p>1) 事先获得用户的明确授权；</p>\n        <p>2) 根据有关的法律法规要求；</p>\n        <p>3) 按照相关政府主管部门和司法机关的要求；</p>\n        <p>4) 为维护社会公众的利益；</p>\n        <p>5) 为维护易路通达的合法权益。</p>\n        <h2>五、用户声明与保证</h2>\n        <p>1、用户承诺其为具有完全民事行为能力的民事主体，且具有达成交易履行其义务的能力。</p>\n        <p>2、用户有义务在注册时提供自己的真实资料，并保证诸如手机号码、姓名、所在地区等内容的有效性及安全性，保证易路通达工作人员可以通过上述联系方式与用户取得联系。同时，用户也有义务在相关资料实际变更时及时更新有关注册资料。 </p>\n        <p>3、用户通过使用服务的过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复和相关链接页面，以及其他使用账号或本服务所产生的内容，不得违反国家相关法律制度，包含但不限于如下原则： </p>\n        <p>（1）反对宪法所确定的基本原则的； </p>\n        <p>（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的； </p>\n        <p>（3）损害国家荣誉和利益的； </p>\n        <p>（4）煽动民族仇恨、民族歧视，破坏民族团结的； </p>\n        <p>（5）破坏国家宗教政策，宣扬邪教和封建迷信的； </p>\n        <p>（6）散布谣言，扰乱社会秩序，破坏社会稳定的； </p>\n        <p>（7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>\n        <p>（8）侮辱或者诽谤他人，侵害他人合法权益的； </p>\n        <p>9）含有法律、行政法规禁止的其他内容的。 </p>\n        <p>4、用户不得利用“易路通达”账号或本服务制作、上载、复制、发布、传播下干扰易路通达正常运营，以及侵犯其他用户或第三方合法权益的内容： </p>\n        <p>（1）含有任何性或性暗示的； </p>\n        <p>（2）含有辱骂、恐吓、威胁内容的； </p>\n        <p>（3）含有骚扰、垃圾广告、恶意信息、诱骗信息的；</p>\n        <p>（4）涉及他人隐私、个人信息或资料的； </p>\n        <p>（5）侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；</p>\n        <p>（6）含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益内容的信息。</p>\n        <h2>六、服务内容 </h2>\n        <p>1、易路通达具体服务内容由易路通达根据实际情况提供，包括但不限于：</p>\n        <p>（1）在线咨询服务； </p>\n        <p>（2）服务商收入结算和用户支付费用：具体金额以易路通达产生的统计数据为准。 </p>\n        <p>2、易路通达有权随时审核或删除用户发布/传播的涉嫌违法或违反社会主义精神文明，或者被易路通达认为不妥当的内容（包括但不限于文字、语音、图片、视频、图文等）。 </p>\n        <p>3、所有发给用户的通告及其他消息都可通过本站或者用户所提供的联系方式发送。 </p>\n        <h2>七、服务的终止 </h2>\n        <p>1、在下列情况下，易路通达有权终止向用户提供服务： </p>\n        <p>（1）在用户违反本服务协议相关规定时，易路通达有权终止向该用户提供服务。如该用户再一次直接或间接或以他人名义注册为用户的，一经发现，易路通达有权直接单方面终止向该用户提供服务； </p>\n        <p>（2）如易路通达通过用户提供的信息与用户联系时，发现用户在注册时填写的联系方式已不存在或无法接通，易路通达以其它联系方式通知用户更改，而用户在三个工作日内仍未能提供新的联系方式，易路通达有权终止向该用户提供服务； </p>\n        <p>（3）用户不得通过程序或人工方式进行刷量或作弊，若发现用户有作弊行为，易路通达将立即终止服务，并有权扣留账户内金额；</p>\n        <p>（4）一旦易路通达发现用户提供的数据或信息中含有虚假内容，易路通达有权随时终止向该用户提供服务； </p>\n        <p>（5）本服务条款终止或更新时，用户明示不愿接受新的服务条款；</p>\n        <p>（6）其它易路通达认为需终止服务的情况。 </p>\n        <p>2、服务终止后，易路通达没有义务为用户保留原账号中或与之相关的任何信息，或转发任何未曾阅读或发送的信息给用户或第三方。</p>\n      </div>\n      <div class="back-btn-close" (click)="hidePop()">\n        <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n      </div>\n    </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Observable } from 'rxjs/Rx';






var RestProvider = /** @class */ (function () {
    function RestProvider(http, config) {
        this.http = http;
        this.config = config;
        //feed
        this.apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';
        //account
        this.apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
        this.apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
        this.apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
        this.apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';
        this.apiGetUserQuestionList = "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";
        //question
        this.apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
        this.apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
        this.apiUrlGetQuestion = "https://imoocqa.gugujiankong.com/api/question/get";
        this.apiUrlGetQuestionWithUser = "https://imoocqa.gugujiankong.com/api/question/getwithuser";
        this.apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
        this.apiUrlSaveFavourite = "https://imoocqa.gugujiankong.com/api/question/savefavourite";
        //notification
        this.apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";
        //* 注意：因为课程是主要讲解 ionic 的技术点
        //* 安全性方面你需要自己去做详细的设计和处理
        //* 密码的传递应该在传递参数之前进行加密，并且服务器端也应该进行相应的处理
        //* 具体的问题可以在慕课后台提问交流
        /**
         * 根据用户的手机号码和密码进行登录
         *
         * @param {any} mobile
         * @param {any} password
         * @returns {Observable<string[]>}
         * @memberof RestProvider
         */
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        //console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.doPost = function (api, json, callback) {
        var apiUrl = this.config.apiUrl + api;
        this.http.post(apiUrl, JSON.stringify(json), { headers: this.headers })
            .subscribe(function (res) {
            // console.log(res.json());
            callback(res.json());
        });
    };
    // doPost(api,json):Observable<string[]>{
    //   var apiUrl=this.config.apiUrl+api;
    //   this.http.post(apiUrl,JSON.stringify(json), {headers:this.headers})
    //   // .subscribe(function(res){
    //   // // console.log(res.json());
    //   // callback(res.json())
    //   // })
    //   .map(this.extractData).catch(this.handleError)
    //   // .map(this.extractData)
    //   //   .catch(this.handleError);
    //   }
    RestProvider.prototype.login = function (mobile, password) {
        return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
    };
    /**
     * 获取用户的信息
     *
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserInfo = function (userId) {
        return this.getUrlReturn(this.apiUrlUserInfo + "?userid=" + userId);
    };
    /**
     * 更新用户的昵称
     *
     * @param {any} userId
     * @param {any} nickname
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.updateNickName = function (userId, nickname) {
        return this.getUrlReturn(this.apiUrlUpdateNickName + "?userid=" + userId + "&nickname=" + nickname);
    };
    /**
     * 保存提问
     *
     * @param {any} userId
     * @param {any} title
     * @param {any} content
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.saveQuestion = function (userId, title, content) {
        return this.getUrlReturn(this.apiUrlQuestionSave + "?userid=" + userId + "&title=" + title + "&content=" + content);
    };
    /**
     * 获取问题的详情
     *
     * @param {any} id
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestion = function (id) {
        return this.getUrlReturn(this.apiUrlGetQuestion + "?id=" + id);
    };
    /**
     * 获取问题的详情，传递 userid 获取到当前用户有没有关注此问题
     *
     * @param {any} questionId
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestionWithUser = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlGetQuestionWithUser + "?id=" + questionId + "&userid=" + userId);
    };
    RestProvider.prototype.saveFavourite = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlSaveFavourite + "?questionid=" + questionId + "&userid=" + userId);
    };
    RestProvider.prototype.answer = function (userId, questionId, content) {
        return this.getUrlReturn(this.apiUrlAnswer + "?userid=" + userId + "&questionid=" + questionId + "&content=" + content);
    };
    /**
     * 注册请求
     *
     * @param {any} mobile
     * @param {any} nickname
     * @param {any} password
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.register = function (mobile, nickname, password) {
        return this.getUrlReturn(this.apiUrlRegister + "?mobile=" + mobile + "&nickname=" + nickname + "&password=" + password);
    };
    /**
     * 请求首页的 feeds 流
     *
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getFeeds = function () {
        return this.getUrlReturn(this.apiUrlFeeds);
    };
    /**
     * 获取所有的新问题
     *
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestions = function () {
        return this.getUrlReturn(this.apiUrlQuestionList);
    };
    /**
     * 获取用户的提醒消息
     *
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserNotifications = function (userId) {
        return this.getUrlReturn(this.apiUrlUserNotifications + "?userid=" + userId);
    };
    /**
     * 获取用户的相关问题列表
     *
     * @param {any} userId
     * @param {any} type  question/answer/favourite
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserQuestionList = function (userId, type) {
        return this.getUrlReturn(this.apiGetUserQuestionList + "?userid=" + userId + "&type=" + type);
    };
    /**
     * 全局获取 HTTP 请求的方法
     * @Parry
     * @private
     * @param {string} url
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUrlReturn = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * 处理接口返回的数据，处理成 json 格式
     *
     * @private
     * @param {Response} res
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.extractData = function (res) {
        var body = res.json();
        return JSON.parse(body) || {};
    };
    /**
     * 处理请求中的错误，考虑了各种情况的错误处理并在 console 中显示 error
     *
     * @private
     * @param {(Response | any)} error
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/register/register.module": [
		717,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBaseInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_carinfo_user_carinfo__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { ToastController } from 'ionic-angular/components/toast/toast-controller';
/**
 * Generated class for the UserBaseInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UserBaseInfoPage = /** @class */ (function (_super) {
    __extends(UserBaseInfoPage, _super);
    function UserBaseInfoPage(navCtrl, rest, toastCtrl, 
    // public loadingCtrl: LoadingController,
    storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.btnDisable = false;
        _this.sex = 1;
        _this.isSelf = true;
        _this.carOwnerName = '';
        _this.carOwnerIDNum = '';
        _this.carOwnerPhone = '';
        return _this;
    }
    // @ViewChild(Slides) slides: Slides;
    UserBaseInfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var api = 'SubInfo/CheckStep?needload'; //获取用户信息接口
        this.storage.get('token').then(function (val) {
            console.log('token:', val);
            _this.token = val;
            var params = {
                token: val
            };
            if (!val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                return;
            }
            _this.rest.doPost(api, params, function (ret) {
                console.log('用户信息:', ret.result.apply);
                if (ret.issuccess) {
                    if (ret.result.apply) {
                        _this.useBaseInfo = ret.result.apply;
                        var useBaseInfo = ret.result.apply;
                        _this.name = useBaseInfo.Name;
                        _this.sex = parseInt(useBaseInfo.Sex) === 1 ? 1 : 0;
                        _this.IDNumber = useBaseInfo.IDNumber;
                        _this.mobile = useBaseInfo.Phone;
                        _this.inviteMoblie = useBaseInfo.Inviter;
                        _this.isSelf = useBaseInfo.IsOwnerApply;
                        _this.carOwnerName = useBaseInfo.CarOwnerName;
                        _this.carOwnerIDNum = useBaseInfo.CarOwnerIDNum;
                        _this.carOwnerPhone = useBaseInfo.CarOwnerPhone;
                    }
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            });
        });
    };
    UserBaseInfoPage.prototype.nextPage = function () {
        var _this = this;
        console.log(this.name);
        if (!this.name) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入姓名', 1000);
            return;
        }
        if (!this.IDNumber) {
            // var el = document.querySelectorAll('.toast-ios')
            // Array.prototype.forEach.call(el, function(item) {  
            //   // do something you want deal with DOM  
            //   item.class
            // }); 
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入身份证号码', 1000);
            return;
        }
        var iDNumberReg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!iDNumberReg.test(this.IDNumber)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确格式的身份证号码', 1000);
            return;
        }
        if (!this.mobile) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入手机号码', 1000);
            return;
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确手机号码', 1000);
            return;
        }
        if (!this.isSelf) {
            if (!this.carOwnerName) {
                _super.prototype.showToast.call(this, this.toastCtrl, '请输入车主姓名', 1000);
                return;
            }
            if (!this.carOwnerIDNum) {
                _super.prototype.showToast.call(this, this.toastCtrl, '请输入车主身份证号', 1000);
                return;
            }
            if (!iDNumberReg.test(this.carOwnerIDNum)) {
                _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确格式的身份证号码', 1000);
                return;
            }
            if (!this.carOwnerPhone) {
                _super.prototype.showToast.call(this, this.toastCtrl, '请输入车主手机号', 1000);
                return;
            }
            if (!/1[3|4|5|7|8]\d{9}/.test(this.carOwnerPhone)) {
                _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确手机号码', 1000);
                return;
            }
        }
        this.btnDisable = true;
        //  this.showLoading(this.loadingCtrl,'数据提交中...')
        var api = 'SubInfo/UserAndCar';
        var params = {
            data: {
                Step: 1,
                CCustomerApply: {
                    "Name": this.name,
                    "Sex": this.sex,
                    "IDNumber": this.IDNumber,
                    "Phone": this.mobile,
                    "Inviter": this.inviteMoblie,
                    "IsOwnerApply": this.isSelf,
                    "CarOwnerName": this.carOwnerName,
                    "CarOwnerIDNum": this.carOwnerIDNum,
                    "CarOwnerPhone": this.carOwnerPhone,
                    "Relation": "11111"
                }
            },
            token: this.token
        };
        this.rest.doPost(api, params, function (data) {
            console.log(data);
            if (data.issuccess) {
                //登录成功的页面跳转
                //存储接口返回的 token
                // super.showToast(this.toastCtrl, data.message,800);
                setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_carinfo_user_carinfo__["a" /* UserCarinfoPage */]);
                    _this.btnDisable = false;
                }, 800);
            }
            else {
                alert(data.message);
                _this.btnDisable = false;
            }
        });
    };
    UserBaseInfoPage.prototype.gotocarinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_carinfo_user_carinfo__["a" /* UserCarinfoPage */]);
    };
    UserBaseInfoPage.prototype.switchSex = function (val) {
        this.sex = val;
    };
    UserBaseInfoPage.prototype.switchSelf = function (val) {
        this.isSelf = val;
        console.log(this.isSelf);
    };
    UserBaseInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-base-info',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\user-base-info\user-base-info.html"*/'<!--\n  Generated template for the UserBaseInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>申请人信息</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-header>\n    <ion-navbar>\n      <!-- <ion-icon name="arrow-back"><span>返回</span></ion-icon> -->\n      <ion-title>申请人信息</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <div class="head-setp">\n        <div class="setp">\n            <div class="setp-tips-box">\n                <span class="active">申请人信息</span><span class="">车辆信息</span><span class="">证件照片</span><span class="">收货地址</span>\n            </div>\n            <div class="setp-dot-box">\n                <span class="active"></span><span class="active setp-line"></span><span class=""></span><span class="setp-line"></span>\n                <span class="">\n                </span><span class="setp-line"></span><span class=""></span>\n            </div>\n        </div>\n    </div>\n    <div class="form-box" style="pointer-events: auto;">\n        <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <h2>申请人信息</h2>\n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>姓名</label>\n                <input type="text" name="" placeholder="请输入姓名" [(ngModel)]="name" maxlength="20">\n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>性别</label> <div class="sex-box">\n                    <span [ngClass]="{\'active\':sex===1}" (click)="switchSex(1)"></span><b (click)="switchSex(1)">男</b>\n                    <span [ngClass]="{\'active\':sex===0}" (click)="switchSex(0)"></span><b (click)="switchSex(0)">女</b>\n                </div>\n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>身份证号</label> <input type="text" name="" placeholder="请输入身份证号" [(ngModel)]="IDNumber" maxlength="18">\n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2"><label>手机号</label> <input type="tel" name="" placeholder="请输入手机号" [(ngModel)]="mobile" maxlength="11"></div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2"><label>邀请码（选填）</label> <input type="tel" name="" placeholder="请输入邀请码" [(ngModel)]="inviteMoblie" maxlength="11"></div>\n        </div>\n    </div>\n    <div class="h10"></div>\n    <div class="form-box" style="pointer-events: auto;">\n        <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>是否为申请人本人车辆</label> <div class="sex-box self-box">\n                    <span  [ngClass]="{\'active\':isSelf}" (click)="switchSelf(true)"></span><b (click)="switchSelf(true)">是</b> \n                    <span [ngClass]="{\'active\':!isSelf}" (click)="switchSelf(false)"></span><b (click)="switchSelf(false)">否</b>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="h10"></div>\n    <div class="form-box" [hidden]="isSelf">\n        <div class="inputBox padType2">\n            <div class="input size-2 align-2"><h2>车主信息</h2></div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2"><label>车主姓名</label> <input type="text" name="" placeholder="请输入车主姓名" [(ngModel)]="carOwnerName" maxlength="20"></div>\n        </div>\n        <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>车主身份证号</label> <input type="text" name="" placeholder="请输入车主身份证号" [(ngModel)]="carOwnerIDNum" maxlength="18">\n            </div>\n        </div>\n        <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>手机号</label> <input type="tel" name="" placeholder="请输入手机号码" [(ngModel)]="carOwnerPhone" maxlength="11">\n            </div>\n        </div>\n    </div>\n    <div class="plr15 mt40" (click)="nextPage()" [ngClass]="{\'disable\':btnDisable===true}">\n        <button ion-button block [color]="btnDisable===true?\'light\':\'\'">下一步</button>\n    </div>\n    <div style="height: 40px; pointer-events: auto;"></div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\user-base-info\user-base-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], UserBaseInfoPage);
    return UserBaseInfoPage;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=user-base-info.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCarinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_uplaod_user_uplaod__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_select_car_no_select_car_no__ = __webpack_require__(230);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { ElementDef } from '@angular/core/src/view';
/**
 * Generated class for the UserCarinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UserCarinfoPage = /** @class */ (function (_super) {
    __extends(UserCarinfoPage, _super);
    function UserCarinfoPage(navCtrl, navParams, storage, toastCtrl, loadingCtrl, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.btnDisable = false;
        _this.carColor = 0;
        return _this;
    }
    UserCarinfoPage.prototype.onViewWillEnter = function () {
        // this.getCarInfo() 第二个子页面无效？
    };
    UserCarinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserCarinfoPage');
        this.getCarInfo();
        console.log(this.CarColorType);
        console.log('this.selectCarNo-------------' + this.SelectCarNoComponent);
        // this.SelectCarNoComponent.hide()
        // this.CarColorType.nativeElement[3].selected=true
    };
    UserCarinfoPage.prototype.getCarInfo = function () {
        var _this = this;
        var api = 'SubInfo/CheckStep'; //获取用户信息接口
        this.storage.get('token').then(function (val) {
            _this.token = val;
            var params = {
                token: val
            };
            if (!val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                return;
            }
            _this.rest.doPost(api, params, function (ret) {
                console.log('用户信息:', ret.result.apply);
                if (ret.issuccess) {
                    var useBaseInfo = ret.result.apply;
                    _this.carColor = useBaseInfo.CarColor || '蓝';
                    _this.carColorType = useBaseInfo.CarColorType || 0;
                    _this.carNum = useBaseInfo.CarNum && useBaseInfo.CarNum.split('') || ['沪', 'A']; //车牌号
                    _this.engineNum = useBaseInfo.EngineNum; //发动机号
                    _this.carVin = useBaseInfo.CarVin; //车辆识别码
                    _this.carBrand = useBaseInfo.CarBrand;
                    _this.carLoad = useBaseInfo.CarLoad;
                    _this.CarColorType.nativeElement[_this.carColorType].selected = true;
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            });
        });
    };
    UserCarinfoPage.prototype.nextPage = function () {
        var _this = this;
        if (this.carNum.length < 5) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确位数车牌号', 1000);
            return;
        }
        if (!this.engineNum) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入发动机号', 1000);
            return;
        }
        var engineNumReg = /^[0-9a-zA-Z]*$/g;
        if (!engineNumReg.test(this.engineNum)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确格式的发动机号', 1000);
            return;
        }
        if (!this.carVin) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入车辆识别代码', 1000);
            return;
        }
        var vehicleCodeReg = /^[0-9a-zA-Z]*$/g;
        if (!vehicleCodeReg.test(this.carVin)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确格式的车辆识别代码', 1000);
            return;
        }
        if (!this.carBrand) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入发动机号', 1000);
            return;
        }
        if (!this.carLoad) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入车辆载重', 1000);
            return;
        }
        var numReg = /^\d+(\.\d+)?$/;
        if (!numReg.test(this.carLoad)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确的载重', 1000);
            return;
        }
        this.btnDisable = true;
        //  this.showLoading(this.loadingCtrl,'数据提交中...')
        var api = 'SubInfo/UserAndCar?needload';
        var params = {
            data: {
                Step: 2,
                CCustomerApply: {
                    "CarColor": this.carColor,
                    "CarColorType": this.carColorType,
                    "CarNum": this.carNum.join(''),
                    "EngineNum": this.engineNum,
                    "CarVin": this.carVin,
                    "CarBrand": this.carBrand,
                    "CarLoad": this.carLoad,
                }
            },
            token: this.token
        };
        this.rest.doPost(api, params, function (data) {
            if (data.issuccess) {
                //登录成功的页面跳转
                setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_uplaod_user_uplaod__["a" /* UserUplaodPage */]);
                    _this.btnDisable = false;
                }, 800);
            }
            else {
                alert(data.message);
                _this.btnDisable = false;
            }
        });
    };
    UserCarinfoPage.prototype.gotoUplaod = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_uplaod_user_uplaod__["a" /* UserUplaodPage */]);
    };
    UserCarinfoPage.prototype.selectedCarValueFromChild = function (msg) {
        console.log('selectedCarValueFromChild' + msg);
        this.carNum = msg;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__components_select_car_no_select_car_no__["a" /* SelectCarNoComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_select_car_no_select_car_no__["a" /* SelectCarNoComponent */])
    ], UserCarinfoPage.prototype, "SelectCarNoComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('CarColorType'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UserCarinfoPage.prototype, "CarColorType", void 0);
    UserCarinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-carinfo',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\user-carinfo\user-carinfo.html"*/'<ion-header>\n    <ion-navbar>\n      <!-- <ion-icon name="arrow-back"><span>返回</span></ion-icon> -->\n      <ion-title>车辆信息</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <div class="head-setp">\n        <div class="setp">\n            <div class="setp-tips-box">\n                <span >申请人信息</span><span class="active">车辆信息</span><span class="">证件照片</span><span class="">收货地址</span>\n            </div>\n            <div class="setp-dot-box">\n                <span class="active"></span><span class="active setp-line"></span><span class="active"></span><span class="active setp-line"></span>\n                <span class="">\n                </span><span class="setp-line"></span><span class=""></span>\n            </div>\n        </div>\n    </div>\n    <div class="form-box" style="pointer-events: auto;">\n        <div class="inputBox padType2">\n            <div class="input size-2 align-2"><h2>车辆信息</h2></div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>车牌颜色</label>\n                 <!-- <input type="text" readonly="readonly"  [(ngModel)]="carColorType"> -->\n                 <select class="carColorType" #CarColorType>\n                    <option value="0" >蓝牌</option>\n                    <option value="1" >黄牌</option>\n                    <option value="2">黑牌</option>\n                    <option value="3">白牌</option>\n                </select>\n                <div class="icon-more"><ion-icon name="ios-arrow-forward"></ion-icon></div>\n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>车牌号</label> \n                <!-- <span  *ngFor="let item of carNum">{{item}}</span> -->\n                <div class="selectedValueBox" >\n                    <span class="line"></span>\n                    <input type="text" name="" placeholder="" value="" readonly="readonly"> \n                    <input type="text" name="" placeholder="" value="" readonly="readonly"> \n                    <input type="text" name="" placeholder="" value="" readonly="readonly">\n                    <input type="text" name="" placeholder="" value="" readonly="readonly">\n                     <input type="text" name="" placeholder="" value="" readonly="readonly"> <input type="text" name="" placeholder="" value="" readonly="readonly">\n                    <input type="text" name="" placeholder="" value="" readonly="readonly">\n                </div> \n                <div class="selected-car-box" (click)="selectCarNo.show()">\n                    <span class="line"></span>\n                    <input type="text"  placeholder=""  readonly=""  *ngFor="let item of carNum"  [value]="item">\n                </div>\n                \n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>发动机号</label> <input type="text" name="" placeholder="请输入发动机号" [(ngModel)]="engineNum" maxlength="20">\n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2">\n                <label>车辆识别代码</label> <input type="text" name="" placeholder="请输入车辆识别代码" [(ngModel)]="carVin" maxlength="20">\n            </div>\n        </div> <div class="inputBox padType2">\n            <div class="input size-2 align-2"><label>车辆品牌</label> <input type="text" name="" placeholder="请输入车辆品牌" [(ngModel)]="carBrand" maxlength="20"></div>\n        </div>\n        <div class="inputBox padType2">\n            <div class="input size-2 align-2"><label>核定载重(kg)</label> <input type="text" name="" placeholder="请输入核定载重" [(ngModel)]="carLoad" maxlength="20"></div>\n        </div>\n    </div>\n    <div class="buttonBox" (click)="nextPage()" [ngClass]="{\'disable\':btnDisable===true}">\n        <div class="plr15 mt40">\n            <button ion-button block [color]="btnDisable===true?\'light\':\'\'">下一步</button>\n        </div>\n    </div>\n    <select-car-no #selectCarNo class="car-select-no-box" (childOuterSelectedValue)="selectedCarValueFromChild($event)" [carNoValFromParent]="carNum"></select-car-no>\n    <div style="height: 40px; pointer-events: auto;"></div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\user-carinfo\user-carinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], UserCarinfoPage);
    return UserCarinfoPage;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=user-carinfo.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserUplaodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_add_address_user_add_address__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_config_config__ = __webpack_require__(122);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//NavController, NavParams,






//导入四个外部加载进来的组件





/**
 * Generated class for the UserUplaodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UserUplaodPage = /** @class */ (function (_super) {
    __extends(UserUplaodPage, _super);
    function UserUplaodPage(navCtrl, navParams, modalCtrl, loadingCtrl, rest, storage, actionSheetCtrl, camera, transfer, file, filePath, platform, toastCtrl, viewCtrl, config) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.camera = camera;
        _this.transfer = transfer;
        _this.file = file;
        _this.filePath = filePath;
        _this.platform = platform;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.config = config;
        _this.token = "";
        _this.btnDisable = false;
        _this.lastImage = null;
        _this.testBase64 = 'assets/imgs/pic01.png';
        _this.Relation = '';
        _this.params1 = { IDfication: '182541111', TypeID: 1011, Relation: '' };
        _this.params2 = { IDfication: '182541112', TypeID: 1012, Relation: '' };
        _this.params3 = { IDfication: '182541113', TypeID: 1013, Relation: '' };
        _this.params4 = { IDfication: '182541114', TypeID: 1014, Relation: '' };
        _this.params5 = { IDfication: '182541114', TypeID: 1015, Relation: '' };
        _this.params6 = { IDfication: '182541114', TypeID: 1016, Relation: '' };
        _this.uploadImgSrc = [{ src: 'assets/imgs/pic01.png', isUploaded: false, IDfication: '上传身份证正面照', TypeID: 1011 },
            { src: 'assets/imgs/pic02.png', isUploaded: false, IDfication: '上传身份证反面照', TypeID: 1012 },
            { src: 'assets/imgs/pic03.png', isUploaded: false, IDfication: '上传驾驶证正页照', TypeID: 1013 },
            { src: 'assets/imgs/pic04.png', isUploaded: false, IDfication: '上传驾驶证副页照', TypeID: 1014 },
            { src: 'assets/imgs/pic01.png', isUploaded: false, IDfication: '上传行驶证正面照', TypeID: 1015 },
            { src: 'assets/imgs/pic02.png', isUploaded: false, IDfication: '上传行驶证反面照', TypeID: 1016 }];
        _this.getCarInfo();
        return _this;
    }
    UserUplaodPage.prototype.gotoAddAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_add_address_user_add_address__["a" /* UserAddAddressPage */]);
    };
    UserUplaodPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.userId = val;
            }
        });
    };
    UserUplaodPage.prototype.presentActionSheet = function (idx) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片',
            buttons: [
                {
                    text: '从图片库中选择',
                    handler: function () {
                        // alert(JSON.stringify(this.camera))
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, idx);
                    }
                },
                {
                    text: '使用相机',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, idx);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    UserUplaodPage.prototype.takePicture = function (sourceType, idx) {
        var _this = this;
        //定义相机的一些参数
        var options = {
            quality: 50,
            targetWidth: 400,
            targetHeight: 400,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            // destinationType: this.camera.DestinationType.FILE_URI,  /*返回的类型*/
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
        };
        //获取图片的方法
        this.camera.getPicture(options).then(function (imagePath) {
            // alert('imagePath' + imagePath)
            //特别处理 android 平台的文件路径问题
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath) //获取 android 平台下的真实路径
                    .then(function (filePath) {
                    //获取正确的路径
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    //获取正确的文件名
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), idx);
                });
            }
            else {
                //获取正确的路径
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                //获取正确的文件名
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), idx);
            }
            _this.lastImage = imagePath;
            // alert('imagePath' + imagePath)
            var base64Image = 'data:image/jpeg;base64,' + imagePath; //插件提供原生的 --注意输出类型设置destinationType: this.camera.DestinationType.DATA_URL,
            // this.uploadImgSrc[idx]['src'] = base64Image
            // this.uploadImgSrc[idx]['isUploaded'] = true
            _this.begainUpload(base64Image, idx);
            //     me.uploadImgSrc[idx]['isUploaded'] = true
            //   var me = this;
            //   me.convertImgToBase64(imagePath, function(retBase64Img){ //自定义convertImgToBase64 输出类型设置FILE_URI
            //     // alert('retBase64Img1:'+retBase64Img)
            //     me.testBase64 = retBase64Img
            //     // var needData = {
            //     //   // IDfication: that.uploadImgSrc[index]['IDfication'],
            //     //   // TypeID: that.uploadImgSrc[index]['TypeID'],
            //     //   // Relation: that.userApplyStep.apply.Relation,
            //     //   // FileBase64: FileBase64
            //     // }
            //     me.uploadImgSrc[idx]['src'] = retBase64Img
            //     me.uploadImgSrc[idx]['isUploaded'] = true
            // },'jpeg')
        }, function (err) {
            // super.showToast(this.toastCtrl, err);
            alert(err);
            // super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
        });
    };
    UserUplaodPage.prototype.begainUpload = function (imageBase64Data, index) {
        var _this = this;
        var params = {
            token: this.token,
            data: {
                IDfication: this.uploadImgSrc[index]['IDfication'],
                TypeID: this.uploadImgSrc[index]['TypeID'],
                Relation: this.userApplyStep.apply.Relation,
                FileBase64: imageBase64Data
            }
        };
        this.btnDisable = true;
        var api = 'SubInfo/SubPhoto';
        this.rest.doPost(api, params, function (ret) {
            // console.log('用户信息:', ret.result.apply)
            if (ret.issuccess) {
                _this.uploadImgSrc[index]['src'] = _this.config.apiUrl + ret.result.Url;
                _this.uploadImgSrc[index]['isUploaded'] = true;
                // this.getUserInfo()
                _this.btnDisable = false;
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, ret.message);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                _this.btnDisable = false;
            }
        });
    };
    //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用  ---转base64后走开始上传接口
    UserUplaodPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, idx) {
        // var me = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            //  let lastImage = newFileName;
            // alert('存储图片到本地图库lastImage'+ lastImage)
            //转base64
            // var that = this;
            // alert(idx)
        }, function (error) {
            // super.showToast(this.toastCtrl, "存储图片到本地图库出现错误。");
        });
    };
    //为文件生成一个新的文件名
    UserUplaodPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg"; //拼接文件名
        return newFileName;
    };
    //处理图片的路径为可以上传的路径
    UserUplaodPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(cordova.file.dataDirectory + img);
        }
    };
    UserUplaodPage.prototype.convertImgToBase64 = function (url, callback, outputFormat) {
        var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL(outputFormat || 'image/png', 0.5);
            callback.call(this, dataURL);
            canvas = null;
        };
        img.src = url;
    };
    UserUplaodPage.prototype.uploadImage = function () {
        var _this = this;
        var url = 'https://imoocqa.gugujiankong.com/api/account/uploadheadface'; //SubInfo/SubPhoto
        var targetPath = this.pathForImage(this.lastImage);
        var filename = this.userId + ".jpg"; //定义上传后的文件名
        alert('上传的参数filename' + filename);
        //fileTransfer 上传的参数
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'userid': this.userId }
        };
        var fileTransfer = this.transfer.create();
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "上传中...");
        //开始正式地上传
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            alert('开始正式地上传' + data);
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传成功。");
            //在用户看清弹窗提示后进行页面的关闭
            setTimeout(function () {
                _this.viewCtrl.dismiss();
            }, 3000);
        }, function (err) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传发生错误，请重试。");
        });
    };
    UserUplaodPage.prototype.doCamera = function () {
        var _this = this;
        var options = {
            quality: 10,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            // mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400
        };
        this.camera.getPicture(options).then(function (imageData) {
            // 返回拍照的地址     
            /*
            base64的地址
             this.camera.DestinationType.DATA_URL
             this.base64Image = 'data:image/jpeg;base64,' + imageData;
            */
            // this.base64Image=imageData;
            // alert('doCamera:base64Image'+ imageData)
            var that = _this;
            _this.convertImgToBase64(imageData, function (retBase64Img) {
                that.base64Image = retBase64Img;
                that.testBase64 = retBase64Img;
                // alert(retBase64Img);
            }, 'jpeg');
        }, function (err) {
            // Handle error
            alert(err);
        });
    };
    UserUplaodPage.prototype.getCarInfo = function () {
        var _this = this;
        var api = 'SubInfo/CheckStep'; //获取用户信息接口
        var locationConifg = this.config.apiUrl; //测试app域名 'http://wechat.chepass.com:8021/'
        this.storage.get('token').then(function (val) {
            _this.token = val;
            var params = {
                token: val
            };
            if (!val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                return;
            }
            _this.rest.doPost(api, params, function (ret) {
                console.log('用户信息:', ret.result.apply);
                if (ret.issuccess) {
                    var listPhotoArr = ret.result.listphoto;
                    _this.userApplyStep = ret.result;
                    if (listPhotoArr && listPhotoArr.length > 0) {
                        console.log(listPhotoArr);
                        listPhotoArr.forEach(function (item) {
                            var oldTypeID = item.TypeID.toString();
                            var index = oldTypeID.substr(oldTypeID.length - 1, 1) - 1; //index 的索引根据TypeID字段最后一个值来确定
                            _this.uploadImgSrc[index]['src'] = locationConifg + item.Url;
                            _this.uploadImgSrc[index]['isUploaded'] = true;
                        });
                    }
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                }
            });
        });
    };
    UserUplaodPage.prototype.nextPage = function () {
        if (!this.uploadImgSrc[0]['isUploaded']) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u9009\u62E9" + this.uploadImgSrc[0]['IDfication']);
            return false;
        }
        if (!this.uploadImgSrc[1]['isUploaded']) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u9009\u62E9" + this.uploadImgSrc[1]['IDfication']);
            return false;
        }
        if (!this.uploadImgSrc[2]['isUploaded']) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u9009\u62E9" + this.uploadImgSrc[2]['IDfication']);
            return false;
        }
        if (!this.uploadImgSrc[3]['isUploaded']) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u9009\u62E9" + this.uploadImgSrc[3]['IDfication']);
            return false;
        }
        if (!this.uploadImgSrc[4]['isUploaded']) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u9009\u62E9" + this.uploadImgSrc[4]['IDfication']);
            return false;
        }
        if (!this.uploadImgSrc[5]['isUploaded']) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u9009\u62E9" + this.uploadImgSrc[5]['IDfication']);
            return false;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_add_address_user_add_address__["a" /* UserAddAddressPage */]);
    };
    UserUplaodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-uplaod',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\user-uplaod\user-uplaod.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>证件照片</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <div class="head-setp">\n        <div class="setp">\n            <div class="setp-tips-box">\n                <span >申请人信息</span><span >车辆信息</span><span class="active">证件照片</span><span class="">收货地址</span>\n            </div>\n            <div class="setp-dot-box">\n                <span class="active"></span><span class="active setp-line"></span><span class="active"></span><span class="active setp-line"></span>\n                <span class="active">\n                </span><span class="active setp-line"></span><span class=""></span>\n            </div>\n        </div>\n    </div>\n    <div class="form-box" style="pointer-events: auto;">\n        <div class="inputBox padType2">\n            <div class="input size-2 align-0"><h2>上传身份证照片</h2></div>\n        </div>\n        <div class="list-box">\n            <ul>\n                <li>\n                    <div class="img-box" (click)="presentActionSheet(0)">\n                        <img *ngIf="uploadImgSrc[0][\'src\']" [src]="uploadImgSrc[0][\'src\']" alt="">\n                    </div> <p class="desc">上传身份证正面照</p><!-- (click)="uploadImage()" -->\n                </li>\n                <li>\n                    <div class="img-box" (click)="presentActionSheet(1)">\n                        <img *ngIf="uploadImgSrc[1][\'src\']" [src]="uploadImgSrc[1][\'src\']"  alt="">\n                    </div> <p class="desc">上传身份证反面照</p>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="split-line" style="pointer-events: auto;"></div>\n    <div class="form-box" style="pointer-events: auto;">\n        <div class="inputBox padType2">\n            <div class="input size-2 align-0"><h2>上传驾驶证照片</h2><!--<img *ngIf="testBase64" [src]="testBase64" width="40"  />--></div>\n            <!-- (click)="doCamera()" -->\n        </div>\n        <div class="list-box">\n            <ul>\n                <li>\n                    <div class="img-box" (click)="presentActionSheet(2)">\n                        <img *ngIf="uploadImgSrc[2][\'src\']" [src]="uploadImgSrc[2][\'src\']"  alt="">\n                    </div> <p class="desc">上传驾驶证正页照</p> <!-- (click)="doCamera()" -->\n                    <!-- <input type="file" value="" id="0" accept="image/jpg,image/jpeg,image/png,image/gif"> -->\n                </li>\n                <li>\n                    <div class="img-box" (click)="presentActionSheet(3)">\n                        <img *ngIf="uploadImgSrc[3][\'src\']" [src]="uploadImgSrc[3][\'src\']"  alt="">\n                    </div> <p class="desc">上传驾驶证反面照</p>\n                    <!-- <input type="file" name="" value="" text="请选择图片" id="1" accept="image/jpg,image/jpeg,image/png,image/gif"> -->\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="split-line" style="pointer-events: auto;"></div>\n    <div class="form-box" style="pointer-events: auto;">\n        <div class="inputBox padType2">\n            <div class="input size-2 align-0"><h2>上传行驶证照片</h2></div>\n        </div>\n        <div class="list-box">\n            <ul>\n                <li>\n                    <div class="img-box" (click)="presentActionSheet(4)">\n                        <img *ngIf="uploadImgSrc[4][\'src\']" [src]="uploadImgSrc[4][\'src\']"  alt="">\n                    </div> <p class="desc">上传行驶证正页照</p>\n                    <!-- <input type="file" value="" id="0" accept="image/jpg,image/jpeg,image/png,image/gif"> -->\n                </li>\n                <li>\n                    <div class="img-box" (click)="presentActionSheet(5)">\n                        <img *ngIf="uploadImgSrc[5][\'src\']" [src]="uploadImgSrc[5][\'src\']"  alt="">\n                    </div> <p class="desc">上传行驶证反面照</p>\n                    <!-- <input type="file" name="" value="" text="请选择图片" id="1" accept="image/jpg,image/jpeg,image/png,image/gif"> -->\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="buttonBox" (click)="nextPage()" [ngClass]="{\'disable\':btnDisable===true}">\n        <div class="plr15 mt40">\n            <button ion-button block [color]="btnDisable===true?\'light\':\'\'">下一步</button>\n        </div>\n    </div>\n    <div style="height: 40px; pointer-events: auto;"></div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\user-uplaod\user-uplaod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_config_config__["a" /* ConfigProvider */]])
    ], UserUplaodPage);
    return UserUplaodPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

// {
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad UserUplaodPage');
//   }
//   gotoAddAddress() {
//     this.navCtrl.push(UserAddAddressPage);
//   }
// }
//# sourceMappingURL=user-uplaod.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the UserAddAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UserAddAddressPage = /** @class */ (function (_super) {
    __extends(UserAddAddressPage, _super);
    function UserAddAddressPage(navCtrl, navParams, storage, toastCtrl, loadingCtrl, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.btnDisable = false;
        _this.defaultArea = '北京 东城区';
        _this.getCarInfo();
        return _this;
    }
    UserAddAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserAddAddressPage');
    };
    UserAddAddressPage.prototype.getCarInfo = function () {
        var _this = this;
        var api = 'SubInfo/CheckStep'; //获取用户信息接口
        this.storage.get('token').then(function (val) {
            _this.token = val;
            var params = {
                token: val
            };
            if (!val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                return;
            }
            _this.rest.doPost(api, params, function (ret) {
                console.log('address:', ret.result.address);
                if (ret.issuccess) {
                    _this.userApplyStep = ret.result;
                    console.log('userApplyStep:', _this.userApplyStep);
                    var resultAddress = ret.result.address;
                    var Province = resultAddress.Province;
                    var City = resultAddress.City;
                    var Town = resultAddress.Town;
                    var formatAddress = Province + " " + City + " " + Town;
                    _this.conName = resultAddress.ConName;
                    _this.mobile = resultAddress.ConPhone;
                    _this.defaultArea = formatAddress; //|| this.defaultArea
                    _this.detailAddress = resultAddress.DetailAddress;
                }
            });
        });
    };
    UserAddAddressPage.prototype.nextPage = function () {
        var _this = this;
        if (!this.conName) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u59D3\u540D");
            return false;
        }
        if (!this.mobile) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801");
            return false;
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7\u7801");
            return false;
        }
        if (!this.detailAddress) {
            _super.prototype.showToast.call(this, this.toastCtrl, "\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740");
            return false;
        }
        this.btnDisable = true;
        var params = {
            token: this.token,
            data: {
                Step: 4,
                CCustomerAddr: {
                    "ConName": this.conName,
                    "ConPhone": this.mobile,
                    "AllAddress": this.defaultArea,
                    "DetailAddress": this.detailAddress,
                    "Relation": "11111"
                }
            }
        };
        var api = 'SubInfo/UserAndCar';
        this.rest.doPost(api, params, function (ret) {
            if (ret.issuccess) {
                //修改地址成功的页面跳转
                _this.endOneLoop();
                _this.btnDisable = false;
            }
            else {
                alert(ret.message);
                _this.btnDisable = false;
            }
        });
    };
    UserAddAddressPage.prototype.endOneLoop = function () {
        var _this = this;
        // var that = this
        var params = {
            token: this.token,
            data: {
                Relation: this.userApplyStep && this.userApplyStep.apply && this.userApplyStep.apply.Relation
            }
        };
        var api = 'SubInfo/CompSub';
        this.rest.doPost(api, params, function (ret) {
            if (ret.issuccess) {
                var loading_1 = _super.prototype.showToast.call(_this, _this.toastCtrl, '提交成功！');
                setTimeout(function () {
                    loading_1.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }, 800);
            }
            else {
                alert(ret.message);
            }
        });
    };
    UserAddAddressPage.prototype.selectedDefaultAreaFromChild = function (data) {
        console.log('selectedDefaultAreaFromChild---', data);
        this.defaultArea = data;
    };
    UserAddAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-add-address',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\user-add-address\user-add-address.html"*/'<!--\n  Generated template for the UserAddAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>收货地址</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="head-setp">\n      <div class="setp">\n          <div class="setp-tips-box">\n              <span >申请人信息</span><span class="">车辆信息</span><span class="">证件照片</span><span class="active">收货地址</span>\n          </div>\n          <div class="setp-dot-box">\n              <span class="active"></span><span class="active setp-line"></span><span class="active"></span><span class="setp-line"></span>\n              <span class="active">\n              </span><span class="active setp-line"></span><span class="active"></span>\n          </div>\n      </div>\n  </div>\n  <div class="form-box" style="pointer-events: auto;">\n      <div class="inputBox padType2">\n          <div class="input size-2 align-2">\n              <h2>收货地址</h2>\n          </div>\n      </div> \n      <div class="inputBox padType2">\n          <div class="input size-2 align-2">\n              <label>收货人</label>\n              <input type="text" name="" placeholder="请输入姓名" [(ngModel)]="conName" maxlength="28">\n          </div>\n      </div> \n      \n      <div class="inputBox padType2">\n          <div class="input size-2 align-2"><label>手机号</label> <input type="tel" name="" placeholder="请输入手机号" [(ngModel)]="mobile" maxlength="11"></div>\n      </div> \n      <div class="inputBox padType2">\n          <div class="input size-2 align-2"><label>所在地区</label> \n            <!-- [(ngModel)]="defaultArea" -->\n            <!-- <input type="text" name="" placeholder="请输入所在地区"  maxlength="20"> -->\n            <area-picker (selectedDefaultAreaFromChild)="selectedDefaultAreaFromChild($event)" [defaultArea]="defaultArea"></area-picker>\n        </div>\n      </div>\n      <div class="inputBox padType2">\n        <div class="input size-2 align-2"><label>详细地址</label> <input type="text" name="" placeholder="请输入详细地址" [(ngModel)]="detailAddress" maxlength="28"></div>\n    </div>\n  </div>\n  <div class="buttonBox" >\n        <div class="plr15 mt40" (click)="nextPage()" [ngClass]="{\'disable\':btnDisable===true}">\n                <button ion-button block [color]="btnDisable===true?\'light\':\'\'">提交</button>\n            </div>\n  </div>\n  <div style="height: 40px; pointer-events: auto;"></div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\user-add-address\user-add-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]])
    ], UserAddAddressPage);
    return UserAddAddressPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=user-add-address.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCarNoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utils_utils__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectCarNoComponent = /** @class */ (function () {
    function SelectCarNoComponent(utils) {
        // console.log('Hello SelectCarNoComponent Component');
        this.utils = utils;
        this.provinceRow1 = [{ name: '京' }, { name: '津' }, { name: '冀' }, { name: '鲁' }, { name: '晋' }, { name: '蒙' }, { name: '辽' }, { name: '吉' }, { name: '黑' }, { name: '沪' }];
        this.provinceRow2 = [{ name: '苏' }, { name: '浙' }, { name: '皖' }, { name: '闽' }, { name: '赣' }, { name: '豫' }, { name: '鄂' }, { name: '湘' }, { name: '粤' }, { name: '桂' }];
        this.provinceRow3 = [{ name: '渝' }, { name: '川' }, { name: '贵' }, { name: '云' }, { name: '藏' }, { name: '陕' }, { name: '甘' }, { name: '青' }];
        this.provinceRow4 = [{ name: '琼' }, { name: '新' }, { name: '港' }, { name: '澳' }, { name: '台' }, { name: '宁' }];
        this.carNo1 = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }, { name: '7' }, { name: '8' }, { name: '9' }, { name: '0' }];
        this.carNo2 = [{ name: 'Q' }, { name: 'W' }, { name: 'E' }, { name: 'R' }, { name: 'T' }, { name: 'Y' }, { name: 'U' }, { name: 'I' }, { name: 'O' }, { name: 'P' }];
        this.carNo3 = [{ name: 'A' }, { name: 'S' }, { name: 'D' }, { name: 'F' }, { name: 'G' }, { name: 'H' }, { name: 'J' }, { name: 'K' }, { name: 'L' }];
        this.carNo4 = [{ name: 'Z' }, { name: 'X' }, { name: 'C' }, { name: 'V' }, { name: 'B' }, { name: 'N' }, { name: 'M' }];
        this.selectValue = [];
        this.childKeyBoardShow = false; //false
        this.popIsfadeIn = false;
        // carNoValFromParent:any;
        this.childOuterSelectedValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); // 子组件主动发送数据
        // this.selectValue = this.dataSourceType
    }
    SelectCarNoComponent.prototype.ngOnChanges = function (changes) {
        //与vue的watch不同的是不能时时观测监听数据变动，感觉起来像子组件被渲染调用的时候回观测一下？ ---Primitive Type时等同于vue的watch 复杂值时,只修改属性不会触发，整体改变--引用改变才会触发
        //only when the reference of the object is changed by parent component. Reference of the object can be changed by assigning new object to it. 
        //It means if we change value of property of object in parent component, then ngOnChanges() method will not be called in child component because 
        //reference is not changed. ---https://www.concretepage.com/angular-2/angular-2-4-onchanges-simplechanges-example
        // the dirty checking means that only the references are checked. Since the reference to the customer stays the same the Angular does not raise the OnChanges hook
        //https://www.tektutorialshub.com/angular-ngonchanges-life-cycle-hook/
        //That leaves us two possible solutions
        // Create a new customer and copy the old data to new customer
        // We can Perform our own change detection using the ngDoCheck lifecycle hook
        //触发Onchanges钩子的条件是 https://blog.csdn.net/qq_34645412/article/details/78023587
        // 父组件初始化子组件时，或者修改子组件的输入属性中的不可变对象输入参数时
        // 1.初始化或者修改子组件
        // 2.必须是修改输入属性
        // 3.修改的输入属性必须是不可变对象
        var carNoValFromParent = JSON.stringify(changes['carNoValFromParent']);
        this.selectValue = changes['carNoValFromParent']['currentValue'];
        console.log('changes监听变化' + JSON.stringify(changes['carNoValFromParent'])); //注意这里不转字符串打印不出来
        if (carNoValFromParent && carNoValFromParent.length > 1) {
            this.childKeyBoardShow = true;
        }
    };
    SelectCarNoComponent.prototype.provinceSelect = function (val) {
        // alert(val)
        this.selectValue = [];
        this.selectValue.push(val);
        // this.$emit('selectedValue', this.selectValue)
        this.childOuterSelectedValue.emit(this.selectValue); //父组件监听childOuterSelectedValue
        this.childKeyBoardShow = !this.childKeyBoardShow;
        this.carNoValFromParent = this.selectValue;
    };
    SelectCarNoComponent.prototype.carNoSelect = function (val) {
        if (this.selectValue.length >= 7) {
            return;
        }
        if (this.selectValue.length <= 1) {
            // this.childKeyBoardShow = !this.childKeyBoardShow
        }
        this.selectValue.push(val);
        // this.$emit('selectedValue', this.selectValue)
        this.childOuterSelectedValue.emit(this.selectValue);
        this.carNoValFromParent = this.selectValue;
    };
    //删除选择的值
    SelectCarNoComponent.prototype.deleteVal = function () {
        if (this.selectValue.length <= 2) {
            this.childKeyBoardShow = !this.childKeyBoardShow;
            this.selectValue = this.selectValue.pop();
            return;
        }
        this.selectValue.pop();
        // this.$emit('selectedValue', this.selectValue)
    };
    SelectCarNoComponent.prototype.confirm = function () {
        this.hide();
    };
    //显示整个键盘
    SelectCarNoComponent.prototype.show = function () {
        // alert('show')
        var $carSelectBox = this.carSelectBox.nativeElement;
        var $keyboard = this.keyboardListBox.nativeElement;
        $carSelectBox.style.display = 'block';
        this.utils.addClass($carSelectBox, 'fadeIn');
        this.utils.addClass($keyboard, 'fadeIn');
        // this.childKeyBoardShow = true
        this.popIsfadeIn = true;
        // console.log('show'+ this.selectValue)
        if (this.selectValue && this.selectValue.length > 1) {
            this.childKeyBoardShow = true;
        }
    };
    //隐藏整个键盘
    SelectCarNoComponent.prototype.hide = function () {
        var $carSelectBox = this.carSelectBox.nativeElement;
        var $keyboard = this.keyboardListBox.nativeElement;
        this.utils.removeClass($carSelectBox, 'fadeIn');
        this.utils.removeClass($keyboard, 'fadeIn');
        // removeClass($carSelectBox, 'fadeIn')
        // removeClass($keyboard, 'fadeIn')
        this.popIsfadeIn = false;
        this.childKeyBoardShow = false;
        console.log('子组件：queding' + this.carNoValFromParent);
    };
    SelectCarNoComponent.prototype.mywatch = function () {
        if (this.selectValue && this.selectValue.length > 1) {
            this.childKeyBoardShow = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectCarNoComponent.prototype, "childOuterSelectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('defaultValue'),
        __metadata("design:type", Object)
    ], SelectCarNoComponent.prototype, "dataSourceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('carNoValFromParent'),
        __metadata("design:type", Object)
    ], SelectCarNoComponent.prototype, "carNoValFromParent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("carSelectBox"),
        __metadata("design:type", Object)
    ], SelectCarNoComponent.prototype, "carSelectBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("keyboardListBox"),
        __metadata("design:type", Object)
    ], SelectCarNoComponent.prototype, "keyboardListBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("keyboardList"),
        __metadata("design:type", Object)
    ], SelectCarNoComponent.prototype, "keyboardList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("simKeyBoard"),
        __metadata("design:type", Object)
    ], SelectCarNoComponent.prototype, "simKeyBoard", void 0);
    SelectCarNoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-car-no',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\components\select-car-no\select-car-no.html"*/'<!-- Generated template for the SelectCarNoComponent component -->\n\n  <div class="car-select-no-box fadeIn" #carSelectBox [ngStyle]="{\'display\':popIsfadeIn === true ? \'block\' : \'none\' }">\n    <div class="keyboard-list-box fadeIn" #keyboardListBox >\n    <ul class="keyboard-list" id="provinceList" #keyboardList [ngStyle]="{\'display\':childKeyBoardShow === true ? \'none\' : \'block\' }">\n      <li class="list-item clearfix">\n          <div class="p-item" *ngFor="let item of provinceRow1" (click)="provinceSelect(item.name)">{{item.name}}</div>\n      </li>\n      <li class="list-item  clearfix">\n          <span class="p-item" *ngFor="let item of provinceRow2" (click)="provinceSelect(item.name)">{{item.name}}</span>\n      </li>\n      <li class="list-item list-three clearfix">\n        <span class="p-item  p-item-null"></span>\n          <span class="p-item" *ngFor="let item of provinceRow3" (click)="provinceSelect(item.name)">{{item.name}}</span>\n          <span class="p-item p-item-null"></span>\n      </li>\n      <li class="list-item  list-four clearfix">\n          <span class="p-item p-item-null"></span>\n          <span class="p-item" *ngFor="let item of provinceRow4" (click)="provinceSelect(item.name)">{{item.name}}</span>\n          <span class="p-item p-item-close" (click)="hide()">取消</span>\n          <span class="p-item p-item-null"></span>\n      </li>\n    </ul>\n      <ul class="keyboard-list" id="simKeyBoard"  #simKeyBoard [ngStyle]="{\'display\':childKeyBoardShow === true ? \'block\' : \'none\' }">\n    <li class="list-item clearfix">\n        <span class="p-item" *ngFor="let item of carNo1" (click)="carNoSelect(item.name)">{{item.name}}</span>\n    </li>\n    <li class="list-item  clearfix">\n        <span class="p-item" *ngFor="let item of carNo2" (click)="carNoSelect(item.name)">{{item.name}}</span>\n    </li>\n    <li class="list-item list-three clearfix" style="width:90%">\n        <span class="p-item" *ngFor="let item of carNo3" (click)="carNoSelect(item.name)">{{item.name}}</span>\n    </li>\n    <li class="list-item  list-four clearfix">\n        <span class="p-item" *ngFor="let item of carNo4" (click)="carNoSelect(item.name)">{{item.name}}</span>\n        <span class="p-item delete" (click)="deleteVal()" style="min-width:35px">&lt;</span>\n        <span class="p-item font-confirm" (click)="confirm()" style="min-width:40px" >确认</span>\n    </li>\n  </ul>\n  </div>\n\n</div>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\components\select-car-no\select-car-no.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_utils_utils__["a" /* UtilsProvider */]])
    ], SelectCarNoComponent);
    return SelectCarNoComponent;
}());

//# sourceMappingURL=select-car-no.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationRecordListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ApplicationRecordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplicationRecordListPage = /** @class */ (function (_super) {
    __extends(ApplicationRecordListPage, _super);
    function ApplicationRecordListPage(navCtrl, navParams, storage, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.storage = storage;
        _this.rest = rest;
        _this.ApplyInfoList = [];
        _this.statusBtn = '';
        _this.getUserApplyInfo();
        return _this;
    }
    ApplicationRecordListPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ApplicationRecordListPage');
    };
    ApplicationRecordListPage.prototype.calStatusBtn = function (val) {
        if (val === "1" || val === "3") {
            return 'success';
        }
        if (val === "-1" || val === "2" || val === "4") {
            return 'fail';
        }
    };
    ApplicationRecordListPage.prototype.formCheckStatus = function (val) {
        if (val === "-1") {
            return '待申请';
        }
        if (val === "0")
            return '审核中';
        if (val === "1")
            return '审核成功';
        if (val === "2")
            return '审核失败';
        if (val === "3")
            return '审核中'; //人工介入中 -->审核中
        if (val === "4")
            return '已注销';
    };
    ApplicationRecordListPage.prototype.getUserApplyInfo = function () {
        var _this = this;
        var api = 'SubInfo/QueryApply'; //获取信息接口
        this.storage.get('token').then(function (val) {
            _this.token = val;
            var params = {
                token: val
            };
            var that = _this;
            _this.rest.doPost(api, params, function (ret) {
                console.log('address:', ret.result.address);
                if (ret.issuccess) {
                    that.ApplyInfoList = ret.result; //[{Name: '1',CarNum: 'ds',CarColor: '1',CheckStatus: "1"}]//
                }
            });
        });
    };
    ApplicationRecordListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-application-record-list',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\application-record-list\application-record-list.html"*/'<!--\n  Generated template for the ApplicationRecordListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>申请记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<div class="iscroll-box">\n    <ion-scroll scrollY="true">\n        <div class="list-box-wrap" *ngFor="let item of ApplyInfoList">\n          <div class="list-box">\n            <div class="list-car-info">\n              <p><span>申请人 </span><span>{{item.Name.slice(0,13)}}</span></p>\n              <p><span>车牌号</span><span>{{item.CarNum}}</span></p>\n              <p><span>车牌颜色</span><span>{{item.CarColor}}</span><span *ngIf="item.CarColor.length===1">牌</span></p>\n            </div>\n            <div class="status-btn" [ngClass]="calStatusBtn(item.CheckStatus)">\n              {{formCheckStatus(item.CheckStatus)}}\n            </div>\n          </div>\n      </div>\n      \n      <div class="h15"></div>\n      </ion-scroll>\n\n      <div class="tips-status" style="top:18%;height:auto;" [hidden]="ApplyInfoList.length>0"><p  class="statusImg no-record"></p> <p  class="desc">暂时还没有申请记录~</p> </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\application-record-list\application-record-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], ApplicationRecordListPage);
    return ApplicationRecordListPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=application-record-list.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__record_car_record_car__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bill_list_bill_list__ = __webpack_require__(234);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SelectCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectCarPage = /** @class */ (function (_super) {
    __extends(SelectCarPage, _super);
    function SelectCarPage(navCtrl, navParams, storage, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.storage = storage;
        _this.rest = rest;
        _this.carInfoList = [];
        _this.getCarList();
        return _this;
    }
    SelectCarPage.prototype.ionViewDidEnter = function () {
    };
    SelectCarPage.prototype.getCarList = function () {
        var _this = this;
        var api = 'SubInfo/QueryWirteCard?needload'; //获取信息接口
        this.storage.get('token').then(function (val) {
            _this.token = val;
            var params = {
                token: val
            };
            var that = _this;
            _this.rest.doPost(api, params, function (ret) {
                console.log('address:', ret.result.address);
                if (ret.issuccess) {
                    that.carInfoList = ret.result;
                }
            });
        });
    };
    SelectCarPage.prototype.selectCarGotoPage = function (item) {
        var _this = this;
        this.storage.set('carListInfo', item);
        // this.storage.set('carListInfo', item)
        console.log('set--carListInfo--', item);
        this.storage.get('type').then(function (val) {
            //账单查询
            if (val === 1) {
                // this.$router.push('/bill')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bill_list_bill_list__["a" /* BillListPage */]);
            }
            //通行记录
            if (val === 2) {
                // console.log(carNo)
                // this.$router.push('/recordCar')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__record_car_record_car__["a" /* RecordCarPage */]);
            }
        });
    };
    SelectCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-car',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\select-car\select-car.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>车辆选择</ion-title>\n    </ion-navbar>\n</ion-header>\n  <ion-content>\n    <div id="select-car" [hidden]="carInfoList.length===0">\n        <div class="select-car-title" >\n            请先选择要查询的车辆\n        </div>\n        <div class="form-box">\n                <ion-scroll scrollY="true">\n                    <div style="height:40px;"></div>\n                    <div class="car-list" *ngFor="let item of carInfoList" (tap)="selectCarGotoPage(item)">\n                        <div class="car-img"><img src="assets/imgs/img01.png"></div>\n                        <div class="car-number">{{item.CarNum}}</div> <div class="icon-more2"><ion-icon name="arrow-forward"></ion-icon></div>\n                    </div>\n                </ion-scroll>\n        </div>\n        \n    </div>\n    <div class="tips-status-box" [hidden]="carInfoList.length>0">\n            <div class="ptc">\n                <div class="tips-status">\n                    <p class="statusImg"></p> <p class="desc">您还没有车辆哦～</p> \n                </div>\n            </div>\n        </div>\n  </ion-content>\n  '/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\select-car\select-car.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], SelectCarPage);
    return SelectCarPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=select-car.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import BScroll from 'better-scroll'

/**
 * Generated class for the RecordCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var window
var RecordCarPage = /** @class */ (function () {
    function RecordCarPage(navCtrl, navParams, storage, rest, utils, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.utils = utils;
        this.zone = zone;
        this.recordList = [];
        this.scrollAmount = 0;
        this.backTopShow = false;
        this.defaultDate = '2016-02-10'; //注意组件内部 当日期发生变化了才会初始化
        this.defaultDate2 = '2018-05-12';
        this.carNo = '';
        this.pageSize = 20;
        this.page = 0;
        this.pullup = true;
        this.beforeScroll = true;
        this.hasMore = true;
        this.ajaxLoaingShow = true;
        // mask=true//防止点击上一个列表触摸这个页面的日期选择
        this.tipsText = '开始日期不能大于结束日期';
        this.btnDisable = false;
        this.isLoadingMore = false;
        this.isShowNoListTips = false;
        this.defaultDate = utils.getNowDate(-30);
        this.defaultDate2 = utils.getNowDate();
    }
    RecordCarPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this._initScrollHeight()
        this.storage.get('carListInfo').then(function (data) {
            if (data != null) {
                console.log(data);
                _this.carNo = data.CarNum;
                _this.loadMore();
            }
        });
    };
    RecordCarPage.prototype._initScrollHeight = function () {
        var domRecordCar = this.recordCar.nativeElement;
        var domRecordImg = this.recordImg.nativeElement;
        var _height = domRecordCar.clientHeight;
        var _imgHeight = domRecordImg.clientHeight;
        console.log(domRecordCar);
        this.wrapper.nativeElement.style.height = _height - _imgHeight - 30 + "px";
    };
    RecordCarPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        var that = this;
        this.isLoadingMore = true; //网络请求慢的时候可以遮盖住页面禁止继续上拉加载
        if (!this.hasMore) {
            this.isLoadingMore = false;
            return;
        }
        this.page++;
        var api = 'Main/QueryConsumeDetailNew'; //获取信息接口
        this.storage.get('token').then(function (val) {
            _this.token = val;
            var params = {
                token: val,
                data: {
                    CarNo: _this.carNo,
                    outTimeBefore: _this.defaultDate + ' 00:00:00',
                    outTimeAfter: _this.defaultDate2 + ' 23:59:59',
                    pageHelp: {
                        "CurrentPage": _this.page,
                        "PageSize": _this.pageSize //每页显示行数
                    }
                }
            };
            _this.rest.doPost(api, params, function (ret) {
                if (ret.issuccess) {
                    if (ret.result.ConsumeDetail === null)
                        ret.result.ConsumeDetail = []; //特殊处理
                    that.recordList = that.recordList.concat(ret.result.ConsumeDetail);
                    that.isLoadingMore = false; //是否正在加载控制遮罩的显示
                    that.isShowNoListTips = that.recordList.length == 0 ? true : false;
                    if (infiniteScroll) {
                        infiniteScroll.complete(); /*请求完成数据更新页面*/
                        var data = ret.result;
                        if (!data.ConsumeDetail.length || (data.pageHelp.PageSize + (data.pageHelp.CurrentPage - 1) * _this.pageSize) >= data.pageHelp.AllCount) {
                            // infiniteScroll.enable(false);  //一个页面可以多次加载，不要禁用销毁掉 改为隐藏掉
                            _this.hasMore = false;
                        }
                    }
                }
            });
        });
    };
    /*上拉更新*/
    RecordCarPage.prototype.doInfinite = function (infiniteScroll) {
        // console.log('11111')
        this.loadMore(infiniteScroll);
    };
    RecordCarPage.prototype._searchList = function () {
        var _this = this;
        var validateDate = this.validateDate(this.defaultDate, this.defaultDate2);
        if (!validateDate) {
            this.customToast.show('开始时间不能大于结束时间', 1000);
            return;
        }
        this.hasMore = true; //重置为初始值
        this.ajaxLoaingShow = true; //重置为初始值
        this.page = 0; //重置为初始值
        this.recordList = []; //重置为初始值
        this.loadMore();
        setTimeout(function () {
            _this.ajaxLoaingShow = false;
        }, 600);
    };
    // backTop(e) {
    //   // this.$refs.listRecord.backTop() this.scroll.backTop()
    //   // this.scroll.scrollTo(0, 0, 500)
    //   this.scroll.scrollTo(0, 0, 500)
    // }
    RecordCarPage.prototype.scrollToTop = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToTop(500);
        }, 100);
    };
    RecordCarPage.prototype.scrollHandler = function (event) {
        var _this = this;
        console.log("ScrollEvent: " + event);
        this.zone.run(function () {
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            // console.log(this.content.scrollTop)
            if (_this.content.scrollTop > 350) {
                _this.backTopShow = true;
            }
            else {
                _this.backTopShow = false;
            }
        });
    };
    RecordCarPage.prototype.ionScrollEnd = function (event) {
        // console.log('ionScrollEnd:' + this.content.scrollTop)
        // alert('ionScrollEnd')
        // this.content.scrollTo(0, this.content.scrollTop - 200, 0)
    };
    RecordCarPage.prototype.scrollPos = function (pos) {
        // console.log(pos)
        if (pos.y < -160) {
            this.backTopShow = true;
        }
        else {
            this.backTopShow = false;
        }
    };
    RecordCarPage.prototype.validateDate = function (date1, date2) {
        var newdate1 = new Date(date1).getTime();
        var newdate2 = new Date(date2).getTime();
        return newdate1 - newdate2 > 0 ? 0 : 1;
    };
    RecordCarPage.prototype.selectedDefaultDateFromChild = function (data) {
        console.log('selectedDefaultDateFromChild---', data);
        this.defaultDate = data;
    };
    RecordCarPage.prototype.selectedDefaultDateFromChild2 = function (data) {
        console.log('selectedDefaultDateFromChild2---', data);
        this.defaultDate2 = data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("wrapper"),
        __metadata("design:type", Object)
    ], RecordCarPage.prototype, "wrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("recordCar"),
        __metadata("design:type", Object)
    ], RecordCarPage.prototype, "recordCar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("recordImg"),
        __metadata("design:type", Object)
    ], RecordCarPage.prototype, "recordImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("datePicker1"),
        __metadata("design:type", Object)
    ], RecordCarPage.prototype, "datePicker1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("datePicker2"),
        __metadata("design:type", Object)
    ], RecordCarPage.prototype, "datePicker2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("customToast"),
        __metadata("design:type", Object)
    ], RecordCarPage.prototype, "customToast", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], RecordCarPage.prototype, "content", void 0);
    RecordCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-record-car',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\record-car\record-car.html"*/'<!--\n  Generated template for the RecordCarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>通行记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- style="display:none;" -->\n<ion-content (ionScroll)="scrollHandler($event)" (ionScrollEnd)="ionScrollEnd($event)">\n  <!-- <div id="record-car" #recordCar > -->\n    <div class="record-img" #recordImg style="display:block;">\n        <div class="record-time-span">\n            <div class="time-title">\n                出站时间段\n            </div> <div class="time-span">\n                <span class="time">\n                    <date-picker (selectedDefaultDateFromChild)="selectedDefaultDateFromChild($event)" [defaultDate]="defaultDate" #datePicker1></date-picker>\n                </span> \n                <span class="text">至</span> <span class="time">\n                    <date-picker (selectedDefaultDateFromChild)="selectedDefaultDateFromChild2($event)" [defaultDate]="defaultDate2" #datePicker2></date-picker>\n                </span>\n            </div> \n            <div class="btn">\n                <button ion-button block (tap)="_searchList()" [color]="btnDisable===true?\'light\':\'\'">查询</button>\n          </div>\n        </div>\n    </div>\n\n    <ion-list >\n            <ion-item class="record-list" *ngFor="let item of recordList">\n                <div class="record-list-title">\n                    <div>通行费用  </div>\n                    <div class="cost">￥{{item.consumeMoney}}</div>\n                </div> <div class="record-list-info">\n                    <div class="in-out-list">\n                        <div class="go-site">进站名：<span>{{item.inStation}}</span></div>\n                        <div class="go-time">{{item.inTime | formateDate}}</div>\n                    </div> <div class="in-out-list">\n                        <div class="go-site">出站名：<span>{{item.outStation}}</span></div> <div class="go-time">{{item.outTime | formateDate}}</div>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n        <div class="dataTipsBtnBox" *ngIf="recordList.length>0&&!hasMore">\n                <div class="seeMore noMore"><span>没有更多记录了</span>\n                </div>\n            </div> \n\n    <div class="record-list-box-wrap" [hidden]="!isShowNoListTips">\n        <div id="record-list" >\n            <div class="wrapper" #wrapper >\n                <div class="record-list-box">\n                    \n                     \n                    <div class="tips-status-box" style="background:none;" [hidden]="!isShowNoListTips">\n                        <div class="ptc" style="margin-top:0;">\n                            <div class="tips-status">\n                                <p class="statusImg no-record"></p> <p class="desc">没有记录～</p> \n                            </div>\n                        </div>\n                      </div>\n                  </div>\n            </div>\n\n\n        </div>\n        <div class="ajaxLoaing" style="display: none;">\n            <div class="loading" style="display: none;">\n                <img width="24" height="24" src="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFAAAEACwAAAAAZABkAAAD/0i63P4wykmrvTjrzbv/YCiOZGme6CasbOqObPvOXRzTeGbLeT/tK18KQLwABZeBUlghOgGVY0VJHTAlT2cUOK0ur4+s9sedeKngsBhK3lHO3zRjXZRIJfC4fEFv28xwew50bBB3EHlWgg2EEYcOiYtqYo5lD3mSk5QPjwyRmYNrhpYNmKChog6dCp+njKkNqwSmrq+wDG6QtD4BvRiNsX+lu296Hb3IARd9qjyegRZnH8nUTbfR0IDZG9TdFJsa0trEGd3eE08eVcWJihzm5ovt6x7w8WDz9CD25z35aCT4Vcvxz9gIgchwFJyBUOG8HvwckqNhT6K4K/1oXJST0P8HwFogQ4ocSbKkyVoFP8pJaRARS31MXsJ0KdNdzJo2L+FsqXFnzmE7r/j8CVRmmqDjXh7F2UXpSqMno0qdSrWq1ZNENWby4m/mzY0uJvYUa6JdV7NjW4XNZ1Ft2X9nH5ZIKYSuiIX44ILAu5StOr8RvGIQ/EwuB8OBuW4Aq9NtBseNCbOTXJjx4G14MDdVPJny5qyROS9gDJkmzxkTLZM95ZhcaVCQU6+WJ1v17D2lxb4WRLa3Zkmvff/mPZxV8VnH8x5fvfur5cqem3tMjvw5dJW4qd++HRe7ac/GRWcX/9176NNCwYcn//3qevXuz6OPn9g6/czw7xedrz9x//8KAAYo4IAEFthAAgAh+QQFAAAEACwLAAUAPwAjAAADxUi63P4QyAmrvfhNmrvP2/aNJBNyZdqdkvoFsMcCnmCTcB6AbGb/gpcuhpn5gLfOMFfsXZA/z5JoMT6hQeV0V3VWsEnt8mL9YkdbbsT7AGeF00rZ4U5t5ewGWJVenyB1fHEaeQt7Ln0Oc4aHiIMNiwqNjo8mIW2TCwObcGOQl3qZCpukA1KVCyJ0Zw6lrhl3I6IErrUYniRQELW2FzouQBW8vC7FDcPExsrIvcouzK/OxdCk0sbU1svI2drJ3NfR387V4hgJACH5BAUAAAQALBoABQA/ACMAAAPFSLrcHjC6Sau9L0LMu1ea9o0kE0pl6p2b6g3wynpATcL4wLEBV/+ATw63m2GAv9cwduEdkbbOkmlxXqBRzpRKsVawWe20afxiR1tdxTsBB9HbddnhTsW78wZYlcafKHV8YxNsDHsufRl/dIeIgw2FCo2OjyYhbZOUS4oohpkXAqEVd5CdnlAeoaoCFKQ0Zxirsq1DKaigsrO0XCRAsbm6LsIKwMDDwsXGxynJucsqzcHPI9Gq09DR1y7N2sjF3cPO4MfWHQkAIfkEBQAABAAsLgAFADEAMAAAA71Is0z+MMpJJ2s1a33v/qDTYWFJjYupSugQBvAKtR9sB7KI1ncs05qeLQfMCH2rIuWIVCknzJxiV2HiiFRoVPqEbLnZiFWqGy2P5HJHi053CV/3WjJOq1Pi+AbAz3jobR98gwAyehSEiYY9e4mKi02Ijo92kpOUlRCXk5kRm46dnp+EoZqjfaWmn6kSq6ytl6+Wg7IZtLW4ubq7vL2dAsDBwsPApcTHyL/Iy8GZzM/FdtDPztPHytbDodnCDgkAIfkEBQAABAAsOwAKACQAPwAAA69IujzOMMpJnB0062u1h1z3jeEzeqV5Zum6te6UYrFc1vaNR/De9D4FMDgLLoqngDLHSSqfkuHkSV3ympqqlunRbndeLy4sjpG/5jN1rLayz0a4kUCeL9B2BTTP7/v/gIERAISFhoeELoiLjCeMj4YjkJOJHpSTkpeLjpqIK52RgqKjpKUjAoECqqp+q66oea+vdrKyRrW2Qbi5O7u8OL6uusGsw8Fzx7S4fMt9sxEJACH5BAUAAAQALDsAGQAkAD8AAAOtSLrcziO+SV+8o2qL8f5d+GmhOHJldzZpuS6t+RKxOtO1dCv5DrU+VirokBGFmaNyyWw6n8yAdEqtSl/WrPak7VJH3vB1Iw6Dy1ku2rpaf6HwuHzuBMQBePwzz7cz+31LgIBHg4REhoc+iYo7jHyIj3oTApUCGpJ+DZaWG48PnJ2ehg6hoqONCqanqJOlq02rlbGyTLKXtrW5prSwu6G9vL/Aw6xHusW4yU/EOwkAIfkEBQAABAAsLgAtADEAMQAAA7lIutz+ZMhJq4Q4L8u7/k0nUmA5nlepoaf6sZ67wpb80pOt73zv/8CgcLgLEGWBZPIIUjqNTMzzGX1Mp1XGFZtVbLnZL7gqdnYJZWUPwAZo0lBbu/0p7+b0+laHz+vHCwKCgw59fn9LD4OEhYZCi4uNjkCQjA2GbJSVAg+Ybj+bnJ2YoJsYpD6hp6g8qqt9qaavsK2ys3i1lR+sNq4ZvDK+v7Q6wreZO8a3PcpdzVnP0JBnitPU1dcOCQAh+QQFAAAEACwaADoAPwAkAAADyEi63P4wkiGrvXhojbu3W0h9ZCmKZZqdqOo+7PnOTCzTs33jrh7yL99GIigKXIFkoCIcOYzGlFIJ0j2g0dKUWmVdsUXSltttMcBZBmDNdozJZecZ/WC33W8cOtyw2/F5L3tHDn53DW9Jgnt1hgAPiUsqgxCOj5CJk3SVjhGZJZSchp6fH4wRlhKlHaGifqqrFq2uf7CBF6cSqRWxRJu6nby3smAXu8JbrMUWx7ZTHlgYzc6SQIXB1jPT2Snb3CWj39qv4jRr5QwJACH5BAUAAAQALAsAOgA/ACQAAAPHSLrcJC7KSesUGNvNu8og5I3kE4Jlap2n6kZs+86xPKu1fZc5uuM9zS8VFE0ASIBrwBxccpZkMtVsSmob6bRUtTpiHO3W0/V+fVkx0hFoux1l80ytZLvbkbjzRq8z7ndwenN0EYBvgnEvfYaHAXmDKoyNhxJ6eyWFEo6PloqZmpSAE5egYhScFJEek5uOqqtpahWpsJ+yWha1tl0doRO7pLdRp7qvFsMVs8aVyGWsUhzBvJhDDdPWKtjZJdvcJM3fL+Hi450qCQAh+QQFAAAEACwFAC0AMQAxAAADukgq3P5MyUmrlTDryzvRoOONU2hG5HiaKblurfpCsTs3da7vfO//wKBwCAQQa4Bk8jhSOo1My/MZpUynVckVW91ymd7vMezMkpXmsyfADvDIo3Z75yXJ57pt6o7PUfd8bBUDhIVDgW6DhYRCiIkTi4tAjhaRhj+UipaYiBeWjD6dnp+hopWkPaanmzyZo6w6rq+RrYEjnwO1fLeosbu8sDm2wLS6giS4WavFypC9zQrJ0M6S09SX1s4SCQAh+QQFAAAEACwFABkAJAA/AAADrki6Ks4wytmcpRjb/bJfXPh5oThSZXlOqbpGrfmC8TZD9XUz+Q63vp8riOMQUZ2jcslsOp8MgHRKrUpf1qz2pO1SR97w1SMOg8tZLtq6Wn+h8Lh8Tj8F4oF83qnv35V+fkeBgUSEhTuHiDOKiy+NfT6QepKTGQOYAxOQHpmZEoofnp8RhyOjpBCCp6iYTK2aS7CxR7OvsLK4uai3rb2jv8BKtrvCxZ5Nvsm8TsYRCQAh+QQFAAAEACwFAAoAJAA/AAADrki63K4ivklnvKJqi+X+S3eBoOiRmnmilMqm7tvG8kPXjZrhzs1Dvl+Qp6MAjqii48gEkILN6AcalcIwj2p1g81qt7yv9icG18pWHJr5I6zbijI8/p0vzHa6M8/v+/+AGgGDhIWGgyyHioski46FII+SiBuTkpGWio2ZhyickIGhoqOkogOAA6mpfKqtp3Curm2xsT+0tTW3uC+6uyy9rTjAqsLDtr2wt3bKebI/CQA7">\n                <p class="desc"></p>\n            </div>\n        </div>\n    </div>\n    <div class="back-btn" *ngIf="backTopShow" (tap)="scrollToTop()"></div>\n    <div class="mask" *ngIf="isLoadingMore"></div>\n    <custom-toast #customToast></custom-toast>\n    \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" \n    threshold="100px" *ngIf="this.hasMore">\n      <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="正在加载更多..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\record-car\record-car.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], RecordCarPage);
    return RecordCarPage;
}());

//# sourceMappingURL=record-car.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bill_detail_bill_detail__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { BaseUI } from '../../common/baseui';
/**
 * Generated class for the BillListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillListPage = /** @class */ (function () {
    function BillListPage(navCtrl, navParams, storage, rest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.productList = [];
        this.getProductList();
    }
    BillListPage.prototype.ionViewDidEnter = function () {
        // console.log('carListInfo----start');
        // this.storage.get('carListInfo').then((data) => {
        //   if (data != null) {
        //     console.log(data);
        //   }
        // })
    };
    //获取产品类别
    BillListPage.prototype.getProductList = function () {
        this.productList = [
            { 'id': "1", 'pName': '任意通', 'pType': '1' },
            { 'id': "2", 'pName': '30天记账卡', 'pType': '30' },
            { 'id': "3", 'pName': '45天记账卡', 'pType': '45' }
        ];
    };
    BillListPage.prototype.goToDtl = function (pType) {
        // alert(pType)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_bill_detail_bill_detail__["a" /* BillDetailPage */], pType);
    };
    BillListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bill-list',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\bill-list\bill-list.html"*/'<!--\n  Generated template for the BillListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>敬请期待</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <!-- <div class="form-box22">\n          <div class="wrapper">\n              <div>\n                  <div class="bill-list" *ngFor="let item of productList" (tap)="goToDtl(item)">\n                      <div class="bill-number">{{item.pName}}</div> <div class="icon-more2"><ion-icon name="arrow-forward"></ion-icon></div>\n                  </div>\n              </div>\n          </div>\n      </div> -->\n      <div class="billTips">\n          <h3>该平台账单及账单还款功能，暂未上线。<br/>敬请期待哦~</h3>\n          <p>您也可以关注我们的官方微信公众号进行相应的<br/>查看与操作。</p>\n          <h4>操作步骤</h4>\n          <p>1.搜索公众号--<em>易路通达</em>,关注并进入</p>\n          <p>2.点击下方菜单：<em>ETC业务--货车ETC</em>，进入微信端首页</p>\n          <p>3.直接使用本app账号、密码登录：点击首页-<em>账单查询</em></p>\n      </div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\bill-list\bill-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], BillListPage);
    return BillListPage;
}());

//# sourceMappingURL=bill-list.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import BScroll from 'better-scroll'

/**
 * Generated class for the BillDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillDetailPage = /** @class */ (function () {
    function BillDetailPage(navCtrl, navParams, storage, rest, utils, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.utils = utils;
        this.zone = zone;
        this.title = '任意通';
        this.monery = '10000';
        this.date = '2018-02-03T21:19';
        this.listType1 = true;
        this.listType2 = false;
        this.backTopShow = false;
        this.billList = []; //[1,2,3]
        this.page = 0;
        this.pageSize = 20;
        this.hasMore = true;
        this.isShowNoListTips = false;
        this.isLoadingMore = false;
        var pType = this.navParams.get('pType');
        console.log(pType);
        console.log(this.navParams);
        this.title = this.navParams.get('pName'); //根据传递过来的类型名称设置title
        this.showListType(pType);
        this.backTopShow = false;
    }
    //显示账单列表类型
    BillDetailPage.prototype.showListType = function (pType) {
        if (pType === '1') {
            // alert(pType)
            this.listType1 = true;
            this.listType2 = false;
        }
        else {
            this.listType1 = false;
            this.listType2 = true;
        }
    };
    BillDetailPage.prototype.ionViewDidLoad = function () {
        this.loadMore();
    };
    /*上拉更新*/
    BillDetailPage.prototype.doInfinite = function (infiniteScroll) {
        // console.log('11111')
        // this.requestData(infiniteScroll);     
        // if(!this.isLoadingMore) {
        //   this.loadMore(infiniteScroll);
        // }
        this.loadMore(infiniteScroll);
    };
    BillDetailPage.prototype.ionScrollEnd = function (event) {
        // console.log('ionScrollEnd'+event);
        // this.loadMore();
    };
    BillDetailPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        var that = this;
        this.isLoadingMore = true;
        if (!this.hasMore) {
            this.isLoadingMore = false;
            return;
        }
        this.page++;
        var api = 'Main/QueryConsumeDetailNew'; //获取信息接口
        this.storage.get('token').then(function (val) {
            _this.token = val;
            var params = {
                token: val,
                data: {
                    CarNo: '浙A9F023',
                    outTimeBefore: '2017-02-11 00:00:00',
                    outTimeAfter: '2018-02-11 23:59:59',
                    pageHelp: {
                        "CurrentPage": _this.page,
                        "PageSize": _this.pageSize //每页显示行数
                    }
                }
            };
            _this.rest.doPost(api, params, function (ret) {
                if (ret.issuccess) {
                    if (ret.result.ConsumeDetail === null)
                        ret.result.ConsumeDetail = []; //特殊处理
                    that.billList = that.billList.concat(ret.result.ConsumeDetail);
                    that.isShowNoListTips = that.billList.length == 0 ? true : false;
                    //infiniteScroll自带方法
                    if (infiniteScroll) {
                        _this.isLoadingMore = false;
                        infiniteScroll.complete(); /*请求完成数据更新页面*/
                        var data = ret.result;
                        if (!data.ConsumeDetail.length || (data.pageHelp.PageSize + (data.pageHelp.CurrentPage - 1) * _this.pageSize) >= data.pageHelp.AllCount) {
                            // infiniteScroll.enable(false);  //一个页面可以多次加载，不要禁用销毁掉 改为隐藏掉
                            _this.hasMore = false;
                        }
                    }
                    //infiniteScroll自带方法
                    // this.isLoadingMore = false
                    // let data = ret.result
                    // if (!data.ConsumeDetail.length || (data.pageHelp.PageSize + (data.pageHelp.CurrentPage - 1) *  this.pageSize) >= data.pageHelp.AllCount) {  /*没有更多数据了 禁用上拉更新*/
                    //   this.hasMore = false
                    // }
                }
            });
        });
    };
    BillDetailPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    BillDetailPage.prototype.scrollHandler = function (event) {
        var _this = this;
        // console.log(`ScrollEvent: ${event}`)
        this.zone.run(function () {
            // console.log(this.content.scrollTop)
            if (_this.content.scrollTop > 240) {
                _this.backTopShow = true;
            }
            else {
                _this.backTopShow = false;
            }
            //实时监控有没有快到底部
            // var domWrapper = this.wrapper.nativeElement
            // let _height = domWrapper.clientHeight //列表总高度
            // console.log('_height', _height);
            // let _scrollTop = this.content.scrollTop //滚动条距离顶部高度
            // let _contentHeight = this.content.contentHeight //滚动容器高度 623
            // //判断是否到底部 _height - _scrollTop = _contentHeight ? true : false
            // if(_height - _scrollTop <= _contentHeight) {
            //   // alert('daodile')
            //   if(!this.isLoadingMore) {
            //     this.loadMore();
            //   }
            // }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], BillDetailPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('wrapper'),
        __metadata("design:type", Object)
    ], BillDetailPage.prototype, "wrapper", void 0);
    BillDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bill-detail',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\bill-detail\bill-detail.html"*/'<!--\n  Generated template for the BillDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="scrollHandler($event)" (ionScrollEnd)="ionScrollEnd($event)">\n    <div class="form-box22">\n        <div class="wrapper" *ngIf="listType1" >\n            <div class="bill-list" *ngFor="let item of billList;index as i">\n                <div class="bill-number">04-{{i}}</div>\n                <div class="bill-number">1000</div>\n            </div>  \n            <!-- <div class="bill-list">\n                <div class="bill-number">04-17</div>\n                <div class="bill-number">1000</div>\n            </div>  \n            <div class="bill-list">\n                <div class="bill-number">04-16</div>\n                <div class="bill-number">1000</div>\n            </div>   -->\n        </div>\n        <div class="wrapper" *ngIf="listType2" #wrapper>\n          <div class="repeat-list" *ngFor="let item of billList">\n                  <div class="bill-list-title">\n                      <div>2018年</div>\n                      <div>总计通行费用:￥<span>{{monery | formateMoney}}</span>  总计服务费:￥ <span>222.22 </span></div>\n                    </div>\n\n                  <div class="bill-list2">\n                      <div class="bill-number">4月账单</div>\n                      <div class="bill-number">\n                        <span>1000</span>\n                        <span class="no-pay">未还款</span>\n                      </div>\n                  </div>  \n                  <div class="bill-list2">\n                      <div class="bill-number">4月账单</div>\n                      <div class="bill-number">\n                          <span>1000</span>\n                          <span class="pay-part">部分还款</span>\n                      </div>\n                  </div>  \n                  <div class="bill-list2">\n                      <div class="bill-number">4月账单</div>\n                      <div class="bill-number">\n                          <span>1000</span>\n                          <span class="pay-overdate">逾期</span>\n                      </div>\n                  </div>   \n              </div>\n              \n       </div>\n       <!-- <div class="dataTipsBtnBox" *ngIf="billList.length>0&&hasMore">\n            <div class="seeMore">\n                <span>\n                    <div class="loadingBox">\n                        <div class="loading">\n                            <img width="20" height="20" src="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFAAAEACwAAAAAZABkAAAD/0i63P4wykmrvTjrzbv/YCiOZGme6CasbOqObPvOXRzTeGbLeT/tK18KQLwABZeBUlghOgGVY0VJHTAlT2cUOK0ur4+s9sedeKngsBhK3lHO3zRjXZRIJfC4fEFv28xwew50bBB3EHlWgg2EEYcOiYtqYo5lD3mSk5QPjwyRmYNrhpYNmKChog6dCp+njKkNqwSmrq+wDG6QtD4BvRiNsX+lu296Hb3IARd9qjyegRZnH8nUTbfR0IDZG9TdFJsa0trEGd3eE08eVcWJihzm5ovt6x7w8WDz9CD25z35aCT4Vcvxz9gIgchwFJyBUOG8HvwckqNhT6K4K/1oXJST0P8HwFogQ4ocSbKkyVoFP8pJaRARS31MXsJ0KdNdzJo2L+FsqXFnzmE7r/j8CVRmmqDjXh7F2UXpSqMno0qdSrWq1ZNENWby4m/mzY0uJvYUa6JdV7NjW4XNZ1Ft2X9nH5ZIKYSuiIX44ILAu5StOr8RvGIQ/EwuB8OBuW4Aq9NtBseNCbOTXJjx4G14MDdVPJny5qyROS9gDJkmzxkTLZM95ZhcaVCQU6+WJ1v17D2lxb4WRLa3Zkmvff/mPZxV8VnH8x5fvfur5cqem3tMjvw5dJW4qd++HRe7ac/GRWcX/9176NNCwYcn//3qevXuz6OPn9g6/czw7xedrz9x//8KAAYo4IAEFthAAgAh+QQFAAAEACwLAAUAPwAjAAADxUi63P4QyAmrvfhNmrvP2/aNJBNyZdqdkvoFsMcCnmCTcB6AbGb/gpcuhpn5gLfOMFfsXZA/z5JoMT6hQeV0V3VWsEnt8mL9YkdbbsT7AGeF00rZ4U5t5ewGWJVenyB1fHEaeQt7Ln0Oc4aHiIMNiwqNjo8mIW2TCwObcGOQl3qZCpukA1KVCyJ0Zw6lrhl3I6IErrUYniRQELW2FzouQBW8vC7FDcPExsrIvcouzK/OxdCk0sbU1svI2drJ3NfR387V4hgJACH5BAUAAAQALBoABQA/ACMAAAPFSLrcHjC6Sau9L0LMu1ea9o0kE0pl6p2b6g3wynpATcL4wLEBV/+ATw63m2GAv9cwduEdkbbOkmlxXqBRzpRKsVawWe20afxiR1tdxTsBB9HbddnhTsW78wZYlcafKHV8YxNsDHsufRl/dIeIgw2FCo2OjyYhbZOUS4oohpkXAqEVd5CdnlAeoaoCFKQ0Zxirsq1DKaigsrO0XCRAsbm6LsIKwMDDwsXGxynJucsqzcHPI9Gq09DR1y7N2sjF3cPO4MfWHQkAIfkEBQAABAAsLgAFADEAMAAAA71Is0z+MMpJJ2s1a33v/qDTYWFJjYupSugQBvAKtR9sB7KI1ncs05qeLQfMCH2rIuWIVCknzJxiV2HiiFRoVPqEbLnZiFWqGy2P5HJHi053CV/3WjJOq1Pi+AbAz3jobR98gwAyehSEiYY9e4mKi02Ijo92kpOUlRCXk5kRm46dnp+EoZqjfaWmn6kSq6ytl6+Wg7IZtLW4ubq7vL2dAsDBwsPApcTHyL/Iy8GZzM/FdtDPztPHytbDodnCDgkAIfkEBQAABAAsOwAKACQAPwAAA69IujzOMMpJnB0062u1h1z3jeEzeqV5Zum6te6UYrFc1vaNR/De9D4FMDgLLoqngDLHSSqfkuHkSV3ympqqlunRbndeLy4sjpG/5jN1rLayz0a4kUCeL9B2BTTP7/v/gIERAISFhoeELoiLjCeMj4YjkJOJHpSTkpeLjpqIK52RgqKjpKUjAoECqqp+q66oea+vdrKyRrW2Qbi5O7u8OL6uusGsw8Fzx7S4fMt9sxEJACH5BAUAAAQALDsAGQAkAD8AAAOtSLrcziO+SV+8o2qL8f5d+GmhOHJldzZpuS6t+RKxOtO1dCv5DrU+VirokBGFmaNyyWw6n8yAdEqtSl/WrPak7VJH3vB1Iw6Dy1ku2rpaf6HwuHzuBMQBePwzz7cz+31LgIBHg4REhoc+iYo7jHyIj3oTApUCGpJ+DZaWG48PnJ2ehg6hoqONCqanqJOlq02rlbGyTLKXtrW5prSwu6G9vL/Aw6xHusW4yU/EOwkAIfkEBQAABAAsLgAtADEAMQAAA7lIutz+ZMhJq4Q4L8u7/k0nUmA5nlepoaf6sZ67wpb80pOt73zv/8CgcLgLEGWBZPIIUjqNTMzzGX1Mp1XGFZtVbLnZL7gqdnYJZWUPwAZo0lBbu/0p7+b0+laHz+vHCwKCgw59fn9LD4OEhYZCi4uNjkCQjA2GbJSVAg+Ybj+bnJ2YoJsYpD6hp6g8qqt9qaavsK2ys3i1lR+sNq4ZvDK+v7Q6wreZO8a3PcpdzVnP0JBnitPU1dcOCQAh+QQFAAAEACwaADoAPwAkAAADyEi63P4wkiGrvXhojbu3W0h9ZCmKZZqdqOo+7PnOTCzTs33jrh7yL99GIigKXIFkoCIcOYzGlFIJ0j2g0dKUWmVdsUXSltttMcBZBmDNdozJZecZ/WC33W8cOtyw2/F5L3tHDn53DW9Jgnt1hgAPiUsqgxCOj5CJk3SVjhGZJZSchp6fH4wRlhKlHaGifqqrFq2uf7CBF6cSqRWxRJu6nby3smAXu8JbrMUWx7ZTHlgYzc6SQIXB1jPT2Snb3CWj39qv4jRr5QwJACH5BAUAAAQALAsAOgA/ACQAAAPHSLrcJC7KSesUGNvNu8og5I3kE4Jlap2n6kZs+86xPKu1fZc5uuM9zS8VFE0ASIBrwBxccpZkMtVsSmob6bRUtTpiHO3W0/V+fVkx0hFoux1l80ytZLvbkbjzRq8z7ndwenN0EYBvgnEvfYaHAXmDKoyNhxJ6eyWFEo6PloqZmpSAE5egYhScFJEek5uOqqtpahWpsJ+yWha1tl0doRO7pLdRp7qvFsMVs8aVyGWsUhzBvJhDDdPWKtjZJdvcJM3fL+Hi450qCQAh+QQFAAAEACwFAC0AMQAxAAADukgq3P5MyUmrlTDryzvRoOONU2hG5HiaKblurfpCsTs3da7vfO//wKBwCAQQa4Bk8jhSOo1My/MZpUynVckVW91ymd7vMezMkpXmsyfADvDIo3Z75yXJ57pt6o7PUfd8bBUDhIVDgW6DhYRCiIkTi4tAjhaRhj+UipaYiBeWjD6dnp+hopWkPaanmzyZo6w6rq+RrYEjnwO1fLeosbu8sDm2wLS6giS4WavFypC9zQrJ0M6S09SX1s4SCQAh+QQFAAAEACwFABkAJAA/AAADrki6Ks4wytmcpRjb/bJfXPh5oThSZXlOqbpGrfmC8TZD9XUz+Q63vp8riOMQUZ2jcslsOp8MgHRKrUpf1qz2pO1SR97w1SMOg8tZLtq6Wn+h8Lh8Tj8F4oF83qnv35V+fkeBgUSEhTuHiDOKiy+NfT6QepKTGQOYAxOQHpmZEoofnp8RhyOjpBCCp6iYTK2aS7CxR7OvsLK4uai3rb2jv8BKtrvCxZ5Nvsm8TsYRCQAh+QQFAAAEACwFAAoAJAA/AAADrki63K4ivklnvKJqi+X+S3eBoOiRmnmilMqm7tvG8kPXjZrhzs1Dvl+Qp6MAjqii48gEkILN6AcalcIwj2p1g81qt7yv9icG18pWHJr5I6zbijI8/p0vzHa6M8/v+/+AGgGDhIWGgyyHioski46FII+SiBuTkpGWio2ZhyickIGhoqOkogOAA6mpfKqtp3Curm2xsT+0tTW3uC+6uyy9rTjAqsLDtr2wt3bKebI/CQA7"> <p class="desc"></p>\n                        </div>\n                    </div>\n                    加载更多记录\n                </span>\n            </div>\n        </div> -->\n       <div class="dataTipsBtnBox" *ngIf="billList.length>0&&!hasMore">\n            <div class="seeMore noMore"><span>没有更多记录了</span>\n            </div>\n        </div> \n    </div>\n    <div class="back-btn" *ngIf="backTopShow" (tap)="scrollToTop()"></div>\n    \n    <div class="tips-status-box" style="background:none;" [hidden]="!isShowNoListTips">\n            <div class="ptc">\n                <div class="tips-status">\n                    <p class="statusImg no-message"></p> <p class="desc">还没有消息哦～</p> \n                </div>\n            </div>\n      </div>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" \n    threshold="100px" *ngIf="this.hasMore">\n      <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="正在加载更多..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\bill-detail\bill-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], BillDetailPage);
    return BillDetailPage;
}());

//# sourceMappingURL=bill-detail.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__findpassword_findpassword__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //,ViewChild 

// import { UserUplaodPage } from '../user-uplaod/user-uplaod';
// import {UserCarinfoPage} from '../user-carinfo/user-carinfo'
// import {UserAddAddressPage} from '../user-add-address/user-add-address'



// import {ApplicationRecordListPage} from '../application-record-list/application-record-list'
// import {SelectCarPage} from '../select-car/select-car'
// import { Tabs} from 'ionic-angular';
var TabsPage = /** @class */ (function () {
    // tab5Root = ApplicationRecordListPage;
    // tab6Root = SelectCarPage;
    // @ViewChild('myTabs') tabRef: Tabs;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__findpassword_findpassword__["a" /* FindpasswordPage */];
        // this.nav.setRoot(TabsPage);
        // this.tabRef.select(2);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <!-- selectedIndex="2" -->\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="登录" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="注册" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="找回密码" tabIcon="logo-buffer"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="申请记录" tabIcon="logo-buffer"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="车辆列表" tabIcon="logo-buffer"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //IonicPage



// import {LoginPage} from '../login/login'

/**
 * Generated class for the FindpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var FindpasswordPage = /** @class */ (function (_super) {
    __extends(FindpasswordPage, _super);
    function FindpasswordPage(navCtrl, navParams, loadingCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.mobile = '';
        _this.code = '';
        _this.password = '';
        _this.codeBtnDisable = false;
        _this.btnDisable = false;
        _this.codeBtnText = '发送验证码';
        _this.isCloseEye = true;
        _this.eyeStatus = 'eye-off';
        _this.pswType = 'password';
        _this.storage.get('mobile').then(function (val) {
            _this.mobile = val;
        });
        return _this;
    }
    FindpasswordPage.prototype.goBackLogin = function () {
        this.navCtrl.parent.select(1);
    };
    FindpasswordPage.prototype.ionViewDidEnter = function () {
        this.codeBtnText = '发送验证码';
        this.codeBtnDisable = false;
        this.btnDisable = false;
        this.timer && clearInterval(this.timer);
    };
    FindpasswordPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad FindpasswordPage');
    };
    FindpasswordPage.prototype.getCode = function () {
        var _this = this;
        var mobile = this.mobile;
        if (!mobile) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入手机号码', 1000);
            return false;
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(mobile)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确手机号码', 1000);
            return false;
        }
        this.codeBtnDisable = true;
        console.log(this.codeBtnDisable);
        this.postVcode(mobile);
        var total = 59;
        this.codeBtnText = total + "\u79D2";
        this.timer = setInterval(function () {
            console.log(total);
            --total;
            _this.codeBtnText = total + "\u79D2";
            if (total <= 0) {
                clearInterval(_this.timer);
                _this.codeBtnText = '发送验证码';
                _this.codeBtnDisable = false;
            }
        }, 1000);
    };
    FindpasswordPage.prototype.postVcode = function (mobile) {
        var _this = this;
        var that = this;
        var api = 'ComService/PostVcode';
        var params = {
            data: {
                Phone: mobile
            },
            token: 11111
        };
        this.rest.doPost(api, params, function (data) {
            console.log(data);
            if (data.issuccess) {
                _super.prototype.showToast.call(_this, _this.toastCtrl, data.message, 800);
            }
            else {
                alert(data.message);
                that.codeBtnDisable = false;
                clearInterval(that.timer);
                that.codeBtnText = "\u53D1\u9001\u9A8C\u8BC1\u7801";
                return false;
            }
        });
    };
    /**
     * 注册
     *
     * @returns
     * @memberof FindpasswordPage
     */
    FindpasswordPage.prototype.registerCheck = function () {
        var _this = this;
        var that = this;
        if (this.mobile === '') {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入手机号码', 1000);
            return;
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确手机号码', 1000);
            return;
        }
        if (this.code === '') {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入短信验证码', 1000);
            return false;
        }
        if (this.password === '') {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入密码', 1000);
            return false;
        }
        // if (!this.isAgree) {
        //   this.tipsText = '请勾同意选协议'
        //   this.$refs.toopTips.show()
        //   return false
        // }
        var api = 'Login/UserRegister';
        var params = {
            data: {
                Identifier: this.mobile,
                Credential: this.password,
                Additional: this.code
            },
            token: 11111
            // Additional2: this.inviteMoblie
        };
        this.btnDisable = true;
        this.rest.doPost(api, params, function (data) {
            console.log(data);
            if (data.issuccess) {
                //登录成功的页面跳转
                //存储接口返回的 token
                _super.prototype.showToast.call(_this, _this.toastCtrl, data.message, 800);
                _this.storage.set('token', data.result.Token);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                that.btnDisable = false;
            }
            else {
                alert(data.message);
                that.btnDisable = false;
                that.codeBtnDisable = false;
                clearInterval(that.timer);
                return false;
            }
        });
    };
    /**
     * 密码显示隐藏切换
     * @memberof FindpasswordPage
     */
    FindpasswordPage.prototype.eyeSwitch = function () {
        if (this.isCloseEye) {
            this.eyeStatus = 'eye-off';
            this.pswType = 'password';
        }
        else {
            this.eyeStatus = 'eye';
            this.pswType = 'text';
        }
        this.isCloseEye = !this.isCloseEye;
    };
    FindpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-findpassword',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\findpassword\findpassword.html"*/'<!--\n  Generated template for the FindpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-icon name="arrow-back" (click)="goBackLogin()"><span>返回</span></ion-icon>\n      <ion-title>找回密码</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <div data-v-3c0fb276="" id="">\n    <div data-v-d0f50a12="" data-v-3c0fb276="" class="title">\n      <div data-v-3c0fb276="" data-v-d0f50a12="">忘记密码</div>\n    </div>\n    <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n      <div data-v-1a32f292="" class="input size-0 align-1">\n        <label data-v-3c0fb276="" data-v-1a32f292="">手机号</label>\n        <input data-v-3c0fb276="" data-v-1a32f292="" type="tel" name="" placeholder="请输入手机号" [(ngModel)]="mobile" maxlength="11">\n      </div>\n    </div>\n    <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n      <div data-v-1a32f292="" class="input size-0 align-1">\n        <label data-v-3c0fb276="" data-v-1a32f292="">验证码</label>\n        <input data-v-3c0fb276="" data-v-1a32f292="" name="" placeholder="请输入验证码" [(ngModel)]="code"\n        maxlength="5">\n          <div class="send-smg-code " (click)="getCode()" [ngClass]="{\'disable\': codeBtnDisable}">{{codeBtnText}}</div>\n      </div>\n    </div>\n    <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n      <div data-v-1a32f292="" class="input size-0 align-1">\n        <label data-v-3c0fb276="" data-v-1a32f292="">新密码</label>\n        <input data-v-3c0fb276="" data-v-1a32f292="" name="" placeholder="请输入新密码" [(ngModel)]="password"\n          maxlength="16"  [type]="pswType">\n          <ion-icon [name]="eyeStatus" class="eye" (click)="eyeSwitch()"></ion-icon>\n      </div>\n    </div>\n    <div data-v-3c0fb276="" class="buttonBox" [ngClass]="{\'disable\':btnDisable===true}">\n       \n        <button ion-button block (click)="registerCheck()" [color]="btnDisable===true?\'light\':\'\'">确定</button>\n    </div>\n    \n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\findpassword\findpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], FindpasswordPage);
    return FindpasswordPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=findpassword.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yanxiaojun617@163.com on 12-27.
 */







// import {APP_DOWNLOAD, APK_DOWNLOAD} from "./Constants";
var NativeService = /** @class */ (function () {
    function NativeService(platform, alertCtrl, transfer, appVersion, file, fileOpener, inAppBrowser) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.appVersion = appVersion;
        this.file = file;
        this.fileOpener = fileOpener;
        this.inAppBrowser = inAppBrowser;
        this.APP_DOWNLOAD = 'http://wechat.chepass.com:8021/Content/dist/'; //ios app下载地址
        this.APK_DOWNLOAD = 'http://wechat.chepass.com:8021/Content/dist/android-release.apk'; //apk下载完整地址
    }
    /**
     * 检查app是否需要升级
     */
    NativeService.prototype.detectionUpgrade = function () {
        var _this = this;
        //这里连接后台获取app最新版本号,然后与当前app版本号(this.getVersionNumber())对比
        //版本号不一样就需要申请,不需要升级就return
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.downloadApp();
                    }
                }
            ]
        }).present();
    };
    /**
     * 下载安装app
     */
    NativeService.prototype.downloadApp = function () {
        var _this = this;
        if (this.isAndroid()) {
            var alert_1 = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: ['后台下载']
            });
            alert_1.present();
            var fileTransfer = this.transfer.create();
            var apk_1 = this.file.externalRootDirectory + 'android.apk'; //apk保存的目录
            console.log('apk--externalRootDirectory-', this.file.externalRootDirectory);
            fileTransfer.download(this.APK_DOWNLOAD, apk_1).then(function () {
                console.log('this.APK_DOWNLOAD---', _this.APK_DOWNLOAD);
                _this.fileOpener.open(apk_1, 'application/vnd.android.package-archive');
            });
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert_1.dismiss();
                }
                else {
                    var title = document.getElementsByClassName('alert-title')[0];
                    // console.log('num---', num)
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        }
        if (this.isIos()) {
            this.openUrlByBrowser(this.APP_DOWNLOAD);
        }
    };
    /**
     * 通过浏览器打开url
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                console.log('getVersionNumber:' + err);
            });
        });
    };
    NativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], NativeService);
    return NativeService;
}());

//# sourceMappingURL=nativeUtils.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
/**
 * UI 层的所有公用方法的抽象类
 *
 * @export
 * @abstract
 * @class BaseUI
 */
var BaseUI = /** @class */ (function () {
    function BaseUI() {
    }
    /**
     * 通用的展示 loading 的组件
     *
     * @protected
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    BaseUI.prototype.showLoading = function (loadingCtrl, message) {
        if (!this.loader) {
            this.loader = loadingCtrl.create({
                content: message,
                dismissOnPageChange: true //页面变化的时候自动关闭 loading
            });
            this.loader.present();
            return this.loader;
        }
    };
    BaseUI.prototype.hideLoading = function (loadingCtrl) {
        if (this.loader) {
            this.loader.dismissAll();
            return this.loader;
        }
    };
    /**
     * 通用的展示 toast 的组件
     *
     * @protected
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {Toast}
     * @memberof BaseUI
     */
    BaseUI.prototype.showToast = function (toastCtrl, message, duration) {
        // if(!this.toast) {
        this.toast = toastCtrl.create({
            message: message,
            duration: duration || 3000,
            position: 'top'
        });
        this.toast.present();
        // }
        return this.toast;
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {LoginPage} from '../../pages/login/login'
var HttpInterceptHandle = /** @class */ (function (_super) {
    __extends(HttpInterceptHandle, _super);
    function HttpInterceptHandle(events, toastCtrl, loadingCtrl) {
        var _this = _super.call(this) || this;
        _this.events = events;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        events.subscribe('request:before', function (url, options) {
            console.log('loading..');
            if ((url).indexOf('needload') > -1) {
                _super.prototype.showLoading.call(_this, _this.loadingCtrl, '数据加载。。');
            }
            console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
        });
        events.subscribe('request:success', function (url, options, res) {
            if ((url).indexOf('needload') < 0) {
                _super.prototype.hideLoading.call(_this, _this.loadingCtrl);
            }
            console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        });
        events.subscribe('request:error', function (url, options, error) {
            console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'error', error);
            var status = error.status;
            if (status === 0) {
                // nativeService.showToast('请求响应错误，请检查网络');
                _super.prototype.showToast.call(_this, _this.toastCtrl, '请求响应错误，请检查网络', 1000);
            }
            else if (status === 404) {
                // nativeService.showToast('请求链接不存在，请联系管理员');
                _super.prototype.showToast.call(_this, _this.toastCtrl, '请求链接不存在，请联系管理员', 1000);
            }
            else if (status === 500) {
                // nativeService.showToast('服务器出错，请稍后再试');
                _super.prototype.showToast.call(_this, _this.toastCtrl, '服务器出错，请稍后再试', 1000);
            }
            else {
                // nativeService.showToast('未知错误，请检查网络');
                _super.prototype.showToast.call(_this, _this.toastCtrl, '未知错误，请检查网络', 1000);
            }
        });
        return _this;
    }
    HttpInterceptHandle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], HttpInterceptHandle);
    return HttpInterceptHandle;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=HttpInterceptHandle.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loginHttpInterceptHandleFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_nativeUtils__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_findpassword_findpassword__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_base_info_user_base_info__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_carinfo_user_carinfo__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_user_uplaod_user_uplaod__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_user_add_address_user_add_address__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_application_record_list_application_record_list__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_select_car_select_car__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_record_car_record_car__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_bill_list_bill_list__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_bill_detail_bill_detail__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_components_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_pipes_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_transfer__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_app_version__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file_opener__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_http_HttpIntercept__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_http_HttpInterceptHandle__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_themeable_browser__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_in_app_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_version_service_version_service__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //IonicPageModule 打包时加上该引用   ionic cordova build android --prod --release


// import {HttpClientModule, HttpClient} from '@angular/common/http';




















//导入自定义组件


// import {SelectCarNoComponent} from '../components/select-car-no/select-car-no'

//导入四个外部加载进来的组件，上传图片部分相关组件

// import { Transfer, TransferObject } from '@ionic-native/transfer';



//版本控制相关


////请求拦截相关
 //请求拦截相关 
 //请求拦截相关

//登录拦截实例化抽取
function loginHttpInterceptHandleFactory(backend, defaultOptions, httpInterceptHandle) {
    return new __WEBPACK_IMPORTED_MODULE_34__providers_http_HttpIntercept__["a" /* HttpIntercept */](backend, defaultOptions, httpInterceptHandle);
}



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_findpassword_findpassword__["a" /* FindpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_base_info_user_base_info__["a" /* UserBaseInfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_carinfo_user_carinfo__["a" /* UserCarinfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_uplaod_user_uplaod__["a" /* UserUplaodPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_add_address_user_add_address__["a" /* UserAddAddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_application_record_list_application_record_list__["a" /* ApplicationRecordListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_record_car_record_car__["a" /* RecordCarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_bill_list_bill_list__["a" /* BillListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bill_detail_bill_detail__["a" /* BillDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_select_car_select_car__["a" /* SelectCarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
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
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    // tabsHideOnSubPages: true, 
                    tabsHideOnSubPages: 'true',
                    backButtonText: '返回',
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_27__ionic_storage__["a" /* IonicStorageModule */].forRoot() //全局定义 storage 的模块
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_findpassword_findpassword__["a" /* FindpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_base_info_user_base_info__["a" /* UserBaseInfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_carinfo_user_carinfo__["a" /* UserCarinfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_uplaod_user_uplaod__["a" /* UserUplaodPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_add_address_user_add_address__["a" /* UserAddAddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_application_record_list_application_record_list__["a" /* ApplicationRecordListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_select_car_select_car__["a" /* SelectCarPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_record_car_record_car__["a" /* RecordCarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_bill_list_bill_list__["a" /* BillListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bill_detail_bill_detail__["a" /* BillDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_35__providers_http_HttpInterceptHandle__["a" /* HttpInterceptHandle */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */],
                    useFactory: loginHttpInterceptHandleFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_35__providers_http_HttpInterceptHandle__["a" /* HttpInterceptHandle */]]
                },
                __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* UtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_utils_nativeUtils__["a" /* NativeService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_version_service_version_service__["a" /* VersionServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_nativeUtils__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {HomePage} from '../pages/home/home'
// import {LoginPage} from '../pages/login/login'




var MyApp = /** @class */ (function () {
    // rootPage:any = '';
    function MyApp(platform, statusBar, splashScreen, storage, rest, nativeService, appVersion) {
        var _this = this;
        this.storage = storage;
        this.rest = rest;
        this.nativeService = nativeService;
        this.appVersion = appVersion;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
            statusBar.backgroundColorByHexString('transparent'); // statusBar.styleDefault();
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
            var api = 'api/Webank/GetVersion'; //验证token接口
            var params = {};
            _this.rest.doPost(api, params, function (res) {
                console.log('data:', res);
                if (res.issuccess) {
                    var serverVersion_1 = res.result;
                    var curVersion_1 = '1.0';
                    if (!platform.is('mobileweb')) {
                        _this.appVersion.getVersionNumber().then(function (v) {
                            // alert('当前app版本号'+ v)
                            curVersion_1 = v;
                            var isNewVersion = _this.compareVersionIsnNew(serverVersion_1, curVersion_1);
                            // alert(isNewVersion)
                            if (isNewVersion)
                                _this.nativeService.detectionUpgrade(); //版本更新
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
    MyApp.prototype.compareVersionIsnNew = function (Str1, Str2) {
        var nStr1 = Str1.replace(/(^\s+)|(\s+$)/gi, "");
        var nStr2 = Str2.replace(/(^\s+)|(\s+$)/gi, "");
        var req = /\d(\.|\d)*\d/gi; //这个是匹配**.**.**数字的正则
        nStr1 = nStr1.match(req)[0]; //match出来的是一个数组，这个匹配出来在第0个
        nStr2 = nStr2.match(req)[0];
        //第四步：版本比较，先把版本号字符串切割成数组，[主版本号，次版本号，修订号]
        var arr1 = nStr1.split('.'); //[**,**,**]
        var arr2 = nStr2.split('.');
        //第五步：开始比较
        var minL = Math.min(arr1.length, arr2.length);
        var index = 0;
        var diff = 0;
        while (index < minL) {
            //循环数组的每一项，相减的差额来做判断
            diff = parseInt(arr1[index]) - parseInt(arr2[index]);
            if (diff != 0) {
                break;
            }
            index++;
        }
        diff = (diff != 0) ? diff : (arr1.length - arr2.length);
        //通过diff的值与0比较，生成true（第一个大于第二个） 或者是false（不大于）
        return diff > 0;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_nativeUtils__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__["a" /* AppVersion */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_car_no_select_car_no__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_car_no2_select_car_no2__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_picker_area_picker__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_toast_custom_toast__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__date_picker_date_picker__ = __webpack_require__(433);
// import { NgModule } from '@angular/core';
// import { IonicPageModule,IonicModule } from 'ionic-angular';
// import { SelectCarNoComponent } from './select-car-no/select-car-no';
// import { SelectCarNo2Component } from './select-car-no2/select-car-no2';
// @NgModule({
// 	declarations: [SelectCarNoComponent,
//     SelectCarNo2Component],
// 	imports: [IonicPageModule,  
// 		IonicModule.forRoot(SelectCarNoComponent)
// 	 ],
// 	exports: [SelectCarNoComponent,
//     SelectCarNo2Component]
// })
// export class ComponentsModule {}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//引入BrowserModule  解决 ngFor报错的问题

//引入ionic-angular





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule_1 = ComponentsModule;
    ComponentsModule = ComponentsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__select_car_no_select_car_no__["a" /* SelectCarNoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__select_car_no2_select_car_no2__["a" /* SelectCarNo2Component */],
                __WEBPACK_IMPORTED_MODULE_5__area_picker_area_picker__["a" /* AreaPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__custom_toast_custom_toast__["a" /* CustomToastComponent */],
                __WEBPACK_IMPORTED_MODULE_7__date_picker_date_picker__["a" /* DatePickerComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(ComponentsModule_1) /*注入IonicModule  注意写法ComponentsModule为你当前的模块名称*/
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__select_car_no_select_car_no__["a" /* SelectCarNoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__select_car_no2_select_car_no2__["a" /* SelectCarNo2Component */],
                __WEBPACK_IMPORTED_MODULE_5__area_picker_area_picker__["a" /* AreaPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__custom_toast_custom_toast__["a" /* CustomToastComponent */],
                __WEBPACK_IMPORTED_MODULE_7__date_picker_date_picker__["a" /* DatePickerComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
    var ComponentsModule_1;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCarNo2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SelectCarNo2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SelectCarNo2Component = /** @class */ (function () {
    function SelectCarNo2Component() {
        console.log('Hello SelectCarNo2Component Component');
        this.text = 'Hello World';
    }
    SelectCarNo2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-car-no2',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\components\select-car-no2\select-car-no2.html"*/'<!-- Generated template for the SelectCarNo2Component component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\components\select-car-no2\select-car-no2.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectCarNo2Component);
    return SelectCarNo2Component;
}());

//# sourceMappingURL=select-car-no2.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_picker__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_better_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AreaPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AreaPickerComponent = /** @class */ (function () {
    function AreaPickerComponent() {
        this.firstArr = [];
        this.secondArr = [];
        this.thirdArr = [];
        this.selectedDefaultAreaFromChild = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); // 子组件主动发送数据  ----类似于vue的emit派发的事件
        // console.log('Hello AreaPickerComponent Component');
        this.text = 'Hello World';
        // console.log('city'+city)
    }
    AreaPickerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.defaultArea = changes['defaultArea']['currentValue'];
        var val = this.defaultArea;
        // console.log('watch', val)
        var dateData = __WEBPACK_IMPORTED_MODULE_2__city__["a" /* default */];
        // console.log('defaultArea---', val)
        var province = val.split(' ')[0];
        var month = val.split(' ')[1];
        var date = val.split(' ')[2];
        var first = [];
        var second = [];
        var third = [];
        // var selectedIndex = [1, 0, 0] /* 数组第一项设置为1 修复 创建月列表少一个的问题 */
        // var checked = [0, 0, 0] /* 已选选项 */
        this._creatList(dateData, first, function (list) {
            _this.firstArr = list;
        });
        this.provinceIdx = this._getKeyByValue(province, this.firstArr);
        // console.log(this.provinceIdx)
        if (dateData[this.provinceIdx].hasOwnProperty('sub')) {
            this._creatList(dateData[this.provinceIdx]['sub'], second, function (list) {
                _this.secondArr = list;
            });
        }
        else {
            second = [{ text: '', value: 0 }];
        }
        this.cityIdx = this._getKeyByValue(month, this.secondArr);
        // console.log(this.cityIdx)
        if (dateData[this.provinceIdx]['sub'][this.cityIdx].hasOwnProperty('sub')) {
            this._creatList(dateData[this.provinceIdx]['sub'][this.cityIdx]['sub'], third, function (list) {
                _this.thirdArr = list;
            });
        }
        else {
            third = [{ text: '', value: 0 }];
        }
        this.thirIdx = (this.thirdArr && this._getKeyByValue(date, this.thirdArr)) || 0;
        // console.log(this.thirIdx)
        this._initAera(this.provinceIdx, this.cityIdx, this.thirIdx);
    };
    AreaPickerComponent.prototype._initAera = function (InitYear, InitMonth, InitDate) {
        var _this = this;
        var selectedYear = InitYear || 0;
        var selectedMonth = InitMonth || 0;
        var selectedDate = InitDate || 0;
        var that = this;
        var aeraEl = this.aera.nativeElement;
        var first = []; /* 年 */
        var second = []; /* 月 */
        var third = []; /* 日 */
        var selectedIndex = [selectedYear, selectedMonth, selectedDate]; /* 默认选中的日期 */
        var checked = selectedIndex; /* 已选选项 */
        this._creatList(__WEBPACK_IMPORTED_MODULE_2__city__["a" /* default */], first, function (list) {
            // console.log('first:', list)
            _this.firstArr = list;
        });
        var dateData = __WEBPACK_IMPORTED_MODULE_2__city__["a" /* default */];
        if (dateData[selectedIndex[0]].hasOwnProperty('sub')) {
            this._creatList(dateData[selectedIndex[0]]['sub'], second, function (list) {
                _this.secondArr = list;
            });
        }
        else {
            second = [{ text: '', value: 0 }];
        }
        if (dateData[selectedIndex[0]]['sub'][selectedIndex[1]].hasOwnProperty('sub')) {
            this._creatList(dateData[selectedIndex[0]]['sub'][selectedIndex[1]]['sub'], third, function (list) {
                //  console.log('third:', list)
                _this.thirdArr = list;
            });
        }
        else {
            third = [{ text: '', value: 0 }];
        }
        this.picker = new __WEBPACK_IMPORTED_MODULE_1_better_picker___default.a({ data: [first, second, third], selectedIndex: selectedIndex, title: '日期选择'
        });
        aeraEl.addEventListener('click', function () {
            that.picker.show();
        });
        this.picker.on('picker.select', function (selectedVal, selectedIndex) {
            var text1 = first[selectedIndex[0]].text;
            var text2 = second[selectedIndex[1]].text;
            var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';
            var selectedArea = text1 + ' ' + text2 + ' ' + text3;
            aeraEl.innerText = selectedArea;
            //  that.$emit('selectedArea', selectedArea)
            // that.selectedDefaultAreaFromChild.emit(selectedArea);
            // console.log('emit', selectedArea)
        });
        /**每一项的值改变之后**/
        this.picker.on('picker.change', function (index, selectedIndex) {
            if (index === 0) {
                firstChange();
            }
            else if (index === 1) {
                secondChange();
            }
            function firstChange() {
                second = [];
                third = [];
                checked[0] = selectedIndex;
                var firstCity = dateData[selectedIndex];
                if (firstCity.hasOwnProperty('sub')) {
                    that._creatList(firstCity['sub'], second);
                    var secondCity = dateData[selectedIndex]['sub'][0];
                    if (secondCity.hasOwnProperty('sub')) {
                        that._creatList(secondCity['sub'], third);
                    }
                    else {
                        third = [{ text: '', value: 0 }];
                        checked[2] = 0;
                    }
                }
                else {
                    second = [{ text: '', value: 0 }];
                    third = [{ text: '', value: 0 }];
                    checked[1] = 0;
                    checked[2] = 0;
                }
                that.picker.refillColumn(1, second);
                that.picker.refillColumn(2, third);
                that.picker.scrollColumn(1, 0);
                that.picker.scrollColumn(2, 0);
            }
            function secondChange() {
                third = [];
                checked[1] = selectedIndex;
                var firstIndex = checked[0];
                if (dateData[firstIndex]['sub'][selectedIndex].hasOwnProperty('sub')) {
                    var secondCity = dateData[firstIndex]['sub'][selectedIndex];
                    that._creatList(secondCity['sub'], third);
                    that.picker.refillColumn(2, third);
                    that.picker.scrollColumn(2, 0);
                }
                else {
                    third = [{ text: '', value: 0 }];
                    checked[2] = 0;
                    that.picker.refillColumn(2, third);
                    that.picker.scrollColumn(2, 0);
                }
            }
        });
        this.picker.on('picker.select', function (selectedVal, selectedIndex) {
            console.log('select', selectedVal);
        });
    };
    AreaPickerComponent.prototype._getKeyByValue = function (val, arr) {
        var ret = '';
        arr.forEach(function (item, i) {
            if (item['text'] === val) {
                ret = item['value'];
                return false; //forEach里面的return false跳出本次循环执行循环体后面的代码
            }
        });
        return ret;
    };
    AreaPickerComponent.prototype._creatList = function (obj, list, cb) {
        obj.forEach(function (item, index, arr) {
            var temp = {};
            temp['text'] = item.name;
            temp['value'] = index;
            list.push(temp);
        });
        // console.log(list)
        cb && cb(list);
    };
    AreaPickerComponent.prototype.hide = function () {
        // this.$refs.cascadePicker.hide()
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], AreaPickerComponent.prototype, "selectedDefaultAreaFromChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('defaultArea'),
        __metadata("design:type", Object)
    ], AreaPickerComponent.prototype, "defaultArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("aera"),
        __metadata("design:type", Object)
    ], AreaPickerComponent.prototype, "aera", void 0);
    AreaPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'area-picker',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\components\area-picker\area-picker.html"*/'<!-- Generated template for the AreaPickerComponent component -->\n<div id="aeraPicker" #aera>\n  {{defaultArea}}\n</div>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\components\area-picker\area-picker.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AreaPickerComponent);
    return AreaPickerComponent;
}());

//# sourceMappingURL=area-picker.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        "name": "北京",
        "sub": [
            {
                "name": "东城区"
            },
            {
                "name": "西城区"
            },
            {
                "name": "崇文区"
            },
            {
                "name": "宣武区"
            },
            {
                "name": "朝阳区"
            },
            {
                "name": "海淀区"
            },
            {
                "name": "丰台区"
            },
            {
                "name": "石景山区"
            },
            {
                "name": "房山区"
            },
            {
                "name": "通州区"
            },
            {
                "name": "顺义区"
            },
            {
                "name": "昌平区"
            },
            {
                "name": "大兴区"
            },
            {
                "name": "怀柔区"
            },
            {
                "name": "平谷区"
            },
            {
                "name": "门头沟区"
            },
            {
                "name": "密云县"
            },
            {
                "name": "延庆县"
            },
            {
                "name": "其他"
            }
        ],
        "type": 0
    },
    {
        "name": "广东",
        "sub": [
            {
                "name": "广州",
                "sub": [
                    {
                        "name": "越秀区"
                    },
                    {
                        "name": "荔湾区"
                    },
                    {
                        "name": "海珠区"
                    },
                    {
                        "name": "天河区"
                    },
                    {
                        "name": "白云区"
                    },
                    {
                        "name": "黄埔区"
                    },
                    {
                        "name": "番禺区"
                    },
                    {
                        "name": "花都区"
                    },
                    {
                        "name": "南沙区"
                    },
                    {
                        "name": "萝岗区"
                    },
                    {
                        "name": "增城市"
                    },
                    {
                        "name": "从化市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "深圳",
                "sub": [
                    {
                        "name": "福田区"
                    },
                    {
                        "name": "罗湖区"
                    },
                    {
                        "name": "南山区"
                    },
                    {
                        "name": "宝安区"
                    },
                    {
                        "name": "龙岗区"
                    },
                    {
                        "name": "盐田区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "珠海",
                "sub": [
                    {
                        "name": "香洲区"
                    },
                    {
                        "name": "斗门区"
                    },
                    {
                        "name": "金湾区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "汕头",
                "sub": [
                    {
                        "name": "金平区"
                    },
                    {
                        "name": "濠江区"
                    },
                    {
                        "name": "龙湖区"
                    },
                    {
                        "name": "潮阳区"
                    },
                    {
                        "name": "潮南区"
                    },
                    {
                        "name": "澄海区"
                    },
                    {
                        "name": "南澳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "韶关",
                "sub": [
                    {
                        "name": "浈江区"
                    },
                    {
                        "name": "武江区"
                    },
                    {
                        "name": "曲江区"
                    },
                    {
                        "name": "乐昌市"
                    },
                    {
                        "name": "南雄市"
                    },
                    {
                        "name": "始兴县"
                    },
                    {
                        "name": "仁化县"
                    },
                    {
                        "name": "翁源县"
                    },
                    {
                        "name": "新丰县"
                    },
                    {
                        "name": "乳源瑶族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "佛山",
                "sub": [
                    {
                        "name": "禅城区"
                    },
                    {
                        "name": "南海区"
                    },
                    {
                        "name": "顺德区"
                    },
                    {
                        "name": "三水区"
                    },
                    {
                        "name": "高明区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "江门",
                "sub": [
                    {
                        "name": "蓬江区"
                    },
                    {
                        "name": "江海区"
                    },
                    {
                        "name": "新会区"
                    },
                    {
                        "name": "恩平市"
                    },
                    {
                        "name": "台山市"
                    },
                    {
                        "name": "开平市"
                    },
                    {
                        "name": "鹤山市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "湛江",
                "sub": [
                    {
                        "name": "赤坎区"
                    },
                    {
                        "name": "霞山区"
                    },
                    {
                        "name": "坡头区"
                    },
                    {
                        "name": "麻章区"
                    },
                    {
                        "name": "吴川市"
                    },
                    {
                        "name": "廉江市"
                    },
                    {
                        "name": "雷州市"
                    },
                    {
                        "name": "遂溪县"
                    },
                    {
                        "name": "徐闻县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "茂名",
                "sub": [
                    {
                        "name": "茂南区"
                    },
                    {
                        "name": "茂港区"
                    },
                    {
                        "name": "化州市"
                    },
                    {
                        "name": "信宜市"
                    },
                    {
                        "name": "高州市"
                    },
                    {
                        "name": "电白县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "肇庆",
                "sub": [
                    {
                        "name": "端州区"
                    },
                    {
                        "name": "鼎湖区"
                    },
                    {
                        "name": "高要市"
                    },
                    {
                        "name": "四会市"
                    },
                    {
                        "name": "广宁县"
                    },
                    {
                        "name": "怀集县"
                    },
                    {
                        "name": "封开县"
                    },
                    {
                        "name": "德庆县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "惠州",
                "sub": [
                    {
                        "name": "惠城区"
                    },
                    {
                        "name": "惠阳区"
                    },
                    {
                        "name": "博罗县"
                    },
                    {
                        "name": "惠东县"
                    },
                    {
                        "name": "龙门县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "梅州",
                "sub": [
                    {
                        "name": "梅江区"
                    },
                    {
                        "name": "兴宁市"
                    },
                    {
                        "name": "梅县"
                    },
                    {
                        "name": "大埔县"
                    },
                    {
                        "name": "丰顺县"
                    },
                    {
                        "name": "五华县"
                    },
                    {
                        "name": "平远县"
                    },
                    {
                        "name": "蕉岭县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "汕尾",
                "sub": [
                    {
                        "name": "城区"
                    },
                    {
                        "name": "陆丰市"
                    },
                    {
                        "name": "海丰县"
                    },
                    {
                        "name": "陆河县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "河源",
                "sub": [
                    {
                        "name": "源城区"
                    },
                    {
                        "name": "紫金县"
                    },
                    {
                        "name": "龙川县"
                    },
                    {
                        "name": "连平县"
                    },
                    {
                        "name": "和平县"
                    },
                    {
                        "name": "东源县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阳江",
                "sub": [
                    {
                        "name": "江城区"
                    },
                    {
                        "name": "阳春市"
                    },
                    {
                        "name": "阳西县"
                    },
                    {
                        "name": "阳东县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "清远",
                "sub": [
                    {
                        "name": "清城区"
                    },
                    {
                        "name": "英德市"
                    },
                    {
                        "name": "连州市"
                    },
                    {
                        "name": "佛冈县"
                    },
                    {
                        "name": "阳山县"
                    },
                    {
                        "name": "清新县"
                    },
                    {
                        "name": "连山壮族瑶族自治县"
                    },
                    {
                        "name": "连南瑶族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "东莞",
                "sub": [],
                "type": 0
            },
            {
                "name": "中山",
                "sub": [],
                "type": 0
            },
            {
                "name": "潮州",
                "sub": [
                    {
                        "name": "湘桥区"
                    },
                    {
                        "name": "潮安县"
                    },
                    {
                        "name": "饶平县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "揭阳",
                "sub": [
                    {
                        "name": "榕城区"
                    },
                    {
                        "name": "普宁市"
                    },
                    {
                        "name": "揭东县"
                    },
                    {
                        "name": "揭西县"
                    },
                    {
                        "name": "惠来县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "云浮",
                "sub": [
                    {
                        "name": "云城区"
                    },
                    {
                        "name": "罗定市"
                    },
                    {
                        "name": "云安县"
                    },
                    {
                        "name": "新兴县"
                    },
                    {
                        "name": "郁南县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "上海",
        "sub": [
            {
                "name": "黄浦区"
            },
            {
                "name": "卢湾区"
            },
            {
                "name": "徐汇区"
            },
            {
                "name": "长宁区"
            },
            {
                "name": "静安区"
            },
            {
                "name": "普陀区"
            },
            {
                "name": "闸北区"
            },
            {
                "name": "虹口区"
            },
            {
                "name": "杨浦区"
            },
            {
                "name": "宝山区"
            },
            {
                "name": "闵行区"
            },
            {
                "name": "嘉定区"
            },
            {
                "name": "松江区"
            },
            {
                "name": "金山区"
            },
            {
                "name": "青浦区"
            },
            {
                "name": "南汇区"
            },
            {
                "name": "奉贤区"
            },
            {
                "name": "浦东新区"
            },
            {
                "name": "崇明县"
            },
            {
                "name": "其他"
            }
        ],
        "type": 0
    },
    {
        "name": "天津",
        "sub": [
            {
                "name": "和平区"
            },
            {
                "name": "河东区"
            },
            {
                "name": "河西区"
            },
            {
                "name": "南开区"
            },
            {
                "name": "河北区"
            },
            {
                "name": "红桥区"
            },
            {
                "name": "塘沽区"
            },
            {
                "name": "汉沽区"
            },
            {
                "name": "大港区"
            },
            {
                "name": "东丽区"
            },
            {
                "name": "西青区"
            },
            {
                "name": "北辰区"
            },
            {
                "name": "津南区"
            },
            {
                "name": "武清区"
            },
            {
                "name": "宝坻区"
            },
            {
                "name": "静海县"
            },
            {
                "name": "宁河县"
            },
            {
                "name": "蓟县"
            },
            {
                "name": "其他"
            }
        ],
        "type": 0
    },
    {
        "name": "重庆",
        "sub": [
            {
                "name": "渝中区"
            },
            {
                "name": "大渡口区"
            },
            {
                "name": "江北区"
            },
            {
                "name": "南岸区"
            },
            {
                "name": "北碚区"
            },
            {
                "name": "渝北区"
            },
            {
                "name": "巴南区"
            },
            {
                "name": "长寿区"
            },
            {
                "name": "双桥区"
            },
            {
                "name": "沙坪坝区"
            },
            {
                "name": "万盛区"
            },
            {
                "name": "万州区"
            },
            {
                "name": "涪陵区"
            },
            {
                "name": "黔江区"
            },
            {
                "name": "永川区"
            },
            {
                "name": "合川区"
            },
            {
                "name": "江津区"
            },
            {
                "name": "九龙坡区"
            },
            {
                "name": "南川区"
            },
            {
                "name": "綦江县"
            },
            {
                "name": "潼南县"
            },
            {
                "name": "荣昌县"
            },
            {
                "name": "璧山县"
            },
            {
                "name": "大足县"
            },
            {
                "name": "铜梁县"
            },
            {
                "name": "梁平县"
            },
            {
                "name": "开县"
            },
            {
                "name": "忠县"
            },
            {
                "name": "城口县"
            },
            {
                "name": "垫江县"
            },
            {
                "name": "武隆县"
            },
            {
                "name": "丰都县"
            },
            {
                "name": "奉节县"
            },
            {
                "name": "云阳县"
            },
            {
                "name": "巫溪县"
            },
            {
                "name": "巫山县"
            },
            {
                "name": "石柱土家族自治县"
            },
            {
                "name": "秀山土家族苗族自治县"
            },
            {
                "name": "酉阳土家族苗族自治县"
            },
            {
                "name": "彭水苗族土家族自治县"
            },
            {
                "name": "其他"
            }
        ],
        "type": 0
    },
    {
        "name": "辽宁",
        "sub": [
            {
                "name": "沈阳",
                "sub": [
                    {
                        "name": "沈河区"
                    },
                    {
                        "name": "皇姑区"
                    },
                    {
                        "name": "和平区"
                    },
                    {
                        "name": "大东区"
                    },
                    {
                        "name": "铁西区"
                    },
                    {
                        "name": "苏家屯区"
                    },
                    {
                        "name": "东陵区"
                    },
                    {
                        "name": "于洪区"
                    },
                    {
                        "name": "新民市"
                    },
                    {
                        "name": "法库县"
                    },
                    {
                        "name": "辽中县"
                    },
                    {
                        "name": "康平县"
                    },
                    {
                        "name": "新城子区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "大连",
                "sub": [
                    {
                        "name": "西岗区"
                    },
                    {
                        "name": "中山区"
                    },
                    {
                        "name": "沙河口区"
                    },
                    {
                        "name": "甘井子区"
                    },
                    {
                        "name": "旅顺口区"
                    },
                    {
                        "name": "金州区"
                    },
                    {
                        "name": "瓦房店市"
                    },
                    {
                        "name": "普兰店市"
                    },
                    {
                        "name": "庄河市"
                    },
                    {
                        "name": "长海县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "鞍山",
                "sub": [
                    {
                        "name": "铁东区"
                    },
                    {
                        "name": "铁西区"
                    },
                    {
                        "name": "立山区"
                    },
                    {
                        "name": "千山区"
                    },
                    {
                        "name": "海城市"
                    },
                    {
                        "name": "台安县"
                    },
                    {
                        "name": "岫岩满族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "抚顺",
                "sub": [
                    {
                        "name": "顺城区"
                    },
                    {
                        "name": "新抚区"
                    },
                    {
                        "name": "东洲区"
                    },
                    {
                        "name": "望花区"
                    },
                    {
                        "name": "抚顺县"
                    },
                    {
                        "name": "清原满族自治县"
                    },
                    {
                        "name": "新宾满族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "本溪",
                "sub": [
                    {
                        "name": "平山区"
                    },
                    {
                        "name": "明山区"
                    },
                    {
                        "name": "溪湖区"
                    },
                    {
                        "name": "南芬区"
                    },
                    {
                        "name": "本溪满族自治县"
                    },
                    {
                        "name": "桓仁满族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "丹东",
                "sub": [
                    {
                        "name": "振兴区"
                    },
                    {
                        "name": "元宝区"
                    },
                    {
                        "name": "振安区"
                    },
                    {
                        "name": "东港市"
                    },
                    {
                        "name": "凤城市"
                    },
                    {
                        "name": "宽甸满族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "锦州",
                "sub": [
                    {
                        "name": "太和区"
                    },
                    {
                        "name": "古塔区"
                    },
                    {
                        "name": "凌河区"
                    },
                    {
                        "name": "凌海市"
                    },
                    {
                        "name": "黑山县"
                    },
                    {
                        "name": "义县"
                    },
                    {
                        "name": "北宁市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "营口",
                "sub": [
                    {
                        "name": "站前区"
                    },
                    {
                        "name": "西市区"
                    },
                    {
                        "name": "鲅鱼圈区"
                    },
                    {
                        "name": "老边区"
                    },
                    {
                        "name": "大石桥市"
                    },
                    {
                        "name": "盖州市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阜新",
                "sub": [
                    {
                        "name": "海州区"
                    },
                    {
                        "name": "新邱区"
                    },
                    {
                        "name": "太平区"
                    },
                    {
                        "name": "清河门区"
                    },
                    {
                        "name": "细河区"
                    },
                    {
                        "name": "彰武县"
                    },
                    {
                        "name": "阜新蒙古族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "辽阳",
                "sub": [
                    {
                        "name": "白塔区"
                    },
                    {
                        "name": "文圣区"
                    },
                    {
                        "name": "宏伟区"
                    },
                    {
                        "name": "太子河区"
                    },
                    {
                        "name": "弓长岭区"
                    },
                    {
                        "name": "灯塔市"
                    },
                    {
                        "name": "辽阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "盘锦",
                "sub": [
                    {
                        "name": "双台子区"
                    },
                    {
                        "name": "兴隆台区"
                    },
                    {
                        "name": "盘山县"
                    },
                    {
                        "name": "大洼县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "铁岭",
                "sub": [
                    {
                        "name": "银州区"
                    },
                    {
                        "name": "清河区"
                    },
                    {
                        "name": "调兵山市"
                    },
                    {
                        "name": "开原市"
                    },
                    {
                        "name": "铁岭县"
                    },
                    {
                        "name": "昌图县"
                    },
                    {
                        "name": "西丰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "朝阳",
                "sub": [
                    {
                        "name": "双塔区"
                    },
                    {
                        "name": "龙城区"
                    },
                    {
                        "name": "凌源市"
                    },
                    {
                        "name": "北票市"
                    },
                    {
                        "name": "朝阳县"
                    },
                    {
                        "name": "建平县"
                    },
                    {
                        "name": "喀喇沁左翼蒙古族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "葫芦岛",
                "sub": [
                    {
                        "name": "龙港区"
                    },
                    {
                        "name": "南票区"
                    },
                    {
                        "name": "连山区"
                    },
                    {
                        "name": "兴城市"
                    },
                    {
                        "name": "绥中县"
                    },
                    {
                        "name": "建昌县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "江苏",
        "sub": [
            {
                "name": "南京",
                "sub": [
                    {
                        "name": "玄武区"
                    },
                    {
                        "name": "白下区"
                    },
                    {
                        "name": "秦淮区"
                    },
                    {
                        "name": "建邺区"
                    },
                    {
                        "name": "鼓楼区"
                    },
                    {
                        "name": "下关区"
                    },
                    {
                        "name": "栖霞区"
                    },
                    {
                        "name": "雨花台区"
                    },
                    {
                        "name": "浦口区"
                    },
                    {
                        "name": "江宁区"
                    },
                    {
                        "name": "六合区"
                    },
                    {
                        "name": "溧水县"
                    },
                    {
                        "name": "高淳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "苏州",
                "sub": [
                    {
                        "name": "金阊区"
                    },
                    {
                        "name": "平江区"
                    },
                    {
                        "name": "沧浪区"
                    },
                    {
                        "name": "虎丘区"
                    },
                    {
                        "name": "吴中区"
                    },
                    {
                        "name": "相城区"
                    },
                    {
                        "name": "常熟市"
                    },
                    {
                        "name": "张家港市"
                    },
                    {
                        "name": "昆山市"
                    },
                    {
                        "name": "吴江市"
                    },
                    {
                        "name": "太仓市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "无锡",
                "sub": [
                    {
                        "name": "崇安区"
                    },
                    {
                        "name": "南长区"
                    },
                    {
                        "name": "北塘区"
                    },
                    {
                        "name": "滨湖区"
                    },
                    {
                        "name": "锡山区"
                    },
                    {
                        "name": "惠山区"
                    },
                    {
                        "name": "江阴市"
                    },
                    {
                        "name": "宜兴市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "常州",
                "sub": [
                    {
                        "name": "钟楼区"
                    },
                    {
                        "name": "天宁区"
                    },
                    {
                        "name": "戚墅堰区"
                    },
                    {
                        "name": "新北区"
                    },
                    {
                        "name": "武进区"
                    },
                    {
                        "name": "金坛市"
                    },
                    {
                        "name": "溧阳市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "镇江",
                "sub": [
                    {
                        "name": "京口区"
                    },
                    {
                        "name": "润州区"
                    },
                    {
                        "name": "丹徒区"
                    },
                    {
                        "name": "丹阳市"
                    },
                    {
                        "name": "扬中市"
                    },
                    {
                        "name": "句容市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "南通",
                "sub": [
                    {
                        "name": "崇川区"
                    },
                    {
                        "name": "港闸区"
                    },
                    {
                        "name": "通州市"
                    },
                    {
                        "name": "如皋市"
                    },
                    {
                        "name": "海门市"
                    },
                    {
                        "name": "启东市"
                    },
                    {
                        "name": "海安县"
                    },
                    {
                        "name": "如东县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "泰州",
                "sub": [
                    {
                        "name": "海陵区"
                    },
                    {
                        "name": "高港区"
                    },
                    {
                        "name": "姜堰市"
                    },
                    {
                        "name": "泰兴市"
                    },
                    {
                        "name": "靖江市"
                    },
                    {
                        "name": "兴化市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "扬州",
                "sub": [
                    {
                        "name": "广陵区"
                    },
                    {
                        "name": "维扬区"
                    },
                    {
                        "name": "邗江区"
                    },
                    {
                        "name": "江都市"
                    },
                    {
                        "name": "仪征市"
                    },
                    {
                        "name": "高邮市"
                    },
                    {
                        "name": "宝应县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "盐城",
                "sub": [
                    {
                        "name": "亭湖区"
                    },
                    {
                        "name": "盐都区"
                    },
                    {
                        "name": "大丰市"
                    },
                    {
                        "name": "东台市"
                    },
                    {
                        "name": "建湖县"
                    },
                    {
                        "name": "射阳县"
                    },
                    {
                        "name": "阜宁县"
                    },
                    {
                        "name": "滨海县"
                    },
                    {
                        "name": "响水县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "连云港",
                "sub": [
                    {
                        "name": "新浦区"
                    },
                    {
                        "name": "海州区"
                    },
                    {
                        "name": "连云区"
                    },
                    {
                        "name": "东海县"
                    },
                    {
                        "name": "灌云县"
                    },
                    {
                        "name": "赣榆县"
                    },
                    {
                        "name": "灌南县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "徐州",
                "sub": [
                    {
                        "name": "云龙区"
                    },
                    {
                        "name": "鼓楼区"
                    },
                    {
                        "name": "九里区"
                    },
                    {
                        "name": "泉山区"
                    },
                    {
                        "name": "贾汪区"
                    },
                    {
                        "name": "邳州市"
                    },
                    {
                        "name": "新沂市"
                    },
                    {
                        "name": "铜山县"
                    },
                    {
                        "name": "睢宁县"
                    },
                    {
                        "name": "沛县"
                    },
                    {
                        "name": "丰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "淮安",
                "sub": [
                    {
                        "name": "清河区"
                    },
                    {
                        "name": "清浦区"
                    },
                    {
                        "name": "楚州区"
                    },
                    {
                        "name": "淮阴区"
                    },
                    {
                        "name": "涟水县"
                    },
                    {
                        "name": "洪泽县"
                    },
                    {
                        "name": "金湖县"
                    },
                    {
                        "name": "盱眙县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宿迁",
                "sub": [
                    {
                        "name": "宿城区"
                    },
                    {
                        "name": "宿豫区"
                    },
                    {
                        "name": "沭阳县"
                    },
                    {
                        "name": "泗阳县"
                    },
                    {
                        "name": "泗洪县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "湖北",
        "sub": [
            {
                "name": "武汉",
                "sub": [
                    {
                        "name": "江岸区"
                    },
                    {
                        "name": "武昌区"
                    },
                    {
                        "name": "江汉区"
                    },
                    {
                        "name": "硚口区"
                    },
                    {
                        "name": "汉阳区"
                    },
                    {
                        "name": "青山区"
                    },
                    {
                        "name": "洪山区"
                    },
                    {
                        "name": "东西湖区"
                    },
                    {
                        "name": "汉南区"
                    },
                    {
                        "name": "蔡甸区"
                    },
                    {
                        "name": "江夏区"
                    },
                    {
                        "name": "黄陂区"
                    },
                    {
                        "name": "新洲区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黄石",
                "sub": [
                    {
                        "name": "黄石港区"
                    },
                    {
                        "name": "西塞山区"
                    },
                    {
                        "name": "下陆区"
                    },
                    {
                        "name": "铁山区"
                    },
                    {
                        "name": "大冶市"
                    },
                    {
                        "name": "阳新县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "十堰",
                "sub": [
                    {
                        "name": "张湾区"
                    },
                    {
                        "name": "茅箭区"
                    },
                    {
                        "name": "丹江口市"
                    },
                    {
                        "name": "郧县"
                    },
                    {
                        "name": "竹山县"
                    },
                    {
                        "name": "房县"
                    },
                    {
                        "name": "郧西县"
                    },
                    {
                        "name": "竹溪县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "荆州",
                "sub": [
                    {
                        "name": "沙市区"
                    },
                    {
                        "name": "荆州区"
                    },
                    {
                        "name": "洪湖市"
                    },
                    {
                        "name": "石首市"
                    },
                    {
                        "name": "松滋市"
                    },
                    {
                        "name": "监利县"
                    },
                    {
                        "name": "公安县"
                    },
                    {
                        "name": "江陵县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宜昌",
                "sub": [
                    {
                        "name": "西陵区"
                    },
                    {
                        "name": "伍家岗区"
                    },
                    {
                        "name": "点军区"
                    },
                    {
                        "name": "猇亭区"
                    },
                    {
                        "name": "夷陵区"
                    },
                    {
                        "name": "宜都市"
                    },
                    {
                        "name": "当阳市"
                    },
                    {
                        "name": "枝江市"
                    },
                    {
                        "name": "秭归县"
                    },
                    {
                        "name": "远安县"
                    },
                    {
                        "name": "兴山县"
                    },
                    {
                        "name": "五峰土家族自治县"
                    },
                    {
                        "name": "长阳土家族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "襄樊",
                "sub": [
                    {
                        "name": "襄城区"
                    },
                    {
                        "name": "樊城区"
                    },
                    {
                        "name": "襄阳区"
                    },
                    {
                        "name": "老河口市"
                    },
                    {
                        "name": "枣阳市"
                    },
                    {
                        "name": "宜城市"
                    },
                    {
                        "name": "南漳县"
                    },
                    {
                        "name": "谷城县"
                    },
                    {
                        "name": "保康县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "鄂州",
                "sub": [
                    {
                        "name": "鄂城区"
                    },
                    {
                        "name": "华容区"
                    },
                    {
                        "name": "梁子湖区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "荆门",
                "sub": [
                    {
                        "name": "东宝区"
                    },
                    {
                        "name": "掇刀区"
                    },
                    {
                        "name": "钟祥市"
                    },
                    {
                        "name": "京山县"
                    },
                    {
                        "name": "沙洋县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "孝感",
                "sub": [
                    {
                        "name": "孝南区"
                    },
                    {
                        "name": "应城市"
                    },
                    {
                        "name": "安陆市"
                    },
                    {
                        "name": "汉川市"
                    },
                    {
                        "name": "云梦县"
                    },
                    {
                        "name": "大悟县"
                    },
                    {
                        "name": "孝昌县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黄冈",
                "sub": [
                    {
                        "name": "黄州区"
                    },
                    {
                        "name": "麻城市"
                    },
                    {
                        "name": "武穴市"
                    },
                    {
                        "name": "红安县"
                    },
                    {
                        "name": "罗田县"
                    },
                    {
                        "name": "浠水县"
                    },
                    {
                        "name": "蕲春县"
                    },
                    {
                        "name": "黄梅县"
                    },
                    {
                        "name": "英山县"
                    },
                    {
                        "name": "团风县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "咸宁",
                "sub": [
                    {
                        "name": "咸安区"
                    },
                    {
                        "name": "赤壁市"
                    },
                    {
                        "name": "嘉鱼县"
                    },
                    {
                        "name": "通山县"
                    },
                    {
                        "name": "崇阳县"
                    },
                    {
                        "name": "通城县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "随州",
                "sub": [
                    {
                        "name": "曾都区"
                    },
                    {
                        "name": "广水市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "恩施土家族苗族自治州",
                "sub": [
                    {
                        "name": "恩施市"
                    },
                    {
                        "name": "利川市"
                    },
                    {
                        "name": "建始县"
                    },
                    {
                        "name": "来凤县"
                    },
                    {
                        "name": "巴东县"
                    },
                    {
                        "name": "鹤峰县"
                    },
                    {
                        "name": "宣恩县"
                    },
                    {
                        "name": "咸丰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "仙桃",
                "sub": [],
                "type": 0
            },
            {
                "name": "天门",
                "sub": [],
                "type": 0
            },
            {
                "name": "潜江",
                "sub": [],
                "type": 0
            },
            {
                "name": "神农架林区",
                "sub": [],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "四川",
        "sub": [
            {
                "name": "成都",
                "sub": [
                    {
                        "name": "青羊区"
                    },
                    {
                        "name": "锦江区"
                    },
                    {
                        "name": "金牛区"
                    },
                    {
                        "name": "武侯区"
                    },
                    {
                        "name": "成华区"
                    },
                    {
                        "name": "龙泉驿区"
                    },
                    {
                        "name": "青白江区"
                    },
                    {
                        "name": "新都区"
                    },
                    {
                        "name": "温江区"
                    },
                    {
                        "name": "都江堰市"
                    },
                    {
                        "name": "彭州市"
                    },
                    {
                        "name": "邛崃市"
                    },
                    {
                        "name": "崇州市"
                    },
                    {
                        "name": "金堂县"
                    },
                    {
                        "name": "郫县"
                    },
                    {
                        "name": "新津县"
                    },
                    {
                        "name": "双流县"
                    },
                    {
                        "name": "蒲江县"
                    },
                    {
                        "name": "大邑县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "自贡",
                "sub": [
                    {
                        "name": "大安区"
                    },
                    {
                        "name": "自流井区"
                    },
                    {
                        "name": "贡井区"
                    },
                    {
                        "name": "沿滩区"
                    },
                    {
                        "name": "荣县"
                    },
                    {
                        "name": "富顺县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "攀枝花",
                "sub": [
                    {
                        "name": "仁和区"
                    },
                    {
                        "name": "米易县"
                    },
                    {
                        "name": "盐边县"
                    },
                    {
                        "name": "东区"
                    },
                    {
                        "name": "西区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "泸州",
                "sub": [
                    {
                        "name": "江阳区"
                    },
                    {
                        "name": "纳溪区"
                    },
                    {
                        "name": "龙马潭区"
                    },
                    {
                        "name": "泸县"
                    },
                    {
                        "name": "合江县"
                    },
                    {
                        "name": "叙永县"
                    },
                    {
                        "name": "古蔺县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "德阳",
                "sub": [
                    {
                        "name": "旌阳区"
                    },
                    {
                        "name": "广汉市"
                    },
                    {
                        "name": "什邡市"
                    },
                    {
                        "name": "绵竹市"
                    },
                    {
                        "name": "罗江县"
                    },
                    {
                        "name": "中江县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "绵阳",
                "sub": [
                    {
                        "name": "涪城区"
                    },
                    {
                        "name": "游仙区"
                    },
                    {
                        "name": "江油市"
                    },
                    {
                        "name": "盐亭县"
                    },
                    {
                        "name": "三台县"
                    },
                    {
                        "name": "平武县"
                    },
                    {
                        "name": "安县"
                    },
                    {
                        "name": "梓潼县"
                    },
                    {
                        "name": "北川羌族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "广元",
                "sub": [
                    {
                        "name": "元坝区"
                    },
                    {
                        "name": "朝天区"
                    },
                    {
                        "name": "青川县"
                    },
                    {
                        "name": "旺苍县"
                    },
                    {
                        "name": "剑阁县"
                    },
                    {
                        "name": "苍溪县"
                    },
                    {
                        "name": "市中区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "遂宁",
                "sub": [
                    {
                        "name": "船山区"
                    },
                    {
                        "name": "安居区"
                    },
                    {
                        "name": "射洪县"
                    },
                    {
                        "name": "蓬溪县"
                    },
                    {
                        "name": "大英县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "内江",
                "sub": [
                    {
                        "name": "市中区"
                    },
                    {
                        "name": "东兴区"
                    },
                    {
                        "name": "资中县"
                    },
                    {
                        "name": "隆昌县"
                    },
                    {
                        "name": "威远县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "乐山",
                "sub": [
                    {
                        "name": "市中区"
                    },
                    {
                        "name": "五通桥区"
                    },
                    {
                        "name": "沙湾区"
                    },
                    {
                        "name": "金口河区"
                    },
                    {
                        "name": "峨眉山市"
                    },
                    {
                        "name": "夹江县"
                    },
                    {
                        "name": "井研县"
                    },
                    {
                        "name": "犍为县"
                    },
                    {
                        "name": "沐川县"
                    },
                    {
                        "name": "马边彝族自治县"
                    },
                    {
                        "name": "峨边彝族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "南充",
                "sub": [
                    {
                        "name": "顺庆区"
                    },
                    {
                        "name": "高坪区"
                    },
                    {
                        "name": "嘉陵区"
                    },
                    {
                        "name": "阆中市"
                    },
                    {
                        "name": "营山县"
                    },
                    {
                        "name": "蓬安县"
                    },
                    {
                        "name": "仪陇县"
                    },
                    {
                        "name": "南部县"
                    },
                    {
                        "name": "西充县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "眉山",
                "sub": [
                    {
                        "name": "东坡区"
                    },
                    {
                        "name": "仁寿县"
                    },
                    {
                        "name": "彭山县"
                    },
                    {
                        "name": "洪雅县"
                    },
                    {
                        "name": "丹棱县"
                    },
                    {
                        "name": "青神县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宜宾",
                "sub": [
                    {
                        "name": "翠屏区"
                    },
                    {
                        "name": "宜宾县"
                    },
                    {
                        "name": "兴文县"
                    },
                    {
                        "name": "南溪县"
                    },
                    {
                        "name": "珙县"
                    },
                    {
                        "name": "长宁县"
                    },
                    {
                        "name": "高县"
                    },
                    {
                        "name": "江安县"
                    },
                    {
                        "name": "筠连县"
                    },
                    {
                        "name": "屏山县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "广安",
                "sub": [
                    {
                        "name": "广安区"
                    },
                    {
                        "name": "华蓥市"
                    },
                    {
                        "name": "岳池县"
                    },
                    {
                        "name": "邻水县"
                    },
                    {
                        "name": "武胜县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "达州",
                "sub": [
                    {
                        "name": "通川区"
                    },
                    {
                        "name": "万源市"
                    },
                    {
                        "name": "达县"
                    },
                    {
                        "name": "渠县"
                    },
                    {
                        "name": "宣汉县"
                    },
                    {
                        "name": "开江县"
                    },
                    {
                        "name": "大竹县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "雅安",
                "sub": [
                    {
                        "name": "雨城区"
                    },
                    {
                        "name": "芦山县"
                    },
                    {
                        "name": "石棉县"
                    },
                    {
                        "name": "名山县"
                    },
                    {
                        "name": "天全县"
                    },
                    {
                        "name": "荥经县"
                    },
                    {
                        "name": "宝兴县"
                    },
                    {
                        "name": "汉源县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "巴中",
                "sub": [
                    {
                        "name": "巴州区"
                    },
                    {
                        "name": "南江县"
                    },
                    {
                        "name": "平昌县"
                    },
                    {
                        "name": "通江县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "资阳",
                "sub": [
                    {
                        "name": "雁江区"
                    },
                    {
                        "name": "简阳市"
                    },
                    {
                        "name": "安岳县"
                    },
                    {
                        "name": "乐至县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阿坝藏族羌族自治州",
                "sub": [
                    {
                        "name": "马尔康县"
                    },
                    {
                        "name": "九寨沟县"
                    },
                    {
                        "name": "红原县"
                    },
                    {
                        "name": "汶川县"
                    },
                    {
                        "name": "阿坝县"
                    },
                    {
                        "name": "理县"
                    },
                    {
                        "name": "若尔盖县"
                    },
                    {
                        "name": "小金县"
                    },
                    {
                        "name": "黑水县"
                    },
                    {
                        "name": "金川县"
                    },
                    {
                        "name": "松潘县"
                    },
                    {
                        "name": "壤塘县"
                    },
                    {
                        "name": "茂县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "甘孜藏族自治州",
                "sub": [
                    {
                        "name": "康定县"
                    },
                    {
                        "name": "丹巴县"
                    },
                    {
                        "name": "炉霍县"
                    },
                    {
                        "name": "九龙县"
                    },
                    {
                        "name": "甘孜县"
                    },
                    {
                        "name": "雅江县"
                    },
                    {
                        "name": "新龙县"
                    },
                    {
                        "name": "道孚县"
                    },
                    {
                        "name": "白玉县"
                    },
                    {
                        "name": "理塘县"
                    },
                    {
                        "name": "德格县"
                    },
                    {
                        "name": "乡城县"
                    },
                    {
                        "name": "石渠县"
                    },
                    {
                        "name": "稻城县"
                    },
                    {
                        "name": "色达县"
                    },
                    {
                        "name": "巴塘县"
                    },
                    {
                        "name": "泸定县"
                    },
                    {
                        "name": "得荣县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "凉山彝族自治州",
                "sub": [
                    {
                        "name": "西昌市"
                    },
                    {
                        "name": "美姑县"
                    },
                    {
                        "name": "昭觉县"
                    },
                    {
                        "name": "金阳县"
                    },
                    {
                        "name": "甘洛县"
                    },
                    {
                        "name": "布拖县"
                    },
                    {
                        "name": "雷波县"
                    },
                    {
                        "name": "普格县"
                    },
                    {
                        "name": "宁南县"
                    },
                    {
                        "name": "喜德县"
                    },
                    {
                        "name": "会东县"
                    },
                    {
                        "name": "越西县"
                    },
                    {
                        "name": "会理县"
                    },
                    {
                        "name": "盐源县"
                    },
                    {
                        "name": "德昌县"
                    },
                    {
                        "name": "冕宁县"
                    },
                    {
                        "name": "木里藏族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "陕西",
        "sub": [
            {
                "name": "西安",
                "sub": [
                    {
                        "name": "莲湖区"
                    },
                    {
                        "name": "新城区"
                    },
                    {
                        "name": "碑林区"
                    },
                    {
                        "name": "雁塔区"
                    },
                    {
                        "name": "灞桥区"
                    },
                    {
                        "name": "未央区"
                    },
                    {
                        "name": "阎良区"
                    },
                    {
                        "name": "临潼区"
                    },
                    {
                        "name": "长安区"
                    },
                    {
                        "name": "高陵县"
                    },
                    {
                        "name": "蓝田县"
                    },
                    {
                        "name": "户县"
                    },
                    {
                        "name": "周至县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "铜川",
                "sub": [
                    {
                        "name": "耀州区"
                    },
                    {
                        "name": "王益区"
                    },
                    {
                        "name": "印台区"
                    },
                    {
                        "name": "宜君县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宝鸡",
                "sub": [
                    {
                        "name": "渭滨区"
                    },
                    {
                        "name": "金台区"
                    },
                    {
                        "name": "陈仓区"
                    },
                    {
                        "name": "岐山县"
                    },
                    {
                        "name": "凤翔县"
                    },
                    {
                        "name": "陇县"
                    },
                    {
                        "name": "太白县"
                    },
                    {
                        "name": "麟游县"
                    },
                    {
                        "name": "扶风县"
                    },
                    {
                        "name": "千阳县"
                    },
                    {
                        "name": "眉县"
                    },
                    {
                        "name": "凤县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "咸阳",
                "sub": [
                    {
                        "name": "秦都区"
                    },
                    {
                        "name": "渭城区"
                    },
                    {
                        "name": "杨陵区"
                    },
                    {
                        "name": "兴平市"
                    },
                    {
                        "name": "礼泉县"
                    },
                    {
                        "name": "泾阳县"
                    },
                    {
                        "name": "永寿县"
                    },
                    {
                        "name": "三原县"
                    },
                    {
                        "name": "彬县"
                    },
                    {
                        "name": "旬邑县"
                    },
                    {
                        "name": "长武县"
                    },
                    {
                        "name": "乾县"
                    },
                    {
                        "name": "武功县"
                    },
                    {
                        "name": "淳化县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "渭南",
                "sub": [
                    {
                        "name": "临渭区"
                    },
                    {
                        "name": "韩城市"
                    },
                    {
                        "name": "华阴市"
                    },
                    {
                        "name": "蒲城县"
                    },
                    {
                        "name": "潼关县"
                    },
                    {
                        "name": "白水县"
                    },
                    {
                        "name": "澄城县"
                    },
                    {
                        "name": "华县"
                    },
                    {
                        "name": "合阳县"
                    },
                    {
                        "name": "富平县"
                    },
                    {
                        "name": "大荔县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "延安",
                "sub": [
                    {
                        "name": "宝塔区"
                    },
                    {
                        "name": "安塞县"
                    },
                    {
                        "name": "洛川县"
                    },
                    {
                        "name": "子长县"
                    },
                    {
                        "name": "黄陵县"
                    },
                    {
                        "name": "延川县"
                    },
                    {
                        "name": "富县"
                    },
                    {
                        "name": "延长县"
                    },
                    {
                        "name": "甘泉县"
                    },
                    {
                        "name": "宜川县"
                    },
                    {
                        "name": "志丹县"
                    },
                    {
                        "name": "黄龙县"
                    },
                    {
                        "name": "吴起县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "汉中",
                "sub": [
                    {
                        "name": "汉台区"
                    },
                    {
                        "name": "留坝县"
                    },
                    {
                        "name": "镇巴县"
                    },
                    {
                        "name": "城固县"
                    },
                    {
                        "name": "南郑县"
                    },
                    {
                        "name": "洋县"
                    },
                    {
                        "name": "宁强县"
                    },
                    {
                        "name": "佛坪县"
                    },
                    {
                        "name": "勉县"
                    },
                    {
                        "name": "西乡县"
                    },
                    {
                        "name": "略阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "榆林",
                "sub": [
                    {
                        "name": "榆阳区"
                    },
                    {
                        "name": "清涧县"
                    },
                    {
                        "name": "绥德县"
                    },
                    {
                        "name": "神木县"
                    },
                    {
                        "name": "佳县"
                    },
                    {
                        "name": "府谷县"
                    },
                    {
                        "name": "子洲县"
                    },
                    {
                        "name": "靖边县"
                    },
                    {
                        "name": "横山县"
                    },
                    {
                        "name": "米脂县"
                    },
                    {
                        "name": "吴堡县"
                    },
                    {
                        "name": "定边县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "安康",
                "sub": [
                    {
                        "name": "汉滨区"
                    },
                    {
                        "name": "紫阳县"
                    },
                    {
                        "name": "岚皋县"
                    },
                    {
                        "name": "旬阳县"
                    },
                    {
                        "name": "镇坪县"
                    },
                    {
                        "name": "平利县"
                    },
                    {
                        "name": "石泉县"
                    },
                    {
                        "name": "宁陕县"
                    },
                    {
                        "name": "白河县"
                    },
                    {
                        "name": "汉阴县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "商洛",
                "sub": [
                    {
                        "name": "商州区"
                    },
                    {
                        "name": "镇安县"
                    },
                    {
                        "name": "山阳县"
                    },
                    {
                        "name": "洛南县"
                    },
                    {
                        "name": "商南县"
                    },
                    {
                        "name": "丹凤县"
                    },
                    {
                        "name": "柞水县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "河北",
        "sub": [
            {
                "name": "石家庄",
                "sub": [
                    {
                        "name": "长安区"
                    },
                    {
                        "name": "桥东区"
                    },
                    {
                        "name": "桥西区"
                    },
                    {
                        "name": "新华区"
                    },
                    {
                        "name": "裕华区"
                    },
                    {
                        "name": "井陉矿区"
                    },
                    {
                        "name": "鹿泉市"
                    },
                    {
                        "name": "辛集市"
                    },
                    {
                        "name": "藁城市"
                    },
                    {
                        "name": "晋州市"
                    },
                    {
                        "name": "新乐市"
                    },
                    {
                        "name": "深泽县"
                    },
                    {
                        "name": "无极县"
                    },
                    {
                        "name": "赵县"
                    },
                    {
                        "name": "灵寿县"
                    },
                    {
                        "name": "高邑县"
                    },
                    {
                        "name": "元氏县"
                    },
                    {
                        "name": "赞皇县"
                    },
                    {
                        "name": "平山县"
                    },
                    {
                        "name": "井陉县"
                    },
                    {
                        "name": "栾城县"
                    },
                    {
                        "name": "正定县"
                    },
                    {
                        "name": "行唐县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "唐山",
                "sub": [
                    {
                        "name": "路北区"
                    },
                    {
                        "name": "路南区"
                    },
                    {
                        "name": "古冶区"
                    },
                    {
                        "name": "开平区"
                    },
                    {
                        "name": "丰南区"
                    },
                    {
                        "name": "丰润区"
                    },
                    {
                        "name": "遵化市"
                    },
                    {
                        "name": "迁安市"
                    },
                    {
                        "name": "迁西县"
                    },
                    {
                        "name": "滦南县"
                    },
                    {
                        "name": "玉田县"
                    },
                    {
                        "name": "唐海县"
                    },
                    {
                        "name": "乐亭县"
                    },
                    {
                        "name": "滦县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "秦皇岛",
                "sub": [
                    {
                        "name": "海港区"
                    },
                    {
                        "name": "山海关区"
                    },
                    {
                        "name": "北戴河区"
                    },
                    {
                        "name": "昌黎县"
                    },
                    {
                        "name": "抚宁县"
                    },
                    {
                        "name": "卢龙县"
                    },
                    {
                        "name": "青龙满族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "邯郸",
                "sub": [
                    {
                        "name": "邯山区"
                    },
                    {
                        "name": "丛台区"
                    },
                    {
                        "name": "复兴区"
                    },
                    {
                        "name": "峰峰矿区"
                    },
                    {
                        "name": "武安市"
                    },
                    {
                        "name": "邱县"
                    },
                    {
                        "name": "大名县"
                    },
                    {
                        "name": "魏县"
                    },
                    {
                        "name": "曲周县"
                    },
                    {
                        "name": "鸡泽县"
                    },
                    {
                        "name": "肥乡县"
                    },
                    {
                        "name": "广平县"
                    },
                    {
                        "name": "成安县"
                    },
                    {
                        "name": "临漳县"
                    },
                    {
                        "name": "磁县"
                    },
                    {
                        "name": "涉县"
                    },
                    {
                        "name": "永年县"
                    },
                    {
                        "name": "馆陶县"
                    },
                    {
                        "name": "邯郸县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "邢台",
                "sub": [
                    {
                        "name": "桥东区"
                    },
                    {
                        "name": "桥西区"
                    },
                    {
                        "name": "南宫市"
                    },
                    {
                        "name": "沙河市"
                    },
                    {
                        "name": "临城县"
                    },
                    {
                        "name": "内丘县"
                    },
                    {
                        "name": "柏乡县"
                    },
                    {
                        "name": "隆尧县"
                    },
                    {
                        "name": "任县"
                    },
                    {
                        "name": "南和县"
                    },
                    {
                        "name": "宁晋县"
                    },
                    {
                        "name": "巨鹿县"
                    },
                    {
                        "name": "新河县"
                    },
                    {
                        "name": "广宗县"
                    },
                    {
                        "name": "平乡县"
                    },
                    {
                        "name": "威县"
                    },
                    {
                        "name": "清河县"
                    },
                    {
                        "name": "临西县"
                    },
                    {
                        "name": "邢台县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "保定",
                "sub": [
                    {
                        "name": "新市区"
                    },
                    {
                        "name": "北市区"
                    },
                    {
                        "name": "南市区"
                    },
                    {
                        "name": "定州市"
                    },
                    {
                        "name": "涿州市"
                    },
                    {
                        "name": "安国市"
                    },
                    {
                        "name": "高碑店市"
                    },
                    {
                        "name": "易县"
                    },
                    {
                        "name": "徐水县"
                    },
                    {
                        "name": "涞源县"
                    },
                    {
                        "name": "顺平县"
                    },
                    {
                        "name": "唐县"
                    },
                    {
                        "name": "望都县"
                    },
                    {
                        "name": "涞水县"
                    },
                    {
                        "name": "高阳县"
                    },
                    {
                        "name": "安新县"
                    },
                    {
                        "name": "雄县"
                    },
                    {
                        "name": "容城县"
                    },
                    {
                        "name": "蠡县"
                    },
                    {
                        "name": "曲阳县"
                    },
                    {
                        "name": "阜平县"
                    },
                    {
                        "name": "博野县"
                    },
                    {
                        "name": "满城县"
                    },
                    {
                        "name": "清苑县"
                    },
                    {
                        "name": "定兴县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "张家口",
                "sub": [
                    {
                        "name": "桥东区"
                    },
                    {
                        "name": "桥西区"
                    },
                    {
                        "name": "宣化区"
                    },
                    {
                        "name": "下花园区"
                    },
                    {
                        "name": "张北县"
                    },
                    {
                        "name": "康保县"
                    },
                    {
                        "name": "沽源县"
                    },
                    {
                        "name": "尚义县"
                    },
                    {
                        "name": "蔚县"
                    },
                    {
                        "name": "阳原县"
                    },
                    {
                        "name": "怀安县"
                    },
                    {
                        "name": "万全县"
                    },
                    {
                        "name": "怀来县"
                    },
                    {
                        "name": "赤城县"
                    },
                    {
                        "name": "崇礼县"
                    },
                    {
                        "name": "宣化县"
                    },
                    {
                        "name": "涿鹿县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "承德",
                "sub": [
                    {
                        "name": "双桥区"
                    },
                    {
                        "name": "双滦区"
                    },
                    {
                        "name": "鹰手营子矿区"
                    },
                    {
                        "name": "兴隆县"
                    },
                    {
                        "name": "平泉县"
                    },
                    {
                        "name": "滦平县"
                    },
                    {
                        "name": "隆化县"
                    },
                    {
                        "name": "承德县"
                    },
                    {
                        "name": "丰宁满族自治县"
                    },
                    {
                        "name": "宽城满族自治县"
                    },
                    {
                        "name": "围场满族蒙古族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "沧州",
                "sub": [
                    {
                        "name": "新华区"
                    },
                    {
                        "name": "运河区"
                    },
                    {
                        "name": "泊头市"
                    },
                    {
                        "name": "任丘市"
                    },
                    {
                        "name": "黄骅市"
                    },
                    {
                        "name": "河间市"
                    },
                    {
                        "name": "献县"
                    },
                    {
                        "name": "吴桥县"
                    },
                    {
                        "name": "沧县"
                    },
                    {
                        "name": "东光县"
                    },
                    {
                        "name": "肃宁县"
                    },
                    {
                        "name": "南皮县"
                    },
                    {
                        "name": "盐山县"
                    },
                    {
                        "name": "青县"
                    },
                    {
                        "name": "海兴县"
                    },
                    {
                        "name": "孟村回族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "廊坊",
                "sub": [
                    {
                        "name": "安次区"
                    },
                    {
                        "name": "广阳区"
                    },
                    {
                        "name": "霸州市"
                    },
                    {
                        "name": "三河市"
                    },
                    {
                        "name": "香河县"
                    },
                    {
                        "name": "永清县"
                    },
                    {
                        "name": "固安县"
                    },
                    {
                        "name": "文安县"
                    },
                    {
                        "name": "大城县"
                    },
                    {
                        "name": "大厂回族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "衡水",
                "sub": [
                    {
                        "name": "桃城区"
                    },
                    {
                        "name": "冀州市"
                    },
                    {
                        "name": "深州市"
                    },
                    {
                        "name": "枣强县"
                    },
                    {
                        "name": "武邑县"
                    },
                    {
                        "name": "武强县"
                    },
                    {
                        "name": "饶阳县"
                    },
                    {
                        "name": "安平县"
                    },
                    {
                        "name": "故城县"
                    },
                    {
                        "name": "景县"
                    },
                    {
                        "name": "阜城县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "山西",
        "sub": [
            {
                "name": "太原",
                "sub": [
                    {
                        "name": "杏花岭区"
                    },
                    {
                        "name": "小店区"
                    },
                    {
                        "name": "迎泽区"
                    },
                    {
                        "name": "尖草坪区"
                    },
                    {
                        "name": "万柏林区"
                    },
                    {
                        "name": "晋源区"
                    },
                    {
                        "name": "古交市"
                    },
                    {
                        "name": "阳曲县"
                    },
                    {
                        "name": "清徐县"
                    },
                    {
                        "name": "娄烦县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "大同",
                "sub": [
                    {
                        "name": "城区"
                    },
                    {
                        "name": "矿区"
                    },
                    {
                        "name": "南郊区"
                    },
                    {
                        "name": "新荣区"
                    },
                    {
                        "name": "大同县"
                    },
                    {
                        "name": "天镇县"
                    },
                    {
                        "name": "灵丘县"
                    },
                    {
                        "name": "阳高县"
                    },
                    {
                        "name": "左云县"
                    },
                    {
                        "name": "广灵县"
                    },
                    {
                        "name": "浑源县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阳泉",
                "sub": [
                    {
                        "name": "城区"
                    },
                    {
                        "name": "矿区"
                    },
                    {
                        "name": "郊区"
                    },
                    {
                        "name": "平定县"
                    },
                    {
                        "name": "盂县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "长治",
                "sub": [
                    {
                        "name": "城区"
                    },
                    {
                        "name": "郊区"
                    },
                    {
                        "name": "潞城市"
                    },
                    {
                        "name": "长治县"
                    },
                    {
                        "name": "长子县"
                    },
                    {
                        "name": "平顺县"
                    },
                    {
                        "name": "襄垣县"
                    },
                    {
                        "name": "沁源县"
                    },
                    {
                        "name": "屯留县"
                    },
                    {
                        "name": "黎城县"
                    },
                    {
                        "name": "武乡县"
                    },
                    {
                        "name": "沁县"
                    },
                    {
                        "name": "壶关县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "晋城",
                "sub": [
                    {
                        "name": "城区"
                    },
                    {
                        "name": "高平市"
                    },
                    {
                        "name": "泽州县"
                    },
                    {
                        "name": "陵川县"
                    },
                    {
                        "name": "阳城县"
                    },
                    {
                        "name": "沁水县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "朔州",
                "sub": [
                    {
                        "name": "朔城区"
                    },
                    {
                        "name": "平鲁区"
                    },
                    {
                        "name": "山阴县"
                    },
                    {
                        "name": "右玉县"
                    },
                    {
                        "name": "应县"
                    },
                    {
                        "name": "怀仁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "晋中",
                "sub": [
                    {
                        "name": "榆次区"
                    },
                    {
                        "name": "介休市"
                    },
                    {
                        "name": "昔阳县"
                    },
                    {
                        "name": "灵石县"
                    },
                    {
                        "name": "祁县"
                    },
                    {
                        "name": "左权县"
                    },
                    {
                        "name": "寿阳县"
                    },
                    {
                        "name": "太谷县"
                    },
                    {
                        "name": "和顺县"
                    },
                    {
                        "name": "平遥县"
                    },
                    {
                        "name": "榆社县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "运城",
                "sub": [
                    {
                        "name": "盐湖区"
                    },
                    {
                        "name": "河津市"
                    },
                    {
                        "name": "永济市"
                    },
                    {
                        "name": "闻喜县"
                    },
                    {
                        "name": "新绛县"
                    },
                    {
                        "name": "平陆县"
                    },
                    {
                        "name": "垣曲县"
                    },
                    {
                        "name": "绛县"
                    },
                    {
                        "name": "稷山县"
                    },
                    {
                        "name": "芮城县"
                    },
                    {
                        "name": "夏县"
                    },
                    {
                        "name": "万荣县"
                    },
                    {
                        "name": "临猗县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "忻州",
                "sub": [
                    {
                        "name": "忻府区"
                    },
                    {
                        "name": "原平市"
                    },
                    {
                        "name": "代县"
                    },
                    {
                        "name": "神池县"
                    },
                    {
                        "name": "五寨县"
                    },
                    {
                        "name": "五台县"
                    },
                    {
                        "name": "偏关县"
                    },
                    {
                        "name": "宁武县"
                    },
                    {
                        "name": "静乐县"
                    },
                    {
                        "name": "繁峙县"
                    },
                    {
                        "name": "河曲县"
                    },
                    {
                        "name": "保德县"
                    },
                    {
                        "name": "定襄县"
                    },
                    {
                        "name": "岢岚县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "临汾",
                "sub": [
                    {
                        "name": "尧都区"
                    },
                    {
                        "name": "侯马市"
                    },
                    {
                        "name": "霍州市"
                    },
                    {
                        "name": "汾西县"
                    },
                    {
                        "name": "吉县"
                    },
                    {
                        "name": "安泽县"
                    },
                    {
                        "name": "大宁县"
                    },
                    {
                        "name": "浮山县"
                    },
                    {
                        "name": "古县"
                    },
                    {
                        "name": "隰县"
                    },
                    {
                        "name": "襄汾县"
                    },
                    {
                        "name": "翼城县"
                    },
                    {
                        "name": "永和县"
                    },
                    {
                        "name": "乡宁县"
                    },
                    {
                        "name": "曲沃县"
                    },
                    {
                        "name": "洪洞县"
                    },
                    {
                        "name": "蒲县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "吕梁",
                "sub": [
                    {
                        "name": "离石区"
                    },
                    {
                        "name": "孝义市"
                    },
                    {
                        "name": "汾阳市"
                    },
                    {
                        "name": "文水县"
                    },
                    {
                        "name": "中阳县"
                    },
                    {
                        "name": "兴县"
                    },
                    {
                        "name": "临县"
                    },
                    {
                        "name": "方山县"
                    },
                    {
                        "name": "柳林县"
                    },
                    {
                        "name": "岚县"
                    },
                    {
                        "name": "交口县"
                    },
                    {
                        "name": "交城县"
                    },
                    {
                        "name": "石楼县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "河南",
        "sub": [
            {
                "name": "郑州",
                "sub": [
                    {
                        "name": "中原区"
                    },
                    {
                        "name": "金水区"
                    },
                    {
                        "name": "二七区"
                    },
                    {
                        "name": "管城回族区"
                    },
                    {
                        "name": "上街区"
                    },
                    {
                        "name": "惠济区"
                    },
                    {
                        "name": "巩义市"
                    },
                    {
                        "name": "新郑市"
                    },
                    {
                        "name": "新密市"
                    },
                    {
                        "name": "登封市"
                    },
                    {
                        "name": "荥阳市"
                    },
                    {
                        "name": "中牟县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "开封",
                "sub": [
                    {
                        "name": "鼓楼区"
                    },
                    {
                        "name": "龙亭区"
                    },
                    {
                        "name": "顺河回族区"
                    },
                    {
                        "name": "禹王台区"
                    },
                    {
                        "name": "金明区"
                    },
                    {
                        "name": "开封县"
                    },
                    {
                        "name": "尉氏县"
                    },
                    {
                        "name": "兰考县"
                    },
                    {
                        "name": "杞县"
                    },
                    {
                        "name": "通许县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "洛阳",
                "sub": [
                    {
                        "name": "西工区"
                    },
                    {
                        "name": "老城区"
                    },
                    {
                        "name": "涧西区"
                    },
                    {
                        "name": "瀍河回族区"
                    },
                    {
                        "name": "洛龙区"
                    },
                    {
                        "name": "吉利区"
                    },
                    {
                        "name": "偃师市"
                    },
                    {
                        "name": "孟津县"
                    },
                    {
                        "name": "汝阳县"
                    },
                    {
                        "name": "伊川县"
                    },
                    {
                        "name": "洛宁县"
                    },
                    {
                        "name": "嵩县"
                    },
                    {
                        "name": "宜阳县"
                    },
                    {
                        "name": "新安县"
                    },
                    {
                        "name": "栾川县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "平顶山",
                "sub": [
                    {
                        "name": "新华区"
                    },
                    {
                        "name": "卫东区"
                    },
                    {
                        "name": "湛河区"
                    },
                    {
                        "name": "石龙区"
                    },
                    {
                        "name": "汝州市"
                    },
                    {
                        "name": "舞钢市"
                    },
                    {
                        "name": "宝丰县"
                    },
                    {
                        "name": "叶县"
                    },
                    {
                        "name": "郏县"
                    },
                    {
                        "name": "鲁山县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "安阳",
                "sub": [
                    {
                        "name": "北关区"
                    },
                    {
                        "name": "文峰区"
                    },
                    {
                        "name": "殷都区"
                    },
                    {
                        "name": "龙安区"
                    },
                    {
                        "name": "林州市"
                    },
                    {
                        "name": "安阳县"
                    },
                    {
                        "name": "滑县"
                    },
                    {
                        "name": "内黄县"
                    },
                    {
                        "name": "汤阴县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "鹤壁",
                "sub": [
                    {
                        "name": "淇滨区"
                    },
                    {
                        "name": "山城区"
                    },
                    {
                        "name": "鹤山区"
                    },
                    {
                        "name": "浚县"
                    },
                    {
                        "name": "淇县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "新乡",
                "sub": [
                    {
                        "name": "卫滨区"
                    },
                    {
                        "name": "红旗区"
                    },
                    {
                        "name": "凤泉区"
                    },
                    {
                        "name": "牧野区"
                    },
                    {
                        "name": "卫辉市"
                    },
                    {
                        "name": "辉县市"
                    },
                    {
                        "name": "新乡县"
                    },
                    {
                        "name": "获嘉县"
                    },
                    {
                        "name": "原阳县"
                    },
                    {
                        "name": "长垣县"
                    },
                    {
                        "name": "封丘县"
                    },
                    {
                        "name": "延津县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "焦作",
                "sub": [
                    {
                        "name": "解放区"
                    },
                    {
                        "name": "中站区"
                    },
                    {
                        "name": "马村区"
                    },
                    {
                        "name": "山阳区"
                    },
                    {
                        "name": "沁阳市"
                    },
                    {
                        "name": "孟州市"
                    },
                    {
                        "name": "修武县"
                    },
                    {
                        "name": "温县"
                    },
                    {
                        "name": "武陟县"
                    },
                    {
                        "name": "博爱县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "濮阳",
                "sub": [
                    {
                        "name": "华龙区"
                    },
                    {
                        "name": "濮阳县"
                    },
                    {
                        "name": "南乐县"
                    },
                    {
                        "name": "台前县"
                    },
                    {
                        "name": "清丰县"
                    },
                    {
                        "name": "范县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "许昌",
                "sub": [
                    {
                        "name": "魏都区"
                    },
                    {
                        "name": "禹州市"
                    },
                    {
                        "name": "长葛市"
                    },
                    {
                        "name": "许昌县"
                    },
                    {
                        "name": "鄢陵县"
                    },
                    {
                        "name": "襄城县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "漯河",
                "sub": [
                    {
                        "name": "源汇区"
                    },
                    {
                        "name": "郾城区"
                    },
                    {
                        "name": "召陵区"
                    },
                    {
                        "name": "临颍县"
                    },
                    {
                        "name": "舞阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "三门峡",
                "sub": [
                    {
                        "name": "湖滨区"
                    },
                    {
                        "name": "义马市"
                    },
                    {
                        "name": "灵宝市"
                    },
                    {
                        "name": "渑池县"
                    },
                    {
                        "name": "卢氏县"
                    },
                    {
                        "name": "陕县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "南阳",
                "sub": [
                    {
                        "name": "卧龙区"
                    },
                    {
                        "name": "宛城区"
                    },
                    {
                        "name": "邓州市"
                    },
                    {
                        "name": "桐柏县"
                    },
                    {
                        "name": "方城县"
                    },
                    {
                        "name": "淅川县"
                    },
                    {
                        "name": "镇平县"
                    },
                    {
                        "name": "唐河县"
                    },
                    {
                        "name": "南召县"
                    },
                    {
                        "name": "内乡县"
                    },
                    {
                        "name": "新野县"
                    },
                    {
                        "name": "社旗县"
                    },
                    {
                        "name": "西峡县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "商丘",
                "sub": [
                    {
                        "name": "梁园区"
                    },
                    {
                        "name": "睢阳区"
                    },
                    {
                        "name": "永城市"
                    },
                    {
                        "name": "宁陵县"
                    },
                    {
                        "name": "虞城县"
                    },
                    {
                        "name": "民权县"
                    },
                    {
                        "name": "夏邑县"
                    },
                    {
                        "name": "柘城县"
                    },
                    {
                        "name": "睢县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "信阳",
                "sub": [
                    {
                        "name": "浉河区"
                    },
                    {
                        "name": "平桥区"
                    },
                    {
                        "name": "潢川县"
                    },
                    {
                        "name": "淮滨县"
                    },
                    {
                        "name": "息县"
                    },
                    {
                        "name": "新县"
                    },
                    {
                        "name": "商城县"
                    },
                    {
                        "name": "固始县"
                    },
                    {
                        "name": "罗山县"
                    },
                    {
                        "name": "光山县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "周口",
                "sub": [
                    {
                        "name": "川汇区"
                    },
                    {
                        "name": "项城市"
                    },
                    {
                        "name": "商水县"
                    },
                    {
                        "name": "淮阳县"
                    },
                    {
                        "name": "太康县"
                    },
                    {
                        "name": "鹿邑县"
                    },
                    {
                        "name": "西华县"
                    },
                    {
                        "name": "扶沟县"
                    },
                    {
                        "name": "沈丘县"
                    },
                    {
                        "name": "郸城县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "驻马店",
                "sub": [
                    {
                        "name": "驿城区"
                    },
                    {
                        "name": "确山县"
                    },
                    {
                        "name": "新蔡县"
                    },
                    {
                        "name": "上蔡县"
                    },
                    {
                        "name": "西平县"
                    },
                    {
                        "name": "泌阳县"
                    },
                    {
                        "name": "平舆县"
                    },
                    {
                        "name": "汝南县"
                    },
                    {
                        "name": "遂平县"
                    },
                    {
                        "name": "正阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "焦作",
                "sub": [
                    {
                        "name": "济源市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "吉林",
        "sub": [
            {
                "name": "长春",
                "sub": [
                    {
                        "name": "朝阳区"
                    },
                    {
                        "name": "宽城区"
                    },
                    {
                        "name": "二道区"
                    },
                    {
                        "name": "南关区"
                    },
                    {
                        "name": "绿园区"
                    },
                    {
                        "name": "双阳区"
                    },
                    {
                        "name": "九台市"
                    },
                    {
                        "name": "榆树市"
                    },
                    {
                        "name": "德惠市"
                    },
                    {
                        "name": "农安县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "吉林",
                "sub": [
                    {
                        "name": "船营区"
                    },
                    {
                        "name": "昌邑区"
                    },
                    {
                        "name": "龙潭区"
                    },
                    {
                        "name": "丰满区"
                    },
                    {
                        "name": "舒兰市"
                    },
                    {
                        "name": "桦甸市"
                    },
                    {
                        "name": "蛟河市"
                    },
                    {
                        "name": "磐石市"
                    },
                    {
                        "name": "永吉县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "四平",
                "sub": [
                    {
                        "name": "铁西区"
                    },
                    {
                        "name": "铁东区"
                    },
                    {
                        "name": "公主岭市"
                    },
                    {
                        "name": "双辽市"
                    },
                    {
                        "name": "梨树县"
                    },
                    {
                        "name": "伊通满族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "辽源",
                "sub": [
                    {
                        "name": "龙山区"
                    },
                    {
                        "name": "西安区"
                    },
                    {
                        "name": "东辽县"
                    },
                    {
                        "name": "东丰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "通化",
                "sub": [
                    {
                        "name": "东昌区"
                    },
                    {
                        "name": "二道江区"
                    },
                    {
                        "name": "梅河口市"
                    },
                    {
                        "name": "集安市"
                    },
                    {
                        "name": "通化县"
                    },
                    {
                        "name": "辉南县"
                    },
                    {
                        "name": "柳河县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "白山",
                "sub": [
                    {
                        "name": "八道江区"
                    },
                    {
                        "name": "江源区"
                    },
                    {
                        "name": "临江市"
                    },
                    {
                        "name": "靖宇县"
                    },
                    {
                        "name": "抚松县"
                    },
                    {
                        "name": "长白朝鲜族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "松原",
                "sub": [
                    {
                        "name": "宁江区"
                    },
                    {
                        "name": "乾安县"
                    },
                    {
                        "name": "长岭县"
                    },
                    {
                        "name": "扶余县"
                    },
                    {
                        "name": "前郭尔罗斯蒙古族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "白城",
                "sub": [
                    {
                        "name": "洮北区"
                    },
                    {
                        "name": "大安市"
                    },
                    {
                        "name": "洮南市"
                    },
                    {
                        "name": "镇赉县"
                    },
                    {
                        "name": "通榆县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "延边朝鲜族自治州",
                "sub": [
                    {
                        "name": "延吉市"
                    },
                    {
                        "name": "图们市"
                    },
                    {
                        "name": "敦化市"
                    },
                    {
                        "name": "龙井市"
                    },
                    {
                        "name": "珲春市"
                    },
                    {
                        "name": "和龙市"
                    },
                    {
                        "name": "安图县"
                    },
                    {
                        "name": "汪清县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "黑龙江",
        "sub": [
            {
                "name": "哈尔滨",
                "sub": [
                    {
                        "name": "松北区"
                    },
                    {
                        "name": "道里区"
                    },
                    {
                        "name": "南岗区"
                    },
                    {
                        "name": "平房区"
                    },
                    {
                        "name": "香坊区"
                    },
                    {
                        "name": "道外区"
                    },
                    {
                        "name": "呼兰区"
                    },
                    {
                        "name": "阿城区"
                    },
                    {
                        "name": "双城市"
                    },
                    {
                        "name": "尚志市"
                    },
                    {
                        "name": "五常市"
                    },
                    {
                        "name": "宾县"
                    },
                    {
                        "name": "方正县"
                    },
                    {
                        "name": "通河县"
                    },
                    {
                        "name": "巴彦县"
                    },
                    {
                        "name": "延寿县"
                    },
                    {
                        "name": "木兰县"
                    },
                    {
                        "name": "依兰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "齐齐哈尔",
                "sub": [
                    {
                        "name": "龙沙区"
                    },
                    {
                        "name": "昂昂溪区"
                    },
                    {
                        "name": "铁锋区"
                    },
                    {
                        "name": "建华区"
                    },
                    {
                        "name": "富拉尔基区"
                    },
                    {
                        "name": "碾子山区"
                    },
                    {
                        "name": "梅里斯达斡尔族区"
                    },
                    {
                        "name": "讷河市"
                    },
                    {
                        "name": "富裕县"
                    },
                    {
                        "name": "拜泉县"
                    },
                    {
                        "name": "甘南县"
                    },
                    {
                        "name": "依安县"
                    },
                    {
                        "name": "克山县"
                    },
                    {
                        "name": "泰来县"
                    },
                    {
                        "name": "克东县"
                    },
                    {
                        "name": "龙江县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "鹤岗",
                "sub": [
                    {
                        "name": "兴山区"
                    },
                    {
                        "name": "工农区"
                    },
                    {
                        "name": "南山区"
                    },
                    {
                        "name": "兴安区"
                    },
                    {
                        "name": "向阳区"
                    },
                    {
                        "name": "东山区"
                    },
                    {
                        "name": "萝北县"
                    },
                    {
                        "name": "绥滨县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "双鸭山",
                "sub": [
                    {
                        "name": "尖山区"
                    },
                    {
                        "name": "岭东区"
                    },
                    {
                        "name": "四方台区"
                    },
                    {
                        "name": "宝山区"
                    },
                    {
                        "name": "集贤县"
                    },
                    {
                        "name": "宝清县"
                    },
                    {
                        "name": "友谊县"
                    },
                    {
                        "name": "饶河县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "鸡西",
                "sub": [
                    {
                        "name": "鸡冠区"
                    },
                    {
                        "name": "恒山区"
                    },
                    {
                        "name": "城子河区"
                    },
                    {
                        "name": "滴道区"
                    },
                    {
                        "name": "梨树区"
                    },
                    {
                        "name": "麻山区"
                    },
                    {
                        "name": "密山市"
                    },
                    {
                        "name": "虎林市"
                    },
                    {
                        "name": "鸡东县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "大庆",
                "sub": [
                    {
                        "name": "萨尔图区"
                    },
                    {
                        "name": "红岗区"
                    },
                    {
                        "name": "龙凤区"
                    },
                    {
                        "name": "让胡路区"
                    },
                    {
                        "name": "大同区"
                    },
                    {
                        "name": "林甸县"
                    },
                    {
                        "name": "肇州县"
                    },
                    {
                        "name": "肇源县"
                    },
                    {
                        "name": "杜尔伯特蒙古族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "伊春",
                "sub": [
                    {
                        "name": "伊春区"
                    },
                    {
                        "name": "带岭区"
                    },
                    {
                        "name": "南岔区"
                    },
                    {
                        "name": "金山屯区"
                    },
                    {
                        "name": "西林区"
                    },
                    {
                        "name": "美溪区"
                    },
                    {
                        "name": "乌马河区"
                    },
                    {
                        "name": "翠峦区"
                    },
                    {
                        "name": "友好区"
                    },
                    {
                        "name": "上甘岭区"
                    },
                    {
                        "name": "五营区"
                    },
                    {
                        "name": "红星区"
                    },
                    {
                        "name": "新青区"
                    },
                    {
                        "name": "汤旺河区"
                    },
                    {
                        "name": "乌伊岭区"
                    },
                    {
                        "name": "铁力市"
                    },
                    {
                        "name": "嘉荫县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "牡丹江",
                "sub": [
                    {
                        "name": "爱民区"
                    },
                    {
                        "name": "东安区"
                    },
                    {
                        "name": "阳明区"
                    },
                    {
                        "name": "西安区"
                    },
                    {
                        "name": "绥芬河市"
                    },
                    {
                        "name": "宁安市"
                    },
                    {
                        "name": "海林市"
                    },
                    {
                        "name": "穆棱市"
                    },
                    {
                        "name": "林口县"
                    },
                    {
                        "name": "东宁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "佳木斯",
                "sub": [
                    {
                        "name": "向阳区"
                    },
                    {
                        "name": "前进区"
                    },
                    {
                        "name": "东风区"
                    },
                    {
                        "name": "郊区"
                    },
                    {
                        "name": "同江市"
                    },
                    {
                        "name": "富锦市"
                    },
                    {
                        "name": "桦川县"
                    },
                    {
                        "name": "抚远县"
                    },
                    {
                        "name": "桦南县"
                    },
                    {
                        "name": "汤原县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "七台河",
                "sub": [
                    {
                        "name": "桃山区"
                    },
                    {
                        "name": "新兴区"
                    },
                    {
                        "name": "茄子河区"
                    },
                    {
                        "name": "勃利县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黑河",
                "sub": [
                    {
                        "name": "爱辉区"
                    },
                    {
                        "name": "北安市"
                    },
                    {
                        "name": "五大连池市"
                    },
                    {
                        "name": "逊克县"
                    },
                    {
                        "name": "嫩江县"
                    },
                    {
                        "name": "孙吴县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "绥化",
                "sub": [
                    {
                        "name": "北林区"
                    },
                    {
                        "name": "安达市"
                    },
                    {
                        "name": "肇东市"
                    },
                    {
                        "name": "海伦市"
                    },
                    {
                        "name": "绥棱县"
                    },
                    {
                        "name": "兰西县"
                    },
                    {
                        "name": "明水县"
                    },
                    {
                        "name": "青冈县"
                    },
                    {
                        "name": "庆安县"
                    },
                    {
                        "name": "望奎县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "大兴安岭地区",
                "sub": [
                    {
                        "name": "呼玛县"
                    },
                    {
                        "name": "塔河县"
                    },
                    {
                        "name": "漠河县"
                    },
                    {
                        "name": "大兴安岭辖区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "内蒙古",
        "sub": [
            {
                "name": "呼和浩特",
                "sub": [
                    {
                        "name": "回民区"
                    },
                    {
                        "name": "玉泉区"
                    },
                    {
                        "name": "新城区"
                    },
                    {
                        "name": "赛罕区"
                    },
                    {
                        "name": "托克托县"
                    },
                    {
                        "name": "清水河县"
                    },
                    {
                        "name": "武川县"
                    },
                    {
                        "name": "和林格尔县"
                    },
                    {
                        "name": "土默特左旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "包头",
                "sub": [
                    {
                        "name": "昆都仑区"
                    },
                    {
                        "name": "青山区"
                    },
                    {
                        "name": "东河区"
                    },
                    {
                        "name": "九原区"
                    },
                    {
                        "name": "石拐区"
                    },
                    {
                        "name": "白云矿区"
                    },
                    {
                        "name": "固阳县"
                    },
                    {
                        "name": "土默特右旗"
                    },
                    {
                        "name": "达尔罕茂明安联合旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "乌海",
                "sub": [
                    {
                        "name": "海勃湾区"
                    },
                    {
                        "name": "乌达区"
                    },
                    {
                        "name": "海南区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "赤峰",
                "sub": [
                    {
                        "name": "红山区"
                    },
                    {
                        "name": "元宝山区"
                    },
                    {
                        "name": "松山区"
                    },
                    {
                        "name": "宁城县"
                    },
                    {
                        "name": "林西县"
                    },
                    {
                        "name": "喀喇沁旗"
                    },
                    {
                        "name": "巴林左旗"
                    },
                    {
                        "name": "敖汉旗"
                    },
                    {
                        "name": "阿鲁科尔沁旗"
                    },
                    {
                        "name": "翁牛特旗"
                    },
                    {
                        "name": "克什克腾旗"
                    },
                    {
                        "name": "巴林右旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "通辽",
                "sub": [
                    {
                        "name": "科尔沁区"
                    },
                    {
                        "name": "霍林郭勒市"
                    },
                    {
                        "name": "开鲁县"
                    },
                    {
                        "name": "科尔沁左翼中旗"
                    },
                    {
                        "name": "科尔沁左翼后旗"
                    },
                    {
                        "name": "库伦旗"
                    },
                    {
                        "name": "奈曼旗"
                    },
                    {
                        "name": "扎鲁特旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "鄂尔多斯",
                "sub": [
                    {
                        "name": "东胜区"
                    },
                    {
                        "name": "准格尔旗"
                    },
                    {
                        "name": "乌审旗"
                    },
                    {
                        "name": "伊金霍洛旗"
                    },
                    {
                        "name": "鄂托克旗"
                    },
                    {
                        "name": "鄂托克前旗"
                    },
                    {
                        "name": "杭锦旗"
                    },
                    {
                        "name": "达拉特旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "呼伦贝尔",
                "sub": [
                    {
                        "name": "海拉尔区"
                    },
                    {
                        "name": "满洲里市"
                    },
                    {
                        "name": "牙克石市"
                    },
                    {
                        "name": "扎兰屯市"
                    },
                    {
                        "name": "根河市"
                    },
                    {
                        "name": "额尔古纳市"
                    },
                    {
                        "name": "陈巴尔虎旗"
                    },
                    {
                        "name": "阿荣旗"
                    },
                    {
                        "name": "新巴尔虎左旗"
                    },
                    {
                        "name": "新巴尔虎右旗"
                    },
                    {
                        "name": "鄂伦春自治旗"
                    },
                    {
                        "name": "莫力达瓦达斡尔族自治旗"
                    },
                    {
                        "name": "鄂温克族自治旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "巴彦淖尔",
                "sub": [
                    {
                        "name": "临河区"
                    },
                    {
                        "name": "五原县"
                    },
                    {
                        "name": "磴口县"
                    },
                    {
                        "name": "杭锦后旗"
                    },
                    {
                        "name": "乌拉特中旗"
                    },
                    {
                        "name": "乌拉特前旗"
                    },
                    {
                        "name": "乌拉特后旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "乌兰察布",
                "sub": [
                    {
                        "name": "集宁区"
                    },
                    {
                        "name": "丰镇市"
                    },
                    {
                        "name": "兴和县"
                    },
                    {
                        "name": "卓资县"
                    },
                    {
                        "name": "商都县"
                    },
                    {
                        "name": "凉城县"
                    },
                    {
                        "name": "化德县"
                    },
                    {
                        "name": "四子王旗"
                    },
                    {
                        "name": "察哈尔右翼前旗"
                    },
                    {
                        "name": "察哈尔右翼中旗"
                    },
                    {
                        "name": "察哈尔右翼后旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "锡林郭勒盟",
                "sub": [
                    {
                        "name": "锡林浩特市"
                    },
                    {
                        "name": "二连浩特市"
                    },
                    {
                        "name": "多伦县"
                    },
                    {
                        "name": "阿巴嘎旗"
                    },
                    {
                        "name": "西乌珠穆沁旗"
                    },
                    {
                        "name": "东乌珠穆沁旗"
                    },
                    {
                        "name": "苏尼特左旗"
                    },
                    {
                        "name": "苏尼特右旗"
                    },
                    {
                        "name": "太仆寺旗"
                    },
                    {
                        "name": "正镶白旗"
                    },
                    {
                        "name": "正蓝旗"
                    },
                    {
                        "name": "镶黄旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "兴安盟",
                "sub": [
                    {
                        "name": "乌兰浩特市"
                    },
                    {
                        "name": "阿尔山市"
                    },
                    {
                        "name": "突泉县"
                    },
                    {
                        "name": "扎赉特旗"
                    },
                    {
                        "name": "科尔沁右翼前旗"
                    },
                    {
                        "name": "科尔沁右翼中旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阿拉善盟",
                "sub": [
                    {
                        "name": "阿拉善左旗"
                    },
                    {
                        "name": "阿拉善右旗"
                    },
                    {
                        "name": "额济纳旗"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "山东",
        "sub": [
            {
                "name": "济南",
                "sub": [
                    {
                        "name": "市中区"
                    },
                    {
                        "name": "历下区"
                    },
                    {
                        "name": "天桥区"
                    },
                    {
                        "name": "槐荫区"
                    },
                    {
                        "name": "历城区"
                    },
                    {
                        "name": "长清区"
                    },
                    {
                        "name": "章丘市"
                    },
                    {
                        "name": "平阴县"
                    },
                    {
                        "name": "济阳县"
                    },
                    {
                        "name": "商河县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "青岛",
                "sub": [
                    {
                        "name": "市南区"
                    },
                    {
                        "name": "市北区"
                    },
                    {
                        "name": "城阳区"
                    },
                    {
                        "name": "四方区"
                    },
                    {
                        "name": "李沧区"
                    },
                    {
                        "name": "黄岛区"
                    },
                    {
                        "name": "崂山区"
                    },
                    {
                        "name": "胶南市"
                    },
                    {
                        "name": "胶州市"
                    },
                    {
                        "name": "平度市"
                    },
                    {
                        "name": "莱西市"
                    },
                    {
                        "name": "即墨市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "淄博",
                "sub": [
                    {
                        "name": "张店区"
                    },
                    {
                        "name": "临淄区"
                    },
                    {
                        "name": "淄川区"
                    },
                    {
                        "name": "博山区"
                    },
                    {
                        "name": "周村区"
                    },
                    {
                        "name": "桓台县"
                    },
                    {
                        "name": "高青县"
                    },
                    {
                        "name": "沂源县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "枣庄",
                "sub": [
                    {
                        "name": "市中区"
                    },
                    {
                        "name": "山亭区"
                    },
                    {
                        "name": "峄城区"
                    },
                    {
                        "name": "台儿庄区"
                    },
                    {
                        "name": "薛城区"
                    },
                    {
                        "name": "滕州市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "东营",
                "sub": [
                    {
                        "name": "东营区"
                    },
                    {
                        "name": "河口区"
                    },
                    {
                        "name": "垦利县"
                    },
                    {
                        "name": "广饶县"
                    },
                    {
                        "name": "利津县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "烟台",
                "sub": [
                    {
                        "name": "芝罘区"
                    },
                    {
                        "name": "福山区"
                    },
                    {
                        "name": "牟平区"
                    },
                    {
                        "name": "莱山区"
                    },
                    {
                        "name": "龙口市"
                    },
                    {
                        "name": "莱阳市"
                    },
                    {
                        "name": "莱州市"
                    },
                    {
                        "name": "招远市"
                    },
                    {
                        "name": "蓬莱市"
                    },
                    {
                        "name": "栖霞市"
                    },
                    {
                        "name": "海阳市"
                    },
                    {
                        "name": "长岛县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "潍坊",
                "sub": [
                    {
                        "name": "潍城区"
                    },
                    {
                        "name": "寒亭区"
                    },
                    {
                        "name": "坊子区"
                    },
                    {
                        "name": "奎文区"
                    },
                    {
                        "name": "青州市"
                    },
                    {
                        "name": "诸城市"
                    },
                    {
                        "name": "寿光市"
                    },
                    {
                        "name": "安丘市"
                    },
                    {
                        "name": "高密市"
                    },
                    {
                        "name": "昌邑市"
                    },
                    {
                        "name": "昌乐县"
                    },
                    {
                        "name": "临朐县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "济宁",
                "sub": [
                    {
                        "name": "市中区"
                    },
                    {
                        "name": "任城区"
                    },
                    {
                        "name": "曲阜市"
                    },
                    {
                        "name": "兖州市"
                    },
                    {
                        "name": "邹城市"
                    },
                    {
                        "name": "鱼台县"
                    },
                    {
                        "name": "金乡县"
                    },
                    {
                        "name": "嘉祥县"
                    },
                    {
                        "name": "微山县"
                    },
                    {
                        "name": "汶上县"
                    },
                    {
                        "name": "泗水县"
                    },
                    {
                        "name": "梁山县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "泰安",
                "sub": [
                    {
                        "name": "泰山区"
                    },
                    {
                        "name": "岱岳区"
                    },
                    {
                        "name": "新泰市"
                    },
                    {
                        "name": "肥城市"
                    },
                    {
                        "name": "宁阳县"
                    },
                    {
                        "name": "东平县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "威海",
                "sub": [
                    {
                        "name": "环翠区"
                    },
                    {
                        "name": "乳山市"
                    },
                    {
                        "name": "文登市"
                    },
                    {
                        "name": "荣成市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "日照",
                "sub": [
                    {
                        "name": "东港区"
                    },
                    {
                        "name": "岚山区"
                    },
                    {
                        "name": "五莲县"
                    },
                    {
                        "name": "莒县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "莱芜",
                "sub": [
                    {
                        "name": "莱城区"
                    },
                    {
                        "name": "钢城区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "临沂",
                "sub": [
                    {
                        "name": "兰山区"
                    },
                    {
                        "name": "罗庄区"
                    },
                    {
                        "name": "河东区"
                    },
                    {
                        "name": "沂南县"
                    },
                    {
                        "name": "郯城县"
                    },
                    {
                        "name": "沂水县"
                    },
                    {
                        "name": "苍山县"
                    },
                    {
                        "name": "费县"
                    },
                    {
                        "name": "平邑县"
                    },
                    {
                        "name": "莒南县"
                    },
                    {
                        "name": "蒙阴县"
                    },
                    {
                        "name": "临沭县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "德州",
                "sub": [
                    {
                        "name": "德城区"
                    },
                    {
                        "name": "乐陵市"
                    },
                    {
                        "name": "禹城市"
                    },
                    {
                        "name": "陵县"
                    },
                    {
                        "name": "宁津县"
                    },
                    {
                        "name": "齐河县"
                    },
                    {
                        "name": "武城县"
                    },
                    {
                        "name": "庆云县"
                    },
                    {
                        "name": "平原县"
                    },
                    {
                        "name": "夏津县"
                    },
                    {
                        "name": "临邑县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "聊城",
                "sub": [
                    {
                        "name": "东昌府区"
                    },
                    {
                        "name": "临清市"
                    },
                    {
                        "name": "高唐县"
                    },
                    {
                        "name": "阳谷县"
                    },
                    {
                        "name": "茌平县"
                    },
                    {
                        "name": "莘县"
                    },
                    {
                        "name": "东阿县"
                    },
                    {
                        "name": "冠县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "滨州",
                "sub": [
                    {
                        "name": "滨城区"
                    },
                    {
                        "name": "邹平县"
                    },
                    {
                        "name": "沾化县"
                    },
                    {
                        "name": "惠民县"
                    },
                    {
                        "name": "博兴县"
                    },
                    {
                        "name": "阳信县"
                    },
                    {
                        "name": "无棣县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "菏泽",
                "sub": [
                    {
                        "name": "牡丹区"
                    },
                    {
                        "name": "鄄城县"
                    },
                    {
                        "name": "单县"
                    },
                    {
                        "name": "郓城县"
                    },
                    {
                        "name": "曹县"
                    },
                    {
                        "name": "定陶县"
                    },
                    {
                        "name": "巨野县"
                    },
                    {
                        "name": "东明县"
                    },
                    {
                        "name": "成武县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "安徽",
        "sub": [
            {
                "name": "合肥",
                "sub": [
                    {
                        "name": "庐阳区"
                    },
                    {
                        "name": "瑶海区"
                    },
                    {
                        "name": "蜀山区"
                    },
                    {
                        "name": "包河区"
                    },
                    {
                        "name": "长丰县"
                    },
                    {
                        "name": "肥东县"
                    },
                    {
                        "name": "肥西县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "芜湖",
                "sub": [
                    {
                        "name": "镜湖区"
                    },
                    {
                        "name": "弋江区"
                    },
                    {
                        "name": "鸠江区"
                    },
                    {
                        "name": "三山区"
                    },
                    {
                        "name": "芜湖县"
                    },
                    {
                        "name": "南陵县"
                    },
                    {
                        "name": "繁昌县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "蚌埠",
                "sub": [
                    {
                        "name": "蚌山区"
                    },
                    {
                        "name": "龙子湖区"
                    },
                    {
                        "name": "禹会区"
                    },
                    {
                        "name": "淮上区"
                    },
                    {
                        "name": "怀远县"
                    },
                    {
                        "name": "固镇县"
                    },
                    {
                        "name": "五河县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "淮南",
                "sub": [
                    {
                        "name": "田家庵区"
                    },
                    {
                        "name": "大通区"
                    },
                    {
                        "name": "谢家集区"
                    },
                    {
                        "name": "八公山区"
                    },
                    {
                        "name": "潘集区"
                    },
                    {
                        "name": "凤台县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "马鞍山",
                "sub": [
                    {
                        "name": "雨山区"
                    },
                    {
                        "name": "花山区"
                    },
                    {
                        "name": "金家庄区"
                    },
                    {
                        "name": "当涂县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "淮北",
                "sub": [
                    {
                        "name": "相山区"
                    },
                    {
                        "name": "杜集区"
                    },
                    {
                        "name": "烈山区"
                    },
                    {
                        "name": "濉溪县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "铜陵",
                "sub": [
                    {
                        "name": "铜官山区"
                    },
                    {
                        "name": "狮子山区"
                    },
                    {
                        "name": "郊区"
                    },
                    {
                        "name": "铜陵县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "安庆",
                "sub": [
                    {
                        "name": "迎江区"
                    },
                    {
                        "name": "大观区"
                    },
                    {
                        "name": "宜秀区"
                    },
                    {
                        "name": "桐城市"
                    },
                    {
                        "name": "宿松县"
                    },
                    {
                        "name": "枞阳县"
                    },
                    {
                        "name": "太湖县"
                    },
                    {
                        "name": "怀宁县"
                    },
                    {
                        "name": "岳西县"
                    },
                    {
                        "name": "望江县"
                    },
                    {
                        "name": "潜山县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黄山",
                "sub": [
                    {
                        "name": "屯溪区"
                    },
                    {
                        "name": "黄山区"
                    },
                    {
                        "name": "徽州区"
                    },
                    {
                        "name": "休宁县"
                    },
                    {
                        "name": "歙县"
                    },
                    {
                        "name": "祁门县"
                    },
                    {
                        "name": "黟县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "滁州",
                "sub": [
                    {
                        "name": "琅琊区"
                    },
                    {
                        "name": "南谯区"
                    },
                    {
                        "name": "天长市"
                    },
                    {
                        "name": "明光市"
                    },
                    {
                        "name": "全椒县"
                    },
                    {
                        "name": "来安县"
                    },
                    {
                        "name": "定远县"
                    },
                    {
                        "name": "凤阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阜阳",
                "sub": [
                    {
                        "name": "颍州区"
                    },
                    {
                        "name": "颍东区"
                    },
                    {
                        "name": "颍泉区"
                    },
                    {
                        "name": "界首市"
                    },
                    {
                        "name": "临泉县"
                    },
                    {
                        "name": "颍上县"
                    },
                    {
                        "name": "阜南县"
                    },
                    {
                        "name": "太和县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宿州",
                "sub": [
                    {
                        "name": "埇桥区"
                    },
                    {
                        "name": "萧县"
                    },
                    {
                        "name": "泗县"
                    },
                    {
                        "name": "砀山县"
                    },
                    {
                        "name": "灵璧县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "巢湖",
                "sub": [
                    {
                        "name": "居巢区"
                    },
                    {
                        "name": "含山县"
                    },
                    {
                        "name": "无为县"
                    },
                    {
                        "name": "庐江县"
                    },
                    {
                        "name": "和县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "六安",
                "sub": [
                    {
                        "name": "金安区"
                    },
                    {
                        "name": "裕安区"
                    },
                    {
                        "name": "寿县"
                    },
                    {
                        "name": "霍山县"
                    },
                    {
                        "name": "霍邱县"
                    },
                    {
                        "name": "舒城县"
                    },
                    {
                        "name": "金寨县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "亳州",
                "sub": [
                    {
                        "name": "谯城区"
                    },
                    {
                        "name": "利辛县"
                    },
                    {
                        "name": "涡阳县"
                    },
                    {
                        "name": "蒙城县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "池州",
                "sub": [
                    {
                        "name": "贵池区"
                    },
                    {
                        "name": "东至县"
                    },
                    {
                        "name": "石台县"
                    },
                    {
                        "name": "青阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宣城",
                "sub": [
                    {
                        "name": "宣州区"
                    },
                    {
                        "name": "宁国市"
                    },
                    {
                        "name": "广德县"
                    },
                    {
                        "name": "郎溪县"
                    },
                    {
                        "name": "泾县"
                    },
                    {
                        "name": "旌德县"
                    },
                    {
                        "name": "绩溪县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "浙江",
        "sub": [
            {
                "name": "杭州",
                "sub": [
                    {
                        "name": "拱墅区"
                    },
                    {
                        "name": "西湖区"
                    },
                    {
                        "name": "上城区"
                    },
                    {
                        "name": "下城区"
                    },
                    {
                        "name": "江干区"
                    },
                    {
                        "name": "滨江区"
                    },
                    {
                        "name": "余杭区"
                    },
                    {
                        "name": "萧山区"
                    },
                    {
                        "name": "建德市"
                    },
                    {
                        "name": "富阳市"
                    },
                    {
                        "name": "临安市"
                    },
                    {
                        "name": "桐庐县"
                    },
                    {
                        "name": "淳安县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宁波",
                "sub": [
                    {
                        "name": "海曙区"
                    },
                    {
                        "name": "江东区"
                    },
                    {
                        "name": "江北区"
                    },
                    {
                        "name": "镇海区"
                    },
                    {
                        "name": "北仑区"
                    },
                    {
                        "name": "鄞州区"
                    },
                    {
                        "name": "余姚市"
                    },
                    {
                        "name": "慈溪市"
                    },
                    {
                        "name": "奉化市"
                    },
                    {
                        "name": "宁海县"
                    },
                    {
                        "name": "象山县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "温州",
                "sub": [
                    {
                        "name": "鹿城区"
                    },
                    {
                        "name": "龙湾区"
                    },
                    {
                        "name": "瓯海区"
                    },
                    {
                        "name": "瑞安市"
                    },
                    {
                        "name": "乐清市"
                    },
                    {
                        "name": "永嘉县"
                    },
                    {
                        "name": "洞头县"
                    },
                    {
                        "name": "平阳县"
                    },
                    {
                        "name": "苍南县"
                    },
                    {
                        "name": "文成县"
                    },
                    {
                        "name": "泰顺县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "嘉兴",
                "sub": [
                    {
                        "name": "秀城区"
                    },
                    {
                        "name": "秀洲区"
                    },
                    {
                        "name": "海宁市"
                    },
                    {
                        "name": "平湖市"
                    },
                    {
                        "name": "桐乡市"
                    },
                    {
                        "name": "嘉善县"
                    },
                    {
                        "name": "海盐县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "湖州",
                "sub": [
                    {
                        "name": "吴兴区"
                    },
                    {
                        "name": "南浔区"
                    },
                    {
                        "name": "长兴县"
                    },
                    {
                        "name": "德清县"
                    },
                    {
                        "name": "安吉县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "绍兴",
                "sub": [
                    {
                        "name": "越城区"
                    },
                    {
                        "name": "诸暨市"
                    },
                    {
                        "name": "上虞市"
                    },
                    {
                        "name": "嵊州市"
                    },
                    {
                        "name": "绍兴县"
                    },
                    {
                        "name": "新昌县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "金华",
                "sub": [
                    {
                        "name": "婺城区"
                    },
                    {
                        "name": "金东区"
                    },
                    {
                        "name": "兰溪市"
                    },
                    {
                        "name": "义乌市"
                    },
                    {
                        "name": "东阳市"
                    },
                    {
                        "name": "永康市"
                    },
                    {
                        "name": "武义县"
                    },
                    {
                        "name": "浦江县"
                    },
                    {
                        "name": "磐安县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "衢州",
                "sub": [
                    {
                        "name": "柯城区"
                    },
                    {
                        "name": "衢江区"
                    },
                    {
                        "name": "江山市"
                    },
                    {
                        "name": "龙游县"
                    },
                    {
                        "name": "常山县"
                    },
                    {
                        "name": "开化县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "舟山",
                "sub": [
                    {
                        "name": "定海区"
                    },
                    {
                        "name": "普陀区"
                    },
                    {
                        "name": "岱山县"
                    },
                    {
                        "name": "嵊泗县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "台州",
                "sub": [
                    {
                        "name": "椒江区"
                    },
                    {
                        "name": "黄岩区"
                    },
                    {
                        "name": "路桥区"
                    },
                    {
                        "name": "临海市"
                    },
                    {
                        "name": "温岭市"
                    },
                    {
                        "name": "玉环县"
                    },
                    {
                        "name": "天台县"
                    },
                    {
                        "name": "仙居县"
                    },
                    {
                        "name": "三门县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "丽水",
                "sub": [
                    {
                        "name": "莲都区"
                    },
                    {
                        "name": "龙泉市"
                    },
                    {
                        "name": "缙云县"
                    },
                    {
                        "name": "青田县"
                    },
                    {
                        "name": "云和县"
                    },
                    {
                        "name": "遂昌县"
                    },
                    {
                        "name": "松阳县"
                    },
                    {
                        "name": "庆元县"
                    },
                    {
                        "name": "景宁畲族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "福建",
        "sub": [
            {
                "name": "福州",
                "sub": [
                    {
                        "name": "鼓楼区"
                    },
                    {
                        "name": "台江区"
                    },
                    {
                        "name": "仓山区"
                    },
                    {
                        "name": "马尾区"
                    },
                    {
                        "name": "晋安区"
                    },
                    {
                        "name": "福清市"
                    },
                    {
                        "name": "长乐市"
                    },
                    {
                        "name": "闽侯县"
                    },
                    {
                        "name": "闽清县"
                    },
                    {
                        "name": "永泰县"
                    },
                    {
                        "name": "连江县"
                    },
                    {
                        "name": "罗源县"
                    },
                    {
                        "name": "平潭县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "厦门",
                "sub": [
                    {
                        "name": "思明区"
                    },
                    {
                        "name": "海沧区"
                    },
                    {
                        "name": "湖里区"
                    },
                    {
                        "name": "集美区"
                    },
                    {
                        "name": "同安区"
                    },
                    {
                        "name": "翔安区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "莆田",
                "sub": [
                    {
                        "name": "城厢区"
                    },
                    {
                        "name": "涵江区"
                    },
                    {
                        "name": "荔城区"
                    },
                    {
                        "name": "秀屿区"
                    },
                    {
                        "name": "仙游县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "三明",
                "sub": [
                    {
                        "name": "梅列区"
                    },
                    {
                        "name": "三元区"
                    },
                    {
                        "name": "永安市"
                    },
                    {
                        "name": "明溪县"
                    },
                    {
                        "name": "将乐县"
                    },
                    {
                        "name": "大田县"
                    },
                    {
                        "name": "宁化县"
                    },
                    {
                        "name": "建宁县"
                    },
                    {
                        "name": "沙县"
                    },
                    {
                        "name": "尤溪县"
                    },
                    {
                        "name": "清流县"
                    },
                    {
                        "name": "泰宁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "泉州",
                "sub": [
                    {
                        "name": "鲤城区"
                    },
                    {
                        "name": "丰泽区"
                    },
                    {
                        "name": "洛江区"
                    },
                    {
                        "name": "泉港区"
                    },
                    {
                        "name": "石狮市"
                    },
                    {
                        "name": "晋江市"
                    },
                    {
                        "name": "南安市"
                    },
                    {
                        "name": "惠安县"
                    },
                    {
                        "name": "永春县"
                    },
                    {
                        "name": "安溪县"
                    },
                    {
                        "name": "德化县"
                    },
                    {
                        "name": "金门县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "漳州",
                "sub": [
                    {
                        "name": "芗城区"
                    },
                    {
                        "name": "龙文区"
                    },
                    {
                        "name": "龙海市"
                    },
                    {
                        "name": "平和县"
                    },
                    {
                        "name": "南靖县"
                    },
                    {
                        "name": "诏安县"
                    },
                    {
                        "name": "漳浦县"
                    },
                    {
                        "name": "华安县"
                    },
                    {
                        "name": "东山县"
                    },
                    {
                        "name": "长泰县"
                    },
                    {
                        "name": "云霄县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "南平",
                "sub": [
                    {
                        "name": "延平区"
                    },
                    {
                        "name": "建瓯市"
                    },
                    {
                        "name": "邵武市"
                    },
                    {
                        "name": "武夷山市"
                    },
                    {
                        "name": "建阳市"
                    },
                    {
                        "name": "松溪县"
                    },
                    {
                        "name": "光泽县"
                    },
                    {
                        "name": "顺昌县"
                    },
                    {
                        "name": "浦城县"
                    },
                    {
                        "name": "政和县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "龙岩",
                "sub": [
                    {
                        "name": "新罗区"
                    },
                    {
                        "name": "漳平市"
                    },
                    {
                        "name": "长汀县"
                    },
                    {
                        "name": "武平县"
                    },
                    {
                        "name": "上杭县"
                    },
                    {
                        "name": "永定县"
                    },
                    {
                        "name": "连城县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宁德",
                "sub": [
                    {
                        "name": "蕉城区"
                    },
                    {
                        "name": "福安市"
                    },
                    {
                        "name": "福鼎市"
                    },
                    {
                        "name": "寿宁县"
                    },
                    {
                        "name": "霞浦县"
                    },
                    {
                        "name": "柘荣县"
                    },
                    {
                        "name": "屏南县"
                    },
                    {
                        "name": "古田县"
                    },
                    {
                        "name": "周宁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "湖南",
        "sub": [
            {
                "name": "长沙",
                "sub": [
                    {
                        "name": "岳麓区"
                    },
                    {
                        "name": "芙蓉区"
                    },
                    {
                        "name": "天心区"
                    },
                    {
                        "name": "开福区"
                    },
                    {
                        "name": "雨花区"
                    },
                    {
                        "name": "浏阳市"
                    },
                    {
                        "name": "长沙县"
                    },
                    {
                        "name": "望城县"
                    },
                    {
                        "name": "宁乡县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "株洲",
                "sub": [
                    {
                        "name": "天元区"
                    },
                    {
                        "name": "荷塘区"
                    },
                    {
                        "name": "芦淞区"
                    },
                    {
                        "name": "石峰区"
                    },
                    {
                        "name": "醴陵市"
                    },
                    {
                        "name": "株洲县"
                    },
                    {
                        "name": "炎陵县"
                    },
                    {
                        "name": "茶陵县"
                    },
                    {
                        "name": "攸县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "湘潭",
                "sub": [
                    {
                        "name": "岳塘区"
                    },
                    {
                        "name": "雨湖区"
                    },
                    {
                        "name": "湘乡市"
                    },
                    {
                        "name": "韶山市"
                    },
                    {
                        "name": "湘潭县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "衡阳",
                "sub": [
                    {
                        "name": "雁峰区"
                    },
                    {
                        "name": "珠晖区"
                    },
                    {
                        "name": "石鼓区"
                    },
                    {
                        "name": "蒸湘区"
                    },
                    {
                        "name": "南岳区"
                    },
                    {
                        "name": "耒阳市"
                    },
                    {
                        "name": "常宁市"
                    },
                    {
                        "name": "衡阳县"
                    },
                    {
                        "name": "衡东县"
                    },
                    {
                        "name": "衡山县"
                    },
                    {
                        "name": "衡南县"
                    },
                    {
                        "name": "祁东县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "邵阳",
                "sub": [
                    {
                        "name": "双清区"
                    },
                    {
                        "name": "大祥区"
                    },
                    {
                        "name": "北塔区"
                    },
                    {
                        "name": "武冈市"
                    },
                    {
                        "name": "邵东县"
                    },
                    {
                        "name": "洞口县"
                    },
                    {
                        "name": "新邵县"
                    },
                    {
                        "name": "绥宁县"
                    },
                    {
                        "name": "新宁县"
                    },
                    {
                        "name": "邵阳县"
                    },
                    {
                        "name": "隆回县"
                    },
                    {
                        "name": "城步苗族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "岳阳",
                "sub": [
                    {
                        "name": "岳阳楼区"
                    },
                    {
                        "name": "云溪区"
                    },
                    {
                        "name": "君山区"
                    },
                    {
                        "name": "临湘市"
                    },
                    {
                        "name": "汨罗市"
                    },
                    {
                        "name": "岳阳县"
                    },
                    {
                        "name": "湘阴县"
                    },
                    {
                        "name": "平江县"
                    },
                    {
                        "name": "华容县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "常德",
                "sub": [
                    {
                        "name": "武陵区"
                    },
                    {
                        "name": "鼎城区"
                    },
                    {
                        "name": "津市市"
                    },
                    {
                        "name": "澧县"
                    },
                    {
                        "name": "临澧县"
                    },
                    {
                        "name": "桃源县"
                    },
                    {
                        "name": "汉寿县"
                    },
                    {
                        "name": "安乡县"
                    },
                    {
                        "name": "石门县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "张家界",
                "sub": [
                    {
                        "name": "永定区"
                    },
                    {
                        "name": "武陵源区"
                    },
                    {
                        "name": "慈利县"
                    },
                    {
                        "name": "桑植县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "益阳",
                "sub": [
                    {
                        "name": "赫山区"
                    },
                    {
                        "name": "资阳区"
                    },
                    {
                        "name": "沅江市"
                    },
                    {
                        "name": "桃江县"
                    },
                    {
                        "name": "南县"
                    },
                    {
                        "name": "安化县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "郴州",
                "sub": [
                    {
                        "name": "北湖区"
                    },
                    {
                        "name": "苏仙区"
                    },
                    {
                        "name": "资兴市"
                    },
                    {
                        "name": "宜章县"
                    },
                    {
                        "name": "汝城县"
                    },
                    {
                        "name": "安仁县"
                    },
                    {
                        "name": "嘉禾县"
                    },
                    {
                        "name": "临武县"
                    },
                    {
                        "name": "桂东县"
                    },
                    {
                        "name": "永兴县"
                    },
                    {
                        "name": "桂阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "永州",
                "sub": [
                    {
                        "name": "冷水滩区"
                    },
                    {
                        "name": "零陵区"
                    },
                    {
                        "name": "祁阳县"
                    },
                    {
                        "name": "蓝山县"
                    },
                    {
                        "name": "宁远县"
                    },
                    {
                        "name": "新田县"
                    },
                    {
                        "name": "东安县"
                    },
                    {
                        "name": "江永县"
                    },
                    {
                        "name": "道县"
                    },
                    {
                        "name": "双牌县"
                    },
                    {
                        "name": "江华瑶族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "怀化",
                "sub": [
                    {
                        "name": "鹤城区"
                    },
                    {
                        "name": "洪江市"
                    },
                    {
                        "name": "会同县"
                    },
                    {
                        "name": "沅陵县"
                    },
                    {
                        "name": "辰溪县"
                    },
                    {
                        "name": "溆浦县"
                    },
                    {
                        "name": "中方县"
                    },
                    {
                        "name": "新晃侗族自治县"
                    },
                    {
                        "name": "芷江侗族自治县"
                    },
                    {
                        "name": "通道侗族自治县"
                    },
                    {
                        "name": "靖州苗族侗族自治县"
                    },
                    {
                        "name": "麻阳苗族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "娄底",
                "sub": [
                    {
                        "name": "娄星区"
                    },
                    {
                        "name": "冷水江市"
                    },
                    {
                        "name": "涟源市"
                    },
                    {
                        "name": "新化县"
                    },
                    {
                        "name": "双峰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "湘西土家族苗族自治州",
                "sub": [
                    {
                        "name": "吉首市"
                    },
                    {
                        "name": "古丈县"
                    },
                    {
                        "name": "龙山县"
                    },
                    {
                        "name": "永顺县"
                    },
                    {
                        "name": "凤凰县"
                    },
                    {
                        "name": "泸溪县"
                    },
                    {
                        "name": "保靖县"
                    },
                    {
                        "name": "花垣县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "广西",
        "sub": [
            {
                "name": "南宁",
                "sub": [
                    {
                        "name": "青秀区"
                    },
                    {
                        "name": "兴宁区"
                    },
                    {
                        "name": "西乡塘区"
                    },
                    {
                        "name": "良庆区"
                    },
                    {
                        "name": "江南区"
                    },
                    {
                        "name": "邕宁区"
                    },
                    {
                        "name": "武鸣县"
                    },
                    {
                        "name": "隆安县"
                    },
                    {
                        "name": "马山县"
                    },
                    {
                        "name": "上林县"
                    },
                    {
                        "name": "宾阳县"
                    },
                    {
                        "name": "横县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "柳州",
                "sub": [
                    {
                        "name": "城中区"
                    },
                    {
                        "name": "鱼峰区"
                    },
                    {
                        "name": "柳北区"
                    },
                    {
                        "name": "柳南区"
                    },
                    {
                        "name": "柳江县"
                    },
                    {
                        "name": "柳城县"
                    },
                    {
                        "name": "鹿寨县"
                    },
                    {
                        "name": "融安县"
                    },
                    {
                        "name": "融水苗族自治县"
                    },
                    {
                        "name": "三江侗族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "桂林",
                "sub": [
                    {
                        "name": "象山区"
                    },
                    {
                        "name": "秀峰区"
                    },
                    {
                        "name": "叠彩区"
                    },
                    {
                        "name": "七星区"
                    },
                    {
                        "name": "雁山区"
                    },
                    {
                        "name": "阳朔县"
                    },
                    {
                        "name": "临桂县"
                    },
                    {
                        "name": "灵川县"
                    },
                    {
                        "name": "全州县"
                    },
                    {
                        "name": "平乐县"
                    },
                    {
                        "name": "兴安县"
                    },
                    {
                        "name": "灌阳县"
                    },
                    {
                        "name": "荔浦县"
                    },
                    {
                        "name": "资源县"
                    },
                    {
                        "name": "永福县"
                    },
                    {
                        "name": "龙胜各族自治县"
                    },
                    {
                        "name": "恭城瑶族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "梧州",
                "sub": [
                    {
                        "name": "万秀区"
                    },
                    {
                        "name": "蝶山区"
                    },
                    {
                        "name": "长洲区"
                    },
                    {
                        "name": "岑溪市"
                    },
                    {
                        "name": "苍梧县"
                    },
                    {
                        "name": "藤县"
                    },
                    {
                        "name": "蒙山县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "北海",
                "sub": [
                    {
                        "name": "海城区"
                    },
                    {
                        "name": "银海区"
                    },
                    {
                        "name": "铁山港区"
                    },
                    {
                        "name": "合浦县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "防城港",
                "sub": [
                    {
                        "name": "港口区"
                    },
                    {
                        "name": "防城区"
                    },
                    {
                        "name": "东兴市"
                    },
                    {
                        "name": "上思县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "钦州",
                "sub": [
                    {
                        "name": "钦南区"
                    },
                    {
                        "name": "钦北区"
                    },
                    {
                        "name": "灵山县"
                    },
                    {
                        "name": "浦北县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "贵港",
                "sub": [
                    {
                        "name": "港北区"
                    },
                    {
                        "name": "港南区"
                    },
                    {
                        "name": "覃塘区"
                    },
                    {
                        "name": "桂平市"
                    },
                    {
                        "name": "平南县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "玉林",
                "sub": [
                    {
                        "name": "玉州区"
                    },
                    {
                        "name": "北流市"
                    },
                    {
                        "name": "容县"
                    },
                    {
                        "name": "陆川县"
                    },
                    {
                        "name": "博白县"
                    },
                    {
                        "name": "兴业县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "百色",
                "sub": [
                    {
                        "name": "右江区"
                    },
                    {
                        "name": "凌云县"
                    },
                    {
                        "name": "平果县"
                    },
                    {
                        "name": "西林县"
                    },
                    {
                        "name": "乐业县"
                    },
                    {
                        "name": "德保县"
                    },
                    {
                        "name": "田林县"
                    },
                    {
                        "name": "田阳县"
                    },
                    {
                        "name": "靖西县"
                    },
                    {
                        "name": "田东县"
                    },
                    {
                        "name": "那坡县"
                    },
                    {
                        "name": "隆林各族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "贺州",
                "sub": [
                    {
                        "name": "八步区"
                    },
                    {
                        "name": "钟山县"
                    },
                    {
                        "name": "昭平县"
                    },
                    {
                        "name": "富川瑶族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "河池",
                "sub": [
                    {
                        "name": "金城江区"
                    },
                    {
                        "name": "宜州市"
                    },
                    {
                        "name": "天峨县"
                    },
                    {
                        "name": "凤山县"
                    },
                    {
                        "name": "南丹县"
                    },
                    {
                        "name": "东兰县"
                    },
                    {
                        "name": "都安瑶族自治县"
                    },
                    {
                        "name": "罗城仫佬族自治县"
                    },
                    {
                        "name": "巴马瑶族自治县"
                    },
                    {
                        "name": "环江毛南族自治县"
                    },
                    {
                        "name": "大化瑶族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "来宾",
                "sub": [
                    {
                        "name": "兴宾区"
                    },
                    {
                        "name": "合山市"
                    },
                    {
                        "name": "象州县"
                    },
                    {
                        "name": "武宣县"
                    },
                    {
                        "name": "忻城县"
                    },
                    {
                        "name": "金秀瑶族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "崇左",
                "sub": [
                    {
                        "name": "江州区"
                    },
                    {
                        "name": "凭祥市"
                    },
                    {
                        "name": "宁明县"
                    },
                    {
                        "name": "扶绥县"
                    },
                    {
                        "name": "龙州县"
                    },
                    {
                        "name": "大新县"
                    },
                    {
                        "name": "天等县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "江西",
        "sub": [
            {
                "name": "南昌",
                "sub": [
                    {
                        "name": "东湖区"
                    },
                    {
                        "name": "西湖区"
                    },
                    {
                        "name": "青云谱区"
                    },
                    {
                        "name": "湾里区"
                    },
                    {
                        "name": "青山湖区"
                    },
                    {
                        "name": "新建县"
                    },
                    {
                        "name": "南昌县"
                    },
                    {
                        "name": "进贤县"
                    },
                    {
                        "name": "安义县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "景德镇",
                "sub": [
                    {
                        "name": "珠山区"
                    },
                    {
                        "name": "昌江区"
                    },
                    {
                        "name": "乐平市"
                    },
                    {
                        "name": "浮梁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "萍乡",
                "sub": [
                    {
                        "name": "安源区"
                    },
                    {
                        "name": "湘东区"
                    },
                    {
                        "name": "莲花县"
                    },
                    {
                        "name": "上栗县"
                    },
                    {
                        "name": "芦溪县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "九江",
                "sub": [
                    {
                        "name": "浔阳区"
                    },
                    {
                        "name": "庐山区"
                    },
                    {
                        "name": "瑞昌市"
                    },
                    {
                        "name": "九江县"
                    },
                    {
                        "name": "星子县"
                    },
                    {
                        "name": "武宁县"
                    },
                    {
                        "name": "彭泽县"
                    },
                    {
                        "name": "永修县"
                    },
                    {
                        "name": "修水县"
                    },
                    {
                        "name": "湖口县"
                    },
                    {
                        "name": "德安县"
                    },
                    {
                        "name": "都昌县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "新余",
                "sub": [
                    {
                        "name": "渝水区"
                    },
                    {
                        "name": "分宜县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "鹰潭",
                "sub": [
                    {
                        "name": "月湖区"
                    },
                    {
                        "name": "贵溪市"
                    },
                    {
                        "name": "余江县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "赣州",
                "sub": [
                    {
                        "name": "章贡区"
                    },
                    {
                        "name": "瑞金市"
                    },
                    {
                        "name": "南康市"
                    },
                    {
                        "name": "石城县"
                    },
                    {
                        "name": "安远县"
                    },
                    {
                        "name": "赣县"
                    },
                    {
                        "name": "宁都县"
                    },
                    {
                        "name": "寻乌县"
                    },
                    {
                        "name": "兴国县"
                    },
                    {
                        "name": "定南县"
                    },
                    {
                        "name": "上犹县"
                    },
                    {
                        "name": "于都县"
                    },
                    {
                        "name": "龙南县"
                    },
                    {
                        "name": "崇义县"
                    },
                    {
                        "name": "信丰县"
                    },
                    {
                        "name": "全南县"
                    },
                    {
                        "name": "大余县"
                    },
                    {
                        "name": "会昌县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "吉安",
                "sub": [
                    {
                        "name": "吉州区"
                    },
                    {
                        "name": "青原区"
                    },
                    {
                        "name": "井冈山市"
                    },
                    {
                        "name": "吉安县"
                    },
                    {
                        "name": "永丰县"
                    },
                    {
                        "name": "永新县"
                    },
                    {
                        "name": "新干县"
                    },
                    {
                        "name": "泰和县"
                    },
                    {
                        "name": "峡江县"
                    },
                    {
                        "name": "遂川县"
                    },
                    {
                        "name": "安福县"
                    },
                    {
                        "name": "吉水县"
                    },
                    {
                        "name": "万安县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "宜春",
                "sub": [
                    {
                        "name": "袁州区"
                    },
                    {
                        "name": "丰城市"
                    },
                    {
                        "name": "樟树市"
                    },
                    {
                        "name": "高安市"
                    },
                    {
                        "name": "铜鼓县"
                    },
                    {
                        "name": "靖安县"
                    },
                    {
                        "name": "宜丰县"
                    },
                    {
                        "name": "奉新县"
                    },
                    {
                        "name": "万载县"
                    },
                    {
                        "name": "上高县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "抚州",
                "sub": [
                    {
                        "name": "临川区"
                    },
                    {
                        "name": "南丰县"
                    },
                    {
                        "name": "乐安县"
                    },
                    {
                        "name": "金溪县"
                    },
                    {
                        "name": "南城县"
                    },
                    {
                        "name": "东乡县"
                    },
                    {
                        "name": "资溪县"
                    },
                    {
                        "name": "宜黄县"
                    },
                    {
                        "name": "广昌县"
                    },
                    {
                        "name": "黎川县"
                    },
                    {
                        "name": "崇仁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "上饶",
                "sub": [
                    {
                        "name": "信州区"
                    },
                    {
                        "name": "德兴市"
                    },
                    {
                        "name": "上饶县"
                    },
                    {
                        "name": "广丰县"
                    },
                    {
                        "name": "鄱阳县"
                    },
                    {
                        "name": "婺源县"
                    },
                    {
                        "name": "铅山县"
                    },
                    {
                        "name": "余干县"
                    },
                    {
                        "name": "横峰县"
                    },
                    {
                        "name": "弋阳县"
                    },
                    {
                        "name": "玉山县"
                    },
                    {
                        "name": "万年县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "贵州",
        "sub": [
            {
                "name": "贵阳",
                "sub": [
                    {
                        "name": "南明区"
                    },
                    {
                        "name": "云岩区"
                    },
                    {
                        "name": "花溪区"
                    },
                    {
                        "name": "乌当区"
                    },
                    {
                        "name": "白云区"
                    },
                    {
                        "name": "小河区"
                    },
                    {
                        "name": "清镇市"
                    },
                    {
                        "name": "开阳县"
                    },
                    {
                        "name": "修文县"
                    },
                    {
                        "name": "息烽县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "六盘水",
                "sub": [
                    {
                        "name": "钟山区"
                    },
                    {
                        "name": "水城县"
                    },
                    {
                        "name": "盘县"
                    },
                    {
                        "name": "六枝特区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "遵义",
                "sub": [
                    {
                        "name": "红花岗区"
                    },
                    {
                        "name": "汇川区"
                    },
                    {
                        "name": "赤水市"
                    },
                    {
                        "name": "仁怀市"
                    },
                    {
                        "name": "遵义县"
                    },
                    {
                        "name": "绥阳县"
                    },
                    {
                        "name": "桐梓县"
                    },
                    {
                        "name": "习水县"
                    },
                    {
                        "name": "凤冈县"
                    },
                    {
                        "name": "正安县"
                    },
                    {
                        "name": "余庆县"
                    },
                    {
                        "name": "湄潭县"
                    },
                    {
                        "name": "道真仡佬族苗族自治县"
                    },
                    {
                        "name": "务川仡佬族苗族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "安顺",
                "sub": [
                    {
                        "name": "西秀区"
                    },
                    {
                        "name": "普定县"
                    },
                    {
                        "name": "平坝县"
                    },
                    {
                        "name": "镇宁布依族苗族自治县"
                    },
                    {
                        "name": "紫云苗族布依族自治县"
                    },
                    {
                        "name": "关岭布依族苗族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "铜仁地区",
                "sub": [
                    {
                        "name": "铜仁市"
                    },
                    {
                        "name": "德江县"
                    },
                    {
                        "name": "江口县"
                    },
                    {
                        "name": "思南县"
                    },
                    {
                        "name": "石阡县"
                    },
                    {
                        "name": "玉屏侗族自治县"
                    },
                    {
                        "name": "松桃苗族自治县"
                    },
                    {
                        "name": "印江土家族苗族自治县"
                    },
                    {
                        "name": "沿河土家族自治县"
                    },
                    {
                        "name": "万山特区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "毕节地区",
                "sub": [
                    {
                        "name": "毕节市"
                    },
                    {
                        "name": "黔西县"
                    },
                    {
                        "name": "大方县"
                    },
                    {
                        "name": "织金县"
                    },
                    {
                        "name": "金沙县"
                    },
                    {
                        "name": "赫章县"
                    },
                    {
                        "name": "纳雍县"
                    },
                    {
                        "name": "威宁彝族回族苗族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黔西南布依族苗族自治州",
                "sub": [
                    {
                        "name": "兴义市"
                    },
                    {
                        "name": "望谟县"
                    },
                    {
                        "name": "兴仁县"
                    },
                    {
                        "name": "普安县"
                    },
                    {
                        "name": "册亨县"
                    },
                    {
                        "name": "晴隆县"
                    },
                    {
                        "name": "贞丰县"
                    },
                    {
                        "name": "安龙县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黔东南苗族侗族自治州",
                "sub": [
                    {
                        "name": "凯里市"
                    },
                    {
                        "name": "施秉县"
                    },
                    {
                        "name": "从江县"
                    },
                    {
                        "name": "锦屏县"
                    },
                    {
                        "name": "镇远县"
                    },
                    {
                        "name": "麻江县"
                    },
                    {
                        "name": "台江县"
                    },
                    {
                        "name": "天柱县"
                    },
                    {
                        "name": "黄平县"
                    },
                    {
                        "name": "榕江县"
                    },
                    {
                        "name": "剑河县"
                    },
                    {
                        "name": "三穗县"
                    },
                    {
                        "name": "雷山县"
                    },
                    {
                        "name": "黎平县"
                    },
                    {
                        "name": "岑巩县"
                    },
                    {
                        "name": "丹寨县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黔南布依族苗族自治州",
                "sub": [
                    {
                        "name": "都匀市"
                    },
                    {
                        "name": "福泉市"
                    },
                    {
                        "name": "贵定县"
                    },
                    {
                        "name": "惠水县"
                    },
                    {
                        "name": "罗甸县"
                    },
                    {
                        "name": "瓮安县"
                    },
                    {
                        "name": "荔波县"
                    },
                    {
                        "name": "龙里县"
                    },
                    {
                        "name": "平塘县"
                    },
                    {
                        "name": "长顺县"
                    },
                    {
                        "name": "独山县"
                    },
                    {
                        "name": "三都水族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "云南",
        "sub": [
            {
                "name": "昆明",
                "sub": [
                    {
                        "name": "盘龙区"
                    },
                    {
                        "name": "五华区"
                    },
                    {
                        "name": "官渡区"
                    },
                    {
                        "name": "西山区"
                    },
                    {
                        "name": "东川区"
                    },
                    {
                        "name": "安宁市"
                    },
                    {
                        "name": "呈贡县"
                    },
                    {
                        "name": "晋宁县"
                    },
                    {
                        "name": "富民县"
                    },
                    {
                        "name": "宜良县"
                    },
                    {
                        "name": "嵩明县"
                    },
                    {
                        "name": "石林彝族自治县"
                    },
                    {
                        "name": "禄劝彝族苗族自治县"
                    },
                    {
                        "name": "寻甸回族彝族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "曲靖",
                "sub": [
                    {
                        "name": "麒麟区"
                    },
                    {
                        "name": "宣威市"
                    },
                    {
                        "name": "马龙县"
                    },
                    {
                        "name": "沾益县"
                    },
                    {
                        "name": "富源县"
                    },
                    {
                        "name": "罗平县"
                    },
                    {
                        "name": "师宗县"
                    },
                    {
                        "name": "陆良县"
                    },
                    {
                        "name": "会泽县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "玉溪",
                "sub": [
                    {
                        "name": "红塔区"
                    },
                    {
                        "name": "江川县"
                    },
                    {
                        "name": "澄江县"
                    },
                    {
                        "name": "通海县"
                    },
                    {
                        "name": "华宁县"
                    },
                    {
                        "name": "易门县"
                    },
                    {
                        "name": "峨山彝族自治县"
                    },
                    {
                        "name": "新平彝族傣族自治县"
                    },
                    {
                        "name": "元江哈尼族彝族傣族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "保山",
                "sub": [
                    {
                        "name": "隆阳区"
                    },
                    {
                        "name": "施甸县"
                    },
                    {
                        "name": "腾冲县"
                    },
                    {
                        "name": "龙陵县"
                    },
                    {
                        "name": "昌宁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "昭通",
                "sub": [
                    {
                        "name": "昭阳区"
                    },
                    {
                        "name": "鲁甸县"
                    },
                    {
                        "name": "巧家县"
                    },
                    {
                        "name": "盐津县"
                    },
                    {
                        "name": "大关县"
                    },
                    {
                        "name": "永善县"
                    },
                    {
                        "name": "绥江县"
                    },
                    {
                        "name": "镇雄县"
                    },
                    {
                        "name": "彝良县"
                    },
                    {
                        "name": "威信县"
                    },
                    {
                        "name": "水富县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "丽江",
                "sub": [
                    {
                        "name": "古城区"
                    },
                    {
                        "name": "永胜县"
                    },
                    {
                        "name": "华坪县"
                    },
                    {
                        "name": "玉龙纳西族自治县"
                    },
                    {
                        "name": "宁蒗彝族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "普洱",
                "sub": [
                    {
                        "name": "思茅区"
                    },
                    {
                        "name": "普洱哈尼族彝族自治县"
                    },
                    {
                        "name": "墨江哈尼族自治县"
                    },
                    {
                        "name": "景东彝族自治县"
                    },
                    {
                        "name": "景谷傣族彝族自治县"
                    },
                    {
                        "name": "镇沅彝族哈尼族拉祜族自治县"
                    },
                    {
                        "name": "江城哈尼族彝族自治县"
                    },
                    {
                        "name": "孟连傣族拉祜族佤族自治县"
                    },
                    {
                        "name": "澜沧拉祜族自治县"
                    },
                    {
                        "name": "西盟佤族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "临沧",
                "sub": [
                    {
                        "name": "临翔区"
                    },
                    {
                        "name": "凤庆县"
                    },
                    {
                        "name": "云县"
                    },
                    {
                        "name": "永德县"
                    },
                    {
                        "name": "镇康县"
                    },
                    {
                        "name": "双江拉祜族佤族布朗族傣族自治县"
                    },
                    {
                        "name": "耿马傣族佤族自治县"
                    },
                    {
                        "name": "沧源佤族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "德宏傣族景颇族自治州",
                "sub": [
                    {
                        "name": "潞西市"
                    },
                    {
                        "name": "瑞丽市"
                    },
                    {
                        "name": "梁河县"
                    },
                    {
                        "name": "盈江县"
                    },
                    {
                        "name": "陇川县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "怒江傈僳族自治州",
                "sub": [
                    {
                        "name": "泸水县"
                    },
                    {
                        "name": "福贡县"
                    },
                    {
                        "name": "贡山独龙族怒族自治县"
                    },
                    {
                        "name": "兰坪白族普米族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "迪庆藏族自治州",
                "sub": [
                    {
                        "name": "香格里拉县"
                    },
                    {
                        "name": "德钦县"
                    },
                    {
                        "name": "维西傈僳族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "大理白族自治州",
                "sub": [
                    {
                        "name": "大理市"
                    },
                    {
                        "name": "祥云县"
                    },
                    {
                        "name": "宾川县"
                    },
                    {
                        "name": "弥渡县"
                    },
                    {
                        "name": "永平县"
                    },
                    {
                        "name": "云龙县"
                    },
                    {
                        "name": "洱源县"
                    },
                    {
                        "name": "剑川县"
                    },
                    {
                        "name": "鹤庆县"
                    },
                    {
                        "name": "漾濞彝族自治县"
                    },
                    {
                        "name": "南涧彝族自治县"
                    },
                    {
                        "name": "巍山彝族回族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "楚雄彝族自治州",
                "sub": [
                    {
                        "name": "楚雄市"
                    },
                    {
                        "name": "双柏县"
                    },
                    {
                        "name": "牟定县"
                    },
                    {
                        "name": "南华县"
                    },
                    {
                        "name": "姚安县"
                    },
                    {
                        "name": "大姚县"
                    },
                    {
                        "name": "永仁县"
                    },
                    {
                        "name": "元谋县"
                    },
                    {
                        "name": "武定县"
                    },
                    {
                        "name": "禄丰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "红河哈尼族彝族自治州",
                "sub": [
                    {
                        "name": "蒙自县"
                    },
                    {
                        "name": "个旧市"
                    },
                    {
                        "name": "开远市"
                    },
                    {
                        "name": "绿春县"
                    },
                    {
                        "name": "建水县"
                    },
                    {
                        "name": "石屏县"
                    },
                    {
                        "name": "弥勒县"
                    },
                    {
                        "name": "泸西县"
                    },
                    {
                        "name": "元阳县"
                    },
                    {
                        "name": "红河县"
                    },
                    {
                        "name": "金平苗族瑶族傣族自治县"
                    },
                    {
                        "name": "河口瑶族自治县"
                    },
                    {
                        "name": "屏边苗族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "文山壮族苗族自治州",
                "sub": [
                    {
                        "name": "文山县"
                    },
                    {
                        "name": "砚山县"
                    },
                    {
                        "name": "西畴县"
                    },
                    {
                        "name": "麻栗坡县"
                    },
                    {
                        "name": "马关县"
                    },
                    {
                        "name": "丘北县"
                    },
                    {
                        "name": "广南县"
                    },
                    {
                        "name": "富宁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "西双版纳傣族自治州",
                "sub": [
                    {
                        "name": "景洪市"
                    },
                    {
                        "name": "勐海县"
                    },
                    {
                        "name": "勐腊县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "西藏",
        "sub": [
            {
                "name": "拉萨",
                "sub": [
                    {
                        "name": "城关区"
                    },
                    {
                        "name": "林周县"
                    },
                    {
                        "name": "当雄县"
                    },
                    {
                        "name": "尼木县"
                    },
                    {
                        "name": "曲水县"
                    },
                    {
                        "name": "堆龙德庆县"
                    },
                    {
                        "name": "达孜县"
                    },
                    {
                        "name": "墨竹工卡县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "那曲地区",
                "sub": [
                    {
                        "name": "那曲县"
                    },
                    {
                        "name": "嘉黎县"
                    },
                    {
                        "name": "比如县"
                    },
                    {
                        "name": "聂荣县"
                    },
                    {
                        "name": "安多县"
                    },
                    {
                        "name": "申扎县"
                    },
                    {
                        "name": "索县"
                    },
                    {
                        "name": "班戈县"
                    },
                    {
                        "name": "巴青县"
                    },
                    {
                        "name": "尼玛县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "昌都地区",
                "sub": [
                    {
                        "name": "昌都县"
                    },
                    {
                        "name": "江达县"
                    },
                    {
                        "name": "贡觉县"
                    },
                    {
                        "name": "类乌齐县"
                    },
                    {
                        "name": "丁青县"
                    },
                    {
                        "name": "察雅县"
                    },
                    {
                        "name": "八宿县"
                    },
                    {
                        "name": "左贡县"
                    },
                    {
                        "name": "芒康县"
                    },
                    {
                        "name": "洛隆县"
                    },
                    {
                        "name": "边坝县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "林芝地区",
                "sub": [
                    {
                        "name": "林芝县"
                    },
                    {
                        "name": "工布江达县"
                    },
                    {
                        "name": "米林县"
                    },
                    {
                        "name": "墨脱县"
                    },
                    {
                        "name": "波密县"
                    },
                    {
                        "name": "察隅县"
                    },
                    {
                        "name": "朗县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "山南地区",
                "sub": [
                    {
                        "name": "乃东县"
                    },
                    {
                        "name": "扎囊县"
                    },
                    {
                        "name": "贡嘎县"
                    },
                    {
                        "name": "桑日县"
                    },
                    {
                        "name": "琼结县"
                    },
                    {
                        "name": "曲松县"
                    },
                    {
                        "name": "措美县"
                    },
                    {
                        "name": "洛扎县"
                    },
                    {
                        "name": "加查县"
                    },
                    {
                        "name": "隆子县"
                    },
                    {
                        "name": "错那县"
                    },
                    {
                        "name": "浪卡子县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "日喀则地区",
                "sub": [
                    {
                        "name": "日喀则市"
                    },
                    {
                        "name": "南木林县"
                    },
                    {
                        "name": "江孜县"
                    },
                    {
                        "name": "定日县"
                    },
                    {
                        "name": "萨迦县"
                    },
                    {
                        "name": "拉孜县"
                    },
                    {
                        "name": "昂仁县"
                    },
                    {
                        "name": "谢通门县"
                    },
                    {
                        "name": "白朗县"
                    },
                    {
                        "name": "仁布县"
                    },
                    {
                        "name": "康马县"
                    },
                    {
                        "name": "定结县"
                    },
                    {
                        "name": "仲巴县"
                    },
                    {
                        "name": "亚东县"
                    },
                    {
                        "name": "吉隆县"
                    },
                    {
                        "name": "聂拉木县"
                    },
                    {
                        "name": "萨嘎县"
                    },
                    {
                        "name": "岗巴县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阿里地区",
                "sub": [
                    {
                        "name": "噶尔县"
                    },
                    {
                        "name": "普兰县"
                    },
                    {
                        "name": "札达县"
                    },
                    {
                        "name": "日土县"
                    },
                    {
                        "name": "革吉县"
                    },
                    {
                        "name": "改则县"
                    },
                    {
                        "name": "措勤县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "海南",
        "sub": [
            {
                "name": "海口",
                "sub": [
                    {
                        "name": "龙华区"
                    },
                    {
                        "name": "秀英区"
                    },
                    {
                        "name": "琼山区"
                    },
                    {
                        "name": "美兰区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "三亚",
                "sub": [
                    {
                        "name": "三亚市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "五指山",
                "sub": [],
                "type": 0
            },
            {
                "name": "琼海",
                "sub": [],
                "type": 0
            },
            {
                "name": "儋州",
                "sub": [],
                "type": 0
            },
            {
                "name": "文昌",
                "sub": [],
                "type": 0
            },
            {
                "name": "万宁",
                "sub": [],
                "type": 0
            },
            {
                "name": "东方",
                "sub": [],
                "type": 0
            },
            {
                "name": "澄迈县",
                "sub": [],
                "type": 0
            },
            {
                "name": "定安县",
                "sub": [],
                "type": 0
            },
            {
                "name": "屯昌县",
                "sub": [],
                "type": 0
            },
            {
                "name": "临高县",
                "sub": [],
                "type": 0
            },
            {
                "name": "白沙黎族自治县",
                "sub": [],
                "type": 0
            },
            {
                "name": "昌江黎族自治县",
                "sub": [],
                "type": 0
            },
            {
                "name": "乐东黎族自治县",
                "sub": [],
                "type": 0
            },
            {
                "name": "陵水黎族自治县",
                "sub": [],
                "type": 0
            },
            {
                "name": "保亭黎族苗族自治县",
                "sub": [],
                "type": 0
            },
            {
                "name": "琼中黎族苗族自治县",
                "sub": [],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "甘肃",
        "sub": [
            {
                "name": "兰州",
                "sub": [
                    {
                        "name": "城关区"
                    },
                    {
                        "name": "七里河区"
                    },
                    {
                        "name": "西固区"
                    },
                    {
                        "name": "安宁区"
                    },
                    {
                        "name": "红古区"
                    },
                    {
                        "name": "永登县"
                    },
                    {
                        "name": "皋兰县"
                    },
                    {
                        "name": "榆中县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "嘉峪关",
                "sub": [
                    {
                        "name": "嘉峪关市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "金昌",
                "sub": [
                    {
                        "name": "金川区"
                    },
                    {
                        "name": "永昌县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "白银",
                "sub": [
                    {
                        "name": "白银区"
                    },
                    {
                        "name": "平川区"
                    },
                    {
                        "name": "靖远县"
                    },
                    {
                        "name": "会宁县"
                    },
                    {
                        "name": "景泰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "天水",
                "sub": [
                    {
                        "name": "清水县"
                    },
                    {
                        "name": "秦安县"
                    },
                    {
                        "name": "甘谷县"
                    },
                    {
                        "name": "武山县"
                    },
                    {
                        "name": "张家川回族自治县"
                    },
                    {
                        "name": "北道区"
                    },
                    {
                        "name": "秦城区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "武威",
                "sub": [
                    {
                        "name": "凉州区"
                    },
                    {
                        "name": "民勤县"
                    },
                    {
                        "name": "古浪县"
                    },
                    {
                        "name": "天祝藏族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "酒泉",
                "sub": [
                    {
                        "name": "肃州区"
                    },
                    {
                        "name": "玉门市"
                    },
                    {
                        "name": "敦煌市"
                    },
                    {
                        "name": "金塔县"
                    },
                    {
                        "name": "肃北蒙古族自治县"
                    },
                    {
                        "name": "阿克塞哈萨克族自治县"
                    },
                    {
                        "name": "安西县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "张掖",
                "sub": [
                    {
                        "name": "甘州区"
                    },
                    {
                        "name": "民乐县"
                    },
                    {
                        "name": "临泽县"
                    },
                    {
                        "name": "高台县"
                    },
                    {
                        "name": "山丹县"
                    },
                    {
                        "name": "肃南裕固族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "庆阳",
                "sub": [
                    {
                        "name": "西峰区"
                    },
                    {
                        "name": "庆城县"
                    },
                    {
                        "name": "环县"
                    },
                    {
                        "name": "华池县"
                    },
                    {
                        "name": "合水县"
                    },
                    {
                        "name": "正宁县"
                    },
                    {
                        "name": "宁县"
                    },
                    {
                        "name": "镇原县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "平凉",
                "sub": [
                    {
                        "name": "崆峒区"
                    },
                    {
                        "name": "泾川县"
                    },
                    {
                        "name": "灵台县"
                    },
                    {
                        "name": "崇信县"
                    },
                    {
                        "name": "华亭县"
                    },
                    {
                        "name": "庄浪县"
                    },
                    {
                        "name": "静宁县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "定西",
                "sub": [
                    {
                        "name": "安定区"
                    },
                    {
                        "name": "通渭县"
                    },
                    {
                        "name": "临洮县"
                    },
                    {
                        "name": "漳县"
                    },
                    {
                        "name": "岷县"
                    },
                    {
                        "name": "渭源县"
                    },
                    {
                        "name": "陇西县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "陇南",
                "sub": [
                    {
                        "name": "武都区"
                    },
                    {
                        "name": "成县"
                    },
                    {
                        "name": "宕昌县"
                    },
                    {
                        "name": "康县"
                    },
                    {
                        "name": "文县"
                    },
                    {
                        "name": "西和县"
                    },
                    {
                        "name": "礼县"
                    },
                    {
                        "name": "两当县"
                    },
                    {
                        "name": "徽县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "临夏回族自治州",
                "sub": [
                    {
                        "name": "临夏市"
                    },
                    {
                        "name": "临夏县"
                    },
                    {
                        "name": "康乐县"
                    },
                    {
                        "name": "永靖县"
                    },
                    {
                        "name": "广河县"
                    },
                    {
                        "name": "和政县"
                    },
                    {
                        "name": "东乡族自治县"
                    },
                    {
                        "name": "积石山保安族东乡族撒拉族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "甘南藏族自治州",
                "sub": [
                    {
                        "name": "合作市"
                    },
                    {
                        "name": "临潭县"
                    },
                    {
                        "name": "卓尼县"
                    },
                    {
                        "name": "舟曲县"
                    },
                    {
                        "name": "迭部县"
                    },
                    {
                        "name": "玛曲县"
                    },
                    {
                        "name": "碌曲县"
                    },
                    {
                        "name": "夏河县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "宁夏",
        "sub": [
            {
                "name": "银川",
                "sub": [
                    {
                        "name": "兴庆区"
                    },
                    {
                        "name": "西夏区"
                    },
                    {
                        "name": "金凤区"
                    },
                    {
                        "name": "灵武市"
                    },
                    {
                        "name": "永宁县"
                    },
                    {
                        "name": "贺兰县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "石嘴山",
                "sub": [
                    {
                        "name": "大武口区"
                    },
                    {
                        "name": "惠农区"
                    },
                    {
                        "name": "平罗县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "吴忠",
                "sub": [
                    {
                        "name": "利通区"
                    },
                    {
                        "name": "青铜峡市"
                    },
                    {
                        "name": "盐池县"
                    },
                    {
                        "name": "同心县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "固原",
                "sub": [
                    {
                        "name": "原州区"
                    },
                    {
                        "name": "西吉县"
                    },
                    {
                        "name": "隆德县"
                    },
                    {
                        "name": "泾源县"
                    },
                    {
                        "name": "彭阳县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "中卫",
                "sub": [
                    {
                        "name": "沙坡头区"
                    },
                    {
                        "name": "中宁县"
                    },
                    {
                        "name": "海原县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "青海",
        "sub": [
            {
                "name": "西宁",
                "sub": [
                    {
                        "name": "城中区"
                    },
                    {
                        "name": "城东区"
                    },
                    {
                        "name": "城西区"
                    },
                    {
                        "name": "城北区"
                    },
                    {
                        "name": "湟源县"
                    },
                    {
                        "name": "湟中县"
                    },
                    {
                        "name": "大通回族土族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "海东地区",
                "sub": [
                    {
                        "name": "平安县"
                    },
                    {
                        "name": "乐都县"
                    },
                    {
                        "name": "民和回族土族自治县"
                    },
                    {
                        "name": "互助土族自治县"
                    },
                    {
                        "name": "化隆回族自治县"
                    },
                    {
                        "name": "循化撒拉族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "海北藏族自治州",
                "sub": [
                    {
                        "name": "海晏县"
                    },
                    {
                        "name": "祁连县"
                    },
                    {
                        "name": "刚察县"
                    },
                    {
                        "name": "门源回族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "海南藏族自治州",
                "sub": [
                    {
                        "name": "共和县"
                    },
                    {
                        "name": "同德县"
                    },
                    {
                        "name": "贵德县"
                    },
                    {
                        "name": "兴海县"
                    },
                    {
                        "name": "贵南县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "黄南藏族自治州",
                "sub": [
                    {
                        "name": "同仁县"
                    },
                    {
                        "name": "尖扎县"
                    },
                    {
                        "name": "泽库县"
                    },
                    {
                        "name": "河南蒙古族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "果洛藏族自治州",
                "sub": [
                    {
                        "name": "玛沁县"
                    },
                    {
                        "name": "班玛县"
                    },
                    {
                        "name": "甘德县"
                    },
                    {
                        "name": "达日县"
                    },
                    {
                        "name": "久治县"
                    },
                    {
                        "name": "玛多县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "玉树藏族自治州",
                "sub": [
                    {
                        "name": "玉树县"
                    },
                    {
                        "name": "杂多县"
                    },
                    {
                        "name": "称多县"
                    },
                    {
                        "name": "治多县"
                    },
                    {
                        "name": "囊谦县"
                    },
                    {
                        "name": "曲麻莱县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "海西蒙古族藏族自治州",
                "sub": [
                    {
                        "name": "德令哈市"
                    },
                    {
                        "name": "格尔木市"
                    },
                    {
                        "name": "乌兰县"
                    },
                    {
                        "name": "都兰县"
                    },
                    {
                        "name": "天峻县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "新疆",
        "sub": [
            {
                "name": "乌鲁木齐",
                "sub": [
                    {
                        "name": "天山区"
                    },
                    {
                        "name": "沙依巴克区"
                    },
                    {
                        "name": "新市区"
                    },
                    {
                        "name": "水磨沟区"
                    },
                    {
                        "name": "头屯河区"
                    },
                    {
                        "name": "达坂城区"
                    },
                    {
                        "name": "东山区"
                    },
                    {
                        "name": "乌鲁木齐县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "克拉玛依",
                "sub": [
                    {
                        "name": "克拉玛依区"
                    },
                    {
                        "name": "独山子区"
                    },
                    {
                        "name": "白碱滩区"
                    },
                    {
                        "name": "乌尔禾区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "吐鲁番地区",
                "sub": [
                    {
                        "name": "吐鲁番市"
                    },
                    {
                        "name": "托克逊县"
                    },
                    {
                        "name": "鄯善县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "哈密地区",
                "sub": [
                    {
                        "name": "哈密市"
                    },
                    {
                        "name": "伊吾县"
                    },
                    {
                        "name": "巴里坤哈萨克自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "和田地区",
                "sub": [
                    {
                        "name": "和田市"
                    },
                    {
                        "name": "和田县"
                    },
                    {
                        "name": "洛浦县"
                    },
                    {
                        "name": "民丰县"
                    },
                    {
                        "name": "皮山县"
                    },
                    {
                        "name": "策勒县"
                    },
                    {
                        "name": "于田县"
                    },
                    {
                        "name": "墨玉县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "阿克苏地区",
                "sub": [
                    {
                        "name": "阿克苏市"
                    },
                    {
                        "name": "温宿县"
                    },
                    {
                        "name": "沙雅县"
                    },
                    {
                        "name": "拜城县"
                    },
                    {
                        "name": "阿瓦提县"
                    },
                    {
                        "name": "库车县"
                    },
                    {
                        "name": "柯坪县"
                    },
                    {
                        "name": "新和县"
                    },
                    {
                        "name": "乌什县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "喀什地区",
                "sub": [
                    {
                        "name": "喀什市"
                    },
                    {
                        "name": "巴楚县"
                    },
                    {
                        "name": "泽普县"
                    },
                    {
                        "name": "伽师县"
                    },
                    {
                        "name": "叶城县"
                    },
                    {
                        "name": "岳普湖县"
                    },
                    {
                        "name": "疏勒县"
                    },
                    {
                        "name": "麦盖提县"
                    },
                    {
                        "name": "英吉沙县"
                    },
                    {
                        "name": "莎车县"
                    },
                    {
                        "name": "疏附县"
                    },
                    {
                        "name": "塔什库尔干塔吉克自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "克孜勒苏柯尔克孜自治州",
                "sub": [
                    {
                        "name": "阿图什市"
                    },
                    {
                        "name": "阿合奇县"
                    },
                    {
                        "name": "乌恰县"
                    },
                    {
                        "name": "阿克陶县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "巴音郭楞蒙古自治州",
                "sub": [
                    {
                        "name": "库尔勒市"
                    },
                    {
                        "name": "和静县"
                    },
                    {
                        "name": "尉犁县"
                    },
                    {
                        "name": "和硕县"
                    },
                    {
                        "name": "且末县"
                    },
                    {
                        "name": "博湖县"
                    },
                    {
                        "name": "轮台县"
                    },
                    {
                        "name": "若羌县"
                    },
                    {
                        "name": "焉耆回族自治县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "昌吉回族自治州",
                "sub": [
                    {
                        "name": "昌吉市"
                    },
                    {
                        "name": "阜康市"
                    },
                    {
                        "name": "奇台县"
                    },
                    {
                        "name": "玛纳斯县"
                    },
                    {
                        "name": "吉木萨尔县"
                    },
                    {
                        "name": "呼图壁县"
                    },
                    {
                        "name": "木垒哈萨克自治县"
                    },
                    {
                        "name": "米泉市"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "博尔塔拉蒙古自治州",
                "sub": [
                    {
                        "name": "博乐市"
                    },
                    {
                        "name": "精河县"
                    },
                    {
                        "name": "温泉县"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "石河子",
                "sub": [],
                "type": 0
            },
            {
                "name": "阿拉尔",
                "sub": [],
                "type": 0
            },
            {
                "name": "图木舒克",
                "sub": [],
                "type": 0
            },
            {
                "name": "五家渠",
                "sub": [],
                "type": 0
            },
            {
                "name": "伊犁哈萨克自治州",
                "sub": [
                    {
                        "name": "伊宁市"
                    },
                    {
                        "name": "奎屯市"
                    },
                    {
                        "name": "伊宁县"
                    },
                    {
                        "name": "特克斯县"
                    },
                    {
                        "name": "尼勒克县"
                    },
                    {
                        "name": "昭苏县"
                    },
                    {
                        "name": "新源县"
                    },
                    {
                        "name": "霍城县"
                    },
                    {
                        "name": "巩留县"
                    },
                    {
                        "name": "察布查尔锡伯自治县"
                    },
                    {
                        "name": "塔城地区"
                    },
                    {
                        "name": "阿勒泰地区"
                    },
                    {
                        "name": "其他"
                    }
                ],
                "type": 0
            },
            {
                "name": "其他"
            }
        ],
        "type": 1
    },
    {
        "name": "香港",
        "sub": [
            {
                "name": "中西区"
            },
            {
                "name": "湾仔区"
            },
            {
                "name": "东区"
            },
            {
                "name": "南区"
            },
            {
                "name": "深水埗区"
            },
            {
                "name": "油尖旺区"
            },
            {
                "name": "九龙城区"
            },
            {
                "name": "黄大仙区"
            },
            {
                "name": "观塘区"
            },
            {
                "name": "北区"
            },
            {
                "name": "大埔区"
            },
            {
                "name": "沙田区"
            },
            {
                "name": "西贡区"
            },
            {
                "name": "元朗区"
            },
            {
                "name": "屯门区"
            },
            {
                "name": "荃湾区"
            },
            {
                "name": "葵青区"
            },
            {
                "name": "离岛区"
            },
            {
                "name": "其他"
            }
        ],
        "type": 0
    },
    {
        "name": "澳门",
        "sub": [
            {
                "name": "花地玛堂区"
            },
            {
                "name": "圣安多尼堂区"
            },
            {
                "name": "大堂区"
            },
            {
                "name": "望德堂区"
            },
            {
                "name": "风顺堂区"
            },
            {
                "name": "嘉模堂区"
            },
            {
                "name": "圣方济各堂区"
            },
            {
                "name": "路凼"
            },
            {
                "name": "其他"
            }
        ],
        "type": 0
    },
    {
        "name": "台湾",
        "sub": [
            {
                "name": "台北市"
            },
            {
                "name": "高雄市"
            },
            {
                "name": "台北县"
            },
            {
                "name": "桃园县"
            },
            {
                "name": "新竹县"
            },
            {
                "name": "苗栗县"
            },
            {
                "name": "台中县"
            },
            {
                "name": "彰化县"
            },
            {
                "name": "南投县"
            },
            {
                "name": "云林县"
            },
            {
                "name": "嘉义县"
            },
            {
                "name": "台南县"
            },
            {
                "name": "高雄县"
            },
            {
                "name": "屏东县"
            },
            {
                "name": "宜兰县"
            },
            {
                "name": "花莲县"
            },
            {
                "name": "台东县"
            },
            {
                "name": "澎湖县"
            },
            {
                "name": "基隆市"
            },
            {
                "name": "新竹市"
            },
            {
                "name": "台中市"
            },
            {
                "name": "嘉义市"
            },
            {
                "name": "台南市"
            },
            {
                "name": "其他"
            }
        ],
        "type": 0
    },
    {
        "name": "海外",
        "sub": [
            {
                "name": "其他"
            }
        ],
        "type": 0
    }
]);
//# sourceMappingURL=city.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {CustomToastProvider} from '../../providers/custom-toast/custom-toast'
// import { HttpModule } from '@angular/http';
/**
 * Generated class for the CustomToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomToastComponent = /** @class */ (function () {
    function CustomToastComponent() {
        this.active = false;
        this.message = '自定义Toast';
        this.myHide = false;
        // this.customToast.show = this.show.bind(this);
    }
    CustomToastComponent.prototype.show = function (message, duration) {
        var _this = this;
        duration = duration | 500;
        this.message = message;
        this.active = true;
        this.clearTimer(); //
        this.Timer = setTimeout(function () {
            _this.myHide = false;
            _this.active = false;
        }, duration);
        // setTimeout(() => {
        //     this.myHide = true;
        //     setTimeout(() => {
        //       this.myHide = false;  
        //       this.active = false;
        //     }, duration)  // 隐藏动画完后再移除
        // }, duration);
    };
    CustomToastComponent.prototype.clearTimer = function () {
        clearTimeout(this.Timer);
        this.Timer = null;
    };
    CustomToastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'custom-toast',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\components\custom-toast\custom-toast.html"*/'<!-- Generated template for the CustomToastComponent component -->\n<div>\n  <div class="custom-toast" *ngIf="active" [class.my-show]="active" [class.my-hide]="myHide">\n    <div>\n        {{ message }}\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\components\custom-toast\custom-toast.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomToastComponent);
    return CustomToastComponent;
}());

//# sourceMappingURL=custom-toast.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_picker__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_better_picker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        // console.log('Hello DatePickerComponent Component');
        // this.text = 'Hello World';
        this.min = [2011, 2, 1];
        this.max = [2020, 12, 31];
        this.selectedIndex = [0, 0, 0];
        this.firstArr = [];
        this.secondArr = [];
        this.thirdArr = [];
        this.selectedDefaultDateFromChild = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); // 子组件主动发送数据  ----类似于vue的emit派发的事件
        // var dateData = this.dateData() //根据min max 生成区间所有的日期数据
        // var first = []
        // var second = []
        // var third = []
        // var selectedIndex = [1, 0, 0] /* 数组第一项设置为1 修复 创建月列表少一个的问题 */
        // var checked = [0, 0, 0] /* 已选选项 */
        // this._creatList(dateData, first, (list) => { //创建年列表
        //   this.firstArr = list
        // })
        // if (dateData[selectedIndex[0]].hasOwnProperty('children')) { //创建月份列表
        //   this._creatList(dateData[selectedIndex[0]].children, second, (list) => {
        //     this.secondArr = list
        //   })
        // } else {
        //   //second = [{text: '', value: 0}]
        // }
        // if (dateData[selectedIndex[0]].children[selectedIndex[1]].hasOwnProperty('children')) { //创建日期列表
        //   this._creatList(dateData[selectedIndex[0]].children[selectedIndex[1]].children, third, (list) => {
        //     this.thirdArr = list
        //   })
        // }
        // var val = '2017-02-19'
        // var year = val.split('-')[0]
        // var month = val.split('-')[1]
        // var date = val.split('-')[2]
        // this.newYear = this._getKeyByValue(year, this.firstArr)
        // this.newMonth = this._getKeyByValue(month, this.secondArr)
        // this.newDater = this._getKeyByValue(date, this.thirdArr)
        // console.log([this.newYear, this.newMonth, this.newDater])
        // this._initDate(this.newYear, this.newMonth, this.newDater)
    }
    DatePickerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.defaultDate = changes['defaultDate']['currentValue'];
        var val = this.defaultDate;
        var dateData = this.dateData();
        var first = [];
        var second = [];
        var third = [];
        var selectedIndex = [1, 0, 0]; /* 数组第一项设置为1 修复 创建月列表少一个的问题 */
        // var checked = [0, 0, 0] /* 已选选项 */
        this._creatList(dateData, first, function (list) {
            _this.firstArr = list;
        });
        if (dateData[selectedIndex[0]].hasOwnProperty('children')) {
            this._creatList(dateData[selectedIndex[0]].children, second, function (list) {
                _this.secondArr = list;
            });
        }
        else {
            //second = [{text: '', value: 0}]
        }
        if (dateData[selectedIndex[0]].children[selectedIndex[1]].hasOwnProperty('children')) {
            this._creatList(dateData[selectedIndex[0]].children[selectedIndex[1]].children, third, function (list) {
                _this.thirdArr = list;
            });
        }
        var year = val.split('-')[0];
        var month = val.split('-')[1];
        var date = val.split('-')[2];
        this.newYear = this._getKeyByValue(year, this.firstArr); //当前年份对呀列表的位置
        this.newMonth = this._getKeyByValue(month, this.secondArr);
        this.newDater = this._getKeyByValue(date, this.thirdArr);
        console.log([this.newYear, this.newMonth, this.newDater]);
        this._initDate(this.newYear, this.newMonth, this.newDater);
    };
    DatePickerComponent.prototype.dateData = function () {
        var _this = this;
        var data = this._range(this.min[0], this.max[0], false, '');
        data.forEach(function (year) {
            var minMonth = year.value === _this.min[0] ? _this.min[1] : 1;
            var maxMonth = year.value === _this.max[0] ? _this.max[1] : 12;
            year.children = _this._range(minMonth, maxMonth, true, '');
            year.children.forEach(function (month) {
                var day = 30;
                if ([1, 3, 5, 7, 8, 10, 12].includes(month.value)) {
                    day = 31;
                }
                else {
                    if (month.value === 2) {
                        day = !(year.value % 400) || (!(year.value % 4) && year.value % 100) ? 29 : 28;
                    }
                }
                var minDay = year.value === _this.min[0] && month.value === _this.min[1] ? _this.min[2] : 1;
                var maxDay = year.value === _this.max[0] && month.value === _this.max[1] ? _this.max[2] : day;
                month.children = _this._range(minDay, maxDay, true, '');
            });
        });
        return data;
    };
    DatePickerComponent.prototype._initDate = function (InitYear, InitMonth, InitDate) {
        var _this = this;
        var selectedYear = InitYear || 0;
        var selectedMonth = InitMonth || 0;
        var selectedDate = InitDate || 0;
        var that = this;
        var dateEl = this.myDate.nativeElement; //this.keyboardListBox.nativeElement
        var first = []; /* 年 */
        var second = []; /* 月 */
        var third = []; /* 日 */
        var selectedIndex = [selectedYear, selectedMonth, selectedDate]; /* 默认选中的日期 */
        var checked = [0, 0, 0]; /* 已选选项 */
        var dateData = that.dateData();
        this._creatList(dateData, first, function (list) {
            // console.log('first:', list)
            _this.firstArr = list;
        });
        if (dateData[selectedIndex[0]].hasOwnProperty('children')) {
            console.log('-----', dateData[selectedIndex[0]]);
            this._creatList(dateData[selectedIndex[0]].children, second, function (list) {
                // console.log('second:', list)
                _this.secondArr = list;
            });
        }
        else {
            second = [{ text: '', value: 0 }];
        }
        if (dateData[selectedIndex[0]].children[selectedIndex[1]].hasOwnProperty('children')) {
            this._creatList(dateData[selectedIndex[0]].children[selectedIndex[1]].children, third, function (list) {
                // console.log('third:', list)
                _this.thirdArr = list;
            });
        }
        else {
            third = [{ text: '', value: 0 }];
        }
        if (!this.picker) {
            this.picker = new __WEBPACK_IMPORTED_MODULE_1_better_picker___default.a({ data: [first, second, third], selectedIndex: selectedIndex, title: '日期选择'
            });
        }
        // this.picker = new Picker({data: [data1], selectedIndex: [0], title: '选择车牌颜色'})
        dateEl.addEventListener('click', function () {
            that.picker.show();
            // that.picker.refillColumn(0, this.firstArr)
            // that.picker.refillColumn(0, 2)
        });
        this.picker.on('picker.select', function (selectedVal, selectedIndex) {
            var text1 = first[selectedIndex[0]].text;
            var text2 = second[selectedIndex[1]].text;
            var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';
            var selectedDate = text1 + '-' + text2 + '-' + text3;
            dateEl.innerText = selectedDate;
            //  that.$emit('selectedDate', selectedDate)
            that.selectedDefaultDateFromChild.emit(selectedDate);
            console.log('selectedIndex:', selectedIndex);
        });
        /**每一项的值改变之后**/
        this.picker.on('picker.change', function (index, selectedIndex) {
            // console.log('picker.change', index)
            // console.log('picker.change', selectedIndex)
            if (index === 0) {
                firstChange();
            }
            else if (index === 1) {
                secondChange();
            }
            function firstChange() {
                second = [];
                third = [];
                checked[0] = selectedIndex;
                var firstCity = dateData[selectedIndex];
                if (firstCity.hasOwnProperty('children')) {
                    that._creatList(firstCity.children, second);
                    var secondCity = dateData[selectedIndex].children[0];
                    if (secondCity.hasOwnProperty('children')) {
                        that._creatList(secondCity.children, third);
                    }
                    else {
                        third = [{ text: '', value: 0 }];
                        checked[2] = 0;
                    }
                }
                else {
                    second = [{ text: '', value: 0 }];
                    third = [{ text: '', value: 0 }];
                    checked[1] = 0;
                    checked[2] = 0;
                }
                that.picker.refillColumn(1, second);
                that.picker.refillColumn(2, third);
                that.picker.scrollColumn(1, 0);
                that.picker.scrollColumn(2, 0);
            }
            function secondChange() {
                third = [];
                checked[1] = selectedIndex;
                var firstIndex = checked[0];
                if (dateData[firstIndex].children[selectedIndex].hasOwnProperty('children')) {
                    var secondCity = dateData[firstIndex].children[selectedIndex];
                    that._creatList(secondCity.children, third);
                    that.picker.refillColumn(2, third);
                    that.picker.scrollColumn(2, 0);
                }
                else {
                    third = [{ text: '', value: 0 }];
                    checked[2] = 0;
                    that.picker.refillColumn(2, third);
                    that.picker.scrollColumn(2, 0);
                }
            }
        });
        that.picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
            // console.log('picker.valuechange', selectedVal)
            // console.log(selectedIndex)
        });
    };
    DatePickerComponent.prototype._getKeyByValue = function (val, arr) {
        var ret = '';
        arr.forEach(function (item, i) {
            if (item['text'] === val) {
                ret = item['value'];
                return false;
            }
        });
        return ret;
    };
    DatePickerComponent.prototype._creatList = function (obj, list, cb) {
        obj.forEach(function (item, index, arr) {
            var temp = {};
            temp['text'] = item.text;
            temp['value'] = index;
            list.push(temp);
        });
        // console.log(list)
        cb && cb(list);
    };
    DatePickerComponent.prototype.hide = function () {
        // this.$refs.cascadePicker.hide()
    };
    DatePickerComponent.prototype.select = function (selectedVal, selectedIndex, selectedText) {
        // this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
    };
    DatePickerComponent.prototype.cancel = function () {
        // this.$emit(EVENT_CANCEL)
    };
    DatePickerComponent.prototype._range = function (n, m, polyfill, unit) {
        if (polyfill === void 0) { polyfill = false; }
        if (unit === void 0) { unit = ''; }
        var arr = [];
        for (var i = n; i <= m; i++) {
            var value = (polyfill && i < 10 ? '0' + i : i) + unit;
            arr.push({
                text: value,
                value: i
            });
        }
        return arr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "selectedDefaultDateFromChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('defaultDate'),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "defaultDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("myDate"),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "myDate", void 0);
    DatePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'date-picker',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\components\date-picker\date-picker.html"*/'<!-- Generated template for the DatePickerComponent component -->\n<div class="datePicker" #myDate>\n  {{defaultDate}}\n</div>'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\components\date-picker\date-picker.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());

//# sourceMappingURL=date-picker.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formate_money_formate_money__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formate_date_formate_date__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//引入ionic-angular

var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule = PipesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__formate_money_formate_money__["a" /* FormateMoneyPipe */],
                __WEBPACK_IMPORTED_MODULE_2__formate_date_formate_date__["a" /* FormateDatePipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(PipesModule_1) /*注入IonicModule  注意写法PipesModule为你当前的管道名称*/],
            exports: [__WEBPACK_IMPORTED_MODULE_1__formate_money_formate_money__["a" /* FormateMoneyPipe */],
                __WEBPACK_IMPORTED_MODULE_2__formate_date_formate_date__["a" /* FormateDatePipe */]]
        })
    ], PipesModule);
    return PipesModule;
    var PipesModule_1;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormateMoneyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FormateMoneyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FormateMoneyPipe = /** @class */ (function () {
    function FormateMoneyPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FormateMoneyPipe.prototype.transform = function (val) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        val = val.toString().replace(/\$|\\,/g, '');
        if (isNaN(val)) {
            val = "0";
        }
        // val = val / 100 //临时前端处理一下
        // let sign = (val === (val = Math.abs(val)))
        val = Math.floor(val * 100 + 0.50000000001);
        var cents = val % 100;
        val = Math.floor(val / 100).toString();
        if (cents < 10) {
            cents = "0" + cents;
        }
        for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
            val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
        }
        return (val + '.' + cents);
    };
    FormateMoneyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'formateMoney',
        })
    ], FormateMoneyPipe);
    return FormateMoneyPipe;
}());

//# sourceMappingURL=formate-money.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormateDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FormateDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FormateDatePipe = /** @class */ (function () {
    function FormateDatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FormateDatePipe.prototype.transform = function (val) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        val = val && val.substring(0, val.length - 3); //去除秒
        return val ? val.replace('T', ' ') : ''; //去除T
    };
    FormateDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'formateDate',
        })
    ], FormateDatePipe);
    return FormateDatePipe;
}());

//# sourceMappingURL=formate-date.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpIntercept; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpInterceptHandle__ = __webpack_require__(374);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpIntercept = /** @class */ (function (_super) {
    __extends(HttpIntercept, _super);
    function HttpIntercept(backend, defaultOptions, _) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._ = _;
        return _this;
    }
    HttpIntercept.prototype.get = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.get.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.post = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.post.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.put = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.put.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.delete = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.delete.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.patch = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.patch.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.head = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.head.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.options = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.options.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_3__HttpInterceptHandle__["a" /* HttpInterceptHandle */]])
    ], HttpIntercept);
    return HttpIntercept;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));

//# sourceMappingURL=HttpIntercept.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {RegisterPage} from '../register/register'
// import {UserCarinfoPage} from '../user-carinfo/user-carinfo'


var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, viewCtrl, loadingCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.btnDisable = false;
        _this.isCloseEye = true;
        _this.eyeStatus = 'eye-off';
        _this.pswType = 'password';
        _this.storage.get('mobile').then(function (val) {
            _this.mobile = val;
        });
        return _this;
    }
    // ionViewDidEnter() {
    // }
    LoginPage.prototype.login = function () {
        var _this = this;
        var api = 'Login/UserLogin';
        var params = {
            data: {
                Identifier: this.mobile,
                Credential: this.password
            },
            token: 11111
        };
        console.log(this.mobile);
        if (!this.mobile) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入手机号码', 1000);
            return;
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入正确手机号码', 1000);
            return;
        }
        if (!this.password) {
            _super.prototype.showToast.call(this, this.toastCtrl, '请输入密码', 1000);
            return;
        }
        this.btnDisable = true;
        this.rest.doPost(api, params, function (data) {
            console.log(data);
            if (data.issuccess) {
                //登录成功的页面跳转
                //存储接口返回的 token
                _super.prototype.showToast.call(_this, _this.toastCtrl, data.message, 800);
                setTimeout(function () {
                    _this.storage.set('token', data.result.Token);
                    _this.storage.set('mobile', _this.mobile);
                    _this.gotoHomePage();
                    _this.btnDisable = false;
                }, 1500);
            }
            else {
                alert(data.message);
                _this.btnDisable = false;
            }
        });
    };
    /**
     * 关闭当前页面的方法
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.dismiss = function () {
        // this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.eyeSwitch = function () {
        if (this.isCloseEye) {
            this.eyeStatus = 'eye-off';
            this.pswType = 'password';
        }
        else {
            this.eyeStatus = 'eye';
            this.pswType = 'text';
        }
        this.isCloseEye = !this.isCloseEye;
    };
    LoginPage.prototype.gotofindpassword = function () {
        this.navCtrl.parent.select(3);
        // alert('gotofindpassword')
        this.storage.set('mobile', this.mobile);
    };
    LoginPage.prototype.gotoresigster = function () {
        this.navCtrl.parent.select(2);
        // this.navCtrl.push(RegisterPage);
        // alert('gotofindpassword')
        this.storage.set('mobile', this.mobile);
    };
    // 
    LoginPage.prototype.gotoHomePage = function () {
        // this.navCtrl.push(HomePage);
        this.navCtrl.parent.select(0);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      用户登录\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<!-- \n<ion-header>\n    <ion-navbar>\n      <ion-icon name="arrow-back"><span>返回</span><span>关闭</span></ion-icon>\n      <ion-title>用户登录</ion-title>\n    </ion-navbar>\n  </ion-header> -->\n<ion-content padding>\n  <div data-v-3c0fb276="" id="">\n    <div data-v-d0f50a12="" data-v-3c0fb276="" class="title">\n      <div data-v-3c0fb276="" data-v-d0f50a12="">用户登录</div>\n    </div>\n    <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n      <div data-v-1a32f292="" class="input size-0 align-1">\n        <label data-v-3c0fb276="" data-v-1a32f292="">手机号</label>\n        <input [(ngModel)]="mobile" type="tel" name="" placeholder="请输入手机号" maxlength="11">\n      </div>\n    </div>\n    <div data-v-1a32f292="" data-v-3c0fb276="" class="inputBox padType">\n      <div data-v-1a32f292="" class="input size-0 align-1">\n        <label data-v-3c0fb276="" data-v-1a32f292="">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>\n        <input  placeholder="请输入密码" [(ngModel)]="password"\n          maxlength="16" [type]="pswType">\n        <ion-icon [name]="eyeStatus" class="eye" (click)="eyeSwitch()"></ion-icon>\n      </div>\n    </div>\n    <div data-v-3c0fb276="" class="buttonBox" [ngClass]="{\'disable\':btnDisable===true}">\n        <div data-v-766fd0c5="" class="button">\n          <button ion-button block (click)="login()" [color]="btnDisable===true?\'light\':\'\'">确定</button>\n        </div>\n    </div>\n    <!-- <button class="button" ion-button block (click)="login()">登录</button> -->\n    <div data-v-3c0fb276="" class="forget-register">\n      <a data-v-3c0fb276="" class="extend-click"  (click)="gotofindpassword()">忘记密码？</a>\n      <a data-v-3c0fb276="" class="extend-click register-btn" (click)="gotoresigster()">立即注册</a>\n    </div>\n    <div data-v-c2fe12d2="" data-v-3c0fb276="" class="top-tip" style="display: none;">\n      请输入。。\n    </div>\n    <div data-v-7811bac2="" data-v-3c0fb276="" class="confirm" style="display: none;">\n      <div data-v-7811bac2="" class="confirm-wrapper">\n        <div data-v-7811bac2="" class="confirm-content">\n          <p data-v-7811bac2="" class="text">请输入。。</p>\n          <div data-v-7811bac2="" class="operate">\n            <!---->\n            <div data-v-7811bac2="" class="operate-btn">确定</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_base_info_user_base_info__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__application_record_list_application_record_list__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_car_select_car__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_themeable_browser__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, rest, storage, themeableBrowser, iab) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.storage = storage;
        this.themeableBrowser = themeableBrowser;
        this.iab = iab;
        this.isShowPop1 = false;
        this.isShowPop2 = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.btnClick0 = function () {
    };
    HomePage.prototype.btnClick2 = function () {
        var options = {
            location: 'yes',
            zoom: 'no',
            footer: 'yes'
        };
        var browser = this.iab.create('https://www.baidu.com/', '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            alert('loadstop');
            browser.insertCSS({ code: "body{color: red;" });
            setTimeout(function () {
                browser.close();
            }, 5000);
        });
        browser.on('loaderror').subscribe(function (event) {
            alert('loaderror');
            browser.insertCSS({ code: "body{color: red;" });
        });
        browser.on('exit').subscribe(function (event) {
            alert('exit');
        });
        //  browser.close();
    };
    HomePage.prototype.btnClick = function (target) {
        var options = {
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
        var browser = this.themeableBrowser.create('http://wechat.chepass.com:8021/Content/dist/#/process/userAddAddress?isTest', '_blank', options); //_blank 
        browser.on('closePressed').subscribe(function (res) {
            browser.close();
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        //修复轮播手动滑动后不能自动轮播问题
        this.slides.autoplayDisableOnInteraction = false;
    };
    HomePage.prototype.checkToken = function (cb) {
        var _this = this;
        var api = 'Main/MainQuest?needload'; //验证token接口
        this.storage.get('token').then(function (val) {
            var params = {
                token: val
            };
            if (!val) {
                // this.navCtrl.push(LoginPage);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                return;
            }
            _this.rest.doPost(api, params, function (data) {
                if (!data.issuccess) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                }
                else {
                    cb && cb();
                }
            });
        });
    };
    HomePage.prototype.gotoUserInfo = function () {
        var _this = this;
        this.checkToken(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_base_info_user_base_info__["a" /* UserBaseInfoPage */]);
        });
    };
    HomePage.prototype.waiting = function () {
    };
    // gotoCarSelect() {
    //   // this.navCtrl.parent.select(4);
    //   // alert('gotoCarSelect')
    //   this.checkToken(()=> {
    //     this.navCtrl.push(SelectCarPage);
    //   })
    // }
    HomePage.prototype.gotoCarSelect = function (type) {
        var _this = this;
        this.checkToken(function () {
            _this.storage.set('type', type);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__select_car_select_car__["a" /* SelectCarPage */]);
        });
    };
    HomePage.prototype.gotoApplicationRecordList = function () {
        var _this = this;
        // this.navCtrl.parent.select(5);
        this.checkToken(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__application_record_list_application_record_list__["a" /* ApplicationRecordListPage */]);
        });
    };
    HomePage.prototype.hidePop1 = function () {
        this.isShowPop1 = false;
    };
    HomePage.prototype.showPop1 = function () {
        this.isShowPop1 = true;
    };
    HomePage.prototype.hidePop2 = function () {
        this.isShowPop2 = false;
    };
    HomePage.prototype.showPop2 = function () {
        this.isShowPop2 = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Alldemo\myWechatApp\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n      <!-- <ion-icon name="arrow-back"><span>返回</span></ion-icon> -->\n      <ion-title>首页</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <!-- <h1><img src="./../../assets/imgs/banner.png"></h1> -->\n<ion-content>\n  <div class="slide-wrap">\n      <ion-slides pager loop="true" autoplay="3000" >\n          <ion-slide>\n            <h1><img src="assets/imgs/banner.png"></h1>\n          </ion-slide>\n          <ion-slide>\n            <h1><img src="assets/imgs/banner2.png"></h1>\n          </ion-slide>\n          <ion-slide>\n            <h1><img src="assets/imgs/banner3.png"></h1>\n          </ion-slide>\n        </ion-slides>\n  </div>\n  <ion-grid style="margin-top: 10px;">\n      <ion-row>\n        <ion-col col-3 class="home-icon" (tap)="gotoUserInfo()">\n            <img src="assets/imgs/icon-ETC.png" alt="" >\n            <p>办理ETC</p>  \n        </ion-col>\n        <ion-col col-3 class="home-icon">\n            <img src="assets/imgs/icon-applyRecord.png" alt="" (tap)="gotoApplicationRecordList()">\n            <p>申请记录</p>  \n        </ion-col>\n        <ion-col col-3 class="home-icon" >\n            <img src="assets/imgs/icon-bill.png" alt="" (tap)="gotoCarSelect(1)">\n            <p>我的账单</p>  \n        </ion-col>\n        <ion-col col-3 class="home-icon"  (tap)="gotoCarSelect(2)">\n            <img src="assets/imgs/icon-record.png" alt="">\n            <p>通行记录</p>  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="scrollBox">\n            <h2 >新闻资讯</h2>\n        <ion-scroll scrollX="true">\n            <ul>\n                <li><img src="assets/imgs/action001.png" alt=""  (click)="showPop1()"></li>\n                <li><img src="assets/imgs/action002.png" alt=""  (click)="showPop2()"></li>\n            </ul>\n        </ion-scroll>\n    </div>\n    \n    <ion-scroll scrollY="true"  class="register-pop-scroll" [hidden]="!isShowPop1">\n            <div class="register-pop nopadding" title="开票新规">\n                    <div class="he20"></div>\n                    <p class="pd2em">从2018年1月1日起，开具方式又有变化了！<br/>2018年开始产生的通行费发票需通过新平台开具</p>\n                    <p>需要报销路费和抵扣税款的用户，都要更新信息。</p>\n                    <p>几句话看懂开票流程：</p>\n                    <p>1.易路通达平台办理ETC黔通卡</p>\n                    <p>2.登录发票服务网站<a href="javascript:void(0)">www.txffp.com</a>或下载“票根”APP凭手机号码注册</p>\n                    <p>3.登录发票服务平台，完成绑卡（需和办理ETC卡片用户信息一致）</p>\n                    <p>4.登录→发票购买方信息→选择交易记录</p>\n                    <p>5.谁通行，谁开票，开票信息需在通行前修改</p>\n                    <p>6.产生通行费10天之后可以开票（遇到法定节假日，时间顺延）；充值电子发票，可实时取得</p>\n                    <p>7.全国增值税发票<strong>电脑端</strong>查验平台 <a href="javascript:void(0)" target="_blank">https://inv-veri.chinatax.gov.cn/</a> </p>\n                    <p>8.发票服务平台热线：95022</p>\n\n                    <div class="back-btn-close" (tap)="hidePop1()">\n                         <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n                    </div>\n            </div>\n    </ion-scroll>\n    <ion-scroll scrollY="true"  class="register-pop-scroll" [hidden]="!isShowPop2">\n            <div class="register-pop" title="开票公告">\n                    <div class="he20"></div>\n                    <p>尊敬的黔通卡用户：</p>\n                    <p>根据《交通运输部办公厅、财政部办公厅、国家税务总局办公厅关于印发〈完善收费公路通行费增值税发票开具工作实施方案〉的通知》（交办公路〔2017〕98号），为方便您在2018年1月1日后行驶收费公路开具通行费增值税电子普通发票，现将有关事项公告如下：</p>\n                    <p>一、按照《交通运输部办公厅、国家税务总局办公厅关于印发〈收费公路通行费增值税电子普通发票开具运营与服务规则〉的通知》要求，尚未申办黔通卡的车主客户可提前办理用户卡（即“黔通卡”）作为收费公路通行车辆实车认证的唯一凭证，据此开具通行费增值税电子发票。</p>\n                    <p>二、为确保您顺利开具增值税电子发票，开票所需信息将上传至通行费增值税电子发票服务平台 www.txffp.com（下称电子发票服务平台）或“票根APP”，请您确保办卡预留信息（开户姓名、证件资料、联系人、手机号码等）合法有效。如办卡预留信息发生变化，或者黔通卡内没有写入车牌、车牌与实际不符、一车多卡等情况，请及时联系黔通卡客服中心办理补录或变更手续，以免影响增值税电子发票顺利出具。</p>\n                    <p>三、2018年1月1日起，黔通卡客户通行收费公路后需开具电子消费发票的，在使用黔通卡正常缴交通行费之日起第10个自然日后（遇法定假日顺延），可登陆电子发票服务平台办理；黔通卡客户充值后需开具电子充值发票的，可登陆电子发票服务平台即刻办理（开具充值发票后，不再重复出具消费发票）。在2017年底前发生黔通卡充值和通行消费但未开具电子发票的，请尽快联系黔通卡客服中心办理。</p>\n                    <p>四、2018年1月1日开始，ETC卡内没有车牌信息、卡内车牌与实际不符的，除不能正常开具增值税电子发票外，现场不能使用ETC卡缴费，需转现金收费。</p>\n                    <p>特此公告</p>\n                    <p>上海易路通达车联网信息科技有限公司</p>\n                    <p>2018年1月4日</p>\n\n                    <div class="back-btn-close" (click)="hidePop2()">\n                        <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n                    </div>\n            </div>\n    </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\Alldemo\myWechatApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the VersionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VersionServiceProvider = /** @class */ (function () {
    function VersionServiceProvider(http) {
        this.http = http;
        console.log('Hello VersionServiceProvider Provider');
    }
    VersionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VersionServiceProvider);
    return VersionServiceProvider;
}());

//# sourceMappingURL=version-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UtilsProvider = /** @class */ (function () {
    function UtilsProvider() {
        console.log('Hello UtilsProvider Provider');
    }
    UtilsProvider.prototype.hasClass = function (el, className) {
        var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
        return reg.test(el.className);
    };
    UtilsProvider.prototype.addClass = function (el, className) {
        if (this.hasClass(el, className)) {
            return;
        }
        var newClass = el.className.split(' ');
        newClass.push(className);
        el.className = newClass.join(' ');
    };
    UtilsProvider.prototype.removeClass = function (el, className) {
        if (!this.hasClass(el, className)) {
            return;
        }
        var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
        el.className = el.className.replace(reg, ' ');
    };
    UtilsProvider.prototype.getNowDate = function (addDayCount) {
        var AddDayCount = addDayCount || 0;
        var nowDate = new Date();
        // var newDate = new Date()
        nowDate.setDate(nowDate.getDate() + AddDayCount);
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
            : nowDate.getMonth() + 1;
        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
            .getDate();
        var dateStr = year + "-" + month + "-" + day;
        return dateStr;
    };
    UtilsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilsProvider);
    return UtilsProvider;
}());

//# sourceMappingURL=utils.js.map

/***/ })

},[375]);
//# sourceMappingURL=main.js.map