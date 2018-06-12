import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html',
})
export class RecommendPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.getRecom();
  }
  val=new Array();
  //获取带有推荐标签的文章
  getRecom(){
    let host='35.194.153.183';
    let tagName='推荐';
    let url:string='http://'+host+':8080/api/content/getList?tagName='+tagName;
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['docs'];
      console.log(data);
     for(var i=0;i<this.val.length;i++){
      this.val[i].discription=data['docs'][i].discription;
      this.val[i].date=data['docs'][i].updateDate;
      this.val[i].commentNum=data['docs'][i].commentNum;
      if (data['docs'][i].author) {
        this.val[i].content=data['docs'][i].discription;
        this.val[i].name=data['docs'][i].author.userName;
        console.log(this.val[i].name);
        this.val[i].logo='http://'+host+':8080'+data['docs'][i].author.logo;
      } else {
        this.val[i].content=data['docs'][i].markDownComments;
        this.val[i].name=data['docs'][i].uAuthor.userName;
        console.log(this.val[i].name);
        this.val[i].logo='http://'+host+':8080'+data['docs'][i].uAuthor.logo;
      }
      }
      setTimeout(() => {
        this.clear();
      }, 50);
    });
  }
  clear(){
    $('.tuijianimg').each(function(){
      if($(this).attr("src")=="http://35.194.153.183:8080"){
        $(this).hide();
      }
    })
  }
  info(id){
    this.navCtrl.push('ClicktextPage',{textId:id});
  }
}
