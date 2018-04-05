import { FruitDetailPage } from '../fruit-detail/fruit-detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mgaPrutas: any;

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.mgaPrutas = [
      { name: 'Mango', price: '50.00' },
      { name: 'Apple', price: '150.00' },
      { name: 'Kiat2x', price: '350.00' }
    ];
    

  }

  ionViewDidLoad() {}

  ipaslakSaKaban() {
    this.storage.set('mgaPrutas', this.mgaPrutas);
    // this.storage.get('mgaPrutas').then(
    //   (val) => {
        
    //     if(val) {
    //       // save prutas if not exist in storage
    //       console.log('Naa na sa storage');
    //     } else {
    //       // save prutas
    //       this.storage.set('mgaPrutas', this.mgaPrutas);
    //     }

    //   }
    // );
  }

  displayDetail(prutas) {
    this.navCtrl.push(FruitDetailPage, prutas);
    console.log(prutas);
  }

  

}
