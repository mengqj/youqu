import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import  * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public alertCtrl:AlertController) {
  }
  username:string;
  password:string;
  password1:string;
  headers;
  changePwd1(e){
    this.password1=e.target.value;
  }
  changePwd(e){
    this.password=e.target.value;
    }

   changeUnm(e){
     this.username=e.target.value;
     }

  goAbo(){
    $('#reg,#log').attr("disabled","true");
  let url:string='http://35.194.153.183:8080/api/users/doReg';
  this.http.post(url,{
  'userName': this.username,
  'password': this.password,
  'confirmPassword':this.password1,
}).subscribe(data =>{
  if(data['state']=="success")
  {
    this.navCtrl.push('LoginPage');
  }
  else if(data['state']=="error")
  {
    $('#reg,#log').removeAttr("disabled");
    let alert = this.alertCtrl.create({
      title: "注册失败",
      subTitle: '密码位数不小于6位',
      buttons: ['OK']
    });
    alert.present();
  }
  else if(data['state']=="error"&&this.username.length<5)
  {
    $('#reg,#log').removeAttr("disabled");
    let alert = this.alertCtrl.create({
      title: "用户名错误",
      subTitle: '有户名应为'+data['message'],
      buttons: ['OK']
    });
    alert.present();
  }
  else if(data['state']=="error"&&this.password!=this.password1)
  {
    $('#reg').removeAttr("disabled");
    let alert = this.alertCtrl.create({
      title: "密码错误",
      subTitle: data['message'],
      buttons: ['OK']
    });
    alert.present();
  }

})
}
doLogin(){
  this.navCtrl.push('LoginPage');
}
}
