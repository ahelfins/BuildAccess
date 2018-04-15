import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getParkingQuestions() {
  	return this.afDB.list('/Parking/');
  }

  getBuildingQuestions(){
  	return this.afDB.list('/BuildingQs/');
  }

  getRoomQuestions(){
  	return this.afDB.list('/RoomQs/');
  }

}
