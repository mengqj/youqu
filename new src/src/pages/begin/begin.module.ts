import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeginPage } from './begin';

@NgModule({
  declarations: [
    BeginPage,
  ],
  imports: [
    IonicPageModule.forChild(BeginPage),
  ],
})
export class BeginPageModule {}
