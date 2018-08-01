import { Component,Input,OnChanges,SimpleChanges  } from '@angular/core';
import {Output,EventEmitter,ViewChild } from "@angular/core";
import {UtilsProvider} from '../../providers/utils/utils'
@Component({
  selector: 'select-car-no',
  templateUrl: 'select-car-no.html'
})
export class SelectCarNoComponent  implements OnChanges   {
  provinceRow1= [{name: '京'}, {name: '津'}, {name: '冀'}, {name: '鲁'}, {name: '晋'}, {name: '蒙'}, {name: '辽'}, {name: '吉'}, {name: '黑'}, {name: '沪'}];
  provinceRow2= [{name: '苏'}, {name: '浙'}, {name: '皖'}, {name: '闽'}, {name: '赣'}, {name: '豫'}, {name: '鄂'}, {name: '湘'}, {name: '粤'}, {name: '桂'}];
  provinceRow3= [{name: '渝'}, {name: '川'}, {name: '贵'}, {name: '云'}, {name: '藏'}, {name: '陕'}, {name: '甘'}, {name: '青'}];
  provinceRow4= [{name: '琼'}, {name: '新'}, {name: '港'}, {name: '澳'}, {name: '台'}, {name: '宁'}];
  carNo1= [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}, {name: '6'}, {name: '7'}, {name: '8'}, {name: '9'}, {name: '0'}];
  carNo2= [{name: 'Q'}, {name: 'W'}, {name: 'E'}, {name: 'R'}, {name: 'T'}, {name: 'Y'}, {name: 'U'}, {name: 'I'}, {name: 'O'}, {name: 'P'}];
  carNo3= [{name: 'A'}, {name: 'S'}, {name: 'D'}, {name: 'F'}, {name: 'G'}, {name: 'H'}, {name: 'J'}, {name: 'K'}, {name: 'L'}];
  carNo4=[{name: 'Z'}, {name: 'X'}, {name: 'C'}, {name: 'V'}, {name: 'B'}, {name: 'N'}, {name: 'M'}];
  
  selectValue= [];
  childKeyBoardShow= false; //false
  popIsfadeIn= false;

  // carNoValFromParent:any;
  @Output() private childOuterSelectedValue = new EventEmitter();// 子组件主动发送数据
 // defaultValue 外部传递进来，dataSourceType 本地接收之后的参数命名
 @Input('defaultValue') dataSourceType;
 @Input('carNoValFromParent') carNoValFromParent;
 @ViewChild("carSelectBox") carSelectBox
 @ViewChild("keyboardListBox") keyboardListBox
 @ViewChild("keyboardList") keyboardList
 @ViewChild("simKeyBoard") simKeyBoard;
  constructor(public utils:UtilsProvider) {
    // console.log('Hello SelectCarNoComponent Component');
    
    // this.selectValue = this.dataSourceType
   
  }
  ngOnChanges(changes: SimpleChanges) { //changes的值是一个对象，对象下有previousValue，currentValue，firstChange属性 。。。。
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
    let carNoValFromParent = JSON.stringify(changes['carNoValFromParent'])

    this.selectValue = changes['carNoValFromParent']['currentValue']
    console.log('changes监听变化'+JSON.stringify(changes['carNoValFromParent'])); //注意这里不转字符串打印不出来

    if (carNoValFromParent && carNoValFromParent.length > 1) {
      this.childKeyBoardShow = true
    }
  }
  provinceSelect(val) {
    // alert(val)
    this.selectValue = []
    this.selectValue.push(val)
    // this.$emit('selectedValue', this.selectValue)
    this.childOuterSelectedValue.emit(this.selectValue); //父组件监听childOuterSelectedValue
    this.childKeyBoardShow = !this.childKeyBoardShow
    this.carNoValFromParent = this.selectValue
  }

  carNoSelect(val) {
    if (this.selectValue.length >= 7) {
      return
    }
    if (this.selectValue.length <= 1) {
      // this.childKeyBoardShow = !this.childKeyBoardShow
    }
    this.selectValue.push(val)
    // this.$emit('selectedValue', this.selectValue)
    this.childOuterSelectedValue.emit(this.selectValue);

    this.carNoValFromParent = this.selectValue
  }
  //删除选择的值
  deleteVal() {
    if (this.selectValue.length <= 2) {
      
      this.childKeyBoardShow = !this.childKeyBoardShow
      this.selectValue = this.selectValue.pop()
      return
    }
    this.selectValue.pop()
    // this.$emit('selectedValue', this.selectValue)
  }
  confirm() {
    this.hide()
  }
  //显示整个键盘
  show() {
    // alert('show')
    var $carSelectBox = this.carSelectBox.nativeElement
    var $keyboard = this.keyboardListBox.nativeElement
    $carSelectBox.style.display = 'block'
    this.utils.addClass($carSelectBox, 'fadeIn')
    this.utils.addClass($keyboard, 'fadeIn')
    // this.childKeyBoardShow = true
    this.popIsfadeIn = true
    // console.log('show'+ this.selectValue)
    if (this.selectValue && this.selectValue.length > 1) {
      this.childKeyBoardShow = true
    }
  }
  //隐藏整个键盘
  hide() {
    var $carSelectBox = this.carSelectBox.nativeElement
    var $keyboard = this.keyboardListBox.nativeElement
    this.utils.removeClass($carSelectBox, 'fadeIn')
    this.utils.removeClass($keyboard, 'fadeIn')
    // removeClass($carSelectBox, 'fadeIn')
    // removeClass($keyboard, 'fadeIn')
    this.popIsfadeIn = false
    
    this.childKeyBoardShow = false
    console.log('子组件：queding'+this.carNoValFromParent)
    
  }
  mywatch() {
    if (this.selectValue && this.selectValue.length > 1) {
      this.childKeyBoardShow = true
    }
  }
}
