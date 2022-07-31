(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 6434:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4156);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 1284:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4156);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 9370);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 6434);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 4156:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart/cart.service */ 53);
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products/products.service */ 3281);
/* harmony import */ var _pages_herbview_herbview_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/herbview/herbview.page */ 8161);









let Tab2Page = class Tab2Page {
    constructor(cart, modalCtrl, router, productService, routerOutlet) {
        this.cart = cart;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.productService = productService;
        this.routerOutlet = routerOutlet;
    }
    ionViewWillEnter() {
        this.cart.unseen = 0;
        //this.cart.getCartTotalQty();
        //this.cart.totalPrice();
    }
    viewHerbalSelected(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('item_id :>> ', item);
            //let isViewH = this.cart.isViewingherb(item.id);
            let nameItem = item.name;
            let itemCategory = item.category;
            let imageItem = item.imgurl;
            let descripItem = item.description;
            let usePrep = item.usesprep;
            const modal = yield this.modalCtrl.create({
                component: _pages_herbview_herbview_page__WEBPACK_IMPORTED_MODULE_4__.HerbviewPage,
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
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
                console.log('result :>> ', result);
            }).catch((err) => {
                console.log('err :>> ', err);
            });
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #14CBA8;\n}\n\n.noitem {\n  text-align: center;\n  color: #b2b2b2;\n}\n\n.noitem img {\n  width: 100px;\n  margin-top: 50px;\n}\n\n.backarrow {\n  font-size: 30px;\n}\n\n.itemt {\n  color: #4d4d4d;\n  margin: 0;\n  font-size: 1rem;\n}\n\n.scan-unit {\n  color: #929292;\n  margin: 0;\n  font-size: 0.8em;\n  margin-left: 45px;\n}\n\n.blush {\n  color: #c0c0c0;\n  margin: 0;\n}\n\n.blus {\n  color: #4d4d4d;\n  margin-top: 5px;\n}\n\n.left .col {\n  padding-left: 1px;\n}\n\n.rrow {\n  border-bottom: 1px solid #dedddd;\n  padding: 10px 0px;\n}\n\n.qty-bar {\n  font-size: 18px;\n  min-width: 60px;\n}\n\n.footer-bar {\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-top: 1px solid #e1dede;\n  background: white;\n}\n\n.bg-gray {\n  --background: #f0f0f0;\n  background: #f0f0f0;\n}\n\n.bg-white {\n  --background: #ffffff;\n  background: #ffffff;\n}\n\n.heading {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.mt-1 {\n  margin-top: 5px;\n}\n\n.mb-1 {\n  margin-bottom: 5px;\n}\n\n.p-12-15 {\n  padding: 12px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUFJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUk7RUFDSSxpQkFBQTtBQURSOztBQUlBO0VBQ0MsZ0NBQUE7RUFDQSxpQkFBQTtBQUREOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNDLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBREQ7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUFDRDs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTRDQkE4O1xufVxuXG4ubm9pdGVte1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2IyYjJiMjtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG59XG5cbi5iYWNrYXJyb3d7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5cbi5pdGVtdHtcbiAgICBjb2xvcjojNGQ0ZDRkO1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNjYW4tdW5pdHtcbiAgICBjb2xvcjogIzkyOTI5MjtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbn1cblxuLmJsdXNoe1xuICAgIGNvbG9yOiNjMGMwYzA7XG4gICAgbWFyZ2luOjA7XG59XG5cbi5ibHVze1xuICAgIGNvbG9yOiM0ZDRkNGQ7XG4gICAgbWFyZ2luLXRvcDo1cHg7XG59XG5cbi5sZWZ0e1xuICAgIC5jb2x7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXB4O1xuICAgIH1cbn1cbi5ycm93IHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRkZGQ7XG5cdHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4ucXR5LWJhciB7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4uZm9vdGVyLWJhciB7XG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2UxZGVkZTtcblx0YmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5iZy1ncmF5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5iZy13aGl0ZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uaGVhZGluZyB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tdC0xIHtcbiAgICBtYXJnaW4tdG9wIDogNXB4O1xufVxuXG4ubWItMSB7XG4gICAgbWFyZ2luLWJvdHRvbSA6IDVweDtcbn1cblxuLnAtMTItMTUge1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcbn0iXX0= */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      My Favorites\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-gray\">\n\n  <div *ngIf=\"cart.items.length < 1\" class=\"noitem\">\n    <img style=\"width: 100%;\" src=\"assets/images/oopppsfav.png\" />\n    <h5>Oops! There's no favorites added</h5>\n  </div>\n\n  <ion-list *ngIf=\"cart.items.length > 0\" class=\"bg-gray\" data-cy=\"cart-list\">\n    <ion-row *ngFor=\"let product of cart.items;let i = index;\" class=\"rrow\" class=\"ion-no-padding mt-1 bg-white\">\n        <ion-col size=\"3\">\n            <img src=\"{{product.imgurl || 'assets/images/products.svg'}}\" style=\"height: auto;\"/>\n        </ion-col>\n        <ion-col size=\"9\">\n            <h4 class=\"itemt\">{{ product?.name }} <span data-cy=\"rm-item\" (click)=\"cart.removeItem(i)\" style=\"float:right; font-size: 1.4rem;\"><ion-icon name=\"close\"></ion-icon></span></h4>\n            <br>\n            <ion-button color=\"success\" expand=\"full\" size=\"small\" (click)=\"viewHerbalSelected(product)\">View</ion-button>\n        </ion-col>\n    </ion-row>\n  </ion-list>\n  \n</ion-content>\n\n<!--<ion-footer class=\"ion-no-border\">\n  <ion-toolbar class=\"bg-gray\" *ngIf=\"cart.items.length > 0\">\n    <ion-row class=\"footer-bar\">\n      <ion-col class=\"p-12-15\">\n        <div>\n          <h2 class=\"heading\">Order Info</h2>\n          <p class=\"mb-1\">Total Quantity : {{ cart?.total_cart_qty }}</p>\n          <p class=\"mt-1\">Total Price    : {{ cart?.total_price | currency: 'USD' }}</p>\n        </div>\n        <ion-button mode=\"ios\" color=\"danger\" expand=\"full\" (click)=\"placeOrder()\"> Place Order </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>-->");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map