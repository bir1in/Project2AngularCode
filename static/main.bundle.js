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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__ = __webpack_require__("./src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_all_all_component__ = __webpack_require__("./src/app/components/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_find_find_component__ = __webpack_require__("./src/app/components/find/find.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_info_info_component__ = __webpack_require__("./src/app/components/info/info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules


// Components





var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__["a" /* MainComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_4__components_all_all_component__["a" /* AllComponent */] },
    { path: 'find', component: __WEBPACK_IMPORTED_MODULE_5__components_find_find_component__["a" /* FindComponent */] },
    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_6__components_info_info_component__["a" /* InfoComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Components are called by their selector -->\r\n<app-nav></app-nav>\r\n<!--\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n    <div class=\"panel panel-default\">\r\n       This is where our route is injected\r\n      <router-outlet></router-outlet>  \r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n<router-outlet></router-outlet>  "

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

var AppComponent = (function () {
    function AppComponent() {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__ = __webpack_require__("./src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_all_all_component__ = __webpack_require__("./src/app/components/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_find_find_component__ = __webpack_require__("./src/app/components/find/find.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__session_custom_interceptor__ = __webpack_require__("./src/app/session/custom-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_info_info_component__ = __webpack_require__("./src/app/components/info/info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules



// Routing

//Components






//Http Client

//Services



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_all_all_component__["a" /* AllComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_find_find_component__["a" /* FindComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_info_info_component__["a" /* InfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12__session_custom_interceptor__["a" /* CustomInterceptor */],
                    multi: true
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/all/all.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"panel-heading\">\r\n        <span class=\"label label-default label-center\">{{title}}</span>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n    <div class=\"list-group\">\r\n        <div class=\"list-group-item list-group-item-demo\">\r\n           <div *ngFor=\"let hero of heroes.heroList\" class=\"list-group-item\">\r\n               <strong>ID</strong>: {{ hero.id }},\r\n               <strong>Name</strong>: {{ hero.name }},\r\n               <strong>Power</strong>: {{ hero.superPower }},\r\n               <strong>Has Cape?</strong>: {{ (hero.hasCape) ? 'Yes':'No' }}\r\n           </div>\r\n           <div>\r\n                <button class=\"btn btn-primary btn-center\" (click)=\"findAllHeroes()\">GET</button>\r\n           </div>\r\n           <div *ngIf=\"heroes.heroList || heroes.heroList.length == 0\">\r\n               {{ clientMessage.message }}\r\n           </div> \r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_client_message_model__ = __webpack_require__("./src/app/models/client-message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_list_model__ = __webpack_require__("./src/app/models/user-list.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllComponent = (function () {
    function AllComponent(userService) {
        this.userService = userService;
        this.title = 'All Users';
        this.users = new __WEBPACK_IMPORTED_MODULE_3__models_user_list_model__["a" /* UserList */]([]);
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_2__models_client_message_model__["a" /* ClientMessage */]('No users to display.');
    }
    AllComponent.prototype.ngOnInit = function () {
        this.findAllUsers();
    };
    AllComponent.prototype.findAllUsers = function () {
        var _this = this;
        this.userService.findAllUsers()
            .subscribe(function (data) { return _this.users = data; }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    AllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all',
            template: __webpack_require__("./src/app/components/all/all.component.html"),
            styles: [__webpack_require__("./src/app/components/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/components/find/find.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/find/find.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div>\r\n    <div class=\"panel-heading\">\r\n        <span class=\"label label-default label-center\">{{title}}</span>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n    <div class=\"list-group\">\r\n        <div class=\"list-group-item list-group-item-demo\">\r\n            <div class=\"form-group\">\r\n                <input [(ngModel)]=\"hero.name\" placeholder=\"Name\" class=\"form-control\" />\r\n           </div>\r\n           <div>\r\n               <button class=\"btn btn-primary btn-center\" (click)=\"findHero()\">Find</button>\r\n           </div>\r\n           <div *ngIf=\"heroData\">\r\n                {{ heroData.superPower }}\r\n            </div>\r\n           <div *ngIf=\"!heroData\">\r\n               {{ clientMessage.message }}\r\n           </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n</div>\r\n-->\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n      Welcome to {{ title }}!\r\n    </h1>\r\n  </div>\r\n  <div class=\"container\">\r\n  <h2>Input Trade Credentials Here:</h2>\r\n  <form class=\"forms\" action=\"/#\" method=\"POST\">\r\n  <label for=\"username\">Trader Username</label><br>\r\n  <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter Username\"><br>\r\n  <label for=\"password\">Password</label><br>\r\n  <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter Password\"><br><br>\r\n  <input type=\"submit\" id=\"submitBtn\" (click)=\"findUser()\" value=\"Enter Trader Port\">\r\n  </form>\r\n  <div *ngIf=\"userData\">\r\n    {{ userData.username }}\r\n  </div>\r\n  <div *ngIf=\"!userData\">\r\n   {{ clientMessage.message }}\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/find/find.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_client_message_model__ = __webpack_require__("./src/app/models/client-message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindComponent = (function () {
    function FindComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = 'Find User';
        //To capture user input
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */](0, '', '');
        //To present received user
        this.userData = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */](0, '', '');
        //To message the user
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_3__models_client_message_model__["a" /* ClientMessage */]('');
    }
    FindComponent.prototype.findUser = function () {
        var _this = this;
        this.userService.findUser(this.user)
            .subscribe(function (data) {
            _this.userData = data;
            _this.router.navigate(['/info']);
        }, function (responseError) {
            _this.userData = null;
            _this.clientMessage = responseError.error;
        });
    };
    FindComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find',
            template: __webpack_require__("./src/app/components/find/find.component.html"),
            styles: [__webpack_require__("./src/app/components/find/find.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], FindComponent);
    return FindComponent;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Input Information\r\n  </h1>\r\n</div>\r\n<div class=\"container\">\r\n<h2>Input:</h2>\r\n<!--\r\n<form class=\"forms\" action=\"/#\">\r\n  <label for=\"cargo\">Cargo Capacity</label><br>\r\n  <input type=\"text\" name=\"cargo\" placeholder=\"Enter Cargo Capacity\"><br>\r\n  <label for=\"passengers\">Passengers</label><br>\r\n  <select id=\"passengerList1\">\r\n    <option>Select passengers</option>\r\n  </select><br>\r\n  <select id=\"passengerList2\">\r\n    <option>Select passengers</option>\r\n  </select><br>\r\n  <select id=\"passengerList3\">\r\n    <option>Select passengers</option>\r\n  </select><br>\r\n  <select id=\"passengerList4\">\r\n    <option>Select passengers</option>\r\n  </select><br>\r\n  <select id=\"passengerList5\">\r\n    <option>Select passengers</option>\r\n  </select><br><br>\r\n  <input type=\"submit\" id=\"submitBtn\" value=\"Find Compatible Ships\"><br><br>\r\n\r\n  \r\n  <h2>List of people</h2>\r\n  <div class=\"parent\">\r\n    <ul class =\"peoples\"> \r\n      <li class=\"peopleList\" *ngFor=\"let eachPeople of peoples\" [class.selected]=\"eachPeople === selectedPeople\" (click)=\"onSelect(eachPeople)\">\r\n       Name: {{eachPeople.name}} <br>\r\n      </li>\r\n      \r\n  </ul>\r\n  <div *ngIf=\"selectedPeople\" class=\"details\">\r\n    <div class=\"detailList\"> \r\n      <h3>You selected: {{selectedPeople.name}}</h3>\r\n      <h2>Display detail:</h2>\r\n      <ul>\r\n        <li>Name: {{selectedPeople.name}}</li>\r\n        <li>Homeworld: {{selectedPeople.homeworld}}</li>\r\n        <li>Starships: {{selectedPeople.starships}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n  <h2>List of planet</h2>\r\n  <div class=\"parent\">\r\n      <ul class =\"planets\"> \r\n        <li class=\"planetList\" *ngFor=\"let eachPlanet of planets\" [class.selected]=\"eachPlanet === selectedPlanet\" (click)=\"onSelect2(eachPlanet)\">\r\n         Name: {{eachPlanet.name}} <br>\r\n        </li>\r\n    </ul>\r\n    <div *ngIf=\"selectedPlanet\" class=\"details\">\r\n        <div class=\"detailList\"> \r\n          <h3>You selected: {{selectedPlanet.name}}</h3>\r\n          <h2>Display detail:</h2>\r\n          <ul>\r\n            <li>Name: {{selectedPlanet.name}}</li>\r\n            <li>Population: {{selectedPlanet.population}}</li>\r\n            <li>Residents: {{selectedPlanet.residents}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <h2>List of starship</h2>\r\n    <div class=\"parent\">\r\n   \r\n      <ul class =\"starships\"> \r\n        <li class=\"starshipList\" *ngFor=\"let eachStarship of starships\" [class.selected]=\"eachStarship === selectedStarship\" (click)=\"onSelect3(eachStarship)\">\r\n         Name: {{eachStarship.name}} <br>\r\n        </li>\r\n    </ul>\r\n    <div *ngIf=\"selectedStarship\" class=\"details\">\r\n        <div class=\"detailList\"> \r\n          <h3>You selected: {{selectedStarship.name}}</h3>\r\n          <h2>Display detail:</h2>\r\n          <ul>\r\n            <li>Name: {{selectedStarship.name}}</li>\r\n            <li>Model: {{selectedStarship.model}}</li>\r\n            <li>Cost: {{selectedStarship.cost_in_credits}}</li>\r\n            <li>Cargo Capacity: {{selectedStarship.cargo_capacity}}</li>\r\n            <li>Passengers hold: {{selectedStarship.passengers}}</li>\r\n            <li>Consumables: {{selectedStarship.consumables}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    -->\r\n <div *ngFor=\"let people of peoples.peopleList\">\r\n      <strong>Name</strong>: {{ people.name }},\r\n      <strong>height</strong>: {{ people.height }},\r\n      <strong>Gender</strong>: {{ people.gender }}\r\n  </div>\r\n  <div>\r\n      <input type=\"submit\" id=\"submitBtn\" (click)=\"findPeopleById()\" value=\"Find People\"><br><br>  \r\n      <input type=\"submit\" id=\"submitBtn\" (click)=\"findPlanetById()\" value=\"Find Planet\"><br><br> \r\n      <input type=\"submit\" id=\"submitBtn\" (click)=\"findStarshipById()\" value=\"Find Starship\"><br><br> \r\n    <!-- <button class=\"btn btn-primary btn-center\" (click)=\"findAllHeroes()\">GET</button> -->\r\n  </div>\r\n  <div *ngIf=\"peoples.peopleList\">\r\n      {{ clientMessage.message }}\r\n  </div> \r\n<!-- </form> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_people__ = __webpack_require__("./src/app/models/people.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_client_message_model__ = __webpack_require__("./src/app/models/client-message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_people_list_model__ = __webpack_require__("./src/app/models/people-list.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_planet_list_model__ = __webpack_require__("./src/app/models/planet-list.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_starship_list_model__ = __webpack_require__("./src/app/models/starship-list.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { peopleList } from '../../models/people-list';
// import { planetList } from '../../models/planet-list';
// import { starshipList } from '../../models/ships-list';







var InfoComponent = (function () {
    //peoples = peopleList;
    //planets = planetList;
    //starships = starshipList;
    function InfoComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.people = new __WEBPACK_IMPORTED_MODULE_1__models_people__["a" /* People */]('', '', '', '', '', '', '', '');
        this.peoples = new __WEBPACK_IMPORTED_MODULE_5__models_people_list_model__["a" /* PeopleList */]([]);
        this.planets = new __WEBPACK_IMPORTED_MODULE_6__models_planet_list_model__["a" /* PlanetList */]([]);
        this.starships = new __WEBPACK_IMPORTED_MODULE_7__models_starship_list_model__["a" /* StarshipList */]([]);
        //To message the user
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_3__models_client_message_model__["a" /* ClientMessage */]('nothing to display');
    }
    /*
    public findPeopleById2(): void {
      this.userService.findPeopleById(this.people)
      .subscribe(
        data => {
          this.peopleData = data;
        //this.router.navigate(['/info']);
        },
        responseError => {
          this.clientMessage = responseError.error;
        }
      );
    }
    */
    InfoComponent.prototype.findPeopleById = function () {
        var _this = this;
        this.userService.findPeopleById()
            .subscribe(function (data) {
            _this.peoples = data,
                console.log(data);
        }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    InfoComponent.prototype.findPlanetById = function () {
        var _this = this;
        this.userService.findPlanetById()
            .subscribe(function (data) {
            _this.planets = data,
                console.log(data);
        }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    InfoComponent.prototype.findStarshipById = function () {
        var _this = this;
        this.userService.findStarshipById()
            .subscribe(function (data) {
            _this.starships = data,
                console.log(data);
        }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info',
            template: __webpack_require__("./src/app/components/info/info.component.html"),
            styles: [__webpack_require__("./src/app/components/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div>\r\n    <div class=\"panel-heading\">\r\n        <span class=\"label label-default label-center\">{{title}}</span>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n    <img class=\"image-center\" src=\"{{image}}\" />\r\n    <div class=\"list-group\">\r\n        <div class=\"list-group-item\">\r\n            <span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span>\r\n            <strong>Register</strong> new super heroes.\r\n        </div>\r\n        <div class=\"list-group-item\">\r\n            <span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span>\r\n            <strong>Find</strong> a super hero.\r\n        </div>\r\n        <div class=\"list-group-item\">\r\n            <span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span>\r\n            <strong>Fetch</strong> all super heroes.\r\n        </div>\r\n    <div class=\"panel-footer\">\r\n    </div>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Super Hero Portal';
        this.image = 'assets/images/superhero.jpg';
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/components/main/main.component.html"),
            styles: [__webpack_require__("./src/app/components/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<nav class=\"navbar navbar-default\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<div class=\"navbar-header\">\r\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n\t\t\t\t  <span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t  <span class=\"icon-bar\"></span>\r\n\t\t\t\t  <span class=\"icon-bar\"></span>\r\n\t\t\t\t  <span class=\"icon-bar\"></span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\"><strong>Heroes</strong></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/register\">Register</a></li>\r\n\t\t\t\t<li><a routerLink=\"/find\">Find</a></li>\r\n\t\t\t\t<li><a routerLink=\"/all\">All</a></li>\r\n      </ul>\r\n\t\t</div>\r\n\t\t</div>\r\n</nav>\r\n-->\r\n<br>\r\n<div class=\"container\">\r\n<nav>\r\n  <ul>\r\n    <li>\r\n      <a routerLink=\"/find\">Login</a>\r\n    </li>\r\n    <br>\r\n    <li>\r\n      <a routerLink=\"/register\">Create Account</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n</div>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div>\r\n    <div class=\"panel-heading\">\r\n        <span class=\"label label-default label-center\">{{title}}</span>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n    <div class=\"list-group\">\r\n        <div class=\"list-group-item list-group-item-demo\">\r\n               <div class=\"form-group\">\r\n                    <input [(ngModel)]=\"hero.name\" placeholder=\"Name\" class=\"form-control\" />\r\n                    <input [(ngModel)]=\"hero.superPower\" placeholder=\"Power\" class=\"form-control\" />\r\n                    <input [(ngModel)]=\"hero.hasCape\" placeholder=\"Has Cape?\" class=\"form-control\" />\r\n               </div>\r\n               <div>\r\n                   <button class=\"btn btn-primary btn-center\" (click)=\"registerHero()\">Register</button>\r\n               </div>\r\n               <div>\r\n                   {{ clientMessage.message }}\r\n               </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n</div>\r\n-->\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n      Create Trader Acount\r\n    </h1>\r\n  </div>\r\n  <div class=\"container\">\r\n  <h2>Input Trade Credentials Here:</h2>\r\n  <form class=\"forms\" action=\"/#\" method=\"POST\">\r\n  <label for=\"username\">Trader Username</label><br>\r\n  <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Enter Username\"><br>\r\n  <label for=\"password\">Password</label><br>\r\n  <input type=\"password\" name=\"password1\" [(ngModel)]=\"user.password1\" placeholder=\"Enter Password\"><br>\r\n  <label for=\"password\">Confirm Password</label><br>\r\n  <input type=\"password\" name=\"password2\" [(ngModel)]=\"user.password2\" placeholder=\"Enter Password Again\"><br><br>\r\n  <input type=\"submit\" id=\"submitBtn\" (click)=\"registerUser()\" value=\"Create Credentials\">\r\n  </form>\r\n  <div>\r\n    {{ clientMessage.message }}\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_client_message_model__ = __webpack_require__("./src/app/models/client-message.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    //Constructor Injection
    function RegisterComponent(userService) {
        this.userService = userService;
        this.title = 'Register User';
        //For data binding
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */](0, '', '');
        //To message the user
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_3__models_client_message_model__["a" /* ClientMessage */]('');
    }
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.userService.registerUser(this.user)
            .subscribe(function (data) { return _this.clientMessage = data; }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/models/client-message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientMessage; });
var ClientMessage = (function () {
    function ClientMessage(message) {
        this.message = message;
    }
    return ClientMessage;
}());



/***/ }),

/***/ "./src/app/models/people-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleList; });
var PeopleList = (function () {
    function PeopleList(peopleList) {
        this.peopleList = peopleList;
    }
    return PeopleList;
}());



/***/ }),

/***/ "./src/app/models/people.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return People; });
var People = (function () {
    function People(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
    }
    return People;
}());



/***/ }),

/***/ "./src/app/models/planet-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetList; });
var PlanetList = (function () {
    function PlanetList(planetList) {
        this.planetList = planetList;
    }
    return PlanetList;
}());



/***/ }),

/***/ "./src/app/models/starship-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarshipList; });
var StarshipList = (function () {
    function StarshipList(starshipList) {
        this.starshipList = starshipList;
    }
    return StarshipList;
}());



/***/ }),

/***/ "./src/app/models/user-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserList; });
var UserList = (function () {
    function UserList(userList) {
        this.userList = userList;
    }
    return UserList;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.registerUser = function (user) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* USER_URL */] + "/register", user)
            .catch(this.handleError);
    };
    UserService.prototype.findUser = function (user) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* USER_URL */] + "/find", user)
            .catch(this.handleError);
    };
    UserService.prototype.findAllUsers = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* USER_URL */] + "/all")
            .catch(this.handleError);
    };
    UserService.prototype.findPeopleById = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* USER_URL */] + "/findPeople")
            .catch(this.handleError);
    };
    UserService.prototype.findPeopleById2 = function (people) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* USER_URL */] + "/findPeople")
            .catch(this.handleError);
    };
    UserService.prototype.findPlanetById = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* USER_URL */] + "/findPlanet")
            .catch(this.handleError);
    };
    UserService.prototype.findStarshipById = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* USER_URL */] + "/findStarship")
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (response) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(response);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/session/custom-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInterceptor; });
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

var CustomInterceptor = (function () {
    function CustomInterceptor() {
    }
    CustomInterceptor.prototype.intercept = function (request, next) {
        console.log("Suddenly");
        request = request.clone({
            withCredentials: true
        });
        return next.handle(request);
    };
    CustomInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CustomInterceptor);
    return CustomInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_URL; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
var USER_URL = "http://localhost:8081/Project_2/user";


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["b" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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