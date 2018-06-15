import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items=[{
    title:'北京',
    img:'assets/imgs/item1.png'
  },
  {
    title:'厦门',
    img:'assets/imgs/item2.png'
  },
  {
    title:'上海',
    img:'assets/imgs/item3.png'
  },
  {
    title:'三亚',
    img:'assets/imgs/item4.png'
  },
  {
    title:'成都',
    img:'assets/imgs/item5.png'
  },
  {
    title:'丽江',
    img:'assets/imgs/item6.png'
  },
];



items1=[{
  title:'首尔',
  img:'assets/imgs/item8.jpg'
},{
  title:'京都',
  img:'assets/imgs/item9.jpg'
},{
  title:'济州岛',
  img:'assets/imgs/item10.jpg'
},{
  title:'札幌',
  img:'assets/imgs/item11.jpg'
},{
  title:'东京',
  img:'assets/imgs/item12.jpg'
},{
  title:'大阪',
  img:'assets/imgs/item13.jpg'
}]


items2=[{
  title:'伦敦',
  img:'assets/imgs/item14.jpg'
},{
  title:'纽约',
  img:'assets/imgs/item16.jpg'
},{
  title:'巴黎',
  img:'assets/imgs/item17.jpg'
},{
  title:'塞班岛',
  img:'assets/imgs/item15.jpg'
},{
  title:'洛杉矶',
  img:'assets/imgs/item18.jpg'
},{
  title:'罗马',
  img:'assets/imgs/item21.jpg'
}]

items3=[{
  title:'墨尔本',
  img:'assets/imgs/item19.jpg'
},{
  title:'凯恩斯',
  img:'assets/imgs/item17.jpg'
},{
  title:'皇后镇',
  img:'assets/imgs/item22.jpg'
},{
  title:'黄金海岸',
  img:'assets/imgs/item23.jpg'
},{
  title:'奥克兰',
  img:'assets/imgs/item20.jpg'
},{
  title:'悉尼',
  img:'assets/imgs/item24.jpg'
}]
show="show1";

  goDetail(title){
    this.navCtrl.push('ContentPage',{place:title});
  }

  gomore(){
    this.navCtrl.push('MorecityPage');
  }
}
