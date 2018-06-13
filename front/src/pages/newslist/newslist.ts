import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-newslist',
  templateUrl: 'newslist.html',
})

export class NewslistPage {
  val;
  host="35.194.153.183";
  userId=localStorage.getItem('ID');
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.getNotify();
   }

  goInfo(i){
    this.navCtrl.push('ThumbsupPage',{index:i});
  }
  getNotify(){
    let url:string='http://35.194.153.183:8080/api/users/getUserNotifys?author='+this.userId;
      this.http.get(url)
      .subscribe(
      (data:any) =>{
        this.val = data['docs'];
        console.log(data);
      });
  }
  delNotifty(Nid){
    let url:string="http://35.194.153.183:8080/api/users/delUserNotify?ids="+Nid;
      this.http.get(url)
      .subscribe(
      (data:any) =>{
        if (data.state=="success") {
          this.getNotify();
        } else {
          alert("删除失败");
        }
      });
  }

}
