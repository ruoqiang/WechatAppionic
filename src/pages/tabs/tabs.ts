import { Component} from '@angular/core'; //,ViewChild 
import { HomePage } from '../home/home';
// import { UserUplaodPage } from '../user-uplaod/user-uplaod';
// import {UserCarinfoPage} from '../user-carinfo/user-carinfo'
// import {UserAddAddressPage} from '../user-add-address/user-add-address'
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { FindpasswordPage } from '../findpassword/findpassword';

// import {ApplicationRecordListPage} from '../application-record-list/application-record-list'
// import {SelectCarPage} from '../select-car/select-car'

// import { Tabs} from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = RegisterPage;
  tab4Root = FindpasswordPage;
  // tab5Root = ApplicationRecordListPage;
  // tab6Root = SelectCarPage;
  // @ViewChild('myTabs') tabRef: Tabs;
  constructor() {
  // this.nav.setRoot(TabsPage);
  // this.tabRef.select(2);
  }
  
}
