import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HelloPage } from '../hello/hello';
import { EditPage } from '../edit/edit';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root =  EditPage;
  tab5Root = ItemDetailsPage;

  constructor() {

  }
}
