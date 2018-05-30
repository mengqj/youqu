import { Component,OnInit,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentPage } from '../content/content';
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

show="show1";

  goDetail(title){
    this.navCtrl.push(ContentPage,{place:title});
  }
}
