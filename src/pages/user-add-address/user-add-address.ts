import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import {LoginPage} from '../login/login'
import {RestProvider} from '../../providers/rest/rest'
import {HomePage} from '../home/home'
/**
 * Generated class for the UserAddAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-user-add-address',
  templateUrl: 'user-add-address.html',
})
export class UserAddAddressPage extends BaseUI{
  btnDisable:Boolean=false;
  userApplyStep:any;
  token:any;
  conName:any;
  mobile :any;
  defaultArea :any = '北京 东城区';
  detailAddress :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider) {
      super();
      this.getCarInfo()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddAddressPage');
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
        console.log('address:', ret.result.address)
        if(ret.issuccess) {

          this.userApplyStep = ret.result;
          console.log('userApplyStep:', this.userApplyStep)
          let resultAddress = ret.result.address
        
          let Province = resultAddress.Province
          let City = resultAddress.City
          let Town = resultAddress.Town
          let formatAddress = `${Province} ${City} ${Town}`

          this.conName = resultAddress.ConName
          this.mobile = resultAddress.ConPhone
          this.defaultArea = formatAddress //|| this.defaultArea
          this.detailAddress = resultAddress.DetailAddress
        }
      })
    })
  }
  nextPage() {
    if (!this.conName) {
      super.showToast(this.toastCtrl, `请输入收货人姓名`);
      return false
    }
    if (!this.mobile) {
      super.showToast(this.toastCtrl, `请输入手机号码`);
      return false
    }
    if (!/1[3|4|5|7|8]\d{9}/.test(this.mobile)) {
      super.showToast(this.toastCtrl, `请输入正确手机号码`);
      return false
    }
    if (!this.detailAddress) {
      super.showToast(this.toastCtrl, `请输入详细地址`);
      return false
    }
    this.btnDisable = true
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
    }
    var api='SubInfo/UserAndCar';
    this.rest.doPost(api,params, (ret)=> {
      if(ret.issuccess){
        //修改地址成功的页面跳转
        this.endOneLoop();
        this.btnDisable = false
      }else{
        alert(ret.message);
        this.btnDisable = false
      }
    })
  }

  endOneLoop() { //结束一轮操作清空数据
    // var that = this
    var params = {
      token: this.token,
      data:{
        Relation: this.userApplyStep && this.userApplyStep.apply && this.userApplyStep.apply.Relation
        }
      }
    var api='SubInfo/CompSub';
    this.rest.doPost(api,params, (ret)=> {
      if(ret.issuccess){
        let loading = super.showToast(this.toastCtrl, '提交成功！');
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.push(HomePage);
        }, 800);
      }else{
        alert(ret.message);
      }
    })
    
  }
  selectedDefaultAreaFromChild(data) {
    console.log('selectedDefaultAreaFromChild---' ,data)
    this.defaultArea = data;
  }
}
