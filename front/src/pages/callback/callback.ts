import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import  * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-callback',
  templateUrl: 'callback.html',
})
export class CallbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,private http: HttpClient) {
  }
  content;
  userId=localStorage.getItem('ID');
  userName=localStorage.getItem('userName');
  submit(){
    $('#sub').attr("disabled","true");
    if(this.content.length==0){
      setTimeout(() => {
        alert('内容不能为空');
        $('#ask').removeAttr("disabled");
      }, 300);
    }else{
      var params = {
        "title":this.userName+"的反馈",
        "stitle":'',
        "categories":["BydZ0oPgQ","r1km0jvx7"],//反馈/用户反馈
        "tags":["SJRoCivg7"],
        "sImg":"",
        "discription":'',
        "author":this.userId,
        "state":false,
        "comments":"",
        "markDownComments":this.content,
      };
        let url:string='http://35.194.153.183:8080/api/content/addOne';
        this.http.post(url,params)
        .subscribe(
          (data:any) => {
            console.log(data);
            if (data.state=="success") {
              this.viewCtrl.dismiss();
            } else {
              alert('发送失败');
              $('#sub').removeAttr("disabled");
            }

          }
      );
    }
  }
}
