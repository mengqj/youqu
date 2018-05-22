import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage }  from '../login/login';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private alertCtrl:AlertController,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
  }
   headers;
   username:string;
   password:string;
   password1:string;
   changePwd(e){
   this.password=e.target.value;
   }
   changePwd1(e){
    this.password=e.target.value;
    }
   changeUnm(e){
   this.username=e.target.value;
   }
   presentAlertNouser() {
     let alert = this.alertCtrl.create({
       title: '用户已存在！',
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
    this.http.post("http://35.194.153.183:8080/api/users/doReg",JSON.stringify({userID:this.username,password:this.password,password1:this.password1,status:'register'}), {headers:this.headers} ).subscribe(data=>{
    console.log(data);
           if(data.json()==0){
             this.presentAlertNouser();
           }
           else if(data.json()==2)
           {
             this.presentAlertError();
           }
           else{
            this.navCtrl.push(LoginPage);
           }
    },err=>{
      console.log("error");
    });
   
   console.log(this.username);
   console.log(this.password);
   console.log(this.password1);
   

   }
   
}
