(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["common"],{

/***/ 7658:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 5133);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 6887);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 4366);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 4369:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 5392);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 6887:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 9214:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 9046:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 402:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./explore-container.component.html */ 6993);
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss */ 3643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 9370:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 402);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 264:
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-to-favorites/add-to-favorites.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToFavoritesPage": () => (/* binding */ AddToFavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_add_to_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-to-favorites.page.html */ 6969);
/* harmony import */ var _add_to_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-to-favorites.page.scss */ 2091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart/cart.service */ 53);






let AddToFavoritesPage = class AddToFavoritesPage {
    constructor(modalCtrl, cart) {
        this.modalCtrl = modalCtrl;
        this.cart = cart;
        this.minFavQty = 1;
        this.cart.item['cartQuantity'] = this.minFavQty;
        this.listHerb = this.cart.item['totalStock'] || 0;
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
};
AddToFavoritesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
AddToFavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-to-favorites',
        template: _raw_loader_add_to_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_to_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddToFavoritesPage);



/***/ }),

/***/ 8161:
/*!*************************************************!*\
  !*** ./src/app/pages/herbview/herbview.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerbviewPage": () => (/* binding */ HerbviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_herbview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./herbview.page.html */ 2775);
/* harmony import */ var _herbview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./herbview.page.scss */ 6519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart/cart.service */ 53);
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products/products.service */ 3281);







let HerbviewPage = class HerbviewPage {
    constructor(modalCtrl, cart, productService, navParams) {
        this.modalCtrl = modalCtrl;
        this.cart = cart;
        this.productService = productService;
        this.navParams = navParams;
        this.name = '';
        this.category = '';
        this.image = '';
        this.description = '';
        this.usesprep = '';
    }
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
};
HerbviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams }
];
HerbviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-herbview',
        template: _raw_loader_herbview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_herbview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HerbviewPage);



/***/ }),

/***/ 836:
/*!*************************************************************!*\
  !*** ./src/app/pages/product-filter/product-filter.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFilterPage": () => (/* binding */ ProductFilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_product_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-filter.page.html */ 5635);
/* harmony import */ var _product_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-filter.page.scss */ 7194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products/products.service */ 3281);






let ProductFilterPage = class ProductFilterPage {
    constructor(modalCtrl, productService) {
        this.modalCtrl = modalCtrl;
        this.productService = productService;
        this.tabs = {
            categories: true,
            price: false
        };
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    selectFilter(type) {
        Object.keys(this.tabs).forEach((value, index) => {
            console.log('object :>> ', value, index);
            this.tabs[value] = false;
        });
        this.tabs[type] = true;
    }
    setFilter(i, type) {
        console.log('setFilter :>> ', i, type);
        if ('undefined' === typeof this.productService[type][i]['isChecked']) {
            this.productService[type][i]['isChecked'] = false;
        }
        this.productService[type][i]['isChecked'] = !this.productService[type][i]['isChecked'];
    }
    applyFilter() {
        this.productService.selectedCategories = this.productService.categories.filter(val => val.isChecked);
        this.productService.applyFilter();
        this.modalCtrl.dismiss(true);
    }
    clearFilter() {
        this.productService.uncheckFilters();
        this.productService.applyFilter();
        this.modalCtrl.dismiss(true);
    }
};
ProductFilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService }
];
ProductFilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product-filter',
        template: _raw_loader_product_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductFilterPage);



/***/ }),

/***/ 3643:
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 2091:
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-to-favorites/add-to-favorites.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: none;\n}\n\n.modalboxsmall {\n  background: #ffffff;\n  padding: 10px;\n  border-radius: 5px;\n  margin: 0;\n}\n\n.close-box {\n  text-align: right;\n  font-size: 20px;\n  color: black;\n}\n\n.subnotep {\n  margin: 0px;\n  font-size: 0.9rem;\n  padding: 0px 16px;\n  color: #686666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10by1mYXZvcml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNDLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0csU0FBQTtBQUNKOztBQUVBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0QiLCJmaWxlIjoiYWRkLXRvLWZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbGJveHNtYWxsIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2xvc2UtYm94IHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3Vibm90ZXAge1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdHBhZGRpbmc6IDBweCAxNnB4O1xyXG5cdGNvbG9yOiAjNjg2NjY2O1xyXG59Il19 */");

/***/ }),

/***/ 6519:
/*!***************************************************!*\
  !*** ./src/app/pages/herbview/herbview.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: transparent;\n}\n\n.modalboxbigz {\n  background: #ffffff;\n  border-radius: 5px;\n  margin: 0;\n}\n\n.close-boxx {\n  text-align: right;\n  font-size: 20px;\n  color: black;\n  padding: 10px;\n}\n\n.subnote2 {\n  margin: 0px;\n  font-size: 0.9rem;\n  padding: 0px 16px;\n  color: #686666;\n  padding: 15px;\n}\n\nion-img {\n  width: 100%;\n  padding: 0;\n  box-shadow: 0px 4px 11px 2px rgba(0, 0, 0, 0.49);\n}\n\nb {\n  padding: 0px 16px;\n  color: #000000;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcmJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0csU0FBQTtBQUNKOztBQUdBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBRUEsZ0RBQUE7QUFBRDs7QUFHQTtFQUNDLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUQiLCJmaWxlIjoiaGVyYnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1vZGFsYm94YmlneiB7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcblx0Ly9oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY2xvc2UtYm94eCB7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc3Vibm90ZTIge1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdHBhZGRpbmc6IDBweCAxNnB4O1xyXG5cdGNvbG9yOiAjNjg2NjY2O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTFweCAycHggcmdiYSgwLDAsMCwwLjQ5KTsgXHJcblx0Ym94LXNoYWRvdzogMHB4IDRweCAxMXB4IDJweCByZ2JhKDAsMCwwLDAuNDkpO1xyXG59XHJcblxyXG5ie1xyXG5cdHBhZGRpbmc6IDBweCAxNnB4O1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7194:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-filter/product-filter.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".cover-filter-page {\n  font-size: 16px;\n}\n\n.select-category-text {\n  color: #424242;\n}\n\n.small-font {\n  font-size: 0.9rem;\n}\n\n.btn-link {\n  --color: var(--ion-color-amaz-shade);\n}\n\n.border-bottom-gray {\n  border-bottom: 1px solid #e4e3e3;\n}\n\n.border-gray {\n  border: 1px solid #f4f2f2;\n}\n\n/* -------------- */\n\n.main-filter-page {\n  display: flex;\n  height: 100%;\n}\n\n.filter-menu {\n  width: 50%;\n  background: #ebebeb;\n}\n\n.filter-menu-item {\n  padding: 10px;\n}\n\n.filter-menu-item.active {\n  background: white;\n  border-left: 4px solid var(--ion-color-amaz-shade);\n}\n\n.filter-content-item .list-item.active {\n  color: #FFCA7C;\n}\n\n.filter-content {\n  width: 100%;\n}\n\n.filter-content-item .list-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 20px;\n  color: #5d5a5a;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dfdddd;\n}\n\n.border-right {\n  border-right: 1px solid #dfdddd;\n}\n\n.price-box {\n  display: flex;\n  align-items: center;\n}\n\n.price-box .price-input {\n  border: 1px solid gray;\n  border-radius: 4px;\n  padding: 4px;\n}\n\n.price-box .price-text {\n  padding: 0px 10px;\n}\n\n.price-input input {\n  width: 50px;\n  background: transparent;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZmlsdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUVDLGlCQUFBO0FBQUQ7O0FBR0E7RUFDSSxvQ0FBQTtBQUFKOztBQUVBO0VBQ0MsZ0NBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0FBQ0Q7O0FBR0EsbUJBQUE7O0FBRUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQUREOztBQUlBO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0FBREQ7O0FBSUE7RUFDQyxhQUFBO0FBREQ7O0FBSUE7RUFDQyxpQkFBQTtFQUNBLGtEQUFBO0FBREQ7O0FBSUE7RUFDQyxjQUFBO0FBREQ7O0FBSUE7RUFDQyxXQUFBO0FBREQ7O0FBSUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFERDs7QUFJQTtFQUNDLGdDQUFBO0FBREQ7O0FBSUE7RUFDQywrQkFBQTtBQUREOztBQUlBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBREQ7O0FBSUE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUREOztBQUlBO0VBQ0MsaUJBQUE7QUFERDs7QUFJQTtFQUNDLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFERCIsImZpbGUiOiJwcm9kdWN0LWZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXItZmlsdGVyLXBhZ2Uge1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbi5zZWxlY3QtY2F0ZWdvcnktdGV4dCB7XG4gICAgY29sb3I6ICM0MjQyNDI7XG59XG5cbi5zbWFsbC1mb250IHtcblx0XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uYnRuLWxpbmsge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbWF6LXNoYWRlKTtcbn1cbi5ib3JkZXItYm90dG9tLWdyYXkge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTNlMztcbn1cblxuLmJvcmRlci1ncmF5IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y0ZjJmMjtcbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWFpbi1maWx0ZXItcGFnZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLmZpbHRlci1tZW51IHtcblx0d2lkdGg6IDUwJTtcblx0YmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmZpbHRlci1tZW51LWl0ZW0ge1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmlsdGVyLW1lbnUtaXRlbS5hY3RpdmUge1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Ym9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYW1hei1zaGFkZSk7XG59XG5cbi5maWx0ZXItY29udGVudC1pdGVtIC5saXN0LWl0ZW0uYWN0aXZlIHtcblx0Y29sb3I6I0ZGQ0E3Qztcbn1cblxuLmZpbHRlci1jb250ZW50IHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXItY29udGVudC1pdGVtIC5saXN0LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDVweCAyMHB4O1xuXHRjb2xvcjogIzVkNWE1YTtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGRkZDtcbn1cblxuLmJvcmRlci1yaWdodCB7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRkZGQ7XG59XG5cbi5wcmljZS1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJpY2UtYm94IC5wcmljZS1pbnB1dCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogNHB4O1xufVxuXG4ucHJpY2UtYm94IC5wcmljZS10ZXh0IHtcblx0cGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5wcmljZS1pbnB1dCBpbnB1dCB7XG5cdHdpZHRoOiA1MHB4O1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ 6993:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ 6969:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-to-favorites/add-to-favorites.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"modalboxsmall\">\n\n    <div class=\"close-box\">\n      <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n\n    <p class=\"subnotep text-align-center\">Would you like to add it to your favorites?</p>\n    <br>\n    <br>\n    <ion-button data-cy=\"update-cart\" expand=\"full\" color=\"success\" class=\"text-normal\" (click)=\"addToFav()\">Yes</ion-button>\n   \n  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ 2775:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/herbview/herbview.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header style=\"background-color: #14CBA8; margin-top: 10%;\">\n  <div class=\"close-boxx\">\n    <p class=\"subnote2 text-align-center\" style=\"text-align: left; position: absolute; margin-left: -10px; margin-top: -8px;\">{{ category }}</p>\n    <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"modalboxbigz\">\n    \n    <ion-img [src]='image'></ion-img>\n    <p class=\"subnote2 text-align-center\" style=\"font-weight: bold; font-size: 25px; text-align: center; color:black;margin-top: 15px;\">{{ name }}</p>\n    <br>\n    <b>Description</b>\n    <p class=\"subnote2 text-align-center\" style=\"text-indent: 20px; text-align: justify;\">{{ description }}</p>\n    <br>\n    <b>Uses & Preparation</b>\n    <p class=\"subnote2 text-align-center\" style=\"white-space: pre-line; text-align: justify;\">{{ usesprep }}</p>\n\n    <br>\n    <br>\n    <ion-footer>\n      <!--<ion-button data-cy=\"update-cart\" expand=\"full\" color=\"success\" class=\"text-normal\" (click)=\"addToFav()\">Rating</ion-button>-->\n    </ion-footer>\n  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ 5635:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-filter/product-filter.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border border-bottom-gray\">\n  <ion-toolbar>\n    <ion-title style=\"font-size: 1rem;\">Filter by</ion-title>\n    <ion-button slot=\"end\" size=\"small\" color=\"success\" class=\"text-normal text-bold\" (click)=\"dismiss()\" style=\"margin-right: 15px;\"> Close </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"cover-filter-page\">\n\n  <div class=\"main-filter-page\">\n    <div class=\"filter-content\">\n\n      <div *ngIf=\"tabs.categories\" class=\"filter-content-item\" data-cy=\"categories-filter\">\n        <div class=\"list-item border-bottom {{ item.isChecked ? 'active' : '' }}\" *ngFor=\"let item of productService.categories; let i = index\" (click)=\"setFilter(i, 'categories')\">\n          {{ item?.category }} <ion-icon *ngIf=\"item.isChecked\" name=\"checkmark-outline\" color=\"success\"></ion-icon>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button style=\"margin-left: 15px;\" data-cy=\"clear-filter\" color=\"success\" slot=\"start\" class=\"text-normal text-bold default-btn btn-link\" (click)=\"clearFilter()\"> Clear all </ion-button>\n    \n    <ion-button data-cy=\"apply-filter\" color=\"success\" slot=\"end\" class=\"text-normal\" (click)=\"applyFilter()\" style=\"margin-right: 15px;\"> Apply </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map