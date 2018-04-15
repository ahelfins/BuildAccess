import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { ReportPage } from '../report/report';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  school : string;

  tab1Root = InfoPage;
  tab2Root = HomePage;
  tab3Root = ReportPage;

  constructor(public navParams: NavParams) {
    this.school = navParams.get('data');
    console.log(this.school);
  }
}
