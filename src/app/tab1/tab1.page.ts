import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { AddToFavoritesPage } from '../pages/add-to-favorites/add-to-favorites.page';
import { ProductFilterPage } from '../pages/product-filter/product-filter.page';
import { CartService } from '../services/cart/cart.service';
import { ProductsService } from '../services/products/products.service';
import { HerbviewPage } from '../pages/herbview/herbview.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // set app banner slides
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  };

  bannerImages: any = [];
  searchTerm: string;

  

  constructor(
    public productService : ProductsService,
    public routerOutlet : IonRouterOutlet,
    public modalCtrl : ModalController,
    public cart : CartService,
    private router: Router,
    private actionSheetController: ActionSheetController
  ) {
    this.bannerImages = this.productService.bannerImages;
    this.productService.initProductList();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  search(event: any) {
    let term = event.target.value;
    console.log({term});
    this.productService.searchProducts(term);
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
      cssClass: 'herbalViewer',
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

  async addToFavModal(item) {
    console.log('item_id :>> ', item);
    let isAdded = this.cart.isAddedToCart(item.id);

    if ( !isAdded ) {
      this.cart.placeItem(item);
      const modal = await this.modalCtrl.create({
        component: AddToFavoritesPage,
        cssClass: 'addtofavorites-modal',
        presentingElement: this.routerOutlet.nativeEl
      });
  
      await modal.present();

      await modal.onWillDismiss().then((result) => {
        console.log('result :>> ', result);
      }).catch((err) => {
        console.log('err :>> ', err);
      });
      
    } else {
      this.router.navigate(['/tabs/tab2']);
    }
    
  }

  async filterPage() {
    const modal = await this.modalCtrl.create({
      component: ProductFilterPage,
      //cssClass: ,
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();
    
    await modal.onWillDismiss().then((result) => {
      console.log('result :>> ', result);
    }).catch((err) => {
      console.log('err :>> ', err);
    });
  }

  async sortProducts() {
    const actionSheet = await this.actionSheetController.create({
        header: "Sort by",
        mode: "ios",
        cssClass: "sort-products",
        buttons: [{
                text: 'Latest Herbals',
                handler: () => {
                  this.productService.products.sort((a, b) => b.id < a.id ? -1: 0)
                }
            },
            {
                text: 'Z - A',
                handler: () => {
                  this.productService.products.sort((a, b) => b.name < a.name ? -1: 0)
                }
            },
            {
                text: 'A - Z',
                handler: () => {
                  this.productService.products.sort((a, b) => b.name < a.name ? 0: -1)
                }
                
            },
            /*{
              text: 'Random List',
              handler: () => {
                this.productService.products[Math.floor(Math.random()*this.productService.products.length)];
              }
              
            },*/
            {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
        ]
    });
    await actionSheet.present();
  }


}
