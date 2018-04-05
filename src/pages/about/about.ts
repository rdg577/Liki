import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  URLPhotos: any;
  Photos: any;
  constructor(public navCtrl: NavController, private http: Http) {
    this.URLPhotos = "https://jsonplaceholder.typicode.com/photos";


    this.http.get(this.URLPhotos).subscribe(
      (result) => {
        this.Photos = JSON.parse(result._body) ;
        // console.log(JSON.parse(result._body));
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    )
  }

  ionViewDidEnter() {
  }

}
