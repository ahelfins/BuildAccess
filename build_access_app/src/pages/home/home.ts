import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import { FirebaseProvider } from './../../providers/firebase/firebase';


@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	questionsPage: any;
	school: any;


	constructor(public navCtrl: NavController, public navParams: NavParams, public fbProvider: FirebaseProvider){
		this.school = navParams.get('id');
		console.log("home has " + this.school);
	}
	goTo(type,building,room){
		this.fbProvider.pushNewBuilding(this.school,building);
		this.fbProvider.pushNewRoom(this.school,building,room);
		this.navCtrl.push(QuestionsPage, {
			type: type,
			data: this.school
		});
		/*this.navCtrl.push(QuestionsPage, {
			data: type
		});*/
	}

}


/*
	Const itemsRef = afDB.list('Schools');
	this.itemsRef.push({ text: building });

	addItem(building: string){
	this.afDB.list("school/"+schoolId+"/building").push(building);
	//this.afDB.list("school/"+schoolId+"/buildingName").push(buildingName);
}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

}
*/
