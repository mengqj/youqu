import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CityDataProvider} from "../../providers/city-data/city-data";
import { MultiPickerModule} from 'ion-multi-picker';

/**
 * Generated class for the LaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {

  cityColumns: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public cityDataProvider: CityDataProvider) {
    this.cityColumns = this.cityDataProvider.cities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPage');
  }

}
