import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAddAddressPage } from './user-add-address';
import {ComponentsModule} from "../../components/components.module";
@NgModule({
  declarations: [
    UserAddAddressPage,
  ],
  imports: [
    ComponentsModule, //注意是这里导入
    IonicPageModule.forChild(UserAddAddressPage),
  ],
})
export class UserAddAddressPageModule {}
