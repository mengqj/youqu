import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, AlertController,ViewController,ModalController} from 'ionic-angular';
import { File } from '@ionic-native/file';

import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
import {Camera, CameraOptions} from "@ionic-native/camera";
import { CameraPage }  from '../camera/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  avatar: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, 
    private imagePicker: ImagePicker, private camera: Camera,
    private transfer:FileTransfer,private file:File,private FileTransfer:FileTransferObject,
    
    public viewCtrl:ViewController,public modalCtrl:ModalController) {
       this.FileTransfer=this.transfer.create();  
  }
val=new Array();
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: '拍照',
        role: 'takePhoto',
        handler: () => {
          this.takePhoto();
        }
      }, {
        text: '从相册选择',
        role: 'chooseFromAlbum',
        handler: () => {
          this.chooseFromAlbum();
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log("cancel");
        }
      }]
    });

    actionSheet.present().then(value => {
      return value;
    });
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: true,
    };

    this.camera.getPicture(options).then(image => {
      console.log('Image URI: ' + image);
      this.avatar = image.slice(7);
    }, error => {
      console.log('Error: ' + error);
    });
  }

  chooseFromAlbum() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
      width: 200,
      height: 200
    };
    this.imagePicker.getPictures(options).then((result)=>{
      for(var i=0;i<result.length;i++)
      {
        this.val[i].src=result[i];
      }
    },(error)=>{
      console.log('Error'+error);
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"]});
    alert.present().then(value => {
      return value;
    });
  }
  back(){
    this.viewCtrl.dismiss();
  }
 openCamera(){
  let profileModal = this.modalCtrl.create(CameraPage);
  profileModal.present();
 }
  

  
}
