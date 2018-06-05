import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThumbsupPage } from './thumbsup';

@NgModule({
  declarations: [
    ThumbsupPage,
  ],
  imports: [
    IonicPageModule.forChild(ThumbsupPage),
  ],
})
export class ThumbsupPageModule {}
