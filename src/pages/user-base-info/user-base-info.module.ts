import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserBaseInfoPage } from './user-base-info';

@NgModule({
  declarations: [
    UserBaseInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserBaseInfoPage),
  ],
})
export class UserBaseInfoPageModule {}
