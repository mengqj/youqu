import { Component } from '@angular/core';

import { SettingPage } from "../setting/setting";
import { ForgetpasswordPage } from "../forgetpassword/forgetpassword";
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SettingPage;
  tab3Root = ForgetpasswordPage;

  constructor() {

  }
}
