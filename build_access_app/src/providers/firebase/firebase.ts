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

  pushNewSchool(school){
    this.afDB.list('/Schools/').push({ school: school });
  }

  pushNewBuilding(school,building){
    //this.afDB.list('/Schools/building').push({ building: building });
    this.afDB.database.ref("/").child('Schools').child(school).child(building).set(building);
    console.log('pushed to a new building');
  }

  getBuildings(school){
  	return this.afDB.list('/Schools/' + school + '/');
  }

  getRooms(school, building){
  	console.log("school: " + school);
  	console.log("building: " + building);
  	return this.afDB.list('/Schools/' + school.id + '/' + building + '/');
  }

  pushNewRoom(school,building, room){
      this.afDB.database.ref("/").child('Schools').child(school).child(building).child(room).set(room);
      console.log('pushed to a new room');
    }

}
