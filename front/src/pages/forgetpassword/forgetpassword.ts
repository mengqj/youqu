import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
@IonicPage()
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
})
export class ForgetpasswordPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController,private http: HttpClient) {
  }
  userName=localStorage.getItem('userName');
  password;
  confirmPassword;
  makesure(){
    if(this.password===this.confirmPassword){
      var pwd=this.password;
      var params = {
        "userName": this.userName,
        "password":pwd,
        "confirmPassword": pwd
        };
          let url:string='http://35.194.153.183:8080/api/users/updatePassword';
          this.http.post(url,params)
          .subscribe(
            (data:any) => {
              console.log(data);
              if (data.state=="success") {
                localStorage.clear();
                this.viewCtrl.dismiss();
              } else {
                alert('修改失败');
              }

            }
        );
    }else{
      alert('两次密码不一致');
    }

  }

  back(){
      this.viewCtrl.dismiss();
  }
}
