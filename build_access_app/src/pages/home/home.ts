import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	questionsPage: any;
	school: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questionsPage = QuestionsPage;
		this.school = navParams.get('id');
		console.log("home has " + this.school);

  }

  goTo(type){
  	this.navCtrl.push(QuestionsPage, {
  		data: type
  	});
  }



}
