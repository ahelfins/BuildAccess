import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { QuestionsPage } from '../pages/questions/questions';
import { ReportPage } from '../pages/report/report';
import { PresentationPage } from '../pages/presentation/presentation';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    LoginPage,
    HomePage,
    QuestionsPage,
    ReportPage,
    PresentationPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    LoginPage,
    HomePage,
    QuestionsPage,
    ReportPage,
    PresentationPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
