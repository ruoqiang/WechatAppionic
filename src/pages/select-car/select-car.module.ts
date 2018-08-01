import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCarPage } from './select-car';

@NgModule({
  declarations: [
    SelectCarPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCarPage),
  ],
})
export class SelectCarPageModule {}
