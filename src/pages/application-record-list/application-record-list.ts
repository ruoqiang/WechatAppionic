import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import {RestProvider} from '../../providers/rest/rest'
import { BaseUI } from '../../common/baseui';
/**
 * Generated class for the ApplicationRecordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-application-record-list',
  templateUrl: 'application-record-list.html',
})
export class ApplicationRecordListPage extends BaseUI{
  ApplyInfoList=[];
  statusBtn= '';
  token: '1111';
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public rest: RestProvider) {
    super();
    this.getUserApplyInfo();
    
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ApplicationRecordListPage');
  }
  calStatusBtn (val) {
    if (val === "1" || val === "3") {
      return 'success'
    }
    if (val === "-1" || val === "2" || val === "4") {
      return 'fail'
    }
  }
  formCheckStatus(val) {
    if (val === "-1") {
      return '待申请'
    }
    if (val === "0") return '审核中'
    if (val === "1") return '审核成功'
    if (val === "2") return '审核失败'
    if (val === "3") return '审核中' //人工介入中 -->审核中
    if (val === "4") return '已注销'
  }
  getUserApplyInfo () {
    
    var api='SubInfo/QueryApply'; //获取信息接口
    this.storage.get('token').then((val) => {
      this.token = val
      var params = {
        token: val
      }
      var that = this;
      this.rest.doPost(api,params, (ret)=> {
        console.log('address:', ret.result.address)
        if(ret.issuccess) {
          that.ApplyInfoList = ret.result //[{Name: '1',CarNum: 'ds',CarColor: '1',CheckStatus: "1"}]//
        }
      })
    })
  }
}
