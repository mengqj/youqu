import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {MultiPickerModule} from 'ion-multi-picker';
import {HttpClientModule} from '@angular/common/http';

import { AboutPage } from '../pages/about/about';

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
import { SettingPage } from '../pages/setting/setting';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';

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
    SettingPage,
    TheyPage,
    LoginPage,

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
    SettingPage,
    TheyPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
