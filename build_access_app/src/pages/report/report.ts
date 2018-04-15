import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  school: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.school = navParams.get('id');
    console.log("reports has " + this.school);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}
