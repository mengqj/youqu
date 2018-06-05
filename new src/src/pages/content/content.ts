import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";


@IonicPage()

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
  id;
  place;
  val={
    title:'',
    sImg:'',
    keywords:'',
    comments:''
  };

  val2=new Array();
  len;
  host='35.194.153.183';

  ionViewWillEnter() {
    this.getCon();
  }

  places=['北京','杭州','昆明','三亚','厦门',
  '珠海','上海','重庆','天津','丽江',
  '大理','昆明','成都','九寨沟','杭州',
  '乌镇','鼓浪屿','香港','普吉岛','曼谷',
  '新加坡','北戴河','南京','广州','青岛',
  "桂林","洛阳","少林寺","威海","深圳",
  "拉萨","大同","苏州","五台山","无锡"];
  ids=['ryh28F9km','HkWzTETkm','Bk7pIN6yQ','Byd8hX6Jm','HJ_9-STJ7',
  'BygAEST1Q','ryv1xamlm','SJduMNp17','SkyAQ4akm','rkzCPEa17',
  'S1y8D4Ty7','Bk7pIN6yQ',"r1CetEpJX","Hk5Hs4aJX","HkWzTETkm",
  "ByZopET1m","rJ261Spk7","B1s9SNRy7","ByDRh3mem","H1-Bin7gX",
  "B1Bu0h7gQ", "rkqxaVT1Q","rylP8frayQ","rkICQH6km","Hk8mg40JQ",
  "HyZSqQAy7","Hyn2cNp1Q","HyWB24a1X","B1S1W4Ay7","B1st4Haym",
  "BJ72ENCJm","BJ8EKQAk7","BJ_kmBayX","Bk9H57Cym","H17PXBTJQ"];


  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.place=navParams.data['place'];
    for(var i=0;i<this.places.length;i++){
      if(this.place==this.places[i]){
        this.id=this.ids[i];
      }
    }
  }
  ionViewDidLoad(){
    let host='35.194.153.183';
    let host2='localhost';
    let url:string='http://'+host+':8080/api/content/getContent?id='+this.id;
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['doc'];
      this.val.sImg='http://'+host+':8080'+data['doc'].sImg;
      console.log(data);
      //console.log(this.val.sImg);
      //console.log(this.id);
    });
  };

  //获取推荐内容
  getCon(){
    let tagName="首页推荐";
    let url:string='http://'+this.host+':8080/api/content/getList?tagName='+tagName;
    this.http.get(url)
    .subscribe(
      (data:any) =>{
      this.val2 = data['docs'];
      console.log(data);
      for(var i=0;i<this.val2.length;i++){
        this.val2[i].sImg='http://'+this.host+':8080'+data.docs[i].sImg;
      }
    });
  }

  //items=[{
  //  title:'流动的色彩海洋——坡峰岭红叶最盛时刻到啦',
  //  img:'assets/imgs/content_01.jpeg',
  //  count:'22727',
  //  btn:'浏览'
  //},
  //{
  //  title:'京郊10个值得体验的亲子农庄，让孩子与小动物亲密接触！',
  //   img:'assets/imgs/content_02.jpeg',
  //  count:'22727次',
  //  btn:'浏览'
  //},
  //{
  //  title:'帝都牛排指南 | 那么，你最爱哪一块呢？',
  //  img:'assets/imgs/content_03.jpeg',
  //  count:'22727',
  //  btn:'浏览'
  //}];  
}