(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 4588:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 1028);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 9634:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 1028);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 9370);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 4588);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 1028:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _pages_add_to_favorites_add_to_favorites_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/add-to-favorites/add-to-favorites.page */ 264);
/* harmony import */ var _pages_product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/product-filter/product-filter.page */ 836);
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart/cart.service */ 53);
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products/products.service */ 3281);
/* harmony import */ var _pages_herbview_herbview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/herbview/herbview.page */ 8161);











let Tab1Page = class Tab1Page {
    //searchTerm: string;
    constructor(productService, routerOutlet, modalCtrl, cart, router, actionSheetController) {
        this.productService = productService;
        this.routerOutlet = routerOutlet;
        this.modalCtrl = modalCtrl;
        this.cart = cart;
        this.router = router;
        this.actionSheetController = actionSheetController;
        // set app banner slides
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            }
        };
        this.bannerImages = [];
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
    search(event) {
        let term = event.target.value;
        console.log({ term });
        this.productService.searchProducts(term);
    }
    viewHerbalSelected(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('item_id :>> ', item);
            //let isViewH = this.cart.isViewingherb(item.id);
            let nameItem = item.name;
            let itemCategory = item.category;
            let imageItem = item.imgurl;
            let descripItem = item.description;
            let usePrep = item.usesprep;
            const modal = yield this.modalCtrl.create({
                component: _pages_herbview_herbview_page__WEBPACK_IMPORTED_MODULE_6__.HerbviewPage,
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
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
                console.log('result :>> ', result);
            }).catch((err) => {
                console.log('err :>> ', err);
            });
        });
    }
    addToFavModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('item_id :>> ', item);
            let isAdded = this.cart.isAddedToCart(item.id);
            if (!isAdded) {
                this.cart.placeItem(item);
                const modal = yield this.modalCtrl.create({
                    component: _pages_add_to_favorites_add_to_favorites_page__WEBPACK_IMPORTED_MODULE_2__.AddToFavoritesPage,
                    cssClass: 'addtofavorites-modal',
                    presentingElement: this.routerOutlet.nativeEl
                });
                yield modal.present();
                yield modal.onWillDismiss().then((result) => {
                    console.log('result :>> ', result);
                }).catch((err) => {
                    console.log('err :>> ', err);
                });
            }
            else {
                this.router.navigate(['/tabs/tab2']);
            }
        });
    }
    filterPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_3__.ProductFilterPage,
                //cssClass: ,
                presentingElement: this.routerOutlet.nativeEl
            });
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
                console.log('result :>> ', result);
            }).catch((err) => {
                console.log('err :>> ', err);
            });
        });
    }
    sortProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Sort by",
                mode: "ios",
                cssClass: "sort-products",
                buttons: [{
                        text: 'Latest Herbals',
                        handler: () => {
                            this.productService.products.sort((a, b) => b.id < a.id ? -1 : 0);
                        }
                    },
                    {
                        text: 'Z - A',
                        handler: () => {
                            this.productService.products.sort((a, b) => b.name < a.name ? -1 : 0);
                        }
                    },
                    {
                        text: 'A - Z',
                        handler: () => {
                            this.productService.products.sort((a, b) => b.name < a.name ? 0 : -1);
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
            yield actionSheet.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_5__.ProductsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".result-label {\n  width: 100%;\n  padding-top: 10px;\n  text-align: center;\n  position: absolute;\n  z-index: 10;\n}\n\n.result-label span {\n  padding: 5px 8px;\n  background: black;\n  color: white;\n  border-radius: 20px;\n  font-size: 0.8rem;\n}\n\n.noitem {\n  text-align: center;\n  color: #b2b2b2;\n  width: 100%;\n}\n\n.noitem img {\n  width: 100px;\n  margin-top: 50px;\n}\n\n.noitem h1 {\n  font-size: 1rem;\n}\n\n.font-bold {\n  font-weight: bold;\n  color: black;\n}\n\nion-icon {\n  color: black;\n}\n\nion-content {\n  --background: #E4FBF7;\n}\n\nion-toolbar {\n  --background: #14CBA8;\n}\n\n.btnFav {\n  --background: #FFCA7C;\n  --color: black;\n  --background-hover: #e69a28;\n  font-size: xx-small;\n}\n\nion-refresher ion-refresher-content {\n  --color:black !important;\n  --pullingIcon-color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDRyxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUFJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxlQUFBO0FBRVI7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxxQ0FBQTtBQUNKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1sYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLnJlc3VsdC1sYWJlbCBzcGFuIHtcblx0cGFkZGluZzogNXB4IDhweDtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwxKTtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubm9pdGVte1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2IyYjJiMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxufVxuXG4uZm9udC1ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWljb257XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNFNEZCRjc7XG59XG5cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzE0Q0JBODtcbn1cblxuLmJ0bkZhdntcbiAgICAtLWJhY2tncm91bmQ6ICNGRkNBN0M7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZTY5YTI4O1xuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG5cbmlvbi1yZWZyZXNoZXIgaW9uLXJlZnJlc2hlci1jb250ZW50IHtcbiAgICAtLWNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLS1wdWxsaW5nSWNvbi1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    \n    <ion-searchbar mode=\"ios\" (ionChange)=\"search($event)\" debounce=\"500\" style=\"padding: 16px 0px; width: 90%; margin: 0 auto; --background: rgba(222, 219, 219, 0.45); color:black;\"></ion-searchbar>\n    \n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-slides style=\"background: #a9cac5;\" pager=\"true\" [options]=\"slideOpts\" *ngIf=\"bannerImages && bannerImages.length\">\n    <ion-slide *ngFor=\"let image of bannerImages\">  \n      <img style=\"height: 179px; width: 100% auto;\" class=\"banner-image\" [src]=\"image?.imgurl || 'assets/imgs/divisions.svg'\"/>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"result-label\" *ngIf=\"productService.show_result_size\">\n    <span>{{ productService.products.length }} Results </span> \n  </div>\n\n  <ion-grid>\n    <p>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        refreshingSpinner=\"circles\">\n      </ion-refresher-content>\n    </ion-refresher>\n    </p>\n\n    <ion-row style=\"margin-left: 10px;margin-right: 10px;\" class=\"ion-justify-content-between ion-padding-vertical\">\n      <ion-col size=\"4\">\n        <div class=\"font-bold\">\n          Herbals\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">\n        <ion-icon name=\"funnel-outline\" class=\"ion-padding-horizontal\" (click)='sortProducts()'></ion-icon>\n        <ion-icon data-cy=\"filter-btn\" name=\"filter{{ productService.isFiltered() ? '' : '-outline' }}\" (click)='filterPage()'></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    \n    <ion-row data-cy=\"products-list\">\n      <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" *ngFor='let product of productService.products'>\n        <ion-card class=\"ion-no-margin\">\n          <img style=\"height: 125px; width: 225px;\" [src]=\"product?.imgurl || 'assets/imgs/divisions.svg'\">\n          <ion-card-header>\n            <ion-card-subtitle>{{ product?.category }}</ion-card-subtitle>\n            <ion-card-title class=\"font-size-1\">{{ product?.name }}</ion-card-title>\n            \n          </ion-card-header>\n          <ion-card-content>\n            <div>\n              <ion-button style=\"text-transform: capitalize;\" color=\"success\" expand=\"block\" size=\"small\" (click)=\"viewHerbalSelected(product)\">View</ion-button>\n              \n              <ion-button style=\"text-transform: capitalize;\" class=\"btnFav\" data-cy=\"cart-btn\" expand=\"block\" size=\"small\" (click)=\"addToFavModal(product)\">\n              {{ cart.isAddedToCart(product?.id) ? 'Added' : 'Add to Favorites' }}\n            </ion-button></div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <div *ngIf=\"productService.products && productService.products.length === 0\" class=\"noitem\">\n        <img src=\"assets/images/search-icon.svg\" />\n        <h1 style=\"color:rgb(85, 85, 85);\">No results found</h1>\n        <h1>Try different or more general keywords</h1>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map