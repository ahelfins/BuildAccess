import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//when this page is returned to, there is still data in the fields and the tabs are on the wrong things, so we need to figure out how to reset that

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
    school: any;
    answers: Array<any>;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  		this.parkingQuestions = this.firebaseProvider.getParkingQuestions().valueChanges();
  		this.buildingQuestions = this.firebaseProvider.getBuildingQuestions().valueChanges();
  		this.roomQuestions = this.firebaseProvider.getRoomQuestions().valueChanges();
  		this.type = navParams.get('type');
      this.school = navParams.get('data');
      this.answers = new Array();
      console.log("questions has "+this.school);
  	}

    sendQuestionData(item){
      //implement firebase pushing of answers after answers array creation and ngModel use in ngFor in html is fixed
      this.navCtrl.push(TabsPage, {data: this.school});
    }

    //uncomment this when ngModel is working
    /**storeAnswers(item){
      let index = this.answers.indexOf(item);
      if(index == -1){
        this.answers.push({item: this.answer});
      }
      else{
        answers[index]=this.answer;
      }
      console.log(this.answers);
    }*/

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
