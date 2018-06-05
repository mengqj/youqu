import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import { SendyzmPage } from "../sendyzm/sendyzm";
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
})
export class ForgetpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController,public http:HttpClient,public alertCtrl:AlertController) {
  }
  back(){
      this.viewCtrl.dismiss();
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
    
   changeUm(e){
     this.username=e.target.value;
     }



  makesure(){
    let url:string='http://35.194.153.183:8080/api/users/updatePassword';
    this.http.post(url,{
      'userName': this.username,
      'password': this.password,
      'confirmPassword':this.password1,
    }).subscribe(data =>{
      if(data['state']="success")
      {
        this.navCtrl.push(LoginPage);
      }
    })
  }
}