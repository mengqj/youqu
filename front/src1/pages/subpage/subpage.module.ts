import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubpagePage } from './subpage';

@NgModule({
  declarations: [
    SubpagePage,
  ],
  imports: [
    IonicPageModule.forChild(SubpagePage),
  ],
})
export class SubpagePageModule {}
