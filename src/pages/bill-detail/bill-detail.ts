import { Component,ViewChild,NgZone } from '@angular/core';
import { NavController, NavParams,Content } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import {RestProvider} from '../../providers/rest/rest'
// import BScroll from 'better-scroll'
import {UtilsProvider} from '../../providers/utils/utils'
/**
 * Generated class for the BillDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bill-detail',
  templateUrl: 'bill-detail.html',
})
export class BillDetailPage {
  title:string = '任意通'
  monery:string = '10000'
  date:string = '2018-02-03T21:19'
  listType1: boolean = true
  listType2: boolean = false
  backTopShow = false
  billList = []//[1,2,3]
  page = 0
  pageSize = 20
  token:any
  hasMore =true
  isShowNoListTips = false
  isLoadingMore = false
  @ViewChild(Content) content: Content;
  @ViewChild('wrapper') wrapper;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public rest: RestProvider,public utils: UtilsProvider,public zone: NgZone) {

    let pType = this.navParams.get('pType');
    console.log(pType);
    console.log(this.navParams);
    this.title = this.navParams.get('pName'); //根据传递过来的类型名称设置title
    this.showListType(pType)
    this.backTopShow = false
  }
  //显示账单列表类型
  showListType(pType) {
    if(pType ==='1') {
      // alert(pType)
      this.listType1 = true;
      this.listType2 = false;
    } else {
      this.listType1 = false;
      this.listType2 = true;
    }
  }
  ionViewDidLoad() {
    this.loadMore();
  }
/*上拉更新*/
doInfinite(infiniteScroll){  /*接收事件对象传值*/
  // console.log('11111')
  // this.requestData(infiniteScroll);     
  // if(!this.isLoadingMore) {
  //   this.loadMore(infiniteScroll);
  // }
  this.loadMore(infiniteScroll);
}

ionScrollEnd(event) {
// console.log('ionScrollEnd'+event);
// this.loadMore();
}
loadMore(infiniteScroll?) {
  var that = this
  this.isLoadingMore = true
  if (!this.hasMore) { //没有更多了就停止请求
    this.isLoadingMore = false
     return
   }
   this.page++
   var api='Main/QueryConsumeDetailNew' //获取信息接口
   this.storage.get('token').then((val) => {
    this.token = val
    var params = {
      token: val,
      data: {
        CarNo: '浙A9F023',
        outTimeBefore: '2017-02-11 00:00:00', //this.defaultDate,
        outTimeAfter: '2018-02-11 23:59:59',
        pageHelp: {
          "CurrentPage": this.page, //当前页
          "PageSize": this.pageSize //每页显示行数
        }
      }
    }
    this.rest.doPost(api,params, (ret)=> {
      if(ret.issuccess) {
       
          if(ret.result.ConsumeDetail ===null) ret.result.ConsumeDetail = [] //特殊处理
          that.billList = that.billList.concat(ret.result.ConsumeDetail)
         
          that.isShowNoListTips = that.billList.length == 0 ? true : false
          //infiniteScroll自带方法
          if(infiniteScroll){
            this.isLoadingMore = false
            infiniteScroll.complete();   /*请求完成数据更新页面*/
            let data = ret.result
            if (!data.ConsumeDetail.length || (data.pageHelp.PageSize + (data.pageHelp.CurrentPage - 1) *  this.pageSize) >= data.pageHelp.AllCount) {  /*没有更多数据了 禁用上拉更新*/
              // infiniteScroll.enable(false);  //一个页面可以多次加载，不要禁用销毁掉 改为隐藏掉
              this.hasMore = false
            }
          }
          //infiniteScroll自带方法
            // this.isLoadingMore = false
            // let data = ret.result
            // if (!data.ConsumeDetail.length || (data.pageHelp.PageSize + (data.pageHelp.CurrentPage - 1) *  this.pageSize) >= data.pageHelp.AllCount) {  /*没有更多数据了 禁用上拉更新*/
            //   this.hasMore = false
            // }
      }
    })
  })

 
}
scrollToTop() {
this.content.scrollToTop(500);
}
scrollHandler(event) {
  // console.log(`ScrollEvent: ${event}`)
  this.zone.run(()=>{ //时时监控  change detection not part of one whole
    // console.log(this.content.scrollTop)
    if(this.content.scrollTop > 240) {
      this.backTopShow = true
    } else {
      this.backTopShow = false
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
  })
  }
}
