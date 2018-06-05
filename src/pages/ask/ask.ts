import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, public viewCtrl: ViewController) {
  }
  content={
    title:'',
    val:'',
  };
  back(){
    this.viewCtrl.dismiss();
  }
  send(){
    var params = {
      "title":this.content.title,
      "stitle":'',
      "categories":["Bkxe_nDRG","rJj8Vc91Q"],//问答/提问
      "tags":["rkeRHKc17"],
      "sImg":"",
      "discription":'',
      "author":'BJpVFFMRG',
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
          }
          this.viewCtrl.dismiss();
        }
    );
  }

}
