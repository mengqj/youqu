import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      '上海',
      '北京',
      '北京',
      '北京',
      '北京',
      '北京',
      '深圳',
      '福建',
      '湖南',
      '广州',
      '广州',
      '广州',
      '广州',
      '广州',
      '福建'
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

