
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }
  val=new Array();
  user='rkj3IPM0f';
  ionViewDidLoad(){
    let host='35.194.153.183';
    let host2='localhost';
    let url:string='http://'+host2+':8080/api/users/getUserContents?user='+this.user;
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['docs'];
      for(var i=0;i<this.val.length;i++){
        this.val[i].title=data['docs'][i].title;
        this.val[i].updateDate=data['docs'][i].updateDate;
        this.val[i].sImg='http://'+host2+':8080'+data['docs'].sImg;
        console.log(this.val[i].updateDate);

      }
      console.log(data);
      console.log(this.val.length);


    });


  };
show="information"

item=[{
  focus:100,
  fans:20,
  favor:100,
}];
setting(){
  this.navCtrl.push(SettingPage);
}


}
