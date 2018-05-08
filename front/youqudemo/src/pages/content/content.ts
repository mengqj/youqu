import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

}
