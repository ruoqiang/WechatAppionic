import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {RestProvider} from '../../providers/rest/rest';
import {BillDetailPage} from '../../pages/bill-detail/bill-detail'
// import { BaseUI } from '../../common/baseui';
/**
 * Generated class for the BillListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bill-list',
  templateUrl: 'bill-list.html',
})
export class BillListPage {
   public productList:Array<Object> = []
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public rest: RestProvider) {
    this.getProductList();
  }

  ionViewDidEnter() {
    // console.log('carListInfo----start');
    // this.storage.get('carListInfo').then((data) => {
    //   if (data != null) {
    //     console.log(data);
    //   }
    // })
  }
  //获取产品类别
  getProductList() {
    this.productList = [
      {'id':"1",'pName':'任意通','pType':'1'},
      {'id':"2",'pName':'30天记账卡','pType':'30'},
      {'id':"3",'pName':'45天记账卡','pType':'45'}
    ]

  }
  goToDtl(pType) {
    // alert(pType)
    this.navCtrl.push(BillDetailPage,pType)
  }
}
