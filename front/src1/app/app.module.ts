import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpModule,JsonpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HelloPage } from '../pages/hello/hello';
import { SubpagePage } from '../pages/subpage/subpage';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CDVPhotoLibraryPipe } from '../app/cdvphotolibrary.pipe';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { EditPage } from '../pages/edit/edit';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelloPage,
    SubpagePage,
    LoginPage ,
    RegisterPage,
    EditPage,
    ItemDetailsPage,
    CDVPhotoLibraryPipe
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelloPage,
    SubpagePage,
    LoginPage ,
    EditPage,
    ItemDetailsPage,
    RegisterPage
  
  ],
  providers: [
    Camera,
    ImagePicker,
    StatusBar,
    SplashScreen,
    PhotoLibrary,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
