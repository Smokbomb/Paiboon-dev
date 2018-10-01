webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".about-content {\r\n  position: relative;\r\n  background: #eee;\r\n  overflow: hidden;\r\n  text-align: center;\r\n}\r\n\r\n.about-content-header {\r\n  text-align: left;\r\n  padding: 16px;\r\n}\r\n\r\n.about-content:before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  background-image: url('bg-skill.23b1a05ee2144c75158f.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  opacity: 0.1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 0;\r\n}\r\n\r\n.content-rating {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.about-skill-left {\r\n  float: left;\r\n  width: 30%;\r\n  padding: 16px;\r\n}\r\n\r\n.about-skill-rigth {\r\n  float: left;\r\n  width: 70%;\r\n  padding: 16px;\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-content\">\r\n  <div class=\"about-content-header\">\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"about-skill-left\">\r\n    <div class=\"content-rating\">\r\n      <span>\r\n        <img src=\"../../../assets/logo-header/angular.png\" style=\"width:60px ; height: 60px;\">\r\n      </span>\r\n      <br>\r\n      <span>\r\n        <progressbar max=\"100\" [value]=\"85\" type=\"danger\">\r\n          <i>85%</i>\r\n        </progressbar>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"content-rating\">\r\n      <span>\r\n        <img src=\"../../../assets/logo-header/nodejs2.png\" style=\"width:60px ; height: 60px;\">\r\n      </span>\r\n      <br>\r\n      <span>\r\n        <progressbar max=\"100\" [value]=\"60\" type=\"success\">\r\n          <i>60%</i>\r\n        </progressbar>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"content-rating\">\r\n      <span>\r\n        <img src=\"../../../assets/logo-header/php.png\" style=\"width:60px ; height: 60px;\">\r\n      </span>\r\n      <br>\r\n      <span>\r\n        <progressbar max=\"100\" [value]=\"100\" type=\"dynamic\">\r\n          <i>100%</i>\r\n        </progressbar>\r\n      </span>\r\n    </div>\r\n\r\n\r\n    <div class=\"content-rating\">\r\n      <span>\r\n        <img src=\"../../../assets/logo-header/java.png\" style=\"width:60px\">\r\n      </span>\r\n      <br>\r\n      <span>\r\n        <progressbar max=\"100\" [value]=\"60\" type=\"danger\">\r\n          <i>60%</i>\r\n        </progressbar>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"content-rating\">\r\n      <span>\r\n        <img src=\"../../../assets/logo-header/javascript.png\" style=\"width:60px\">\r\n      </span>\r\n      <br>\r\n      <span>\r\n        <progressbar max=\"100\" [value]=\"80\" type=\"warning\">\r\n          <i>80%</i>\r\n        </progressbar>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"about-skill-rigth\">\r\n    <span style=\"font-size: 18px;\"> PERSONAL PARTICULARS</span>\r\n    <br>\r\n    <span> Gender Male</span>\r\n    <br>\r\n    <span> Date of Birth 12­ September­ 1992</span>\r\n    <br>\r\n    <span> Nationality Thai</span>\r\n    <br>\r\n    <span> Marital Status Single</span>\r\n    <br>\r\n    <span style=\"font-size: 18px;\">\r\n      PHP Programing 2 year\r\n      <br/>\r\n    </span>\r\n    <span style=\"font-size: 18px;\">\r\n      Bizpotential Co., Ltd.\r\n    </span>\r\n    <br>\r\n    <span>\r\n      Create web site the ministry office by php,html,javascript,jquery,mysql\r\n    </span>\r\n    <br/>\r\n    <span style=\"font-size: 18px;\">\r\n      DEVELOPER 2+ year\r\n    </span>\r\n    <br/>\r\n    <span style=\"font-size: 18px;\">\r\n      VERTICE INTERNATIONAL Co., Ltd.\r\n    </span>\r\n    <br>\r\n    <span>Create web site and service by angular2+(typescript),php,java,nodejs,nestjs,html,javascript,jquery,mssql\r\n    </span>\r\n    <br>\r\n    <br>\r\n    <span style=\"font-size: 18px;\">\r\n      Skill\r\n    </span>\r\n    <br>\r\n    <span>angular2+(typescript),php,java,nodejs,html,javascript,jquery,mssql,mysql,css\r\n    </span>\r\n    <br>\r\n    <br>\r\n    <span style=\"font-size: 18px;\">EXECUTIVE</span>\r\n    <br>\r\n    <span>Graduated with Bachelor degree in Information Technology (Computer science) from Sripatum University my career objective\r\n      is becoming a Web Developer. Do what the people do not, and I will things get better.\r\n    </span>\r\n    <br>\r\n    <br>\r\n    <span style=\"font-size: 18px;\">EDUCATION</span>\r\n    <br>\r\n    <span>2011-2014 Sripatum University, B.Eng.(Computer science) (major: Informatic) Grade / GPA: 3.61 ( First­class honors) \r\n      2005-2009 Saim Business College, Secondary Education (major: Business Computer) Grade / GPA: 3.62\r\n    </span>\r\n\r\n    <br>\r\n    <br>\r\n    <span style=\"font-size: 18px;\">\r\n      Contact\r\n    </span>\r\n    <br/>\r\n    <span>\r\n      TEL: 086-353-6060\r\n      <br> E-mail: paiboon.tob@gmail.com\r\n      <br> Line ID: smokbomb.tob\r\n    </span>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.angRating = [5, 4, true];
        this.nodeRating = [5, 3, true];
        this.phpRating = [5, 5, true];
        this.rjavaRating = [5, 3, true];
        this.rjavaScriptRating = [5, 4, true];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.moveToLink = function (link) {
        window.location.href = link;
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\r\n    min-height: 600px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n<app-header></app-header>\r\n<div class=\"content\">\r\n  <router-outlet ></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_rating__ = __webpack_require__("./node_modules/ngx-bootstrap/rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_progressbar__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["b" /* BsDatepickerModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<span> Github :<a href = \"https://github.com/Smokbomb/Paiboon\">https://github.com/Smokbomb/Paiboon</a></span><br>\r\n<span> Medium :<a href = \"https://medium.com/@paiboon.tob\">https://medium.com/@paiboon.tob</a></span>\r\n<span> GPA :<a href = \"https://drive.google.com/open?id=0By7tn0syjFTJeEJFeV8xLUJDRFpfay1hdW5paHdmOGszRnBz\">Link</a></span>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header-image{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Oswald\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Open Sans\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<style>\r\nh1,h2,h3,h4,h5,h6 {font-family: \"Oswald\"}\r\nbody {font-family: \"Open Sans\"}\r\n</style>\r\n\r\n<div class=\"w3-content\" style=\"max-width:100%\">\r\n\r\n    <!-- Header -->\r\n    <header class=\"w3-container w3-center w3-padding-48 w3-white\">\r\n      <h1 class=\"w3-xxxlarge\"><b>Paiboon Toomthongkam</b></h1>\r\n      <h6> I'm  <span class=\"w3-tag\">Software Developer</span></h6>\r\n    </header>\r\n  \r\n    <!-- Image header -->\r\n    <header class=\"w3-display-container w3-wide\" id=\"home\">\r\n      <img class=\"w3-image\" src=\"../../../assets/bg/paiboon.jpg\" >\r\n      <div class=\"w3-display-left w3-padding-large\">\r\n        <h1 class=\"w3-text-white\">Paiboon</h1>\r\n        <h1 class=\"w3-jumbo w3-text-white w3-hide-small\"><b>Software Developer</b></h1>\r\n        <!-- <h6><button class=\"w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off\" onclick=\"document.getElementById('subscribe').style.display='block'\">SUBSCRIBE</button></h6> -->\r\n      </div>\r\n    </header>\r\n\r\n    </div>\r\n\r\n<!-- <div class = \"header-image\">\r\n\r\n  <span>\r\n    <img src = \"../../assets/logo-header/angular.png\" style=\"width:300px\" >\r\n  </span>\r\n  <span>\r\n    <img src = \"../../assets/logo-header/nodejs2.png\" style=\"width:300px\" >\r\n  </span>\r\n  <span>\r\n    <img src = \"../../assets/logo-header/php.png\" style=\"width:300px\" >\r\n  </span>\r\n  <span>\r\n    <img src = \"../../assets/logo-header/java.png\"  style=\"width:300px\" >\r\n  </span>\r\n  <span>\r\n    <img src = \"../../assets/logo-header/javascript.png\"  style=\"width:300px\">\r\n  </span>\r\n\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map