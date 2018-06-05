import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-they',
  templateUrl: 'they.html',
})
export class TheyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheyPage');
  }
  show="information"
  items=[,,,];
  item=[{
    focus:100,
    fans:20,
    favor:100,
  }]
}
