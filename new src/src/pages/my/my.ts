import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import {HttpClient} from "@angular/common/http";
import * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  username:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
     this.username=this.navParams.get('name');
     console.log(this.username);
     this.loading();
  }
  storage=window.localStorage;
  val=new Array();
  user;
  item=new Array()
words=new Array()

show="information"
setting(){
  this.navCtrl.push('SettingPage');
}

doionrefresh(ionrefresher){
  this.claer();
  setTimeout(()=>{
    this.loading();
   ionrefresher.complete();
},500);

}


loading(){
  this.user=this.storage.getItem('ID');
  console.log(this.user);
      let host='35.194.153.183';
      let host2='localhost';
      let url:string='http://35.194.153.183:8080/api/users/getUserContents?user='+this.user+"&typeId=H1QbOnwAf";
      let url1:string='http://35.194.153.183:8080/api/users/getUserReplies?author='+this.user;
      let url2:string='http://35.194.153.183:8080/api/users/getUser?searchkey='+this.user;
      var params={
        "categories":["H1QbOnwAf", "By2w49cyX"],
      }
      this.http.get(url)
      .subscribe(
      data =>{

        this.val = data['docs'];
        for(var i=0;i<this.val.length;i++){
          
          this.val[i].title=data['docs'][i].uAuthor.name;
          this.val[i].updateDate=data['docs'][i].updateDate.substr(5,5);
          // this.val[i].sImg='http://'+host+':8080'+data['docs'].sImg;
          this.val[i].content=data['docs'][i].markDownComments ;
          this.val[i].logo='http://'+host+':8080'+data['docs'][i].uAuthor.logo;
          console.log(this.val[i].updateDate);
      }
        console.log(data);
        setTimeout(() => {
        this.claer();
      }, 500);
      });
  
  
  this.http.get(url1).subscribe(data=>{
    console.log(data);
    
    this.words=data['docs'];
    for(var i=0;i<this.words.length;i++){
      this.words[i].name=data['docs'][i].author['userName'];
      this.words[i].date=data['docs'][i].date;
      this.words[i].content=data['docs'][i].content;
      this.words[i].title=data['docs'][i].contentId.stitle;
    }
  })
  
  this.http.get(url2).subscribe(data=>{
    this.item=[{
      name:data['docs'][0].name,
      logo:data['docs'][0].logo,
      bglogo:data['docs'][0].bgLogo
    }]
  
  })
  
}
claer(){
    $('.simg').each(function(){
      if($(this).attr("src")=="http://35.194.153.183:8080"){
        $(this).hide();
      }
    })
  }
open(id){
  this.navCtrl.push('ClicktextPage',{textId:id});
}
}
