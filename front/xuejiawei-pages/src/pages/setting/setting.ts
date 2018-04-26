import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ForgetpasswordPage } from "../../pages/forgetpassword/forgetpassword";
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }back(){
      this.viewCtrl.dismiss();
  }
  
  items = [
    "修改个人信息",
    "修改密码",
    "问题反馈",
    "关于",
  ];
  fbtn(item){
    if (item == "修改个人信息") {
      let modal = this.modalCtrl.create('ChangeinfoPage');
      modal.present();
    }
    else if (item == "修改密码") {
      let modal = this.modalCtrl.create(ForgetpasswordPage);
      modal.present();
    }
    else if (item == "问题反馈") {
      let modal = this.modalCtrl.create('CallbackPage');
      modal.present();
    }
    else if (item == "关于") {
      let modal = this.modalCtrl.create('AboutPage');
      modal.present();
    }
    
  }
}
