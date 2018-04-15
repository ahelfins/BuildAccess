import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { ReportPage } from '../report/report';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InfoPage;
  tab2Root = HomePage;
  tab3Root = ReportPage;

  constructor() {

  }
}
