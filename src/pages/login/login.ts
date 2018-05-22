import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HomePage }  from '../home/home';
import { TabsPage }  from '../tabs/tabs';
import { RegisterPage }  from '../register/register';
import { ForgetpasswordPage }  from '../forgetpassword/forgetpassword';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
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

  constructor(private alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
/*request(){
  // this.navCtrl.push(HomePage);
  let profileModal = this.modalCtrl.create(TabsPage);
  profileModal.present();
}*/
goReg(){
  this.navCtrl.push(RegisterPage);
}
headers;
username:string;
password:string;
changePwd(e){
this.password=e.target.value;
}
changeUnm(e){
this.username=e.target.value;
}
presentAlertNouser() {
  let alert = this.alertCtrl.create({
    title: '用户不存在！',
    subTitle: '请确保您的用户名输入正确',
    buttons: ['关闭']
  });
  alert.present();
}
presentAlertError() {
  let alert = this.alertCtrl.create({
    title: '用户名密码不符！',
    subTitle: '请确保您的用户名密码输入正确',
    buttons: ['关闭']
  });
  alert.present();
}
request(){
 this.headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
 this.http.post("http://35.194.153.183:8080/api/users/doLogin",JSON.stringify({userID:this.username,password:this.password,status:'login'}), {headers:this.headers} ).subscribe(data=>{
 console.log(data);
        if(data.json()==0){
          this.presentAlertNouser();
        }
        else if(data.json()==2)
        {
          this.presentAlertError();
        }
        else{
         this.navCtrl.push(HomePage);
        }
 },err=>{
   console.log("error");
 });

console.log(this.username);
console.log(this.password);
 let profileModal = this.modalCtrl.create(TabsPage);
  profileModal.present();
}

forgetpw(){
  this.navCtrl.push(ForgetpasswordPage);
}
}
