import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HomePage }  from '../home/home';
import { TabsPage }  from '../tabs/tabs';
import { RegisterPage }  from '../register/register';
import { ForgetpasswordPage }  from '../forgetpassword/forgetpassword';
import {HttpClient} from "@angular/common/http";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,private http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

request(){
  // this.navCtrl.push(HomePage);
  let profileModal = this.modalCtrl.create(TabsPage);
  var params = {
    userName: 'abcdefgs',
    gender: 'f',
    email:'12345@126.com'
  };
  let url:string='http://localhost:8080/api/users/updateInfo';
  this.http.post(url,params)
  .subscribe(
    data => {
      console.log(data['state']);
    }
);

  profileModal.present();
}
goReg(){
  this.navCtrl.push(RegisterPage);
}
forgetpw(){
  this.navCtrl.push(ForgetpasswordPage);
}
}
