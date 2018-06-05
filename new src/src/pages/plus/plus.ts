import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController} from 'ionic-angular';

import { SendtextPage }  from '../sendtext/sendtext';
import { CameraPage }  from '../camera/camera';
import {EditPage }  from '../edit/edit';
import {LaunchPage }  from '../launch/launch';
import { TabsPage }  from '../tabs/tabs';
/**
 * Generated class for the PlusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plus',
  templateUrl: 'plus.html',
})
export class PlusPage {
   username;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,public viewCtrl: ViewController) {
    this.username=this.navParams.get('name');
    console.log(this.username);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlusPage');
  }
  gotext(){
    let profileModal = this.modalCtrl.create(SendtextPage,{
   'userName':this.username
    });
    profileModal.present();
  }
  goAdd(){
    this.navCtrl.push(TabsPage);
  }

  gocamera(){
    this.navCtrl.push(CameraPage);
  }
  goquestion(){
    this.navCtrl.push(EditPage);
  }
  gotravel(){
    this.navCtrl.push(LaunchPage);
  }
}
