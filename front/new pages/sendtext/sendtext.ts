import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
@IonicPage()
@Component({
  selector: 'page-sendtext',
  templateUrl: 'sendtext.html',
})
export class SendtextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private http: HttpClient,private transfer: FileTransfer,private file: File,)
  {

  }
  words='';
  path: string="../../assets/imgs/zijingcheng.jpeg";
  fileTransfer: FileTransferObject = this.transfer.create();

send(){
  console.log(this.words);

  var params = {
  "title":"",
  "categories":["Bys_NYfCM"],
  "tags":["BkI1O_MRz"],
  "sImg":"",
  "discription":"",
  "author":"Sk-YLDfAz",
  "state":true,
  "comments":"",
  "markDownComments":this.words,
};
  let url:string='http://localhost:8080/api/content/addOne';
  this.http.post(url,params)
  .subscribe(
    data => {
      console.log(data);
    }
);
}

back(){
  this.viewCtrl.dismiss();
}
}
