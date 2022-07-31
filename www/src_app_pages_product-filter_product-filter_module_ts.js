(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["src_app_pages_product-filter_product-filter_module_ts"],{

/***/ 5557:
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-filter/product-filter-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFilterPageRoutingModule": () => (/* binding */ ProductFilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _product_filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-filter.page */ 836);




const routes = [
    {
        path: '',
        component: _product_filter_page__WEBPACK_IMPORTED_MODULE_0__.ProductFilterPage
    }
];
let ProductFilterPageRoutingModule = class ProductFilterPageRoutingModule {
};
ProductFilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductFilterPageRoutingModule);



/***/ }),

/***/ 2427:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-filter/product-filter.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFilterPageModule": () => (/* binding */ ProductFilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _product_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-filter-routing.module */ 5557);
/* harmony import */ var _product_filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-filter.page */ 836);







let ProductFilterPageModule = class ProductFilterPageModule {
};
ProductFilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductFilterPageRoutingModule
        ],
        declarations: [_product_filter_page__WEBPACK_IMPORTED_MODULE_1__.ProductFilterPage]
    })
], ProductFilterPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-filter_product-filter_module_ts.js.map