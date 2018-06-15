import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController ,ModalController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import  * as $ from 'jquery';
import { Keyboard } from '@ionic-native/keyboard';
import { Camera, CameraOptions } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-sendtext',
  templateUrl: 'sendtext.html',
})
export class SendtextPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private http: HttpClient,private keyboard: Keyboard,public modalCtrl:ModalController,private camera: Camera
  )
  {}
  ionViewWillEnter(){
    this.src="/upload/blogpicture/white.png";
    let elements = document.querySelectorAll(".tabbar");
    if(elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display ='none';
        });
    }
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if(elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display ='flex';
        });
    }
}
username=localStorage.getItem('userName');
words:string;
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
                    temp=data;
                    return temp;
                },
                error: function (err) {
                    console.log(err);
                }
            });
       this.src=temp;
       //console.log(this.src);

}
send(){
    $('#sen').attr("disabled","true");
    if (!this.words||this.words==" ") {
      alert('内容不能为空');
    }else{
     // console.log(this.src);
      this.message(this.src);
    }
  }
message(src){
  var temp;
  if (src=="/upload/blogpicture/white.png") {
    temp='';
  } else {
    temp=src;
  }
  var params = {
    "title":this.username+"的游记",
    "stitle":'',
    "categories":["H1QbOnwAf", "By2w49cyX"],
    "tags":["ryDyMqcJX"],
    "sImg":temp,
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
        this.words="";
        this.navCtrl.parent.select(4);
      }
  );
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
takepic(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    //let base64Image = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
   });
}
}

