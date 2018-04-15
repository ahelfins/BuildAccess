import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  	parkingQuestions: Observable<any[]>;
  	buildingQuestions: Observable<any[]>;
  	roomQuestions: Observable<any[]>;
  	type: string;
  	questions: Observable<any[]>;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  		this.parkingQuestions = this.firebaseProvider.getParkingQuestions().valueChanges();
  		this.buildingQuestions = this.firebaseProvider.getBuildingQuestions().valueChanges();
  		this.roomQuestions = this.firebaseProvider.getRoomQuestions().valueChanges();
  		this.type = navParams.get('data');
  	}



    ionViewDidLoad() {
    	console.log(this.type);
    	/*Don't get stuff from the DOM because apparently this is A Bad*/
    	if(this.type == "parking")
    		this.questions = this.parkingQuestions;
    	else if(this.type == "building")
    		this.questions = this.buildingQuestions;
    	else if(this.type == "room")
    		this.questions = this.roomQuestions;

    	/*var parking = document.getElementById("parking");
    	var building = document.getElementById("building");
    	var room = document.getElementById("room");

    	console.log(document.getElementById("parking"));
        
        if(this.type == "parking"){
        	parking.style.visibility = "visible";
        	building.style.visibility = "hidden";
        	room.style.visibility = "hidden";
        } else if(this.type == "building"){
        	building.style.visibility = "visible";
        	parking.style.visibility = "hidden";
        	room.style.visibility = "hidden";
        } else if(this.type == "room"){
        	room.style.visibility = "visible";
        	parking.style.visibility = "hidden";
        	building.style.visibility = "hidden";
        }*/



        /*console.log('ionViewDidLoad InfoPage');
        document.getElementById("question").innerHTML = "hello";
        var arr2 = this.parkingQuestions.observableArray();
        let arr = [];
        let i = 0;
        this.parkingQuestions.subscribe(q => {
        	q.forEach(q_item => {
        		arr[i] = q_item;
        		console.log(q_item);
        		i++;
        	});
        });
        console.log(arr2);*/
    }
}
