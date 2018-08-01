import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import {UserCarinfoPage} from '../user-carinfo/user-carinfo'
import {RestProvider} from '../../providers/rest/rest'
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import {LoginPage} from '../login/login'
// import { ToastController } from 'ionic-angular/components/toast/toast-controller';
/**
 * Generated class for the UserBaseInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-user-base-info',
  templateUrl: 'user-base-info.html',
})
export class UserBaseInfoPage extends BaseUI{
  btnDisable:Boolean=false;
  useBaseInfo: any;
  name: any;
  sex:any = 1;
  IDNumber:any;
  mobile:any;
  inviteMoblie:any;
  isSelf: Boolean = true;
  carOwnerName:any= '';
  carOwnerIDNum:any= '';
  carOwnerPhone:any= '';
  token: any;
  constructor(public navCtrl: NavController,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    // public loadingCtrl: LoadingController,
    public storage: Storage) {
      super();
    }
    // @ViewChild(Slides) slides: Slides;
    ionViewWillEnter() {
      
      var api='SubInfo/CheckStep?needload'; //获取用户信息接口
      
      this.storage.get('token').then((val) => {
        console.log('token:', val)
        this.token = val
        var params = {
          token: val
        }
        if (!val) {
          this.navCtrl.push(LoginPage);
          return
        }
        this.rest.doPost(api,params, (ret)=> {
          console.log('用户信息:', ret.result.apply)
          if(ret.issuccess) {
            if(ret.result.apply) {
              this.useBaseInfo = ret.result.apply
              let useBaseInfo = ret.result.apply
              this.name = useBaseInfo.Name
              this.sex = parseInt(useBaseInfo.Sex) === 1 ? 1 : 0
              this.IDNumber = useBaseInfo.IDNumber
              this.mobile = useBaseInfo.Phone
              this.inviteMoblie = useBaseInfo.Inviter
              this.isSelf = useBaseInfo.IsOwnerApply
              this.carOwnerName = useBaseInfo.CarOwnerName
              this.carOwnerIDNum = useBaseInfo.CarOwnerIDNum
              this.carOwnerPhone = useBaseInfo.CarOwnerPhone
            }
          }else {
            this.navCtrl.push(LoginPage);
          }
        })
      })
    }
    
    nextPage() {
      console.log(this.name)
      if (!this.name) {
        super.showToast(this.toastCtrl, '请输入姓名',1000);
        return
      }
      if (!this.IDNumber) {
        // var el = document.querySelectorAll('.toast-ios')
        // Array.prototype.forEach.call(el, function(item) {  
        //   // do something you want deal with DOM  
        //   item.class
        // }); 
        super.showToast(this.toastCtrl, '请输入身份证号码',1000);
        return
      }
      var iDNumberReg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (!iDNumberReg.test(this.IDNumber)) {
        super.showToast(this.toastCtrl, '请输入正确格式的身份证号码',1000);
        return
      }
      if (!this.mobile) {
        super.showToast(this.toastCtrl, '请输入手机号码',1000);
        return
      }
      if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
        super.showToast(this.toastCtrl, '请输入正确手机号码',1000);
        return
      }
    
      if (!this.isSelf) {
        if (!this.carOwnerName) {
          super.showToast(this.toastCtrl, '请输入车主姓名',1000);
          return
        }
        if (!this.carOwnerIDNum) {
          super.showToast(this.toastCtrl, '请输入车主身份证号',1000);
          return
        }
        if (!iDNumberReg.test(this.carOwnerIDNum)) {
          super.showToast(this.toastCtrl, '请输入正确格式的身份证号码',1000);
          return
        }
        if (!this.carOwnerPhone) {
          super.showToast(this.toastCtrl, '请输入车主手机号',1000);
          return
        }
        if (!/1[3|4|5|7|8]\d{9}/.test(this.carOwnerPhone)) {
          super.showToast(this.toastCtrl, '请输入正确手机号码',1000);
          return
        }
      }
        this.btnDisable = true
      //  this.showLoading(this.loadingCtrl,'数据提交中...')
        var api='SubInfo/UserAndCar';
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
              }
        this.rest.doPost(api, params,(data)=>{
          console.log(data);
            if(data.issuccess){
              //登录成功的页面跳转
              //存储接口返回的 token
            // super.showToast(this.toastCtrl, data.message,800);
            setTimeout(()=>{
             
              this.navCtrl.push(UserCarinfoPage);
              this.btnDisable = false;
            },800)
            }else{
              alert(data.message);
              this.btnDisable = false;
            }
        })
    }
  gotocarinfo() {
    this.navCtrl.push(UserCarinfoPage);
  }
  switchSex(val) {
    this.sex = val
  }
  switchSelf(val) {
    this.isSelf = val
    console.log(this.isSelf)
  }
}
