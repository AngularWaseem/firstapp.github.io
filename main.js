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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singup/singup.component */ "./src/app/singup/singup.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");









//const routes: Routes = [];
var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'careers/:id', component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_7__["CareersComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signin', component: _singup_singup_component__WEBPACK_IMPORTED_MODULE_6__["SingupComponent"] },
    { path: 'dash', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar  bg-light navbar-fixed-top\">\n  <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <a class=\"router-link active my-5 my-sm-0 mr-sm-2\" href=\"/home\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/careers',1234]\" class=\"my-5 my-sm-0 mr-sm-2\" >Careers</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"router-link my-5 my-sm-0 mr-sm-2\" href=\"/contactus\">Contact Us</a>\n          </li>\n\n  </ul> \n  <form class=\"form-inline \">\n      <!-- <button class=\"btn btn-primary  my-2 my-sm-0 mr-sm-2 \" type=\"submit\">LogIn</button> -->\n      <a routerLink=\"/login\" class=\"btn btn-link\">Login</a>\n      <!-- <button class=\"btn btn-primary my-2 my-sm-0 mr-sm-2\" type=\"submit\">SignIn</button> -->\n      <a routerLink=\"/signin\" class=\"btn btn-link\">SignIn</a>\n      <input class=\"form-control mr-sm-2 \" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-primary my-2 my-sm-0 \" type=\"submit\">Search</button>\n\n  </form>\n  </nav>\n  <br/>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FirstAngularProject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common//http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./singup/singup.component */ "./src/app/singup/singup.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _service_contacts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/contacts.service */ "./src/app/service/contacts.service.ts");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm5/ng-bootstrap-form-validation.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _errors_custom_errors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errors/custom-errors */ "./src/app/errors/custom-errors.ts");
/* harmony import */ var _directives_hlight_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/hlight.directive */ "./src/app/directives/hlight.directive.ts");
/* harmony import */ var _sorting_sort_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sorting/sort.pipe */ "./src/app/sorting/sort.pipe.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/register.service */ "./src/app/service/register.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _singup_singup_component__WEBPACK_IMPORTED_MODULE_9__["SingupComponent"],
                _careers_careers_component__WEBPACK_IMPORTED_MODULE_10__["CareersComponent"],
                _directives_hlight_directive__WEBPACK_IMPORTED_MODULE_15__["HlightDirective"],
                _sorting_sort_pipe__WEBPACK_IMPORTED_MODULE_16__["SortPipe"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_12__["NgBootstrapFormValidationModule"].forRoot(),
                ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_12__["NgBootstrapFormValidationModule"]
            ],
            providers: [_service_contacts_service__WEBPACK_IMPORTED_MODULE_11__["ContactsService"], _service_register_service__WEBPACK_IMPORTED_MODULE_17__["RegisterService"],
                {
                    provide: ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_12__["CUSTOM_ERROR_MESSAGES"],
                    useValue: _errors_custom_errors__WEBPACK_IMPORTED_MODULE_14__["CUSTOM_ERRORS"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/careers/careers.component.css":
/*!***********************************************!*\
  !*** ./src/app/careers/careers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlcnMvY2FyZWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/careers/careers.component.html":
/*!************************************************!*\
  !*** ./src/app/careers/careers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{name}}<br/>\n{{name | uppercase}}<br/>\n{{name| lowercase}}<br/>\n{{day}}<br/>\n{{day | date}} <br/>\n{{day | date: 'shortDate'}}<br/>\n{{day | date: 'fullDate'}}<br/>\n{{day | date: 'fullDate' | uppercase}} <br/>\n{{ arr | sort : 'ascending'}} <br/>\n{{ arr | sort : 'descending' }}<br/>\nParameter passed : {{ id}}\n"

/***/ }),

/***/ "./src/app/careers/careers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/careers/careers.component.ts ***!
  \**********************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CareersComponent = /** @class */ (function () {
    function CareersComponent(route) {
        this.route = route;
        this.name = "Welcome to Angular Project Tour";
        this.day = new Date(1992, 3, 15);
        this.arr = [3, 7, 8, 2, 1];
        this.id = null;
    }
    CareersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.id = +params.get('id');
            console.log(_this.id);
        });
    };
    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.css */ "./src/app/careers/careers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table-bordered\">\n  <tr><th>Contact Us at following addresses</th></tr>\n  <tr *ngFor=\"let contact of contacts\">\n    <td>\n     Name    :  {{contact.name}}<br/>\n     Address :  {{contact.address}}<br/>\n     Phone   :  {{contact.phone}}<br/>\n     Email   :  {{contact.email}}\n    </td>\n  \n  </tr>\n  \n  </table>\n  "

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/contacts.service */ "./src/app/service/contacts.service.ts");



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(_contactService) {
        this._contactService = _contactService;
        this.contacts = [];
        this.isLoading = false;
    }
    /* getContacts(): void {
      this._contactService.getContacts().then( contacts => this.contacts = contacts);
       }*/
    ContactusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._contactService.getContacts()
            .subscribe(function (data) {
            _this.contacts = data;
        });
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "You have successfully logged in using JWT <br/> <br/>\n  <button class=\"btn btn-primary\" (click)=\"logout()\">Logout</button>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logout = function () {
        //delete the token and route to login page
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/directives/hlight.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/hlight.directive.ts ***!
  \************************************************/
/*! exports provided: HlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HlightDirective", function() { return HlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HlightDirective = /** @class */ (function () {
    function HlightDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    HlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HlightDirective);
    return HlightDirective;
}());



/***/ }),

/***/ "./src/app/errors/custom-errors.ts":
/*!*****************************************!*\
  !*** ./src/app/errors/custom-errors.ts ***!
  \*****************************************/
/*! exports provided: CUSTOM_ERRORS, requiredFormat, emailFormat, passwordConfirmPasswordFarmatEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ERRORS", function() { return CUSTOM_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFormat", function() { return requiredFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailFormat", function() { return emailFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordConfirmPasswordFarmatEqual", function() { return passwordConfirmPasswordFarmatEqual; });
var CUSTOM_ERRORS = [
    {
        error: 'required',
        format: requiredFormat
    }, {
        error: 'email',
        format: emailFormat
    }, {
        error: 'passwordValidator',
        format: passwordConfirmPasswordFarmatEqual
    }
];
function requiredFormat(label, error) {
    return label + " IS MOST DEFINITELY REQUIRED!";
}
function emailFormat(label, error) {
    return label + " doesn't look like a valid email address.";
}
function passwordConfirmPasswordFarmatEqual(label, error) {
    return label + " confirm password do not match.";
}


/***/ }),

/***/ "./src/app/errors/password-match.ts":
/*!******************************************!*\
  !*** ./src/app/errors/password-match.ts ***!
  \******************************************/
/*! exports provided: passwordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
function passwordValidator(control) {
    if (control && (control.value !== null || control.value !== undefined)) {
        var confirmPasswordValue = control.value;
        var passControl = control.root.get('Password');
        if (passControl) {
            var passValue = passControl.value;
            if (passValue !== confirmPasswordValue) {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<div class=\"container bg-light\">\n Welcome to the MEAN Stack Project\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <br/><br/>\n  <h1 class=\"text-center bg-light\">LogIn </h1>\n  <br/><br/>\n  <div class=\"row bg-light\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <form class=\"form-horizontal\" #loginForm=\"ngForm\" [formGroup]=\"formGroup\" (validSubmit)=\"onSubmit(loginForm)\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"Username\">\n\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Password</label>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"Password\">\n\n            </div>\n          </div>\n          <button class=\"btn btn-default my-5 my-sm-0 mr-sm-2\" type=\"button\" (click)=\"onReset()\">Reset</button>\n          <button class=\"btn btn-primary my-5 my-sm-0 mr-sm-2 \" type=\"submit\">Submit</button>\n          <button class=\"btn btn-info my-5 my-sm-0 mr-sm-2\" (click)=\"moveToRegister()\">Register</button>\n        </form>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/login.service */ "./src/app/service/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, _router, _activatedRoute) {
        this._loginService = _loginService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.isFormValid = true;
        this.sto = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
            ])
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(this.formGroup);
        this.isFormValid = true;
        if (this.isFormValid) {
            var user = {
                username: this.formGroup.get('Username').value,
                password: this.formGroup.get('Password').value // Password input field
            };
            console.log('Form valid');
            console.log(user.username + '  ' + user.password);
            console.log('Formgroup value :' + this.formGroup.value);
            //this._loginService.login(this.formGroup.value).subscribe(data => {
            this._loginService.login(user).subscribe(function (data) {
                localStorage.setItem('token', data.toString());
                console.log(' Storage : ' + localStorage.getItem('token'));
                // this.sto = true;
                _this._router.navigate(['/dash']);
            }, function (error) {
                console.log('Error ');
                //this._router.navigate(['/errs']);
            });
        }
        //  if (this.sto === true) {
        //   this._router.navigate(['/dash']);
        //  }
    };
    LoginComponent.prototype.onReset = function () {
        this.formGroup.reset();
    };
    LoginComponent.prototype.isValid = function (controlName) {
        return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
    };
    LoginComponent.prototype.moveToRegister = function () {
        this._router.navigate(['../signin'], { relativeTo: this._activatedRoute });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/contacts.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/contacts.service.ts ***!
  \*********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common//http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ContactsService = /** @class */ (function () {
    function ContactsService(http, router) {
        this.http = http;
        this.router = router;
        this.uri = 'http://localhost:3000/api/posts';
    }
    ContactsService.prototype.getContacts = function () {
        return this.http.get("" + this.uri);
    };
    ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (body) {
        return this._http.post('http://localhost:3000/api/login', body, {
            observe: 'body'
        });
    };
    LoginService.prototype.getUserName = function () {
        return this._http.get('http://localhost:3000/api/username', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/register.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/register.service.ts ***!
  \*********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common//http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.uri = 'http://localhost:3000/api';
    }
    //addUser(first_Name, last_Name, e_mail,pass_word,confirm_Password) {
    RegisterService.prototype.addUser = function (fname, lname, emal, pwd, cpwd) {
        var obj = {
            firstName: fname,
            lastName: lname,
            email: emal,
            password: pwd,
            confirmPassword: cpwd
        };
        console.log(obj);
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/singup/singup.component.css":
/*!*********************************************!*\
  !*** ./src/app/singup/singup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Npbmd1cC9zaW5ndXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/singup/singup.component.html":
/*!**********************************************!*\
  !*** ./src/app/singup/singup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br/><br/>\n  <h1 class=\"text-center text-primary bg-light\">SignUp </h1>\n  <br/><br/>\n  <div class=\"row bg-light\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <form class=\"form-horizontal\" #postform=\"ngForm\" [formGroup]=\"formGroup\" (validSubmit)=\"onSubmit(postform)\">\n\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\">FirstName</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"FirstName\">\n\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\">LastName</label>\n                  <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"LastName\">\n\n                  </div>\n                </div>\n\n          <div class=\"form-group\" [customErrorMessages]=\"customErrorMessages\">\n            <label class=\"control-label col-sm-2\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"Email\">\n\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Password</label>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"Password\">\n\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-2\">ConfirmPassword</label>\n              <div class=\"col-sm-10\">\n                <input type=\"password\"  class=\"form-control\" formControlName=\"ConfirmPassword\">\n\n              </div>\n            </div>\n\n          <button class=\"btn btn-default my-5 my-sm-0 mr-sm-2\" type=\"button\" (click)=\"onReset()\">Reset</button>\n          <button class=\"btn btn-primary my-5 my-sm-0 mr-sm-2 \" type=\"submit\">Submit</button>\n          <button class=\"btn btn-info my-5 my-sm-0 mr-sm-2\" (click)=\"moveToLogin()\">Login</button>\n        </form>\n      </div>\n    </div>\n</div>\n\n\n<div  *ngIf=\"isValid\">\n  <h5 appHlight class=\"text-center text-primary\">Registration Successfull</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/singup/singup.component.ts":
/*!********************************************!*\
  !*** ./src/app/singup/singup.component.ts ***!
  \********************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _errors_password_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/password-match */ "./src/app/errors/password-match.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/register.service */ "./src/app/service/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SingupComponent = /** @class */ (function () {
    function SingupComponent(_registerService, _router, _activatedRoute) {
        this._registerService = _registerService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.isValid = true;
        this.customErrorMessages = [
            {
                error: 'required',
                format: function (label, error) { return label.toUpperCase() + " IS DEFINITELY REQUIRED!"; }
            }, {
                error: 'pattern',
                format: function (label, error) { return label.toUpperCase() + " DOESN'T LOOK RIGHT..."; }
            }, {
                error: 'passwordValidator',
                format: function (label, error) { return label.toUpperCase() + " does not match"; }
            }
        ];
    }
    SingupComponent.prototype.ngOnInit = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _errors_password_match__WEBPACK_IMPORTED_MODULE_3__["passwordValidator"]
            ]),
            ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _errors_password_match__WEBPACK_IMPORTED_MODULE_3__["passwordValidator"]
            ]),
        });
        this.isValid = false;
    };
    SingupComponent.prototype.onSubmit = function (form) {
        console.log(this.formGroup);
        this.isValid = true;
        if (this.isValid) {
            this._registerService.addUser(this.formGroup.controls.FirstName.value, this.formGroup.controls.LastName.value, this.formGroup.controls.Email.value, this.formGroup.controls.Password.value, this.formGroup.controls.ConfirmPassword.value);
        }
    };
    SingupComponent.prototype.onReset = function () {
        this.formGroup.reset();
    };
    SingupComponent.prototype.moveToLogin = function () {
        this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
    };
    SingupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singup',
            template: __webpack_require__(/*! ./singup.component.html */ "./src/app/singup/singup.component.html"),
            styles: [__webpack_require__(/*! ./singup.component.css */ "./src/app/singup/singup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SingupComponent);
    return SingupComponent;
}());



/***/ }),

/***/ "./src/app/sorting/sort.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/sorting/sort.pipe.ts ***!
  \**************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    SortPipe.prototype.transform = function (value, args) {
        if (args === 'ascending') {
            return value.sort();
        }
        else {
            if (args === 'descending') {
                return value.sort().reverse();
            }
        }
    };
    SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FullStack\FirstAngularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map