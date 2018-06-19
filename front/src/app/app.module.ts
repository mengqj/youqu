import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MultiPickerModule} from 'ion-multi-picker';
import { CommonModule } from "@angular/common";
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { CityDataProvider} from "../providers/city-data/city-data";
import { Keyboard } from '@ionic-native/keyboard';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';



import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { BeginPage } from '../pages/begin/begin';
import { HomePage } from '../pages/home/home';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { SendtextPage } from '../pages/sendtext/sendtext';
import { GuidePage } from '../pages/guide/guide';
import { MyPage } from '../pages/my/my';
import { LaunchPage } from "../pages/launch/launch";
import { ContactPage } from "../pages/contact/contact";
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BeginPage,
    HomePage,
    DiscoveryPage,
    SendtextPage,
    GuidePage,
    MyPage,
    ContactPage,
    LaunchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:'',
      pageTransition:'ios-transition',
     backButtonIcon:"ios-arrow-back",
     dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
    }
    ),
    MultiPickerModule,
    HttpClientModule,
    CommonModule,
    HttpClientJsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BeginPage,
    HomePage,
    DiscoveryPage,
    SendtextPage,
    GuidePage,
    MyPage,
    ContactPage,
    LaunchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    FileTransferObject,
    CityDataProvider,
    Keyboard,
    ImagePicker,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
