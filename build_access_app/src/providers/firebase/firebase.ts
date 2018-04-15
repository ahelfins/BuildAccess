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

  schools: Array<any>;

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    this.schools = new Array();
    this.makeSchoolsList();
    console.log("schools list " + this.schools[0]);
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
  private makeSchoolsList(){
    let i = 0;
    this.afDB.list("/Schools").valueChanges()
      .subscribe(list =>{
        list.forEach(item => {
          this.schools[i] = item['school'];
          console.log(this.schools[i]);
          i++;
        });
      });
  }

  pushNewSchool(school){
    if(this.schools.indexOf(school)==-1){
      console.log(school + " is not in "+this.schools);
      this.schools[this.schools.length]=school;
      console.log("last school in list "+this.schools[this.schools.length]);
      this.afDB.list('/Schools/').push({ school: school });
    }
  }

}
