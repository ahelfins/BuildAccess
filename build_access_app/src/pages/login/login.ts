import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.tabsPage = TabsPage;
  }

  goToHome(school){
    //this.school = document.getElementById('schoolInput').value;
    this.navCtrl.push(TabsPage, {data: school});
    console.log("document school "+school);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
