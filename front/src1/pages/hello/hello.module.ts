import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloPage } from './hello';

@NgModule({
  declarations: [
    HelloPage,
  ],
  imports: [
    IonicPageModule.forChild(HelloPage),
  ],
})
export class HelloPageModule {}
