import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClicktyPage } from './clickty';

@NgModule({
  declarations: [
    ClicktyPage,
  ],
  imports: [
    IonicPageModule.forChild(ClicktyPage),
  ],
})
export class ClicktyPageModule {}
