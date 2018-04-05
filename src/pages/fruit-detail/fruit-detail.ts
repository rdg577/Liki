import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fruit-detail',
  templateUrl: 'fruit-detail.html',
})
export class FruitDetailPage {
  fruit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fruit = this.navParams.data;
    console.log(this.fruit);
  }

  // ionic page hook
  ionViewDidLoad() {

  }

  ionViewDidEnter() {
    
  }

}
