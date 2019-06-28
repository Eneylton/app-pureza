import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './Cart';

@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
  ],
})
export class CartPageModule {}
