import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordCarPage } from './record-car';
import {ComponentsModule} from "../../components/components.module";
import {PipesModule} from '../../pipes/pipes.module'
@NgModule({
  declarations: [
    RecordCarPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(RecordCarPage),
  ],
})
export class RecordCarPageModule {}
