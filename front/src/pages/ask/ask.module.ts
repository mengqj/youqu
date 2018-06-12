import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AskPage } from './ask';

@NgModule({
  declarations: [
    AskPage,
  ],
  imports: [
    IonicPageModule.forChild(AskPage),
  ],
})
export class AskPageModule {}
