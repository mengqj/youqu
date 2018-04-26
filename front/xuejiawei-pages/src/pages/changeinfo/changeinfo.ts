import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-changeinfo',
  templateUrl: 'changeinfo.html',
})
export class ChangeinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  back() {
    this.viewCtrl.dismiss();
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  gender: string = "f";
  name:string="游趣";
  email:string="youqu@gmail.com";
  phone:number=15512341234;
}
