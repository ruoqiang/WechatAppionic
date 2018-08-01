import { NgModule } from '@angular/core';
import { FormateMoneyPipe } from './formate-money/formate-money';
import { FormateDatePipe } from './formate-date/formate-date';

import { BrowserModule } from '@angular/platform-browser';
//引入ionic-angular
import { IonicModule} from 'ionic-angular';
@NgModule({
	declarations: [FormateMoneyPipe,
    FormateDatePipe],
	imports: [BrowserModule,  
		IonicModule.forRoot(PipesModule)    /*注入IonicModule  注意写法PipesModule为你当前的管道名称*/],
	exports: [FormateMoneyPipe,
    FormateDatePipe]
})
export class PipesModule {}
