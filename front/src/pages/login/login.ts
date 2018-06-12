import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { TabsPage }  from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import  * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,public http:HttpClient,public alertCtrl:AlertController) {
  }

  username:string;
  password:string;
  headers;
  changePwd(e){
    this.password=e.target.value;
    }
   changeUnm(e){
     this.username=e.target.value;
     }
request(){
$('#log,#reg').attr('disabled','true');
let url:string='http://35.194.153.183:8080/api/users/doLogin';
this.http.post(url,{
  'userName': this.username,
  'password': this.password
})
.subscribe(
  data=> {
   if(data['state']=="success")
  {
    this.navCtrl.push(TabsPage,{
      name:this.username
    });
    let url:string='http://35.194.153.183:8080/api/users/getId?userName='+this.username;
    this.http.get(url).subscribe(val=>{
    localStorage.setItem('ID',val['id']);
    localStorage.setItem('userName',this.username);
    localStorage.setItem('login','true');

    })
  }
  else if(data['state']=="error"&& data['type']=="ERROR_PARAMS")
  {
    $('#log,#reg').removeAttr('disabled');
      let alert = this.alertCtrl.create({
        title: "密码错误",
        subTitle: data['message'],
        buttons: ['OK']
      });
      alert.present();

  }
  else if(data['state']=="error")
  {
    $('#log,#reg').removeAttr('disabled');
    let alert = this.alertCtrl.create({
      title: "请重新登录",
      subTitle: data['message'],
      buttons: ['OK']
    });
    alert.present();
  }
}
 );
}
goReg(){
  this.navCtrl.push('RegisterPage');
}
}
