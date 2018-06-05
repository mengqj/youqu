import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {MultiPickerModule} from 'ion-multi-picker';
import { HttpClientModule, JsonpClientBackend,HttpClientJsonpModule } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
import {Jsonp, JsonpModule} from "@angular/http";

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeginPage } from '../pages/begin/begin';
import { ClausePage } from '../pages/clause/clause';
import { GuanzhuPage } from '../pages/guanzhu/guanzhu';
import { LaunchPage } from '../pages/launch/launch';
import { MyPage } from '../pages/my/my';
import { PlusPage } from '../pages/plus/plus';
import { QuestionPage } from '../pages/question/question';
import { RecommendPage } from '../pages/recommend/recommend';
import { TheyPage } from '../pages/they/they';
import { CallbackPage } from '../pages/callback/callback';
import { CameraPage } from '../pages/camera/camera';
import { ChangeinfoPage } from '../pages/changeinfo/changeinfo';
import { ContentPage } from '../pages/content/content';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { EditPage } from '../pages/edit/edit';
import { ForgetpasswordPage } from '../pages/forgetpassword/forgetpassword';
import { GuidePage } from '../pages/guide/guide';
import { RegisterPage } from '../pages/register/register';
import { SendtextPage } from '../pages/sendtext/sendtext';
import { SendyzmPage } from '../pages/sendyzm/sendyzm';
import { SettingPage } from '../pages/setting/setting';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { NewslistPage } from '../pages/newslist/newslist';
import { ThumbsupPage } from '../pages/thumbsup/thumbsup';
import {  PhotoPage } from '../pages/photo/photo';
import {  ClicktextPage } from '../pages/clicktext/clicktext';
import {  MorecityPage } from '../pages/morecity/morecity';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    BeginPage,
    CallbackPage,
    CameraPage,
    ChangeinfoPage,
    ClausePage,
    ContactPage,
    ContentPage,
    DiscoveryPage,
    EditPage,
    ForgetpasswordPage,
    GuanzhuPage,
    GuidePage,
    LaunchPage,
    MyPage,
    PlusPage,
    QuestionPage,
    RecommendPage,
    RegisterPage,
    SendtextPage,
    SendyzmPage,
    SettingPage,
    TheyPage,
    LoginPage,
    NewslistPage,
    ThumbsupPage,
    PhotoPage,ClicktextPage,
    MorecityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:'',
      pageTransition:'ios-transition',
		 backButtonIcon:"ios-arrow-back",
    }
    ),
    MultiPickerModule,
    HttpClientModule,
    JsonpModule,
    HttpClientJsonpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BeginPage,
    CallbackPage,
    CameraPage,
    ChangeinfoPage,
    ClausePage,
    ContactPage,
    ContentPage,
    DiscoveryPage,
    EditPage,
    ForgetpasswordPage,
    GuanzhuPage,
    GuidePage,
    LaunchPage,
    MyPage,
    PlusPage,
    QuestionPage,
    RecommendPage,
    RegisterPage,
    SendtextPage,
    SendyzmPage,
    SettingPage,
    TheyPage,
    LoginPage,
    NewslistPage,ThumbsupPage,
    PhotoPage,ClicktextPage,
    MorecityPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    ImagePicker,
    Keyboard,
    
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
