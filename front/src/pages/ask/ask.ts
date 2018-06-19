import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import  * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, public viewCtrl: ViewController) {
  }
  userId=localStorage.getItem('ID');
  content={
    title:'',
    val:'',
  };
  send(){
    $('#ask').attr("disabled","true");
    if (this.content.title.length==0) {
      setTimeout(() => {
        alert('标题不能为空');
        $('#ask').removeAttr("disabled");
      }, 300);
    } else if(this.content.val.length==0){
      setTimeout(() => {
        alert('内容不能为空');
        $('#ask').removeAttr("disabled");
      }, 300);
    }else{
      var params = {
        "title":this.content.title,
        "stitle":'',
        "categories":["Bkxe_nDRG","rJj8Vc91Q"],//问答/提问
        "tags":["rkeRHKc17"],
        "sImg":"",
        "discription":'',
        "author":this.userId,
        "state":true,
        "comments":"",
        "markDownComments":this.content.val,
      };
        let url:string='http://35.194.153.183:8080/api/content/addOne';
        this.http.post(url,params)
        .subscribe(
          (data:any) => {
            console.log(data);
            if (data.state=="success") {

            } else {
              alert('发送失败');
              $('#ask').removeAttr("disabled");
            }
            this.viewCtrl.dismiss();
          }
      );
    }

  }

}
