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
  src= new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {

  }
  getlist(skey){
    let url:string='http://35.194.153.183:8080/api/content/getList?pageSize=100&searchkey='+skey;
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['docs'];
      console.log(data);
      setTimeout(() => {
        this.clear();
      }, 300);
    });
  }
  clear(){
    $('.img').each(function(){
      if($(this).attr("src")=="http://35.194.153.183:8080"){
        $(this).hide();
      }
    })
  }
  detail(id){
    this.navCtrl.push('ClicktextPage',{textId:id});
  }
}
