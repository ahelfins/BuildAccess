import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PresentationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presentation',
  templateUrl: 'presentation.html',
})
export class PresentationPage {

  school: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.school = navParams.get('id');
    console.log("presentation has " + this.school);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
    this.school = this.school;
  }

}
