import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { CartService } from '../services/cart/cart.service';
import { ProductsService } from '../services/products/products.service';
import { HerbviewPage } from '../pages/herbview/herbview.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public cart : CartService,public modalCtrl : ModalController,private router: Router,public productService : ProductsService, public routerOutlet : IonRouterOutlet
  ) {}

  ionViewWillEnter() {
    this.cart.unseen = 0;
    //this.cart.getCartTotalQty();
    //this.cart.totalPrice();
  }

  async viewHerbalSelected(item){
    console.log('item_id :>> ', item);
    //let isViewH = this.cart.isViewingherb(item.id);
    let nameItem = item.name;
    let itemCategory = item.category;
    let imageItem = item.imgurl;
    let descripItem = item.description;
    let usePrep = item.usesprep;
    
    const modal = await this.modalCtrl.create({
      component: HerbviewPage,
      //cssClass: 'herbalViewer-modal',
      componentProps: {
        image: imageItem,
        name: nameItem,
        category: itemCategory,
        description: descripItem,
        usesprep: usePrep,
      },
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();

    await modal.onWillDismiss().then((result) => {
      console.log('result :>> ', result);
    }).catch((err) => {
      console.log('err :>> ', err);
    });
    
  }

}
