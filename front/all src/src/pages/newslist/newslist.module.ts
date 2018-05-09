import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslistPage } from './newslist';

@NgModule({
  declarations: [
    NewslistPage,
  ],
  imports: [
    IonicPageModule.forChild(NewslistPage),
  ],
})
export class NewslistPageModule {}
