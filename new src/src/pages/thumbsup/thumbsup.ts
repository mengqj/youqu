import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThumbsupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thumbsup',
  templateUrl: 'thumbsup.html',
})
export class ThumbsupPage {

  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[{
      name:'一颗柠檬',
      avatar:'assets/imgs/title.jpg',
      text:'有没有结伴同行去西藏旅行的朋友',
      time:'1:34 pm'
    },
    {
      name:'一颗西柚',
      avatar:'assets/imgs/title.jpg',
      text:'有没有结伴同行去西藏',
      time:'2:34 pm'
    },
    {
      name:'Alice',
      avatar:'assets/imgs/title.jpg',
      text:'有没有结伴同行去西藏',
      time:'3:34 pm'
    },
    {
      name:'Selina',
      avatar:'assets/imgs/title.jpg',
      text:'有没有结伴同行去西藏',
      time:'3:34 pm'
    }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThumbsupPage');
  }

}
