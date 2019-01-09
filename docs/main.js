(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-helloworld></app-helloworld> -->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _mat_mat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat/mat.module */ "./src/app/mat/mat.module.ts");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nghome/nghome.component */ "./src/app/nghome/nghome.component.ts");
/* harmony import */ var _single_gallery_single_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-gallery/single-gallery.component */ "./src/app/single-gallery/single-gallery.component.ts");
/* harmony import */ var _single_gallery_item_single_gallery_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./single-gallery-item/single-gallery-item.component */ "./src/app/single-gallery-item/single-gallery-item.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nlclublist/nlclublist.component */ "./src/app/nlclublist/nlclublist.component.ts");
/* harmony import */ var _nlclubsingle_nlclubsingle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nlclubsingle/nlclubsingle.component */ "./src/app/nlclubsingle/nlclubsingle.component.ts");
/* harmony import */ var _nlclubitem_nlclubitem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nlclubitem/nlclubitem.component */ "./src/app/nlclubitem/nlclubitem.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_7__["HelloworldComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_9__["NghomeComponent"],
                _single_gallery_single_gallery_component__WEBPACK_IMPORTED_MODULE_10__["SingleGalleryComponent"],
                _single_gallery_item_single_gallery_item_component__WEBPACK_IMPORTED_MODULE_11__["SingleGalleryItemComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_12__["VideoComponent"],
                _nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_13__["NlclublistComponent"],
                _nlclubsingle_nlclubsingle_component__WEBPACK_IMPORTED_MODULE_14__["NlclubsingleComponent"],
                _nlclubitem_nlclubitem_component__WEBPACK_IMPORTED_MODULE_15__["NlclubitemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _mat_mat_module__WEBPACK_IMPORTED_MODULE_4__["MatModule"],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr;\n\t    grid-template-columns: 2fr;\n\n}\n\n@media (min-width: 950px) {\n\t.container{\n\t\t-ms-grid-columns: 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr;\n\t}\n}\n\n@media (min-width: 1400px) {\n\t.container{\n\t\t-ms-grid-columns: 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr;\n\t}\n}\n\np{\n\tfont-size: 30px;\n\tbackground-color: yellow;\n}\n\nmat-card{\n\tposition: realtive;\n\tmax-width: 600px;\n\tmargin: 20px;\n\tpadding-bottom: 100px;\n\tbox-shadow: 0px 8px 30px #777777 !important;\n\ttext-decoration: none;\n}\n\nmat-card-title{\n\tfont-size: 48px;\n}\n\nmat-card-content{\n\tfont-size: 24px;\n}\n\nmat-icon{\n\tcolor: black;\n}\n\na{\n\tposition: absolute;\n\tborder-radius: 45px;\n\tpadding: 20px;\n\tright: 30px;\n\tbox-shadow: 0px 8px 30px #777777;\n\tborder: none;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<mat-card class=\"card1\">\n\t\t<mat-card-title>HW</mat-card-title>\n\t\t<mat-card-content>Go to Hello World Component</mat-card-content>\n\t\t<a routerLink=\"/hw\"><mat-icon><i class=\"material-icons\">arrow_forward</i></mat-icon></a>\n\t</mat-card>\n\n\n\t<mat-card class=\"card2\">\n\t\t<mat-card-title>Nghome</mat-card-title>\n\t\t<mat-card-content>Go to default Angular Component</mat-card-content>\n\t\t<a routerLink=\"/ng\"><mat-icon><i class=\"material-icons\">arrow_forward</i></mat-icon></a>\n\t</mat-card>\n\n\t<mat-card class=\"card3\">\n\t\t<mat-card-title>Gal</mat-card-title>\n\t\t<mat-card-content>Go to Gallery</mat-card-content>\n\t\t<a routerLink=\"/gal\"><mat-icon><i class=\"material-icons\">arrow_forward</i></mat-icon></a>\n\t</mat-card>\n\t<mat-card class=\"card3\">\n\t\t<mat-card-title>Vid</mat-card-title>\n\t\t<mat-card-content>Go to Video</mat-card-content>\n\t\t<a routerLink=\"/vid\"><mat-icon><i class=\"material-icons\">arrow_forward</i></mat-icon></a>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/helloworld/helloworld.component.css":
/*!*****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n\tfont-size: 30px;\n\tbackground-color: yellow;\n}\n\nmat-card{\n\tposition: realtive;\n\twidth: 400px;\n\tmargin: 50px;\n\tpadding-bottom: 100px;\n\tbox-shadow: 0px 8px 30px #777777 !important;\n}\n\nmat-card-title{\n\tfont-size: 48px;\n}\n\nmat-card-content{\n\tfont-size: 24px;\n}\n\nmat-icon{\n\tcolor: black;\n}\n\na{\n\tposition: absolute;\n\tborder-radius: 45px;\n\tpadding: 20px;\n\tright: 30px;\n\tbox-shadow: 0px 8px 30px #777777;\n\tborder: none;\n}"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.html":
/*!******************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  helloworld works!\n</p> -->\n\n<mat-card>\n\t<mat-card-title>Hello World</mat-card-title>\n\t<mat-card-content>Hello World auf Material-Card</mat-card-content>\n\t<a routerLink=\"/\"><mat-icon><i class=\"material-icons\">home</i></mat-icon></a>\n</mat-card>"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.ts":
/*!****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.ts ***!
  \****************************************************/
/*! exports provided: HelloworldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloworldComponent", function() { return HelloworldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloworldComponent = /** @class */ (function () {
    function HelloworldComponent() {
    }
    HelloworldComponent.prototype.ngOnInit = function () {
    };
    HelloworldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-helloworld',
            template: __webpack_require__(/*! ./helloworld.component.html */ "./src/app/helloworld/helloworld.component.html"),
            styles: [__webpack_require__(/*! ./helloworld.component.css */ "./src/app/helloworld/helloworld.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloworldComponent);
    return HelloworldComponent;
}());



/***/ }),

/***/ "./src/app/mat/mat.module.ts":
/*!***********************************!*\
  !*** ./src/app/mat/mat.module.ts ***!
  \***********************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            ]
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "./src/app/nghome/nghome.component.css":
/*!*********************************************!*\
  !*** ./src/app/nghome/nghome.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nghome/nghome.component.html":
/*!**********************************************!*\
  !*** ./src/app/nghome/nghome.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<a routerLink=\"/\">home</a>"

/***/ }),

/***/ "./src/app/nghome/nghome.component.ts":
/*!********************************************!*\
  !*** ./src/app/nghome/nghome.component.ts ***!
  \********************************************/
/*! exports provided: NghomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NghomeComponent", function() { return NghomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NghomeComponent = /** @class */ (function () {
    function NghomeComponent() {
    }
    NghomeComponent.prototype.ngOnInit = function () {
    };
    NghomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nghome',
            template: __webpack_require__(/*! ./nghome.component.html */ "./src/app/nghome/nghome.component.html"),
            styles: [__webpack_require__(/*! ./nghome.component.css */ "./src/app/nghome/nghome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NghomeComponent);
    return NghomeComponent;
}());



/***/ }),

/***/ "./src/app/nlclub.model.ts":
/*!*********************************!*\
  !*** ./src/app/nlclub.model.ts ***!
  \*********************************/
/*! exports provided: nlclub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlclub", function() { return nlclub; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

var nlclub = /** @class */ (function () {
    function nlclub(id) {
        this.championshipTitle = new Array();
        for (var _i = 0, _a = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            if (club[0] === id) {
                this.id = club[0];
                this.name = club[1];
                this.gruendung = Number(club[2]);
                this.headcoach = club[3];
                this.gf = club[4];
                this.sportchef = club[5];
                this.stadion = club[6];
                this.sitzplaetze = Number(club[7]);
                this.stehplaetze = Number(club[8]);
                this.adresse = club[9];
                this.plz = club[10];
                this.ort = club[11];
                this.email = club[12];
                this.logo = club[13];
                this.photo = club[14];
            }
        }
        for (var _b = 0, _c = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].championship; _b < _c.length; _b++) {
            var year = _c[_b];
            if (year[2] === id) {
                this.championshipTitle.push(Number(year[0]));
            }
        }
    }
    return nlclub;
}());



/***/ }),

/***/ "./src/app/nlclubitem/nlclubitem.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nlclubitem/nlclubitem.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n\tmax-width: 100%;\n\tmax-height: 300px;\n\tmargin: 10px;\n\tpadding-bottom: 30px;\n\tbox-shadow: 0px 8px 30px #777777 !important;\n\ttext-decoration: none;\n}\n\nimg{\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\tmax-width: 100%;\n    max-height: 200px;\n    height: auto;\n    width: auto;\n}\n\nmat-card-content{\n\tfont-size: 14px;\n}\n\na{\n\tposition: absolute;\n\tborder-radius: 45px;\n\tpadding: 20px;\n\tright: 30px;\n\tbottom: 20px;\n\tbox-shadow: 0px 8px 30px #777777;\n\tborder: none;\n}"

/***/ }),

/***/ "./src/app/nlclubitem/nlclubitem.component.html":
/*!******************************************************!*\
  !*** ./src/app/nlclubitem/nlclubitem.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<mat-card class=\"card\">\n\t\t<mat-card-content>\n\t\t\t<h2>{{club.name}}</h2>\n\t\t</mat-card-content>\n\t\t<img mat-card-image [src]=club.logo>\n\t\t<a routerLink=\"/nlclub/{{club.id}}\"><mat-icon><i class=\"material-icons\">arrow_forward</i></mat-icon></a>\n\t</mat-card>"

/***/ }),

/***/ "./src/app/nlclubitem/nlclubitem.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nlclubitem/nlclubitem.component.ts ***!
  \****************************************************/
/*! exports provided: NlclubitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlclubitemComponent", function() { return NlclubitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nlclub_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nlclub.model */ "./src/app/nlclub.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NlclubitemComponent = /** @class */ (function () {
    function NlclubitemComponent() {
    }
    NlclubitemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _nlclub_model__WEBPACK_IMPORTED_MODULE_1__["nlclub"])
    ], NlclubitemComponent.prototype, "club", void 0);
    NlclubitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nlclubitem',
            template: __webpack_require__(/*! ./nlclubitem.component.html */ "./src/app/nlclubitem/nlclubitem.component.html"),
            styles: [__webpack_require__(/*! ./nlclubitem.component.css */ "./src/app/nlclubitem/nlclubitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NlclubitemComponent);
    return NlclubitemComponent;
}());



/***/ }),

/***/ "./src/app/nlclublist/nlclublist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nlclublist/nlclublist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.galleryContainer{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr;\n\t    grid-template-columns: 2fr;\n\tpadding: 10px;\n}\n\n\n@media (min-width: 600px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr;\n\t}\n}\n\n\n@media (min-width: 960px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr;\n\t}\n}\n\n\n@media (min-width: 1400px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr 2fr;\n\t}\n}\n\n\na{\n\tposition: absolute;\n\tborder-radius: 45px;\n\tpadding: 20px;\n\tright: 30px;\n\tbox-shadow: 0px 8px 30px #777777;\n\tborder: none;\n}"

/***/ }),

/***/ "./src/app/nlclublist/nlclublist.component.html":
/*!******************************************************!*\
  !*** ./src/app/nlclublist/nlclublist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"galleryContainer\">\n\t<app-nlclubitem *ngFor=\"let item of nationalLeague.values()\" [club]=\"item\"></app-nlclubitem>\n</div>\n"

/***/ }),

/***/ "./src/app/nlclublist/nlclublist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nlclublist/nlclublist.component.ts ***!
  \****************************************************/
/*! exports provided: NlclublistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlclublistComponent", function() { return NlclublistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nlclub_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nlclub.model */ "./src/app/nlclub.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NlclublistComponent = /** @class */ (function () {
    function NlclublistComponent(route) {
        this.route = route;
    }
    NlclublistComponent.prototype.ngOnInit = function () {
        this.nationalLeague = new Map();
        for (var _i = 0, _a = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            this.nationalLeague.set(club[0], new _nlclub_model__WEBPACK_IMPORTED_MODULE_1__["nlclub"](club[0]));
        }
    };
    NlclublistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nlclublist',
            template: __webpack_require__(/*! ./nlclublist.component.html */ "./src/app/nlclublist/nlclublist.component.html"),
            styles: [__webpack_require__(/*! ./nlclublist.component.css */ "./src/app/nlclublist/nlclublist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NlclublistComponent);
    return NlclublistComponent;
}());



/***/ }),

/***/ "./src/app/nlclubsingle/nlclubsingle.component.css":
/*!*********************************************************!*\
  !*** ./src/app/nlclubsingle/nlclubsingle.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n\tmax-width: 100%;\n\tmax-height: 300px;\n\tmargin: 10px;\n\tpadding-bottom: 30px;\n\tbox-shadow: 0px 8px 30px #777777 !important;\n\ttext-decoration: none;\n}\n\n.cardinhalt{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr 2fr;\n\t    grid-template-columns: 2fr 2fr;\n}\n\nimg{\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\tmax-width: 100%;\n    height: auto;\n    width: auto;\n}\n\nmat-card-content{\n\tfont-size: 14px;\n}\n\n.galleryContainer{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr;\n\t    grid-template-columns: 2fr;\n\tpadding: 10px;\n}\n\n@media (min-width: 600px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr;\n\t\t    grid-template-columns: 2fr;\n\t}\n\t.bottompart{\n\t\tpadding: 20px;\n\t\tdisplay: -ms-grid;\n\t\tdisplay: grid;\n\t\t-ms-grid-columns: 2fr;\n\t\t    grid-template-columns: 2fr;\n\t}\n}\n\n@media (min-width: 960px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr;\n\t\t    grid-template-columns: 2fr;\n\t}\n}\n\n@media (min-width: 1400px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr;\n\t}\n}\n\n.bottompart{\n\tpadding: 20px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr;\n\t    grid-template-columns: 2fr;\n}\n\n@media (min-width: 960px) {\n\t.bottompart{\n\t\tpadding: 20px;\n\t\tdisplay: -ms-grid;\n\t\tdisplay: grid;\n\t\t-ms-grid-columns: 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr;\n\t}\n}\n\n.leftbottom{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr 2fr;\n\t    grid-template-columns: 2fr 2fr;\n\tmargin-bottom: 20px;\n}\n\n.rightbottom{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 4fr 2fr;\n\t    grid-template-columns: 4fr 2fr;\n}\n\n.logo{\n\ttext-align: center\n}\n\n.imglogo{\n\tpadding-left: 10px;\n}\n\n.titles{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr 2fr 2fr;\n\t    grid-template-columns: 2fr 2fr 2fr;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/nlclubsingle/nlclubsingle.component.html":
/*!**********************************************************!*\
  !*** ./src/app/nlclubsingle/nlclubsingle.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"galleryContainer\">\n\t<mat-card class=\"card\">\n\t\t<mat-card-content>\n\t\t\t<h2>Leitung</h2>\n\t\t\t<div class=\"cardinhalt\">\n\t\t\t\t<p class=\"lefttext\"><b>CEO:<br>Sportchef:<br>Coach:<br>Gründungsjahr:</b></p><p class=\"righttext\">{{club.gf}}<br>{{club.sportchef}}<br>{{club.headcoach}}<br>{{club.gruendung}}</p>\n\t\t\t</div>\n\t\t</mat-card-content>\n\t</mat-card>\n\t<mat-card class=\"card\">\n\t\t<mat-card-content>\n\t\t\t<h2>Stadion</h2>\n\t\t\t<p>{{club.stadion}}</p>\n\t\t\t<div class=\"cardinhalt\">\n\t\t\t\t<p class=\"lefttext\"><b>Sitzplätze:<br>Stehplätze:<br>Total:</b></p><p class=\"righttext\">{{club.sitzplaetze}}<br>{{club.stehplaetze}}<br></p>\n\t\t\t</div>\n\t\t</mat-card-content>\n\t</mat-card>\n\t<mat-card class=\"card\">\n\t\t<mat-card-content>\n\t\t\t<h2>Meistertitel</h2>\n\t\t\t<div class=\"titles\">\n\t\t\t\t<div *ngFor=\"let year of club.championshipTitle\">{{year}}</div>\n\t\t\t</div>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>\n<div class=\"bottompart\">\n\t<div class=\"leftbottom\">\n\t\t<p class=\"lefttext\"><b>Adresse<br><br><br>E-Mail-Adresse</b></p><p class=\"righttext\">{{club.adresse}}<br>{{club.plz}} {{club.ort}}<br><br>{{club.email}}</p>\n\t</div>\n\t<div class=\"rightbottom\">\n\t\t<div class=\"photo\">\n\t\t\t<img class=\"imgphoto\" src=\"{{club.photo}}\"> \n\t\t</div>\n\t\t<div class=\"logo\">\n\t\t\t<img class=\"imglogo\" src=\"{{club.logo}}\"> \n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/nlclubsingle/nlclubsingle.component.ts":
/*!********************************************************!*\
  !*** ./src/app/nlclubsingle/nlclubsingle.component.ts ***!
  \********************************************************/
/*! exports provided: NlclubsingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlclubsingleComponent", function() { return NlclubsingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nlclub_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nlclub.model */ "./src/app/nlclub.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NlclubsingleComponent = /** @class */ (function () {
    function NlclubsingleComponent(route) {
        this.route = route;
    }
    NlclubsingleComponent.prototype.ngOnInit = function () {
        var id;
        id = this.route.snapshot.params['id'];
        this.club = new _nlclub_model__WEBPACK_IMPORTED_MODULE_1__["nlclub"](id);
    };
    NlclubsingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nlclubsingle',
            template: __webpack_require__(/*! ./nlclubsingle.component.html */ "./src/app/nlclubsingle/nlclubsingle.component.html"),
            styles: [__webpack_require__(/*! ./nlclubsingle.component.css */ "./src/app/nlclubsingle/nlclubsingle.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NlclubsingleComponent);
    return NlclubsingleComponent;
}());



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nghome/nghome.component */ "./src/app/nghome/nghome.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nlclublist/nlclublist.component */ "./src/app/nlclublist/nlclublist.component.ts");
/* harmony import */ var _nlclubsingle_nlclubsingle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nlclubsingle/nlclubsingle.component */ "./src/app/nlclubsingle/nlclubsingle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'ng', component: _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_2__["NghomeComponent"] },
    { path: 'hw', component: _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_4__["HelloworldComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'vid', component: _video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"] },
    { path: 'nlclub', component: _nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_6__["NlclublistComponent"] },
    { path: 'nlclub/:id', component: _nlclubsingle_nlclubsingle_component__WEBPACK_IMPORTED_MODULE_7__["NlclubsingleComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/single-gallery-item/single-gallery-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/single-gallery-item/single-gallery-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n\tmax-width: 100%;\n\tmargin: 10px;\n\tpadding-bottom: 30px;\n\tbox-shadow: 0px 8px 30px #777777 !important;\n\ttext-decoration: none;\n}\n\nimg{\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n}\n\nmat-card-content{\n\tfont-size: 14px;\n}"

/***/ }),

/***/ "./src/app/single-gallery-item/single-gallery-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/single-gallery-item/single-gallery-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t<mat-card class=\"card\">\n\t\t<img mat-card-image [src]=imgURL>\n\t\t<mat-card-content>\n\t\t\t<p>{{name}}</p>\n\t\t\t<p>Höhe: {{height}}</p>\n\t\t</mat-card-content>\n\t</mat-card>\n"

/***/ }),

/***/ "./src/app/single-gallery-item/single-gallery-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/single-gallery-item/single-gallery-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: SingleGalleryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleGalleryItemComponent", function() { return SingleGalleryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleGalleryItemComponent = /** @class */ (function () {
    function SingleGalleryItemComponent() {
    }
    SingleGalleryItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SingleGalleryItemComponent.prototype, "imgURL", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SingleGalleryItemComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SingleGalleryItemComponent.prototype, "height", void 0);
    SingleGalleryItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-gallery-item',
            template: __webpack_require__(/*! ./single-gallery-item.component.html */ "./src/app/single-gallery-item/single-gallery-item.component.html"),
            styles: [__webpack_require__(/*! ./single-gallery-item.component.css */ "./src/app/single-gallery-item/single-gallery-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleGalleryItemComponent);
    return SingleGalleryItemComponent;
}());



/***/ }),

/***/ "./src/app/single-gallery/single-gallery.component.css":
/*!*************************************************************!*\
  !*** ./src/app/single-gallery/single-gallery.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.galleryContainer{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr;\n\t    grid-template-columns: 2fr;\n\tpadding: 10px;\n}\n\n\n@media (min-width: 600px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr;\n\t}\n}\n\n\n@media (min-width: 960px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr;\n\t}\n}\n\n\n@media (min-width: 1400px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr 2fr;\n\t}\n}"

/***/ }),

/***/ "./src/app/single-gallery/single-gallery.component.html":
/*!**************************************************************!*\
  !*** ./src/app/single-gallery/single-gallery.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"galleryContainer\">\n\t<app-single-gallery-item *ngFor=\"let mountain of mountains\" [imgURL]=mountain.imgURL [name]=mountain.name [height]=mountain.height></app-single-gallery-item>\n</div>"

/***/ }),

/***/ "./src/app/single-gallery/single-gallery.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-gallery/single-gallery.component.ts ***!
  \************************************************************/
/*! exports provided: SingleGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleGalleryComponent", function() { return SingleGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleGalleryComponent = /** @class */ (function () {
    function SingleGalleryComponent() {
        this.mountains = [{
                imgURL: "././assets/img/bristen.jpg",
                name: "Bristen",
                height: "3073"
            },
            {
                imgURL: "././assets/img/bristen.jpg",
                name: "Bristen2",
                height: "3073"
            },
            {
                imgURL: "././assets/img/bristen.jpg",
                name: "Bristen3",
                height: "3073"
            },
        ];
    }
    SingleGalleryComponent.prototype.ngOnInit = function () {
    };
    SingleGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-gallery',
            template: __webpack_require__(/*! ./single-gallery.component.html */ "./src/app/single-gallery/single-gallery.component.html"),
            styles: [__webpack_require__(/*! ./single-gallery.component.css */ "./src/app/single-gallery/single-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleGalleryComponent);
    return SingleGalleryComponent;
}());



/***/ }),

/***/ "./src/app/video/video.component.css":
/*!*******************************************!*\
  !*** ./src/app/video/video.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.galleryContainer{\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: 2fr;\n\t    grid-template-columns: 2fr;\n\tpadding: 10px;\n}\n\n\n@media (min-width: 600px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr;\n\t}\n}\n\n\n@media (min-width: 960px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr;\n\t}\n}\n\n\n@media (min-width: 1400px) {\n\t.galleryContainer{\n\t\t-ms-grid-columns: 2fr 2fr 2fr 2fr;\n\t\t    grid-template-columns: 2fr 2fr 2fr 2fr;\n\t}\n}\n\n\np{\n\tfont-size: 30px;\n\tbackground-color: yellow;\n}\n\n\nmat-card{\n\tposition: realtive;\n\twidth: 400px;\n\tmargin: 50px;\n\tpadding-bottom: 20px;\n\tbox-shadow: 0px 8px 30px #777777 !important;\n}\n\n\nvideo{\n\twidth: 100%;\n\tbox-sizing: border-box;\n}\n\n\nmat-card-title{\n\tfont-size: 48px;\n}\n\n\nmat-card-content{\n\tfont-size: 24px;\n\tmargin-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/video/video.component.html":
/*!********************************************!*\
  !*** ./src/app/video/video.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"galleryContainer\">\n\t<mat-card>\n\t\t<video width=\"320\" height=\"240\" controls>\n\t\t  <source src=\"../../assets/video/sintel.mp4\" type=\"video/mp4\">\n\t\t</video>\n\t\t<mat-card-content>Sintel</mat-card-content>\n\t</mat-card>\n\n\t<mat-card>\n\t\t<video width=\"320\" height=\"240\" controls>\n\t\t  <source src=\"../../assets/video/atm.mp4\" type=\"video/mp4\">\n\t\t</video>\n\t\t<mat-card-content>Mountains</mat-card-content>\n\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    clubs: [
        [
            '1001',
            'HC Ambrì Piotta',
            '1937',
            'Luca Cereda',
            'Michele Orsi',
            'Paolo Duca',
            'Valascia',
            '2000',
            '4500',
            'Casella Postale',
            '6775',
            'Ambri',
            'info@hcap.ch',
            './assets/img/amb-logo.png',
            './assets/img/ambri-photo.jpg'
        ],
        [
            '1002',
            'SC Bern',
            '1931',
            'Kari Jalonen',
            'Marc Lüthi',
            'Alex Chatelain',
            'PostFinance-Arena',
            '7139',
            '9892',
            'Mingerstrasse 12B',
            '3014',
            'Bern',
            'info@scb.ch',
            './assets/img/ber-logo.png',
            './assets/img/bern-photo.jpg'
        ],
        [
            '1003',
            'EHC Biel',
            '1939',
            'Antti Törmänen',
            'Daniel Villard',
            'Martin Steinegger',
            'Tissot Arena',
            '4411',
            '2110',
            'Bahnhofstrasse 17',
            '2501',
            'Biel',
            'hotline@ehcb.ch',
            './assets/img/bie-logo.png',
            './assets/img/biel-photo.jpg'
        ],
        [
            '1004',
            'HC Davos',
            '1921',
            '',
            'Gaudenz F. Domenig',
            'René Müller',
            'Vaillant Arena',
            '3395',
            '3400',
            'Eisbahnstrasse 2',
            '7270',
            'Davos Platz',
            'nfo@hcd.ch',
            './assets/img/dav-logo.png',
            './assets/img/davos-photo.jpg'
        ],
        [
            '1005',
            'Fribourg-Gottéron',
            '1938',
            'Mark French',
            'Raphaël Berger',
            'Christian Dubé',
            'BCF-Arena',
            '3174',
            '3526',
            'CP 551',
            '1701',
            'Fribourg',
            'office@fribourg-gotteron.ch',
            './assets/img/fri-logo.png',
            './assets/img/fribourg-photo.jpg'
        ],
        [
            '1006',
            'Genève-Servette HC',
            '1905',
            'Chris McSorley',
            'Christophe Stuck',
            'Chris McSorley',
            'Les Vernets',
            '4479',
            '2656',
            'Routes des jeunes 10',
            '1227',
            'Genf',
            'nfo@gshc.ch',
            './assets/img/gen-logo.png',
            './assets/img/genf-photo.jpg'
        ],
        [
            '1007',
            'SCL Tigers',
            '1946',
            'Heinz Ehlers',
            'Peter Müller',
            'Marco Bayer',
            'Ilfishalle',
            '2943',
            '3107',
            'Güterstrasse 18',
            '3550',
            'Langnau',
            'nfo@scltigers.ch',
            './assets/img/lan-logo.png',
            './assets/img/langnau-photo.jpg'
        ],
        [
            '1008',
            'Lausanne HC',
            '1922',
            'Ville Peltonen',
            'Sacha Weibel',
            'Jan Alston',
            'Malley',
            '4610',
            '2090',
            'Case Postale 171',
            '1000',
            'Lausanne',
            'contact@lausannehc.ch',
            './assets/img/lau-logo.png',
            './assets/img/lausanne-photo.jpg'
        ],
        [
            '1009',
            'HC Lugano',
            '1941',
            'Greg Ireland',
            'Jean-Jacques Aeschlimann',
            'Roland Habisreutinger',
            'Cornèr Arena',
            '4200',
            '3000',
            'Casella postale 4226',
            '6904',
            'Lugano',
            'sede@hclugano.ch',
            './assets/img/lug-logo.png',
            './assets/img/lugano-photo.jpg'
        ],
        [
            '1010',
            'SC Rapperswil-Jona Lakers',
            '1945',
            'Jeff Tomlinson',
            'Markus Bütler',
            'Roger Maier',
            'St. Galler Kantonalbank Arena',
            '4000',
            '2100',
            'Walter-Denzler-Strasse 3',
            '8640',
            'Rapperswil',
            'info@lakers.ch',
            './assets/img/rap-log.png',
            './assets/img/rapperswil-photo.jpg'
        ],
        [
            '1011',
            'ZSC Lions',
            '1930',
            'Serge Aubin',
            'Peter Zahner',
            'Sven Leuenberger',
            'Hallenstadion',
            '11200',
            '0',
            'Siewerdtstrasse 105',
            '8050',
            'Zürich',
            'info@zsclions.ch',
            './assets/img/zur-logo.png',
            './assets/img/zuerich-photo.jpg'
        ],
        [
            '1012',
            'EV Zug',
            '1967',
            'Dan Tangnes',
            'Patrick Lengwiler',
            'Reto Kläy',
            'Bossard Arena',
            '4848',
            '2352',
            'Weststrasse 11',
            '6303',
            'Zug',
            'info@evz.ch',
            './assets/img/zug-logo.png',
            './assets/img/zug-photo.jpg'
        ]
    ],
    championship: [
        ['1938', 'HC Davos', '1004'],
        ['1939', 'HC Davos', '1004'],
        ['1940', '', ''],
        ['1941', 'HC Davos', '1004'],
        ['1942', 'HC Davos', '1004'],
        ['1943', 'HC Davos', '1004'],
        ['1944', 'HC Davos', '1004'],
        ['1945', 'HC Davos', '1004'],
        ['1946', 'HC Davos', '1004'],
        ['1947', 'HC Davos', '1004'],
        ['1948', 'HC Davos', '1004'],
        ['1949', 'ZSC Lions', '1011'],
        ['1950', 'HC Davos', '1004'],
        ['1951', 'EHC Arosa', '2006'],
        ['1952', 'EHC Arosa', '2006'],
        ['1953', 'EHC Arosa', '2006'],
        ['1954', 'EHC Arosa', '2006'],
        ['1955', 'EHC Arosa', '2006'],
        ['1956', 'EHC Arosa', '2006'],
        ['1957', 'EHC Arosa', '2006'],
        ['1958', 'HC Davos', '1004'],
        ['1959', 'SC Bern', '1002'],
        ['1960', 'HC Davos', '1004'],
        ['1961', 'ZSC Lions', '1011'],
        ['1962', 'EHC Visp', '2004'],
        ['1963', 'HC Villars', '2001'],
        ['1964', 'HC Villars', '2001'],
        ['1965', 'SC Bern', '1002'],
        ['1966', 'GC Zürich', '2003'],
        ['1967', 'EHC Kloten', '2005'],
        ['1968', 'HC La Chaux-de-Fonds', '2002'],
        ['1969', 'HC La Chaux-de-Fonds', '2002'],
        ['1970', 'HC La Chaux-de-Fonds', '2002'],
        ['1971', 'HC La Chaux-de-Fonds', '2002'],
        ['1972', 'HC La Chaux-de-Fonds', '2002'],
        ['1973', 'HC La Chaux-de-Fonds', '2002'],
        ['1974', 'SC Bern', '1002'],
        ['1975', 'SC Bern', '1002'],
        ['1976', 'SCL Tigers', '1007'],
        ['1977', 'SC Bern', '1002'],
        ['1978', 'EHC Biel', '1003'],
        ['1979', 'SC Bern', '1002'],
        ['1980', 'EHC Arosa', '2006'],
        ['1981', 'EHC Biel', '1003'],
        ['1982', 'EHC Arosa', '2006'],
        ['1983', 'EHC Biel', '1003'],
        ['1984', 'HC Davos', '1004'],
        ['1985', 'HC Davos', '1004'],
        ['1986', 'HC Lugano', '1009'],
        ['1987', 'HC Lugano', '1009'],
        ['1988', 'HC Lugano', '1009'],
        ['1989', 'SC Bern', '1002'],
        ['1990', 'HC Lugano', '1009'],
        ['1991', 'SC Bern', '1002'],
        ['1992', 'SC Bern', '1002'],
        ['1993', 'EHC Kloten', '2005'],
        ['1994', 'EHC Kloten', '2005'],
        ['1995', 'EHC Kloten', '2005'],
        ['1996', 'EHC Kloten', '2005'],
        ['1997', 'SC Bern', '1002'],
        ['1998', 'EV Zug', '1012'],
        ['1999', 'HC Lugano', '1009'],
        ['2000', 'ZSC Lions', '1011'],
        ['2001', 'ZSC Lions', '1011'],
        ['2002', 'HC Davos', '1004'],
        ['2003', 'HC Lugano', '1009'],
        ['2004', 'SC Bern', '1002'],
        ['2005', 'HC Davos', '1004'],
        ['2006', 'HC Lugano', '1009'],
        ['2007', 'HC Davos', '1004'],
        ['2008', 'ZSC Lions', '1011'],
        ['2009', 'HC Davos', '1004'],
        ['2010', 'SC Bern', '1002'],
        ['2011', 'HC Davos', '1004'],
        ['2012', 'ZSC Lions', '1011'],
        ['2013', 'SC Bern', '1002'],
        ['2014', 'ZSC Lions', '1011'],
        ['2015', 'HC Davos', '1004'],
        ['2016', 'SC Bern', '1002'],
        ['2017', 'SC Bern', '1002'],
        ['2018', 'ZSC Lions', '1011']
    ]
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sandro/go-dev/m152/first-app-cont/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map