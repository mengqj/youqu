import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
show="information"
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }
items=[,,,];
item=[{
  focus:100,
  fans:20,
  favor:100,
}];
setting(){
  this.navCtrl.push(SettingPage);
}


}
