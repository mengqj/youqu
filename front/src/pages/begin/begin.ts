import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-begin',
  templateUrl: 'begin.html',
})
export class BeginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad(){
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
         });
       }
  }
  //ionic当退出页面的时候触发的方法
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
	   Object.keys(elements).map((key) => {
    		elements[key].style.display = 'flex';
	});
    }
}
home(){
  $("#reg,#log").attr("disabled","true");
  setTimeout(() => {
    $("#reg,#log").removeAttr('disabled');
  }, 1000);
  this.navCtrl.push('LoginPage');
}
zhuce(){
  $("#reg,#log").attr("disabled","true");
  setTimeout(() => {
    $("#reg,#log").removeAttr('disabled');
  }, 1000);
  this.navCtrl.push('RegisterPage');
}
}
