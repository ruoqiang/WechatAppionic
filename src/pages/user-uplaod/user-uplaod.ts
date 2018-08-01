import { Component } from '@angular/core';
//NavController, NavParams,
import { normalizeURL, NavController, NavParams, ViewController, ToastController, ModalController, LoadingController, ActionSheetController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import {LoginPage} from '../login/login'
import {UserAddAddressPage} from '../user-add-address/user-add-address'

//导入四个外部加载进来的组件
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions} from '@ionic-native/camera';

import {ConfigProvider} from '../../providers/config/config'
declare var cordova: any; //导入第三方的库定义到 TS 项目中
/**
 * Generated class for the UserUplaodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-user-uplaod',
  templateUrl: 'user-uplaod.html',
})
export class UserUplaodPage extends BaseUI {
  userApplyStep:any;
  token = "";
  btnDisable:Boolean=false;
  userId: string;
  errorMessage: string;
  lastImage: string = null;
  base64Image: any;
  testBase64 ='assets/imgs/pic01.png';
  
  Relation = '';
    params1 = {IDfication: '182541111',TypeID: 1011,Relation: ''}
    params2 = {IDfication: '182541112',TypeID: 1012,Relation: ''}
    params3 = {IDfication: '182541113',TypeID: 1013,Relation: ''}
    params4 = {IDfication: '182541114',TypeID: 1014,Relation: ''}
    params5={IDfication: '182541114',TypeID: 1015,Relation: ''}
    params6= {IDfication: '182541114', TypeID: 1016, Relation: ''}
    uploadImgSrc = [{src: 'assets/imgs/pic01.png',isUploaded: false,IDfication: '上传身份证正面照',TypeID: 1011},
      {src: 'assets/imgs/pic02.png',isUploaded: false,IDfication: '上传身份证反面照',TypeID: 1012},
      {src: 'assets/imgs/pic03.png',isUploaded: false,IDfication: '上传驾驶证正页照',TypeID: 1013},
      {src: 'assets/imgs/pic04.png',isUploaded: false, IDfication: '上传驾驶证副页照',TypeID: 1014},
      {src: 'assets/imgs/pic01.png',isUploaded: false,IDfication: '上传行驶证正面照',TypeID: 1015},
      {src: 'assets/imgs/pic02.png',isUploaded: false,IDfication: '上传行驶证反面照',TypeID: 1016}]
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public transfer: Transfer,
    public file: File,
    public filePath: FilePath,
    public platform: Platform,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public config:ConfigProvider
  ) {
    super();
    this.getCarInfo();
  }

    gotoAddAddress() {
    this.navCtrl.push(UserAddAddressPage);
  }
  ionViewDidEnter() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        this.userId = val;
      }
    });
  }

  presentActionSheet(idx) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择图片',
      buttons: [
        {
          text: '从图片库中选择',
          handler: () => {
            // alert(JSON.stringify(this.camera))
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY,idx);
          }
        },
        {
          text: '使用相机',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA,idx);
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType,idx?) {
    //定义相机的一些参数
    var options = {
      quality: 50, //图片的质量
      targetWidth:400,  /*宽度高度要设置*/
      targetHeight:400,
      sourceType: sourceType,
      saveToPhotoAlbum: false, //是否保存拍摄的照片到相册中去
      correctOrientation: true, //是否纠正拍摄的照片的方向
      // destinationType: this.camera.DestinationType.FILE_URI,  /*返回的类型*/
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit:true,
    };

    //获取图片的方法
    this.camera.getPicture(options).then((imagePath) => {
      // alert('imagePath' + imagePath)
      //特别处理 android 平台的文件路径问题
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath) //获取 android 平台下的真实路径
          .then(filePath => {
            //获取正确的路径
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            //获取正确的文件名
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(),idx);
          });
      }
      else {
        //获取正确的路径
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        //获取正确的文件名
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName(),idx);
      }
      this.lastImage = imagePath
      // alert('imagePath' + imagePath)
      let base64Image = 'data:image/jpeg;base64,' + imagePath; //插件提供原生的 --注意输出类型设置destinationType: this.camera.DestinationType.DATA_URL,
      // this.uploadImgSrc[idx]['src'] = base64Image
      // this.uploadImgSrc[idx]['isUploaded'] = true


      this.begainUpload(base64Image,idx)
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
    }, (err) => {
      // super.showToast(this.toastCtrl, err);
      alert(err)
      // super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
    });
  }
  begainUpload(imageBase64Data, index) {
     
      var params = {
        token: this.token,
        data: {
            IDfication: this.uploadImgSrc[index]['IDfication'],
            TypeID: this.uploadImgSrc[index]['TypeID'],
            Relation: this.userApplyStep.apply.Relation,
            FileBase64: imageBase64Data
        }
      }
      this.btnDisable = true
      var api='SubInfo/SubPhoto';
      this.rest.doPost(api,params, (ret)=> {
        // console.log('用户信息:', ret.result.apply)
        if(ret.issuccess) {
          this.uploadImgSrc[index]['src'] = this.config.apiUrl + ret.result.Url
          this.uploadImgSrc[index]['isUploaded'] = true
          // this.getUserInfo()
          this.btnDisable = false
        }else {
          super.showToast(this.toastCtrl, ret.message);
          this.navCtrl.push(LoginPage);
          this.btnDisable = false
        }
      })
  }
  //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用  ---转base64后走开始上传接口
  copyFileToLocalDir(namePath, currentName, newFileName,idx) {
    // var me = this;
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      //  let lastImage = newFileName;
      // alert('存储图片到本地图库lastImage'+ lastImage)
      //转base64
      // var that = this;
      // alert(idx)
    }, error => {
      // super.showToast(this.toastCtrl, "存储图片到本地图库出现错误。");
    });
  }

  //为文件生成一个新的文件名
  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg"; //拼接文件名
    return newFileName;
  }

  //处理图片的路径为可以上传的路径
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return normalizeURL(cordova.file.dataDirectory + img);
    }
  }
  
  public  convertImgToBase64(url, callback, outputFormat?){
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png' , 0.5);
        callback.call(this, dataURL);
        canvas = null;
    };
    img.src = url;
}
  uploadImage() {
    var url = 'https://imoocqa.gugujiankong.com/api/account/uploadheadface';//SubInfo/SubPhoto
    var targetPath = this.pathForImage(this.lastImage);
    var filename = this.userId + ".jpg"; //定义上传后的文件名
    alert('上传的参数filename'+ filename)
    //fileTransfer 上传的参数
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: { 'fileName': filename, 'userid': this.userId }
    };

    const fileTransfer: TransferObject = this.transfer.create();

    var loading = super.showLoading(this.loadingCtrl, "上传中...");

    //开始正式地上传
    fileTransfer.upload(targetPath, url, options).then(data => {
      alert('开始正式地上传' + data)
      loading.dismiss();
      super.showToast(this.toastCtrl, "图片上传成功。");
      //在用户看清弹窗提示后进行页面的关闭
      setTimeout(() => {
        this.viewCtrl.dismiss();
      }, 3000);
    }, err => {
      loading.dismiss();
      super.showToast(this.toastCtrl, "图片上传发生错误，请重试。");
    });
    
  }


  doCamera(){
    const options: CameraOptions = {
      quality: 10, //图片质量
      destinationType: this.camera.DestinationType.FILE_URI,  /*返回的类型*/
      encodingType: this.camera.EncodingType.JPEG,


      sourceType:this.camera.PictureSourceType.CAMERA,
      // mediaType: this.camera.MediaType.PICTURE,
      allowEdit:true,
      targetWidth:400,  /*宽度高度要设置*/
      targetHeight:400
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // 返回拍照的地址     
        /*
        base64的地址
         this.camera.DestinationType.DATA_URL
         this.base64Image = 'data:image/jpeg;base64,' + imageData;
        */
        // this.base64Image=imageData;
        // alert('doCamera:base64Image'+ imageData)
        var that = this;
        this.convertImgToBase64(imageData, function(retBase64Img){
          that.base64Image = retBase64Img
          that.testBase64 = retBase64Img
          // alert(retBase64Img);
      },'jpeg')
    }, (err) => {
      // Handle error
      alert(err)
    });


  }
  getCarInfo () {
    
    var api='SubInfo/CheckStep'; //获取用户信息接口
    var  locationConifg = this.config.apiUrl; //测试app域名 'http://wechat.chepass.com:8021/'
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
          let listPhotoArr = ret.result.listphoto
          this.userApplyStep = ret.result
          if (listPhotoArr && listPhotoArr.length > 0) {
            console.log(listPhotoArr)
            listPhotoArr.forEach((item) => {
              let oldTypeID = item.TypeID.toString()
              let index = oldTypeID.substr(oldTypeID.length - 1, 1) -1 //index 的索引根据TypeID字段最后一个值来确定
              this.uploadImgSrc[index]['src'] = locationConifg + item.Url
              this.uploadImgSrc[index]['isUploaded'] = true
            })
          }
        }else {
          this.navCtrl.push(LoginPage);
        }
      })
    })
  }

  nextPage() {
    if (!this.uploadImgSrc[0]['isUploaded']) {
      super.showToast(this.toastCtrl, `请选择${this.uploadImgSrc[0]['IDfication']}`);
      return false
    }
    if (!this.uploadImgSrc[1]['isUploaded']) {
      super.showToast(this.toastCtrl, `请选择${this.uploadImgSrc[1]['IDfication']}`);
      return false
    }
    if (!this.uploadImgSrc[2]['isUploaded']) {
      super.showToast(this.toastCtrl, `请选择${this.uploadImgSrc[2]['IDfication']}`);
      return false
    }
    if (!this.uploadImgSrc[3]['isUploaded']) {
      super.showToast(this.toastCtrl, `请选择${this.uploadImgSrc[3]['IDfication']}`);
      return false
    }
    if (!this.uploadImgSrc[4]['isUploaded']) {
      super.showToast(this.toastCtrl, `请选择${this.uploadImgSrc[4]['IDfication']}`);
      return false
    }
    if (!this.uploadImgSrc[5]['isUploaded']) {
      super.showToast(this.toastCtrl, `请选择${this.uploadImgSrc[5]['IDfication']}`);
      return false
    }
    this.navCtrl.push(UserAddAddressPage);
  }
}


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
