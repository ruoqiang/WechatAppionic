import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController} from 'ionic-angular';
import {UserUplaodPage} from '../user-uplaod/user-uplaod'
import {RestProvider} from '../../providers/rest/rest'
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import {LoginPage} from '../login/login'

import {SelectCarNoComponent} from '../../components/select-car-no/select-car-no'
// import { ElementDef } from '@angular/core/src/view';
/**
 * Generated class for the UserCarinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-user-carinfo',
  templateUrl: 'user-carinfo.html',
})
export class UserCarinfoPage extends BaseUI{
  token:any;
  btnDisable:Boolean=false;
  carColor:any = 0;
  carColorType:any;
  carNum:any;
  engineNum:any;
  carVin:any;
  carBrand:any;
  carLoad:any;
  @ViewChild(SelectCarNoComponent)
  private SelectCarNoComponent: SelectCarNoComponent;
  @ViewChild('CarColorType') 
  
  private CarColorType: ElementRef;



  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider) {
    super();
    
  }
  onViewWillEnter() {
    // this.getCarInfo() 第二个子页面无效？
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCarinfoPage');
    this.getCarInfo()
    console.log(this.CarColorType)
    console.log('this.selectCarNo-------------'+this.SelectCarNoComponent)
    // this.SelectCarNoComponent.hide()
    // this.CarColorType.nativeElement[3].selected=true
  }
  getCarInfo () {
    
    var api='SubInfo/CheckStep'; //获取用户信息接口
    this.storage.get('token').then((val) => {
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
          let useBaseInfo = ret.result.apply
          this.carColor = useBaseInfo.CarColor || '蓝'
          this.carColorType =useBaseInfo.CarColorType || 0
          this.carNum = useBaseInfo.CarNum && useBaseInfo.CarNum.split('') || ['沪','A']//车牌号
          this.engineNum = useBaseInfo.EngineNum //发动机号
          this.carVin = useBaseInfo.CarVin //车辆识别码
          this.carBrand = useBaseInfo.CarBrand
          this.carLoad = useBaseInfo.CarLoad
          this.CarColorType.nativeElement[this.carColorType].selected=true
        }else {
          this.navCtrl.push(LoginPage);
        }
      })
    })
  }
  nextPage() {
    
    if (this.carNum.length < 5) {
      super.showToast(this.toastCtrl, '请输入正确位数车牌号',1000);
      return
    }
    if (!this.engineNum) {
      super.showToast(this.toastCtrl, '请输入发动机号',1000);
      return
    }
    var engineNumReg = /^[0-9a-zA-Z]*$/g
    if (!engineNumReg.test(this.engineNum)) {
      super.showToast(this.toastCtrl, '请输入正确格式的发动机号',1000);
      return
    }
    if (!this.carVin) {
      super.showToast(this.toastCtrl, '请输入车辆识别代码',1000);
      return
    }
    var vehicleCodeReg = /^[0-9a-zA-Z]*$/g
    if (!vehicleCodeReg.test(this.carVin)) {
      super.showToast(this.toastCtrl, '请输入正确格式的车辆识别代码',1000);
      return
    }
    if (!this.carBrand) {
      super.showToast(this.toastCtrl, '请输入发动机号',1000);
      return
    }
    if (!this.carLoad) {
      super.showToast(this.toastCtrl, '请输入车辆载重',1000);
      return
    }
     var numReg= /^\d+(\.\d+)?$/
    if (!numReg.test(this.carLoad)) {
      super.showToast(this.toastCtrl, '请输入正确的载重',1000);
      return
    }
      this.btnDisable = true
    //  this.showLoading(this.loadingCtrl,'数据提交中...')
      var api='SubInfo/UserAndCar?needload';
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
            }
      this.rest.doPost(api, params,(data)=>{
          if(data.issuccess){
            //登录成功的页面跳转
          setTimeout(()=>{
            this.navCtrl.push(UserUplaodPage);
            this.btnDisable = false
          },800)
          }else{
            alert(data.message);
            this.btnDisable = false
          }
      })
  }
  gotoUplaod() {
    this.navCtrl.push(UserUplaodPage);
  }
  selectedCarValueFromChild(msg) {
    console.log('selectedCarValueFromChild'+msg)
    this.carNum = msg
  }
}
