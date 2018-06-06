import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController ,ModalController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import  * as $ from 'jquery';
import { Keyboard } from '@ionic-native/keyboard';

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
  {}
  username=localStorage.getItem('userName');
  ionViewDidLoad(){
    $('#btn').on('click',function(){
      console.log($('#page').html());

    })
  }
words:string;
fileTransfer: FileTransferObject = this.transfer.create();
val;
src="/upload/blogpicture/white.png";
user=localStorage.getItem('userName');
userId=localStorage.getItem('ID');
upload(){
  var temp;
  let file=(<HTMLInputElement>document.getElementById('file')).files[0];
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
                    //$("#show").attr("src", 'http://35.194.153.183:8080'+data);
                    temp=data;
                    return temp;
                },
                error: function (err) {
                    console.log(err);
                }
            });
       this.src=temp;
}
send(){
    if (!this.words||this.words==" ") {
      alert('内容不能为空');
    }else{
      var params = {
        "title":this.username+"的游记",
        "stitle":'',
        "categories":["H1QbOnwAf", "By2w49cyX"],
        "tags":["ryDyMqcJX"],
        "sImg":this.src,
        "discription":"",
        "author":this.userId,
        "state":true,
        "comments":"",
        "markDownComments":this.words,
      };
        let url:string='http://35.194.153.183:8080/api/content/addOne';
        this.http.post(url,params)
        .subscribe(
          data => {
            console.log(data);
            this.navCtrl.parent.select(4);
          }
      );
    }
  }

back(){
  this.navCtrl.parent.select(0);
}
focusInput(){
  this.keyboard.show();
  if (!this.words||this.words==" ") {
    $('#sen').removeAttr("disabled");
  }
}

blurInput(){
  this.keyboard.close();
}

}

