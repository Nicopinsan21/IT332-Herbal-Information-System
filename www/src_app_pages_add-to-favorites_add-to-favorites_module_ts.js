(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["src_app_pages_add-to-favorites_add-to-favorites_module_ts"],{

/***/ 1777:
/*!***************************************************************************!*\
  !*** ./src/app/pages/add-to-favorites/add-to-favorites-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToFavoritesPageRoutingModule": () => (/* binding */ AddToFavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _add_to_favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-favorites.page */ 264);




const routes = [
    {
        path: '',
        component: _add_to_favorites_page__WEBPACK_IMPORTED_MODULE_0__.AddToFavoritesPage
    }
];
let AddToFavoritesPageRoutingModule = class AddToFavoritesPageRoutingModule {
};
AddToFavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddToFavoritesPageRoutingModule);



/***/ }),

/***/ 8427:
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-to-favorites/add-to-favorites.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToFavoritesPageModule": () => (/* binding */ AddToFavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _add_to_favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-favorites-routing.module */ 1777);
/* harmony import */ var _add_to_favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-to-favorites.page */ 264);







let AddToFavoritesPageModule = class AddToFavoritesPageModule {
};
AddToFavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_to_favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddToFavoritesPageRoutingModule
        ],
        declarations: [_add_to_favorites_page__WEBPACK_IMPORTED_MODULE_1__.AddToFavoritesPage]
    })
], AddToFavoritesPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-to-favorites_add-to-favorites_module_ts.js.map