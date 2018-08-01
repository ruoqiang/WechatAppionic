import { Component,ViewChild,NgZone  } from '@angular/core';
import { NavController, NavParams,Content  } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import {RestProvider} from '../../providers/rest/rest'
// import BScroll from 'better-scroll'
import {UtilsProvider} from '../../providers/utils/utils'
/**
 * Generated class for the RecordCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var window
@Component({
  selector: 'page-record-car',
  templateUrl: 'record-car.html',
})
export class RecordCarPage {
  public token:string;
  public recordList:Array<object> = [];
  scrollAmount  = 0
  @ViewChild("wrapper") wrapper;// html中引用组件
  @ViewChild("recordCar") recordCar;// html中引用组件
  @ViewChild("recordImg") recordImg;// html中引用组件
  @ViewChild("datePicker1") datePicker1;// html中引用组件 组件与dom元素一样通过加#获取引用
  @ViewChild("datePicker2") datePicker2;// html中引用组件
  @ViewChild("customToast") customToast;// html中引用组件
  
  @ViewChild(Content) content: Content;

  backTopShow= false
    defaultDate= '2016-02-10' //注意组件内部 当日期发生变化了才会初始化
    defaultDate2= '2018-05-12'
    carNo=''
    pageSize = 20
    page= 0
    pullup= true
    beforeScroll= true
    hasMore= true
    ajaxLoaingShow= true
    // mask=true//防止点击上一个列表触摸这个页面的日期选择
    tipsText= '开始日期不能大于结束日期'
    scroll:any;
    btnDisable:Boolean = false
    isLoadingMore = false
    isShowNoListTips = false
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public rest: RestProvider,public utils: UtilsProvider,public zone: NgZone) {
    this.defaultDate = utils.getNowDate(-30)
    this.defaultDate2 = utils.getNowDate()
  }

  ionViewDidEnter() { //ionViewWillEnter
    // this._initScrollHeight()
    this.storage.get('carListInfo').then((data) => {
      if (data != null) {
        console.log(data);
        this.carNo = data.CarNum
        this.loadMore()
      }
    })
  }
  _initScrollHeight () {
    var domRecordCar = this.recordCar.nativeElement
    var domRecordImg = this.recordImg.nativeElement
    let _height = domRecordCar.clientHeight
    let _imgHeight = domRecordImg.clientHeight
    
    console.log(domRecordCar);
    this.wrapper.nativeElement.style.height = `${_height - _imgHeight - 30}px`
  }
  
  loadMore(infiniteScroll?) {
    var that = this
    this.isLoadingMore = true //网络请求慢的时候可以遮盖住页面禁止继续上拉加载
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
          CarNo: this.carNo,
          outTimeBefore: this.defaultDate + ' 00:00:00', //this.defaultDate,
          outTimeAfter: this.defaultDate2 + ' 23:59:59',
          pageHelp: {
            "CurrentPage": this.page, //当前页
            "PageSize": this.pageSize //每页显示行数
          }
        }
      }
      this.rest.doPost(api,params, (ret)=> {
        if(ret.issuccess) {
         
            if(ret.result.ConsumeDetail ===null) ret.result.ConsumeDetail = [] //特殊处理
            that.recordList = that.recordList.concat(ret.result.ConsumeDetail)
            that.isLoadingMore = false //是否正在加载控制遮罩的显示
            that.isShowNoListTips = that.recordList.length == 0 ? true : false
            if(infiniteScroll){
              infiniteScroll.complete();   /*请求完成数据更新页面*/
              let data = ret.result
              if (!data.ConsumeDetail.length || (data.pageHelp.PageSize + (data.pageHelp.CurrentPage - 1) *  this.pageSize) >= data.pageHelp.AllCount) {  /*没有更多数据了 禁用上拉更新*/
                // infiniteScroll.enable(false);  //一个页面可以多次加载，不要禁用销毁掉 改为隐藏掉
                this.hasMore = false
              }
            }
        }
      })
    })

   
  }
   /*上拉更新*/
   doInfinite(infiniteScroll){  /*接收事件对象传值*/
    // console.log('11111')
    this.loadMore(infiniteScroll);     
  }
 
  _searchList() {
    let validateDate = this.validateDate(this.defaultDate, this.defaultDate2)
    if (!validateDate) {
      this.customToast.show('开始时间不能大于结束时间',1000)
      return
    }
    this.hasMore = true //重置为初始值
    this.ajaxLoaingShow = true //重置为初始值
    this.page = 0 //重置为初始值
    this.recordList = [] //重置为初始值
    this.loadMore()
    setTimeout(() => {
      this.ajaxLoaingShow = false
    }, 600)
  }
  // backTop(e) {
  //   // this.$refs.listRecord.backTop() this.scroll.backTop()
  //   // this.scroll.scrollTo(0, 0, 500)
  //   this.scroll.scrollTo(0, 0, 500)
  // }
  scrollToTop() {
    setTimeout(() => {
      this.content.scrollToTop(500);
  }, 100);
  }
  scrollHandler(event) {
    console.log(`ScrollEvent: ${event}`)
    this.zone.run(()=>{ //时时监控  change detection not part of one whole
      // since scrollAmount is data-binded,
      // the update needs to happen in zone
      // console.log(this.content.scrollTop)
      if(this.content.scrollTop > 350) {
        this.backTopShow = true
      } else {
        this.backTopShow = false
      }
    })
  }

  ionScrollEnd(event) {

    // console.log('ionScrollEnd:' + this.content.scrollTop)
// alert('ionScrollEnd')
    // this.content.scrollTo(0, this.content.scrollTop - 200, 0)
  }
  scrollPos(pos) {
    // console.log(pos)
    if (pos.y < -160) {
      this.backTopShow = true
    } else {
      this.backTopShow = false
    }
  }
  validateDate(date1, date2) {
    let newdate1 = new Date(date1).getTime()
    let newdate2 = new Date(date2).getTime()
    return newdate1 - newdate2 > 0 ? 0 : 1
  }
  selectedDefaultDateFromChild(data) {
    console.log('selectedDefaultDateFromChild---' ,data)
    this.defaultDate = data;
  }
  selectedDefaultDateFromChild2(data) {
    console.log('selectedDefaultDateFromChild2---' ,data)
    this.defaultDate2 = data;
  }
}
