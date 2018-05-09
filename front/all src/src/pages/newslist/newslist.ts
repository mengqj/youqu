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
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslistPage');
  }

  goInfo(){
    this.navCtrl.push(ThumbsupPage);
  }
}
