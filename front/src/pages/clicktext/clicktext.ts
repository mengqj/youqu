import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";
import * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-clicktext',
  templateUrl: 'clicktext.html',
})
export class ClicktextPage {
  id;
  val={
    title:'',
    sImg:'',
    comments:''
  };
  message;
  meslist=new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {

    if (navParams.data['textId']) {
      this.id=navParams.data['textId'];
    }
  }
  userId=localStorage.getItem('ID');
  userName=localStorage.getItem("userName");
  ionViewWillEnter(){
    let host='35.194.153.183';
    let url:string='http://'+host+':8080/api/content/getContent?apiSource=client&id='+this.id;
    //获取内容
    this.http.get(url)
    .subscribe(
    (data:any) =>{
      this.val = data['doc'];
      if (this.val.title==this.userName+"的游记") {
        this.val.title="你的游记";
        $('#htitle').hide();
      }
      setTimeout(() => {
        this.clear();
      }, 50);
    });
    this.getlist();
  };
  //获取留言列表
  getlist(){
    let host='35.194.153.183';
    let url2:string='http://'+host+':8080/api/message/getList?contentId='+this.id;
    this.http.get(url2)
    .subscribe(
    data =>{
      this.meslist = data['docs'];
      //console.log(this.meslist);
      for(var i=0;i<this.meslist.length;i++){
        this.meslist[i].content=data['docs'][i].content;
        console.log(this.meslist[i].content);
        this.meslist[i].date=data['docs'][i].date;
        this.meslist[i].logo='http://'+host+':8080'+data['docs'][i].author.logo;
        this.meslist[i].name=data['docs'][i].author.userName;
      }

    });
  }
  postMessage(){
    $('#sendmessage').attr("disabled","true");
    console.log(this.message);
    var params = {
    "contentId": this.id,
    "content":this.message,
    "author":this.userId,
    "replyContent": "",
    "replyAuthor": "",
    "relationMsgId": ""
    };
      let url:string='http://35.194.153.183:8080/api/message/post';
      this.http.post(url,params)
      .subscribe(
        data => {
          //console.log(data);
          $('#sendmessage').removeAttr("disabled");
          this.message='';
          this.getlist();
        }
    );
  }

  clear(){
    $('.simg').each(function(){
      if($(this).attr("src")=="http://35.194.153.183:8080"){
        $(this).hide();
      }
    })
  }
}
