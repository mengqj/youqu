import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";
import  * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  key;
  val;
  sImg;
  input;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    $('.img').each(function(){
      if ($(this).attr('src')=='') {
        $(this).css("display","none");
      }
    })
  }
  getlist(skey){
    let url:string='http://35.194.153.183:8080/api/content/getList?pageSize=100&searchkey='+skey;
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['docs'];
      for (let i = 0; i<data['docs'].length; i++) {

      }
      console.log(data);
    });
  }

  detail(id){
    this.navCtrl.push('ClicktextPage',{textId:id});
  }
}
