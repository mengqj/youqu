import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController,private http: HttpClient, public modalCtrl: ModalController) {
  }
  val=new Array();
  ionViewDidLoad(){
  let host='35.194.153.183';
  let url:string='http://'+host+':8080/api/content/getSimpleListByParams?typeId=H13H1FjJQ';
  this.http.get(url)
  .subscribe(
  data =>{
    this.val = data['docs'];
    console.log(data);

    for(var i=0;i<this.val.length;i++){
      this.val[i].des=data['docs'][i].title;
      this.val[i].loc=data['docs'][i].stitle;
      this.val[i].name=data['docs'][i].uAuthor.userName;
      this.val[i].godate=data['docs'][i].discription;
      this.val[i].content=data['docs'][i].markDownComments;
      this.val[i].updateDate=data['docs'][i].updateDate;
      this.val[i].logo='http://'+host+':8080'+data['docs'][i].uAuthor.logo;
    }
  });
  }
  send(){
    let modal = this.modalCtrl.create('LaunchPage');
      modal.present();
  }
}

