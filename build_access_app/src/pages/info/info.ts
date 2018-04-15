import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  	parkingQuestions: Observable<any[]>;
  	buildingQuestions: Observable<any[]>;
  	roomQuestions: Observable<any[]>;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  		this.parkingQuestions = this.firebaseProvider.getParkingQuestions().valueChanges();
  		this.buildingQuestions = this.firebaseProvider.getBuildingQuestions().valueChanges();
  		this.roomQuestions = this.firebaseProvider.getRoomQuestions().valueChanges();
  	}

    ionViewDidLoad() {
        console.log('ionViewDidLoad InfoPage');
    }



}
