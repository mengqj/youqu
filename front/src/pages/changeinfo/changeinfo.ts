import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import  * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-changeinfo',
  templateUrl: 'changeinfo.html',
})
export class ChangeinfoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,private http: HttpClient) {
    this.getInfo();
  }
  userId=localStorage.getItem('ID');

  name:string;
  userName;
  gender: string;
  email:string;
  phone:string;
  logo:string;
  bgLogo:string;
  newlogo;
  newbg;
  public event = {
    month:'',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  //设置头像
  setLogo(){
    this.upload1();
    this.logo=this.newlogo;
  }
  //设置背景图像
  setBgLogo(){
    this.upload2();
    this.bgLogo=this.newbg;
  }
  //上传
  upload1(){
    let file=(<HTMLInputElement>document.getElementById('file')).files[0];
    var temp="";
    let formData = new FormData();
    formData.append('file',file);
    $.ajax({
      type: 'POST',
      url: 'http://35.194.153.183:8080/system/upload?type=images',
      data: formData,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log(data);
        temp=data;
        return temp;
      },
      error: function (err) {
        console.log(err);
      }
    });
    this.newlogo=temp;
  }
  upload2(){
    let file=(<HTMLInputElement>document.getElementById('file2')).files[0];
    let formData = new FormData();
    var temp;
    formData.append('file',file);
    $.ajax({
      type: 'POST',
      url: 'http://35.194.153.183:8080/system/upload?type=images',
      data: formData,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log(data);
        $(".c-bg").css("background-image","url('http://35.194.153.183:8080"+data+"')");
        temp=data;
        return temp;
      },
      error: function (err) {
        console.log(err);
      }
    });
    this.newbg=temp;
}
  //获取用户信息
  getInfo(){
    let host='35.194.153.183';
    let url:string='http://'+host+':8080/api/users/getUser?searchkey='+this.userId;
    this.http.get(url)
    .subscribe(
    data =>{
      console.log(data);
      this.logo=data['docs'][0].logo;
      this.bgLogo=data['docs'][0].bgLogo;
      this.userName=data['docs'][0].userName;
      this.name=data['docs'][0].name;
      this.email=data['docs'][0].email;
      this.event.month=data['docs'][0].birth;
      this.phone=data['docs'][0].phoneNum;
      this.gender=data['docs'][0].gender;
      console.log(this.bgLogo);
      $(".c-bg").css("background-image","url('http://35.194.153.183:8080"+this.bgLogo+"')");
    });
  }
  //修改信息
  send(){
    if (this.name=='') {
      alert('昵称不能为空!');
    }
    else {
      var params = {
      "_id": this.userId,
      "name":this.name,
      "email": this.email,
      "logo": this.logo,
      "gender": this.gender,
      "birth": this.event.month,
      "phoneNum":this.phone,
      "bgLogo":this.bgLogo,
        };
      let url:string='http://35.194.153.183:8080/api/users/updateInfo';
      this.http.post(url,params)
      .subscribe(
        (data:any) => {
          console.log(data);
          if (data.state=="success") {
            console.log(data);
            this.viewCtrl.dismiss();
          } else if (data.state=="error") {
            alert(data.message);
          }
        }
    );

    }
    
  }
}
