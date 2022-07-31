import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-herbview',
  templateUrl: './herbview.page.html',
  styleUrls: ['./herbview.page.scss'],
})
export class HerbviewPage implements OnInit {

  item: any;

  name ='';
  category='';
  image='';
  description='';
  usesprep='';

  constructor(private modalCtrl: ModalController,public cart: CartService,public productService : ProductsService, private navParams: NavParams) { }

  ngOnInit() {
    this.category = this.navParams.get('image');
    this.name = this.navParams.get('name');
    this.category = this.navParams.get('category');
    this.description = this.navParams.get('description');
    this.usesprep = this.navParams.get('usesprep');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
  
  viewingItem(product) {
    this.item = null;
    this.item = product;
  }

}
