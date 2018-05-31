import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecommendPage } from '../recommend/recommend';
import { ContactPage } from '../contact/contact';
import { GuanzhuPage } from '../guanzhu/guanzhu';
import { QuestionPage } from '../question/question';
import { ContentPage } from '../content/content';
import {HttpClient} from "@angular/common/http";
import {Jsonp} from "@angular/http";
@IonicPage()
@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage {
  date;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private jsonp:Jsonp) {
    this.date=new Date().toISOString();
  }
  recommend(){
    this.navCtrl.push(RecommendPage);
  }
  contact(){
    this.navCtrl.push(ContactPage);
  }
  guanzhu(){
    this.navCtrl.push(GuanzhuPage);
  }
  question(){
    this.navCtrl.push(QuestionPage);
  }
  content(id){
    this.navCtrl.push('ClicktextPage',{textId:id});
  }
  location;
  tmp;
  condition;
  val=new Array();
  ionViewDidLoad(){
    //定位和获取定位城市的天气
    let url:string='http://api.map.baidu.com/location/ip?ak=yvuRyfeZeWrT6KxGgGK5G5MU1bI4L8tf&coor=bd09ll&callback=jsonpCallback';
    this.http.jsonp(url,'callback').subscribe(
      (data:any)=>{
        //console.log(data.content.address_detail.city);
        let city:any=data.content.address_detail.city;
        this.location=city;
        console.log(city);
        let url2:string='https://free-api.heweather.com/s6/weather/now?location='+city+'&key=01ca375458154a1b9a5b512d2bc3eb74';

        this.http.get(url2).subscribe(
          data=>{
            console.log(data);
            let val:any=data;
            console.log(val.HeWeather6[0].now.cond_txt);
            console.log(val.HeWeather6[0].now.tmp);
            this.tmp=val.HeWeather6[0].now.tmp;
            this.condition=val.HeWeather6[0].now.cond_txt;
        })
      })
      //获取精选内容
    let host='35.194.153.183';
    let host2='localhost';
    let typeId='HyrnbcqyX';
    let url3:string='http://'+host+':8080/api/content/getSimpleListByParams?typeId='+typeId;
    this.http.get(url3)
    .subscribe(
    data =>{
      this.val = data['docs'];
      console.log(data);
     for(var i=0;i<this.val.length;i++){
      this.val[i].author.logo='http://'+host+':8080'+data['docs'][i].author.logo;
        this.val[i].sImg='http://'+host+':8080'+data['docs'][i].sImg;
        console.log(this.val[i].author.name);

      }
    });
    }



}
