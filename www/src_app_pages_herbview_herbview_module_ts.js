(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["src_app_pages_herbview_herbview_module_ts"],{

/***/ 8717:
/*!***********************************************************!*\
  !*** ./src/app/pages/herbview/herbview-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerbviewPageRoutingModule": () => (/* binding */ HerbviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _herbview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herbview.page */ 8161);




const routes = [
    {
        path: '',
        component: _herbview_page__WEBPACK_IMPORTED_MODULE_0__.HerbviewPage
    }
];
let HerbviewPageRoutingModule = class HerbviewPageRoutingModule {
};
HerbviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HerbviewPageRoutingModule);



/***/ }),

/***/ 2464:
/*!***************************************************!*\
  !*** ./src/app/pages/herbview/herbview.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerbviewPageModule": () => (/* binding */ HerbviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _herbview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herbview-routing.module */ 8717);
/* harmony import */ var _herbview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./herbview.page */ 8161);







let HerbviewPageModule = class HerbviewPageModule {
};
HerbviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _herbview_routing_module__WEBPACK_IMPORTED_MODULE_0__.HerbviewPageRoutingModule
        ],
        declarations: [_herbview_page__WEBPACK_IMPORTED_MODULE_1__.HerbviewPage]
    })
], HerbviewPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_herbview_herbview_module_ts.js.map