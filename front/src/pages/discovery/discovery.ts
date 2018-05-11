import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecommendPage } from '../recommend/recommend';
import { ContactPage } from '../contact/contact';
import { GuanzhuPage } from '../guanzhu/guanzhu';
import { QuestionPage } from '../question/question';
import { ContentPage } from '../content/content';

@IonicPage()
@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  recommend(){
    this.navCtrl.push(RecommendPage);
  }
  contact(){
    this.navCtrl.push(ContactPage);
  }
  guanzhu(){
    this.navCtrl.push(GuanzhuPage);
  }
  question(){
    this.navCtrl.push(QuestionPage);
  }
  content(){
    this.navCtrl.push(ContentPage);
  }

}
