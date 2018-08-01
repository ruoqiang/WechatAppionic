import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillDetailPage } from './bill-detail';
import {PipesModule} from '../../pipes/pipes.module'
@NgModule({
  declarations: [
    BillDetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(BillDetailPage),
  ],
})
export class BillDetailPageModule {}
