import { Component,OnInit,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentPage } from '../content/content';
import * as $ from 'jquery';

/**
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**/
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
  }];
  
show="show1";
ionViewDidLoad(){
  $(".col1").click(function(){
    var title = $(this).find('.title').text();
    console.log(title);
  });
}

  place;
  goDetail(){
    //this.place=this.title;
    this.navCtrl.push(ContentPage,{place:this.place});
    console.log(this.place);
  }
}
