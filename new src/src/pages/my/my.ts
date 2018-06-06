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
  username:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
     this.username=this.navParams.get('name');
     console.log(this.username);
     
  }
  storage=window.localStorage;
  val=new Array();
  user;

  
  ionViewDidLoad(){
this.user=this.storage.getItem('ID');
console.log(this.user);
    let host='35.194.153.183';
    let host2='localhost';
    let url:string='http://35.194.153.183:8080/api/users/getUserContents?user='+this.user;
    let url1:string=':http://35.194.153.183:8080/api/users/getUser?searchkey='+this.user;
    
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['docs'];
      for(var i=0;i<this.val.length;i++){
        this.val[i].title=this.storage.getItem('userName');
        this.val[i].updateDate=data['docs'][i].updateDate.substr(5,5);
        // this.val[i].sImg='http://'+host+':8080'+data['docs'].sImg;
        this.val[i].content=data['docs'][i].markDownComments ;
        console.log(this.val[i].updateDate);

      }
      console.log(data);
      console.log(this.val.length);


    });

  
  };
show="information"

item=[{
  name:this.storage.getItem('userName')
 
}];
setting(){
  this.navCtrl.push('SettingPage');
}

doionrefresh(ionrefresher){

  setTimeout(()=>{
    this.user=this.storage.getItem('ID');
console.log(this.user);
    let host='35.194.153.183';
    let host2='localhost';
    let url:string='http://35.194.153.183:8080/api/users/getUserContents?user='+this.user;
    
    
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['docs'];
      for(var i=0;i<this.val.length;i++){
        this.val[i].title=this.storage.getItem('userName');
        this.val[i].updateDate=data['docs'][i].updateDate.substr(5,5);
        // this.val[i].sImg='http://'+host+':8080'+['docs'].sImg;
        this.val[i].content=data['docs'][i].markDownComments ;
        console.log(this.val[i].updateDate);

      }
      console.log(data);
      console.log(this.val.length);


    });


  ionrefresher.complete();
},500);
}
}
