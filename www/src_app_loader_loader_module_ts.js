(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["src_app_loader_loader_module_ts"],{

/***/ 2632:
/*!*************************************************!*\
  !*** ./src/app/loader/loader-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageRoutingModule": () => (/* binding */ LoaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.page */ 9909);




const routes = [
    {
        path: '',
        component: _loader_page__WEBPACK_IMPORTED_MODULE_0__.LoaderPage
    }
];
let LoaderPageRoutingModule = class LoaderPageRoutingModule {
};
LoaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoaderPageRoutingModule);



/***/ }),

/***/ 505:
/*!*****************************************!*\
  !*** ./src/app/loader/loader.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageModule": () => (/* binding */ LoaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader-routing.module */ 2632);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page */ 9909);







let LoaderPageModule = class LoaderPageModule {
};
LoaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoaderPageRoutingModule
        ],
        declarations: [_loader_page__WEBPACK_IMPORTED_MODULE_1__.LoaderPage]
    })
], LoaderPageModule);



/***/ }),

/***/ 9909:
/*!***************************************!*\
  !*** ./src/app/loader/loader.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPage": () => (/* binding */ LoaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_loader_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./loader.page.html */ 4405);
/* harmony import */ var _loader_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page.scss */ 7660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let LoaderPage = class LoaderPage {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            this.router.navigateByUrl('tabs');
        }, 5000);
    }
    ngOnInit() {
    }
};
LoaderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loader',
        template: _raw_loader_loader_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_loader_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoaderPage);



/***/ }),

/***/ 7660:
/*!*****************************************!*\
  !*** ./src/app/loader/loader.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #E4FBF7;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.cntrAlign {\n  margin: 0 auto;\n  margin-top: 60%;\n  margin-left: 20%;\n  text-align: center;\n}\n\n@keyframes rotate-scale-down-diag-1 {\n  0% {\n    transform: scale(1) rotate3d(1, 1, 0, 0deg);\n  }\n  50% {\n    transform: scale(0.5) rotate3d(1, 1, 0, -180deg);\n  }\n  100% {\n    transform: scale(1) rotate3d(1, 1, 0, -360deg);\n  }\n}\n\nion-img {\n  animation: rotate-scale-down-diag-1 0.7s linear both;\n  width: 200px;\n  height: 200px;\n  filter: drop-shadow(5px 5px 5px #222);\n}\n\nion-spinner {\n  z-index: 99999999 !important;\n  margin-right: 20%;\n  margin-top: 30%;\n  width: 50px;\n  height: 50px;\n  filter: drop-shadow(0px 0px 5px 1px rgba(0, 0, 0, 0.59));\n}\n\nh5 {\n  position: relative;\n  color: rgba(0, 0, 0, 0.3);\n  font-size: 20px;\n  text-align: center;\n  margin-left: -20%;\n}\n\nh5:before {\n  content: attr(data-text);\n  position: absolute;\n  overflow: hidden;\n  max-width: 15em;\n  white-space: nowrap;\n  color: #4CAF50;\n  animation: loading 4.5s linear;\n}\n\n@keyframes loading {\n  0% {\n    max-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQWdCSTtFQUNFO0lBRVUsMkNBQUE7RUFDZDtFQUNJO0lBRVUsZ0RBQUE7RUFDZDtFQUNJO0lBRVUsOENBQUE7RUFDZDtBQUNGOztBQUVFO0VBRVksb0RBQUE7RUFDUixZQUFBO0VBQ0EsYUFBQTtFQUVBLHFDQUFBO0FBQU47O0FBR0U7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsd0RBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0U7RUFDRTtJQUNJLFlBQUE7RUFFTjtBQUNGIiwiZmlsZSI6ImxvYWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI0U0RkJGNztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbnRyQWxpZ257XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtc2NhbGUtZG93bi1kaWFnLTEge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZTNkKDEsIDEsIDAsIDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUzZCgxLCAxLCAwLCAwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZTNkKDEsIDEsIDAsIC0xODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZTNkKDEsIDEsIDAsIC0xODBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUzZCgxLCAxLCAwLCAtMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlM2QoMSwgMSwgMCwgLTM2MGRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgcm90YXRlLXNjYWxlLWRvd24tZGlhZy0xIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUzZCgxLCAxLCAwLCAwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlM2QoMSwgMSwgMCwgMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KSByb3RhdGUzZCgxLCAxLCAwLCAtMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSByb3RhdGUzZCgxLCAxLCAwLCAtMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlM2QoMSwgMSwgMCwgLTM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZTNkKDEsIDEsIDAsIC0zNjBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgaW9uLWltZ3tcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1zY2FsZS1kb3duLWRpYWctMSAwLjdzIGxpbmVhciBib3RoO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlLXNjYWxlLWRvd24tZGlhZy0xIDAuN3MgbGluZWFyIGJvdGg7XHJcbiAgICAgIHdpZHRoOiAyMDBweDsgXHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjMjIyICk7XHJcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMik7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zcGlubmVye1xyXG4gICAgei1pbmRleDogOTk5OTk5OTkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjU5KSk7IFxyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjU5KSk7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwJTtcclxuICB9XHJcbiAgaDU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtd2lkdGg6IDE1ZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmcgNC41cyBsaW5lYXI7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ 4405:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"cntrAlign\">\n    <ion-img src=\"assets/logo.png\"></ion-img>\n    <h5 data-text=\"Herbal Information System\">Herbal Information System</h5>\n    <br>\n    <ion-spinner name=\"crescent\" color=\"success\"></ion-spinner>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_loader_loader_module_ts.js.map