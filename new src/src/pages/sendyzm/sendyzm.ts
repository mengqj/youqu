import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-sendyzm',
  templateUrl: 'sendyzm.html',
})
export class SendyzmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }
  back() {
    this.viewCtrl.dismiss();
  }
  makesure() {

  }

}
