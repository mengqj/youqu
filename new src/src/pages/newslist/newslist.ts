import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThumbsupPage } from '../thumbsup/thumbsup';

/**
 * Generated class for the NewslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newslist',
  templateUrl: 'newslist.html',
})

export class NewslistPage {
  items=[{
    news:'您反馈的意见我们已接收',
    time:'05-31 08:00'
  },
  {
    news:'感谢您提出宝贵意见',
    time:'06-01 17:00'
  },{
    news:'感谢您提出宝贵意见',
    time:'06-01 17:00'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslistPage');
  }

  goInfo(){
    this.navCtrl.push(ThumbsupPage);
  }

  removeItem(item){
    for(var i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
  }

}
