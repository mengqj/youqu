import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { BeginPage } from '../pages/begin/begin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =BeginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    if (localStorage.getItem('login')=='true') {
      this.rootPage =TabsPage;
    }
  }
}
