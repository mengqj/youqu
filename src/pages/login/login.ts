import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HomePage }  from '../home/home';
import { TabsPage }  from '../tabs/tabs';
import { RegisterPage }  from '../register/register';
import { ForgetpasswordPage }  from '../forgetpassword/forgetpassword';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
request(){
  // this.navCtrl.push(HomePage);
  let profileModal = this.modalCtrl.create(TabsPage);
  profileModal.present();
}
goReg(){
  this.navCtrl.push(RegisterPage);
}
forgetpw(){
  this.navCtrl.push(ForgetpasswordPage);
}
}
