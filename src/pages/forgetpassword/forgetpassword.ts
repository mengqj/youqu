import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import { SendyzmPage } from "../sendyzm/sendyzm";
@IonicPage()
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
})
export class ForgetpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }
  back(){
      this.viewCtrl.dismiss();
  }
  sendyzm(){
    let modal = this.modalCtrl.create(SendyzmPage);
    modal.present();
  }
}