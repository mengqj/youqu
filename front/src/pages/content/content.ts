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
  "拉萨","大同","苏州","五台山","无锡","台北","垦丁","花莲","高雄","台中"
  ,"九份","南投","阿里山","澳门","东京","大阪","京都","济州岛",
"首尔","釜山","巴厘岛","民丹岛","马尔代夫","罗马","威尼斯","洛杉矶"
,"塞班岛","巴黎","普罗旺斯","悉尼","凯恩斯","黄金海岸","奥克兰","皇后镇","开罗",
"卢克索","札幌","伦敦","墨尔本","纽约"];
  ids=['ryh28F9km','HkWzTETkm','Bk7pIN6yQ','Byd8hX6Jm','HJ_9-STJ7',
  'BygAEST1Q','ryv1xamlm','SJduMNp17','SkyAQ4akm','rkzCPEa17',
  'S1y8D4Ty7','Bk7pIN6yQ',"r1CetEpJX","Hk5Hs4aJX","HkWzTETkm",
  "ByZopET1m","rJ261Spk7","B1s9SNRy7","ByDRh3mem","H1-Bin7gX",
  "B1Bu0h7gQ", "rkqxaVT1Q","rylP8frayQ","rkICQH6km","Hk8mg40JQ",
  "HyZSqQAy7","Hyn2cNp1Q","HyWB24a1X","B1S1W4Ay7","B1st4Haym",
  "BJ72ENCJm","BJ8EKQAk7","BJ_kmBayX","Bk9H57Cym","H17PXBTJQ","HycB4LwlX","Hk4FS8DeQ",
  "Hys4UIDlX","HJlWuUwlm","rJXo_IvgQ","Bkkct8PlX","S1nZqIPxQ",
  "SkiP9UvxX","r15moUDx7","rJKJh8DeQ","S1EO28Dem","BJ6H6IDxm","B1VyCLPem",
  "BJUwALvlX","r1JM1vDem","SkbAywPeQ","ryBHgvDxm","Hk4zZDDeQ","H19nbwPxm",
  "Hk4XMwwe7","H1ncGwPlm","ryMSmPPe7","BkcC7DwgX","HJPmNwwxX","r1XANPve7",
  "BJTmBvPgQ","ryGFBvDe7","BJmZ8PDe7","S1spIvPeX","rkZ5wwvgX","HJjpwwPgX",
  "HJOduvve7","r1dZFwvem","Sy1hYPwxm","rJ57_52eX"
];


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
