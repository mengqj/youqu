import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-sendtext',
  templateUrl: 'sendtext.html',
})
export class SendtextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }
  back(){
    this.viewCtrl.dismiss();
}
}
