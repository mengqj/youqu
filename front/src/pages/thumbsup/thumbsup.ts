import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-thumbsup',
  templateUrl: 'thumbsup.html',
})
export class ThumbsupPage {

  userId=localStorage.getItem('ID');
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.index=navParams.data['index'];
    console.log(this.index);
  }
  index;
  val={
    date:'',
    notify:{
      title:'',
      content:''
    }
  };

  ionViewWillEnter(){
    this.getNotify(this.index);
  }
  getNotify(i){
    let url:string='http://35.194.153.183:8080/api/users/getUserNotifys?author='+this.userId;
      this.http.get(url)
      .subscribe(
      (data:any) =>{
        this.val= data['docs'][i];
        console.log(this.val.date);

      });
  }

}
