import { Component } from '@angular/core';

import { QuestionsPage } from '../questions/questions';
import { InfoPage } from '../info/info';
import { ReportPage } from '../report/report';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InfoPage;
  tab2Root = QuestionsPage;
  tab3Root = ReportPage;

  constructor() {

  }
}
