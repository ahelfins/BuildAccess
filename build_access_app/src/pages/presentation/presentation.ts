import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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
  buildings: Observable<any[]>;
  rooms: Observable<any[]>;
  fbProvider: FirebaseProvider;

  school: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbProvider: FirebaseProvider) {
    this.school = navParams.get('id');
    console.log("presentation has " + this.school);
    this.buildings = this.fbProvider.getBuildings(this.school).valueChanges();
    this.fbProvider = fbProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
    this.school = this.school;
    console.log(this.school);
    
  }

  generateRooms(building){
    console.log("hello generaterooms");
    //console.log(item.id);
    this.rooms = this.fbProvider.getRooms(this.school, building).valueChanges();
  }

}
