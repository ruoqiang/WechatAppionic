import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplicationRecordListPage } from './application-record-list';
@NgModule({
  declarations: [
    ApplicationRecordListPage
  ],
  imports: [
    IonicPageModule.forChild(ApplicationRecordListPage),
  ],
})
export class ApplicationRecordListPageModule {}
