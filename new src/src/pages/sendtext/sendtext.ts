


// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
// import {HttpClient} from "@angular/common/http";
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// @IonicPage()
// @Component({
//   selector: 'page-sendtext',
//   templateUrl: 'sendtext.html',
// })
// export class SendtextPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
//     private http: HttpClient,private transfer: FileTransfer,private file: File,)
//   {
//     this.username=this.navParams.get('userName');
//     console.log(this.username)
    
//   }
  
//   username;
//   words='';
//   path: string="../../assets/imgs/zijingcheng.jpeg";
//   fileTransfer: FileTransferObject = this.transfer.create();
//   stroage=window.localStorage;
//   user:string;
// send(){
//   console.log(this.words);
//   this.user=this.stroage.getItem(this.username);

  
//   var params = {
//   "title":"",
//   "categories":["Bys_NYfCM"],
//   "tags":["BkI1O_MRz"],
//   "sImg":"",
//   "discription":"",
//   "author":this.user,
//   "state":true,
//   "comments":"",
//   "markDownComments":this.words,
// };
//   let url:string='http://35.194.153.183:8080/api/content/addOne';
//   this.http.post(url,params)
//   .subscribe(
//     data => {
//       console.log(data);
//     }
// );
// }

// back(){
//   this.viewCtrl.dismiss();
// }
// }





import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController ,ModalController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import  * as $ from 'jquery';
import { Keyboard } from '@ionic-native/keyboard';
import { PhotoPage } from '../photo/photo';

@IonicPage()
@Component({
  selector: 'page-sendtext',
  templateUrl: 'sendtext.html',
})
export class SendtextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private http: HttpClient,private transfer: FileTransfer,private file: File,
    private keyboard: Keyboard,public modalCtrl:ModalController
  )
  {
       this.username=this.navParams.get('name');

  }

  username;
  ionViewDidLoad(){
    $('#btn').on('click',function(){
      console.log($('#page').html());

    })
  }
  words='';
  fileTransfer: FileTransferObject = this.transfer.create();
val;
src;
 stroage=window.localStorage;
user;
upload(){
  //let file = (<HTMLInputElement>$('#img')).files[0];
  //let file = document.getElementById("choose").files[0];
  let file=(<HTMLInputElement>document.getElementById('img')).files[0];
  console.log(file);
            let formData = new FormData();
            formData.append('file',file);
            $.ajax({
                type: 'POST',
                url: 'http://35.194.153.183:8080/system/upload?type=images',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    console.log(data);

                    $("#show").attr("src", 'http://35.194.153.183:8080'+data);
                },
                error: function (err) {
                    console.log(err);
                }
            })
}
/*upload(){
  console.log(this.val);
  this.src=this.val;
  console.log(this.src);

  let url:string="http://localhost:8080/system/upload?type=image";
  var formData = new FormData();
  let file='';
  formData.append('file',file);
  this.http.post(url,formData).subscribe(
    data => {
        console.log(data);
        }
  );
}*/

send(){
    console.log(this.words);
    this.user=this.stroage.getItem(this.username);
    console.log(this.user);
    
    var params = {
    "title":"",
    "categories":["Bys_NYfCM"],
    "tags":["BkI1O_MRz"],
    "sImg":"",
    "discription":"",
    "author":this.user,
    "state":true,
    "comments":"",
    "markDownComments":this.words,
  };
    let url:string='http://35.194.153.183:8080/api/content/addOne';
    this.http.post(url,params)
    .subscribe(
      data => {
        this.words='';
      }
  );
  }

back(){
  this.viewCtrl.dismiss();
}
focusInput(){
  console.log('000');
  this.keyboard.show();
}

blurInput(){
  console.log(1111);
  this.keyboard.close();
}

goPhoto(){
  let profileModal = this.modalCtrl.create(PhotoPage);
     profileModal.present();
}
}

