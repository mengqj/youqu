import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { DiscoveryPage } from '../discovery/discovery';
import { SendtextPage } from '../sendtext/sendtext';
import { GuidePage } from '../guide/guide';
import { MyPage } from '../my/my';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  constructor(public modalCtrl: ModalController) {
  }
  tab1Root = HomePage;
  tab2Root = DiscoveryPage;
  tab3Root=SendtextPage;

  tab4Root = GuidePage;
  tab5Root = MyPage;


}
