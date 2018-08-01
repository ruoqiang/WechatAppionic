import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserCarinfoPage } from './user-carinfo';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    // ComponentsModule,//注意不是这里导入，否则会报错
    UserCarinfoPage
  ],
  imports: [
    ComponentsModule, //注意是这里导入
    
    IonicPageModule.forChild(UserCarinfoPage)
  ],
})
export class UserCarinfoPageModule {}
