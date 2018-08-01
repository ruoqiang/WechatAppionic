import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import {RestProvider} from '../../providers/rest/rest'
import { BaseUI } from '../../common/baseui';

import {RecordCarPage} from '../record-car/record-car'
import {BillListPage} from '../bill-list/bill-list'
/**
 * Generated class for the SelectCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-car',
  templateUrl: 'select-car.html',
})
export class SelectCarPage extends BaseUI {
  token:any
  carInfoList:any = []
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public rest: RestProvider) {
    super()
    this.getCarList()
  }

  ionViewDidEnter() {
  }
  getCarList() {
    var api='SubInfo/QueryWirteCard?needload' //获取信息接口
    this.storage.get('token').then((val) => {
      this.token = val
      var params = {
        token: val
      }
      var that = this
      this.rest.doPost(api,params, (ret)=> {
        console.log('address:', ret.result.address)
        if(ret.issuccess) {
          that.carInfoList = ret.result
        }
      })
    })
  }

  selectCarGotoPage(item) {
    this.storage.set('carListInfo', item)
    // this.storage.set('carListInfo', item)
    console.log('set--carListInfo--',item);
    this.storage.get('type').then((val) => {
      //账单查询
      if (val === 1) {
        // this.$router.push('/bill')
          this.navCtrl.push(BillListPage)
      }
      //通行记录
      if (val === 2) {
        // console.log(carNo)
        // this.$router.push('/recordCar')
        this.navCtrl.push(RecordCarPage)
      }
    })
  }
}
