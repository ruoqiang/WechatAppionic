import { Component,Input,OnChanges,SimpleChanges  } from '@angular/core';
import {Output,EventEmitter,ViewChild} from "@angular/core";

import Picker from 'better-picker'

@Component({
  selector: 'date-picker',
  templateUrl: 'date-picker.html'
})
export class DatePickerComponent implements OnChanges {
  min= [2011, 2, 1]
  max= [2020, 12, 31]
  selectedIndex= [0, 0, 0]

  text: string;
  firstArr = [];
  secondArr =[];
  thirdArr= [];
  newYear:any
  newMonth:any
  newDater:any
  picker:any;


  @Output() selectedDefaultDateFromChild = new EventEmitter();// 子组件主动发送数据  ----类似于vue的emit派发的事件
  @Input('defaultDate') defaultDate; //接受父元素传递的值  ----类似于vue的props
 
  @ViewChild("myDate") myDate
    constructor() {
    // console.log('Hello DatePickerComponent Component');
    // this.text = 'Hello World';


    // var dateData = this.dateData() //根据min max 生成区间所有的日期数据
    // var first = []
    // var second = []
    // var third = []
    // var selectedIndex = [1, 0, 0] /* 数组第一项设置为1 修复 创建月列表少一个的问题 */
    // var checked = [0, 0, 0] /* 已选选项 */
    // this._creatList(dateData, first, (list) => { //创建年列表
    //   this.firstArr = list
    // })
    // if (dateData[selectedIndex[0]].hasOwnProperty('children')) { //创建月份列表
    //   this._creatList(dateData[selectedIndex[0]].children, second, (list) => {
    //     this.secondArr = list
    //   })
    // } else {
    //   //second = [{text: '', value: 0}]
    // }
    // if (dateData[selectedIndex[0]].children[selectedIndex[1]].hasOwnProperty('children')) { //创建日期列表
    //   this._creatList(dateData[selectedIndex[0]].children[selectedIndex[1]].children, third, (list) => {
    //     this.thirdArr = list
    //   })
    // }

    // var val = '2017-02-19'
    // var year = val.split('-')[0]
    // var month = val.split('-')[1]
    // var date = val.split('-')[2]
    // this.newYear = this._getKeyByValue(year, this.firstArr)
    // this.newMonth = this._getKeyByValue(month, this.secondArr)
    // this.newDater = this._getKeyByValue(date, this.thirdArr)
    // console.log([this.newYear, this.newMonth, this.newDater])

    // this._initDate(this.newYear, this.newMonth, this.newDater)

  }




  ngOnChanges(changes: SimpleChanges) {  //类似于vue的watch 但又有所不同
    this.defaultDate = changes['defaultDate']['currentValue']
    var val = this.defaultDate
    var dateData = this.dateData()
    var first = []
    var second = []
    var third = []
    var selectedIndex = [1, 0, 0] /* 数组第一项设置为1 修复 创建月列表少一个的问题 */
    // var checked = [0, 0, 0] /* 已选选项 */
    this._creatList(dateData, first, (list) => { //创建年列表
      this.firstArr = list
    })
    if (dateData[selectedIndex[0]].hasOwnProperty('children')) { //创建月份列表
      this._creatList(dateData[selectedIndex[0]].children, second, (list) => {
        this.secondArr = list
      })
    } else {
      //second = [{text: '', value: 0}]
    }
    if (dateData[selectedIndex[0]].children[selectedIndex[1]].hasOwnProperty('children')) { //创建日期列表
      this._creatList(dateData[selectedIndex[0]].children[selectedIndex[1]].children, third, (list) => {
        this.thirdArr = list
      })
    }
    var year = val.split('-')[0]
    var month = val.split('-')[1]
    var date = val.split('-')[2]
    this.newYear = this._getKeyByValue(year, this.firstArr) //当前年份对呀列表的位置
    this.newMonth = this._getKeyByValue(month, this.secondArr)
    this.newDater = this._getKeyByValue(date, this.thirdArr)
    console.log([this.newYear, this.newMonth, this.newDater])
    this._initDate(this.newYear, this.newMonth, this.newDater)

  }
  dateData() { //动态生成年月日
    let data = this._range(this.min[0], this.max[0], false, '')
    data.forEach(year => {
      let minMonth = year.value === this.min[0] ? this.min[1] : 1
      let maxMonth = year.value === this.max[0] ? this.max[1] : 12
      year.children = this._range(minMonth, maxMonth, true, '')
      year.children.forEach(month => {
        let day = 30
        if ([1, 3, 5, 7, 8, 10, 12].includes(month.value)) {
          day = 31
        } else {
          if (month.value === 2) {
            day = !(year.value % 400) || (!(year.value % 4) && year.value % 100) ? 29 : 28
          }
        }
        let minDay = year.value === this.min[0] && month.value === this.min[1] ? this.min[2] : 1
        let maxDay = year.value === this.max[0] && month.value === this.max[1] ? this.max[2] : day
        month.children = this._range(minDay, maxDay, true, '')
      })
    })
    return data
  }
  _initDate(InitYear, InitMonth, InitDate) {
    var selectedYear = InitYear || 0
    var selectedMonth = InitMonth || 0
    var selectedDate = InitDate || 0
    var that = this
    var dateEl = this.myDate.nativeElement //this.keyboardListBox.nativeElement
     var first = [] /* 年 */
     var second = [] /* 月 */
     var third = [] /* 日 */
     var selectedIndex = [selectedYear, selectedMonth, selectedDate] /* 默认选中的日期 */
     var checked = [0, 0, 0] /* 已选选项 */
     var dateData = that.dateData()
     this._creatList(dateData, first, (list) => {
       // console.log('first:', list)
       this.firstArr = list
     })
    
     if (dateData[selectedIndex[0]].hasOwnProperty('children')) {
       console.log('-----', dateData[selectedIndex[0]])
       this._creatList(dateData[selectedIndex[0]].children, second, (list) => {
         // console.log('second:', list)
         this.secondArr = list
       })
     } else {
       second = [{text: '', value: 0}]
     }
     if (dateData[selectedIndex[0]].children[selectedIndex[1]].hasOwnProperty('children')) {
       this._creatList(dateData[selectedIndex[0]].children[selectedIndex[1]].children, third, (list) => {
         // console.log('third:', list)
         this.thirdArr = list
       })
     } else {
       third = [{text: '', value: 0}]
     }
     if(!this.picker) {
        this.picker = new Picker({data: [first, second, third], selectedIndex: selectedIndex, title: '日期选择'
      })
     }
     
    // this.picker = new Picker({data: [data1], selectedIndex: [0], title: '选择车牌颜色'})
    dateEl.addEventListener('click', function() {
      that.picker.show()
      // that.picker.refillColumn(0, this.firstArr)
      // that.picker.refillColumn(0, 2)
     })
    this.picker.on('picker.select', function (selectedVal, selectedIndex) {
     var text1 = first[selectedIndex[0]].text
     var text2 = second[selectedIndex[1]].text
     var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : ''
     var selectedDate = text1 + '-' + text2 + '-' + text3
     dateEl.innerText = selectedDate
    //  that.$emit('selectedDate', selectedDate)
     that.selectedDefaultDateFromChild.emit(selectedDate);
     console.log('selectedIndex:', selectedIndex)
   })
   /**每一项的值改变之后**/
   this.picker.on('picker.change', function(index, selectedIndex) {
     // console.log('picker.change', index)
     // console.log('picker.change', selectedIndex)
     if (index === 0) {
       firstChange()
     } else if (index === 1) {
       secondChange()
     }
     function firstChange() {
      second = []
      third = []
      checked[0] = selectedIndex
      var firstCity = dateData[selectedIndex]
      if (firstCity.hasOwnProperty('children')) {
        that._creatList(firstCity.children, second)

        var secondCity = dateData[selectedIndex].children[0]
        if (secondCity.hasOwnProperty('children')) {
          that._creatList(secondCity.children, third)
        } else {
          third = [{text: '', value: 0}]
          checked[2] = 0
        }
      } else {
        second = [{text: '', value: 0}]
        third = [{text: '', value: 0}]
        checked[1] = 0
        checked[2] = 0
      }
      that.picker.refillColumn(1, second)
      that.picker.refillColumn(2, third)
      that.picker.scrollColumn(1, 0)
      that.picker.scrollColumn(2, 0)
    }
    function secondChange() {
      third = []
      checked[1] = selectedIndex
      var firstIndex = checked[0]
      if (dateData[firstIndex].children[selectedIndex].hasOwnProperty('children')) {
        var secondCity = dateData[firstIndex].children[selectedIndex]
        that._creatList(secondCity.children, third)
        that.picker.refillColumn(2, third)
        that.picker.scrollColumn(2, 0)
      } else {
        third = [{text: '', value: 0}]
        checked[2] = 0
        that.picker.refillColumn(2, third)
        that.picker.scrollColumn(2, 0)
      }
    }
   })
   that.picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
      // console.log('picker.valuechange', selectedVal)
      // console.log(selectedIndex)
    })
   
  }
  _getKeyByValue(val, arr) {
    
    var ret = ''
        arr.forEach(function(item, i) {
          if (item['text'] === val) {
            ret = item['value']
            return false
          }
        })
        return ret

      }
    _creatList(obj, list, cb?) {
     obj.forEach(function(item, index, arr) {
       var temp = {}
       temp['text'] = item.text
       temp['value'] = index
       list.push(temp)
     })
     // console.log(list)
     cb && cb(list)
   }
   hide() {
     // this.$refs.cascadePicker.hide()
   }
   select(selectedVal, selectedIndex, selectedText) {
     // this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
   }
   cancel() {
     // this.$emit(EVENT_CANCEL)
   }
   _range(n, m, polyfill = false, unit = '') {
    let arr = []
    for (let i = n; i <= m; i++) {
      let value = (polyfill && i < 10 ? '0' + i : i) + unit
      arr.push({
        text: value,
        value: i
      })
    }
    return arr
  }
}
