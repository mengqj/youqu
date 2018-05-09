import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchPage } from './launch';

@NgModule({
  declarations: [
    LaunchPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchPage),
  ],
})
export class LaunchPageModule {}
