import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FruitDetailPage } from './fruit-detail';

@NgModule({
  declarations: [
    FruitDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FruitDetailPage),
  ],
})
export class FruitDetailPageModule {}
