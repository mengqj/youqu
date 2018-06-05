import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HomePage }  from '../home/home';
import { TabsPage }  from '../tabs/tabs';
import { RegisterPage }  from '../register/register';
import { ForgetpasswordPage }  from '../forgetpassword/forgetpassword';
import { HttpClient } from '@angular/common/http';
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
  /*  request(){

  this.http.post("http://35.194.153.183:8080/api/users/doLogin",JSON.stringify({userName:this.username,password:this.password}),
).subscribe(data=>{
    console.log(data);
  });
  // this.navCtrl.push(HomePage);
  
  // let profileModal = this.modalCtrl.create(TabsPage);
  // profileModal.present();
}*/
request(){

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
    localStorage.setItem(this.username,val['id']);
    
   
    })
  }
  else if(data['state']=="error"&& data['type']=="ERROR_PARAMS")
  {
    
      let alert = this.alertCtrl.create({
        title: "密码错误",
        subTitle: data['message'],
        buttons: ['OK']
      });
      alert.present();
    
  }
  else if(data['state']=="error")
  {
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
  this.navCtrl.push(RegisterPage);
}
forgetpw(){
  this.navCtrl.push(ForgetpasswordPage);
}

}
