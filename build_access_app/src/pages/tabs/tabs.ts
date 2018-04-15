import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { ReportPage } from '../report/report';
import { PresentationPage } from '../presentation/presentation';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InfoPage;
  tab2Root = HomePage;
  tab3Root = ReportPage;
  tab4Root = PresentationPage;
  school : any;

  constructor(public navParams: NavParams) {
    this.school = { id : navParams.get('data') };
    console.log(this.school);
  }
}
