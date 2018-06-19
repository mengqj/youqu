import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams,ModalController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,private http: HttpClient) {
  }

  ionViewWillEnter() {
    this.getQuestion();
    this.getUserQuestion();
  }
  val=new Array();
  valt=new Array();
  host='35.194.153.183';
  user=localStorage.getItem('ID');
  typeId='Bkxe_nDRG';
  //获取推荐问题
  getQuestion(){
    let url:string='http://'+this.host+':8080/api/content/getList?typeId='+this.typeId;
    this.http.get(url)
    .subscribe(
    (data:any) =>{
      this.val = data['docs'];
      console.log(data);
     for(var i=0;i<this.val.length;i++){
      this.val[i].logo='http://'+this.host+':8080'+data.docs[i].uAuthor.logo;
      this.val[i].name=data.docs[i].uAuthor.userName;
      this.val[i].title=data.docs[i].title;
      this.val[i].commentNum=data.docs[i].commentNum;
      this.val[i].date=data.docs[i].date;
      this.val[i].content=data.docs[i].markDownComments;
      this.val[i].id=data.docs[i].id;
      //console.log(data.docs[i].uAuthor.logo);
      }
    });
  }
  //获取用户提问
  getUserQuestion(){
    let url:string='http://'+this.host+':8080/api/content/getList?typeId='+this.typeId+'&user='+this.user;
    this.http.get(url)
    .subscribe(
    (data:any) =>{
      this.valt= data['docs'];
      console.log(data);
      for(var i=0;i<this.valt.length;i++){
      this.valt[i].logo='http://'+this.host+':8080'+data.docs[i].uAuthor.logo;
      this.valt[i].name=data.docs[i].uAuthor.userName;
      this.valt[i].title=data.docs[i].title;
      this.valt[i].commentNum=data.docs[i].commentNum;
      this.valt[i].date=data.docs[i].date;
      this.valt[i].content=data.docs[i].markDownComments;
      this.valt[i].id=data.docs[i].id;
      }
    });
  }
  //获取用户回答目前无法实现
  getUserRequest(){

  }
  question:string="recommend";
  ask(){
    this.navCtrl.push('AskPage');
  }
  show(id){
    this.navCtrl.push('ClicktextPage',{textId:id});
  }
}
