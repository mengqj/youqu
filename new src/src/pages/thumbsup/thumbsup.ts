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
      avatar:'assets/imgs/logo2.jpg',
      text:'您反馈的意见我们已接收',
      time:'05-31 08:00'
    },
    {
      avatar:'assets/imgs/logo2.jpg',
      text:'您好，感谢您的对我们服务满意，也非常感谢您给我们的宝贵建议，我们会继续努力，不断改善，为您提供更优质的服务',
      time:'06-01 17:00'
    },
    {
      avatar:'assets/imgs/logo2.jpg',
      text:'感谢您提出宝贵意见',
      time:'06-01 17:00'
    }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThumbsupPage');
  }

}
