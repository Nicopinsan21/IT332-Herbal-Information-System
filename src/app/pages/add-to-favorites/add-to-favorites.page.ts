import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.page.html',
  styleUrls: ['./add-to-favorites.page.scss'],
})
export class AddToFavoritesPage implements OnInit {

  minFavQty: any;
  listHerb: any;

  constructor(private modalCtrl: ModalController,public cart: CartService,) { 
    this.minFavQty = 1;
    this.cart.item['cartQuantity'] =  this.minFavQty;
    this.listHerb  = this.cart.item['totalStock'] || 0;
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  addToFav() {
    this.cart.addToFav();
    this.modalCtrl.dismiss();
  }

}
