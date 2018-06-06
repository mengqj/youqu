import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";

@Component({
      selector: 'page-home',
      templateUrl: 'home.html'
})
    export class HomePage {
      @ViewChild(Slides) slides: Slides;
      items = [];
      constructor(public platform: Platform,
        public appCtrl: App,
        public toastCtrl: ToastController,public modalCtrl:ModalController,public navCtrl: NavController,private http: HttpClient) {
          this.platform.ready().then(() => {
            this.registerBackButtonAction(null);
          });
          this.getLocation();
      }
      ionViewWillEnter() {
        this.getlun();
        this.getAd();
        this.getCon();
      }
      ad=new Array();
      val=new Array();
      lunbo=new Array();
      len;
      host='35.194.153.183';
      typeId='HJMQ4wCJQ';
      location;
      //获取定位
      getLocation(){
        let url:string='http://api.map.baidu.com/location/ip?ak=yvuRyfeZeWrT6KxGgGK5G5MU1bI4L8tf&coor=bd09ll&callback=jsonpCallback';
    this.http.jsonp(url,'callback').subscribe(
      (data:any)=>{
        let city:any=data.content.address_detail.city;
        this.location=city;
      });
      }
    //获取广告
      getAd(){
      let url:string='http://'+this.host+':8080/api/content/getList?typeId='+this.typeId;
      this.http.get(url)
      .subscribe(
      (data:any) =>{
        this.ad = data['docs'];
        //console.log(data);
       for(var i=0;i<this.ad.length;i++){
        this.ad[i].sImg='http://'+this.host+':8080'+data.docs[i].sImg;
        }
      });
    }
    //获取首页推荐内容
      getCon(){
        let tagName="首页推荐";
        let url:string='http://'+this.host+':8080/api/content/getList?tagName='+tagName;
      this.http.get(url)
      .subscribe(
      (data:any) =>{
        this.val = data['docs'];
        //console.log(data);
       for(var i=0;i<this.val.length;i++){
        this.val[i].sImg='http://'+this.host+':8080'+data.docs[i].sImg;

        }
      });
      }
      //获取轮播图
      getlun(){
        let tagName="轮播图";
        let url:string='http://'+this.host+':8080/api/content/getList?tagName='+tagName;
      this.http.get(url)
      .subscribe(
      (data:any) =>{
        this.lunbo = data['docs'];
        //console.log(data);
        this.len=this.lunbo.length;
       for(var i=0;i<this.lunbo.length;i++){
        this.lunbo[i].sImg='http://'+this.host+':8080'+data.docs[i].sImg;
        }
      });
      }

       //控制硬件返回按钮是否触发，默认false
       backButtonPressed: boolean = false;
      //注册方法
      registerBackButtonAction(tabRef: Tabs): void {

        //registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(() => {
          //获取NavController
          let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
          //如果可以返回上一页，则执行pop
          if (activeNav.canGoBack()) {
            activeNav.pop();
          } else {
            if (tabRef == null) {
              //执行退出
              this.showExit();
            } else {
              //选择首页第一个的标签
              tabRef.select(0);
            }
          }
        });
      }
      //退出应用方法
      showExit() {
        //如果为true，退出
        if (this.backButtonPressed) {
          this.platform.exitApp();
        } else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom'
            }).present();
          //标记为true
          this.backButtonPressed = true;
          //两秒后标记为false，如果退出的话，就不会执行了
          setTimeout(() => this.backButtonPressed = false, 2000);
        }
      }
    //搜索
    search(){
      this.navCtrl.push('SearchPage');
    }
    //跳转
    content(id){
      this.navCtrl.push('ClicktextPage',{textId:id});
    }

    openlist(){
      this.navCtrl.push('NewslistPage');
    }
  }


