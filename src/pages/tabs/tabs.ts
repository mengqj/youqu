import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BeginPage } from '../begin/begin';
import { ClausePage } from '../clause/clause';
import { GuanzhuPage } from '../guanzhu/guanzhu';
import { LaunchPage } from '../launch/launch';
import { MyPage } from '../my/my';
import { PlusPage } from '../plus/plus';
import { QuestionPage } from '../question/question';
import { RecommendPage } from '../recommend/recommend';
import { TheyPage } from '../they/they';
import { CallbackPage } from '../callback/callback';
import { CameraPage } from '../camera/camera';
import { ChangeinfoPage } from '../changeinfo/changeinfo';
import { ContentPage } from '../content/content';
import { DiscoveryPage } from '../discovery/discovery';
import { EditPage } from '../edit/edit';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword';
import { GuidePage } from '../guide/guide';
import { RegisterPage } from '../register/register';
import { SendtextPage } from '../sendtext/sendtext';
import { SendyzmPage } from '../sendyzm/sendyzm';
import { SettingPage } from '../setting/setting';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DiscoveryPage;
  tab3Root = PlusPage;
  tab4Root = GuidePage;
  tab5Root = MyPage;

  constructor() {

  }
}
