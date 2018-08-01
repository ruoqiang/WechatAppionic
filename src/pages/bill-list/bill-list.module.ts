import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillListPage } from './bill-list';

@NgModule({
  declarations: [
    BillListPage,
  ],
  imports: [
    IonicPageModule.forChild(BillListPage),
  ],
})
export class BillListPageModule {}
