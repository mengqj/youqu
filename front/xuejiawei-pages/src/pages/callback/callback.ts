import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-callback',
  templateUrl: 'callback.html',
})
export class CallbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  back() {
    this.viewCtrl.dismiss();
  }
  submit(){
    
  }
}
