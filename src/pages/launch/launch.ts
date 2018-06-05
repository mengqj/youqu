import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CityDataProvider} from "../../providers/city-data/city-data";
import { MultiPickerModule} from 'ion-multi-picker';
import {HttpClient} from "@angular/common/http";
import  * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {

  cityColumns: any[];
  myDate;
  comments;
  destination;
  location;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cityDataProvider: CityDataProvider,private http: HttpClient) {
    this.cityColumns = this.cityDataProvider.cities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPage');
  }
  send(){
    console.log(this.myDate);
    console.log(this.comments);
    this.destination=$('#des').text();
    console.log(this.destination);
    this.location=$('#location').text();
    console.log(this.location);

    var params = {
      "title":this.destination,
      "stitle":this.location,
      "categories":["SyOVkti1m","H13H1FjJQ"],
      "tags":["HJJD1YoJ7"],
      "sImg":"",
      "discription":this.myDate,
      "author":'BJpVFFMRG',
      "state":true,
      "comments":"",
      "markDownComments":this.comments,
    };
      let url:string='http://35.194.153.183:8080/api/content/addOne';
      this.http.post(url,params)
      .subscribe(
        data => {
          console.log(data);

        }
    );
  }
}
