// import { NgModule } from '@angular/core';
// import { IonicPageModule,IonicModule } from 'ionic-angular';
// import { SelectCarNoComponent } from './select-car-no/select-car-no';
// import { SelectCarNo2Component } from './select-car-no2/select-car-no2';
// @NgModule({
// 	declarations: [SelectCarNoComponent,
//     SelectCarNo2Component],
// 	imports: [IonicPageModule,  
// 		IonicModule.forRoot(SelectCarNoComponent)
// 	 ],
// 	exports: [SelectCarNoComponent,
//     SelectCarNo2Component]
// })
// export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { SelectCarNoComponent } from './select-car-no/select-car-no';


//引入BrowserModule  解决 ngFor报错的问题
import { BrowserModule } from '@angular/platform-browser';

//引入ionic-angular
import { IonicModule} from 'ionic-angular';

import { SelectCarNo2Component } from './select-car-no2/select-car-no2';
import { AreaPickerComponent } from './area-picker/area-picker';
import { CustomToastComponent } from './custom-toast/custom-toast';
import { DatePickerComponent } from './date-picker/date-picker';


@NgModule({
	declarations: [SelectCarNoComponent,
	SelectCarNo2Component,
    AreaPickerComponent,
    CustomToastComponent,
    DatePickerComponent],
	imports: [
	 BrowserModule,  
	 IonicModule.forRoot(ComponentsModule)    /*注入IonicModule  注意写法ComponentsModule为你当前的模块名称*/
	
	],  /*依赖注入*/
	exports: [SelectCarNoComponent,
		SelectCarNo2Component,
    AreaPickerComponent,
    CustomToastComponent,
    DatePickerComponent]
})
export class ComponentsModule {}
