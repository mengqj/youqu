import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { PhotoLibrary } from '@ionic-native/photo-library';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-changeinfo',
  templateUrl: 'changeinfo.html',
})
export class ChangeinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public http:HttpClient,public alertCtrl:AlertController) {
  }

  back() {
    this.viewCtrl.dismiss();
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  gender: string = "f";
  name:string;
  email:string;
  phone:string;
  name1:string;
  

//   tryRequestAuthorization() {
//   this.photoLibrary.requestAuthorization().then(() => {
//     this.photoLibrary.getLibrary().subscribe({
//       next: library => {
//         library.forEach(function(libraryItem) {
//           console.log(libraryItem.id);          // ID of the photo
//           console.log(libraryItem.photoURL);    // Cross-platform access to photo
//           console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
//           console.log(libraryItem.fileName);
//           console.log(libraryItem.width);
//           console.log(libraryItem.height);
//           console.log(libraryItem.creationDate);
//           console.log(libraryItem.latitude);
//           console.log(libraryItem.longitude);
//           console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
//         });
//       },
//       error: err => { console.log('could not get photos'); },
//       complete: () => { console.log('done getting photos'); }
//     });
//   })
//   .catch(err => console.log('permissions weren\'t granted'));
// }


submit(){
  var params={
    userName:this.name,
    name:this.name1,
    gender:this.gender,
    birth:this.event.month,
    email:this.email,
    phoneNum:this.phone,
    
  }
  let url:string='http://35.194.153.183:8080/api/users/updateInfo ';
  this.http.post(url,params).subscribe(data =>{
   if(data['state']=="success")
   {
    let alert = this.alertCtrl.create({
    
      subTitle:'修改成功' ,
      buttons: ['OK']
    });
    alert.present();
   }
   else if(data['state']=="error")
   {
    let alert = this.alertCtrl.create({
      title:'修改失败',
      subTitle:data['message'],
      buttons: ['OK']
    });
    alert.present();
   }
   
   else if(data['state']=="error"&&data['name'].length<2)
   {
    let alert = this.alertCtrl.create({
      title:'修改失败',
      subTitle:'昵称应为'+data['message'],
      buttons: ['OK']
    });
    alert.present();
   }
  })
}

}
