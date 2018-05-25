import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendtextPage } from './sendtext';

@NgModule({
  declarations: [
    SendtextPage,
  ],
  imports: [
    IonicPageModule.forChild(SendtextPage),
  ],
})
export class SendtextPageModule {}
