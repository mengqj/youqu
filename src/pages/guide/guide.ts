import { Component,OnInit,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

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
    title:'杭州',
    img:'assets/imgs/item2.png'
  },
  {
    title:'昆明',
    img:'assets/imgs/item3.png'
  },
  {
    title:'三亚',
    img:'assets/imgs/item4.png'
  },
  {
    title:'厦门',
    img:'assets/imgs/item5.png'
  },
  {
    title:'珠海',
    img:'assets/imgs/item6.png'
  }];

items2=[{
  title:'首尔',
  img:'assets/imgs/item8.jpg'
},
{
  title:'大阪',
  img:'assets/imgs/item9.jpg'
},
{
  title:'济州岛',
  img:'assets/imgs/item10.jpg'
},
{
  title:'札幌',
  img:'assets/imgs/item11.jpg'
},
{
  title:'东京',
  img:'assets/imgs/item12.jpg'
},
{
  title:'北海道',
  img:'assets/imgs/item13.jpg'
}];

show="show1";

  goDetail(title){
    this.navCtrl.push('ContentPage',{place:title});
  }
}
