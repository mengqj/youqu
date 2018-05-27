import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";


@IonicPage()

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
  idArr:string[]=['BkmlD3v0G','S1LhUhwRM','HyVv96v0f','BkmlD3v0G','S1LhUhwRM','HyVv96v0f'];
  place1Arr:string[]=['北京','厦门','上海','三亚','成都','丽江'];
  id;
  place;
  val={
    title:'',
    sImg:'',
    comments:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.place=navParams.data['place'];
    for(let i=0;i<6;i++){
      if(this.place==this.place1Arr[i]){
        this.id=this.idArr[i];
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
      console.log(this.id);
      console.log(this.place);
    });
  };

  items=[{
    title:'流动的色彩海洋——坡峰岭红叶最盛时刻到啦',
    img:'assets/imgs/content_01.jpeg',
    count:'22727',
    btn:'浏览'
  },
  {
    title:'京郊10个值得体验的亲子农庄，让孩子与小动物亲密接触！',
    img:'assets/imgs/content_02.jpeg',
    count:'22727次',
    btn:'浏览'
  },
  {
    title:'帝都牛排指南 | 那么，你最爱哪一块呢？',
    img:'assets/imgs/content_03.jpeg',
    count:'22727',
    btn:'浏览'
  }];

     //下拉加载
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
        this.items.push({
          title:'流动的色彩海洋——坡峰岭红叶最盛时刻到啦',
          img:'assets/imgs/content_01.jpeg',
          count:'22727',
          btn:'浏览'
        },
        {
          title:'京郊10个值得体验的亲子农庄，让孩子与小动物亲密接触！',
          img:'assets/imgs/content_02.jpeg',
          count:'22727次',
          btn:'浏览'
        },
        {
          title:'帝都牛排指南 | 那么，你最爱哪一块呢？',
          img:'assets/imgs/content_03.jpeg',
          count:'22727',
          btn:'浏览'
        });

      infiniteScroll.complete();
      if(this.items.length==9){
        console.log(this.items.length);
        infiniteScroll.enable(false);
      }
    }, 500);
  }
}