import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-thumbsup',
  templateUrl: 'thumbsup.html',
})
export class ThumbsupPage {

  index;
  val;
  userId=localStorage.getItem('ID');
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.index=navParams.data['index'];
    this.getNotify(this.index);
  }
  getNotify(i){
    let host='35.194.153.183';
    let url:string='http://35.194.153.183:8080/api/users/getUserNotifys?author='+this.userId;
      this.http.get(url)
      .subscribe(
      (data:any) =>{
        this.val.date = data['docs'][i].date;
        this.val.title = data['docs'][i].notify.title;
        this.val.content = data['docs'][i].notify.content;
      });
  }
}
