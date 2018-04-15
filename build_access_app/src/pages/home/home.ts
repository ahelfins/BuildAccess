import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	questionsPage: any;

	constructor(public navCtrl: NavController) {
    this.questionsPage = QuestionsPage;

  }



}
