import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-morecity',
  templateUrl: 'morecity.html',
})
export class MorecityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorecityPage');
  }



  segmentsArray = ['domestic','hongkong','japan','asiae','asian','europe','australia'];
  city: string = this.segmentsArray[0];


swipeEvent(event){
  //向左滑
if(event.direction==2){
  if(this.segmentsArray.indexOf(this.city)<2){
this.city = this.segmentsArray[this.segmentsArray.indexOf(this.city)+1];
  }
}
//向右滑
if(event.direction==4){
  if(this.segmentsArray.indexOf(this.city)>0){
this.city = this.segmentsArray[this.segmentsArray.indexOf(this.city)-1];
  }
}
}


items=[{
  title:'北京',
  img:'assets/imgs/item1.png'
},{
  title:'上海',
  img:'assets/imgs/item3.png'
},{
  title:'重庆',
  img:'assets/imgs/mimg1.jpg'
},{
  title:'天津',
  img:'assets/imgs/mimg2.png'
}]


items1=[{
  title:'丽江',
  img:'assets/imgs/mimg3.jpg'
},{
  title:'大理',
  img:'assets/imgs/mimg4.png'
},{
  title:'昆明',
  img:'assets/imgs/mimg4.png'
}]

items2=[{
  title:'成都',
  img:'assets/imgs/item5.png'
},{
  title:'九寨沟',
  img:'assets/imgs/mimg5.png'
}]

items3=[{
  title:'杭州',
  img:'assets/imgs/item6.png'
},{
  title:'乌镇',
  img:'assets/imgs/mimg6.png'
}]

items4=[{
  title:'厦门',
  img:'assets/imgs/item2.png'
},{
  title:'鼓浪屿',
  img:'assets/imgs/mimg7.jpeg'
}]

items5=[{
  title:'北戴河',
  img:'assets/imgs/mimg9.jpeg'
},{
  title:'秦皇岛',
  img:'assets/imgs/mimg10.png'
},{
  title:'承德',
  img:'assets/imgs/mimg11.jpeg'
},{
  title:'张北',
  img:'assets/imgs/mimg12.jpeg'
}]


items6=[{
  title:'台北',
  img:'assets/imgs/mimg13.jpeg'
},{
  title:'垦丁',
  img:'assets/imgs/mimg14.png'
},{
  title:'花莲',
  img:'assets/imgs/mimg15.jpeg'
},{
  title:'高雄',
  img:'assets/imgs/mimg16.jpeg'
},{
  title:'台中',
  img:'assets/imgs/mimg18.jpeg'
},{
  title:'九份',
  img:'assets/imgs/mimg17.jpeg'
},{
  title:'南投',
  img:'assets/imgs/mimg19.jpeg'
},{
  title:'阿里山',
  img:'assets/imgs/mimg20.jpeg'
}];

items7=[{
  title:'香港',
  img:'assets/imgs/mimg21.jpeg'
},{
  title:'澳门',
  img:'assets/imgs/mimg22.jpeg'
}]

items8=[
  {
    title:'东京',
    img:'assets/imgs/item12.jpg'
  },{
    title:'大阪',
    img:'assets/imgs/item13.jpg'
  },
  {
    title:'京都',
    img:'assets/imgs/mimg23.jpeg'
  }
];

items9=[
  {
    title:'济州岛',
    img:'assets/imgs/item10.jpg'
  },{
    title:'首尔',
    img:'assets/imgs/item8.jpg'
  },{
    title:'釜山',
    img:'assets/imgs/mimg24.jpeg'
  }
]

items10=[{
  title:'曼谷',
  img:'assets/imgs/mimg25.jpeg'
},{
  title:'普吉岛',
  img:'assets/imgs/mimg26.png'
}]

items11=[{
  title:'新加坡',
  img:'assets/imgs/mimg27.jpeg'
}]

items12=[{
  title:'巴厘岛',
  img:'assets/imgs/mimg28.jpeg'
},{
  title:'民丹岛',
  img:'assets/imgs/mimg29.jpeg'
}]

items13=[{
  title:'马尔代夫',
  img:'assets/imgs/mimg30.jpeg'
}]

items14=[{
  title:'罗马',
  img:'assets/imgs/item21.jpg'
},{
  title:'威尼斯',
  img:'assets/imgs/mimg31.jpeg'
}]

items15=[{
  title:'洛杉矶',
  img:'assets/imgs/item18.jpg'
},{
  title:'塞班岛',
  img:'assets/imgs/item19.jpg'
}]

items16=[{
  title:'巴黎',
  img:'assets/imgs/mimg31.png'
},{
  title:'普罗旺斯',
  img:'assets/imgs/mimg32.jpeg'
}]

items17=[{
  title:'悉尼',
  img:'assets/imgs/item24.jpg'
},{
  title:'凯恩斯',
  img:'assets/imgs/item17.jpg'
},{
  title:'黄金海岸',
  img:'assets/imgs/item23.jpg'
}]

items18=[{
  title:'奥克兰',
  img:'assets/imgs/item20.jpg'
},{
  title:'皇后镇',
  img:'assets/imgs/item22.jpg'
}]

items19=[{
  title:'开罗',
  img:'assets/imgs/mimg33.jpeg'
},{
  title:'卢克索',
  img:'assets/imgs/mimg34.jpeg'
}]


goDetail(title){
  this.navCtrl.push('ContentPage',{place:title});
}
}
