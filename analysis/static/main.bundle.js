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

/***/ "./src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/_@angular_animations@5.2.9@@angular/animations/esm5/animations.js");

var routeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            position: 'absolute'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0)', position: 'absolute' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)', position: 'absolute' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' })), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })), { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nopage_nopage_component__ = __webpack_require__("./src/app/nopage/nopage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_center_personal_center_component__ = __webpack_require__("./src/app/personal-center/personal-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_center_personal_information_edit_personal_information_edit_component__ = __webpack_require__("./src/app/personal-center/personal-information-edit/personal-information-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_can_active_guard__ = __webpack_require__("./src/app/shared/can-active-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_home_search_home_component__ = __webpack_require__("./src/app/search-home/search-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_resume_search_resume_component__ = __webpack_require__("./src/app/search-resume/search-resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__descr_descr_component__ = __webpack_require__("./src/app/descr/descr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__position_analysis_position_analysis_component__ = __webpack_require__("./src/app/position-analysis/position-analysis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routeConfig = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'personOK', component: __WEBPACK_IMPORTED_MODULE_4__personal_center_personal_center_component__["a" /* PersonalCenterComponent */] },
    { path: 'person', component: __WEBPACK_IMPORTED_MODULE_5__personal_center_personal_information_edit_personal_information_edit_component__["a" /* PersonalInformationEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_can_active_guard__["a" /* AuthGuard */]], },
    { path: 'searchhome', component: __WEBPACK_IMPORTED_MODULE_7__search_home_search_home_component__["a" /* SearchHomeComponent */] },
    { path: 'searchresume', component: __WEBPACK_IMPORTED_MODULE_8__search_resume_search_resume_component__["a" /* SearchResumeComponent */] },
    { path: 'descr/:id', component: __WEBPACK_IMPORTED_MODULE_9__descr_descr_component__["a" /* DescrComponent */] },
    { path: 'position/:id', component: __WEBPACK_IMPORTED_MODULE_10__position_analysis_position_analysis_component__["a" /* PositionAnalysisComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__nopage_nopage_component__["a" /* NopageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routeConfig)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"main-Body\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n      <!--顶部 导航栏 start-->\n      <app-navbar></app-navbar>\n      <!--顶部 导航栏 end-->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\" style=\"min-height: 500px;border-radius: 4px;background-color: #fff;padding-bottom:40px \">\n        <!--中间部分  start-->\n        <div>\n          <router-outlet></router-outlet>\n        </div>\n        <!--中间部分 end-->\n    </div>\n  </div>\n</div>\n<!--底部 说明 start-->\n<app-footer></app-footer>\n<!--底部 说明 end-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // router跳转动画所需参数
    function AppComponent(cs) {
        this.cs = cs;
        this.title = 'SOTS';
        /* 移除所有Cookie */
        this.cs.removeAllCookie();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_mycookie_service__["a" /* MycookieService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/_@angular_platform-browser@5.2.9@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.9@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/_@angular_common@5.2.9@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/_@angular_platform-browser@5.2.9@@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_component__ = __webpack_require__("./src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipe_filter_pipe__ = __webpack_require__("./src/app/pipe/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_cookie__ = __webpack_require__("./node_modules/_ngx-cookie@2.0.1@ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__personal_center_personal_center_module__ = __webpack_require__("./src/app/personal-center/personal-center.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nopage_nopage_component__ = __webpack_require__("./src/app/nopage/nopage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__recommend_recommend_component__ = __webpack_require__("./src/app/recommend/recommend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__hot_jobs_hot_jobs_component__ = __webpack_require__("./src/app/hot-jobs/hot-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__personal_center_personal_center_component__ = __webpack_require__("./src/app/personal-center/personal-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__personalized_recommendation_personalized_recommendation_component__ = __webpack_require__("./src/app/personalized-recommendation/personalized-recommendation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_can_active_guard__ = __webpack_require__("./src/app/shared/can-active-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__signin_signin_component__ = __webpack_require__("./src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_modal_service__ = __webpack_require__("./src/app/shared/modal-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__validators_UserMobileDirective___ = __webpack_require__("./src/app/validators/UserMobileDirective .ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__search_home_search_home_component__ = __webpack_require__("./src/app/search-home/search-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__charts_ChartsModule__ = __webpack_require__("./src/app/charts/ChartsModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_visualdata_service__ = __webpack_require__("./src/app/shared/visualdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__search_resume_search_resume_component__ = __webpack_require__("./src/app/search-resume/search-resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__descr_descr_component__ = __webpack_require__("./src/app/descr/descr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__position_analysis_position_analysis_component__ = __webpack_require__("./src/app/position-analysis/position-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_echarts__ = __webpack_require__("./node_modules/_ngx-echarts@2.1.0@ngx-echarts/ngx-echarts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipe_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__nopage_nopage_component__["a" /* NopageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__recommend_recommend_component__["a" /* RecommendComponent */],
                __WEBPACK_IMPORTED_MODULE_18__hot_jobs_hot_jobs_component__["a" /* HotJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__personal_center_personal_center_component__["a" /* PersonalCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__personalized_recommendation_personalized_recommendation_component__["a" /* PersonalizedRecommendationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_27__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_29__validators_UserMobileDirective___["a" /* UserAsyncDirective */],
                __WEBPACK_IMPORTED_MODULE_30__search_home_search_home_component__["a" /* SearchHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__search_resume_search_resume_component__["a" /* SearchResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_34__descr_descr_component__["a" /* DescrComponent */],
                __WEBPACK_IMPORTED_MODULE_35__position_analysis_position_analysis_component__["a" /* PositionAnalysisComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__personal_center_personal_center_module__["a" /* PersonalCenterModule */],
                __WEBPACK_IMPORTED_MODULE_31__charts_ChartsModule__["a" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_36_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_cookie__["a" /* CookieModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__shared_product_service__["a" /* ProductService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] },
                __WEBPACK_IMPORTED_MODULE_22__shared_mycookie_service__["a" /* MycookieService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_can_active_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_25__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_28__shared_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_32__shared_visualdata_service__["a" /* VisualData */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_26__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_27__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bean/InforSkill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InforSkill; });
/* unused harmony export Skills */
var InforSkill = (function () {
    function InforSkill(skillInfor, hidden) {
        this.skillInfor = skillInfor;
        this.hidden = hidden;
    }
    return InforSkill;
}());

var Skills = (function () {
    function Skills(skillInfor) {
        this.skillInfor = skillInfor;
    }
    return Skills;
}());



/***/ }),

/***/ "./src/app/bean/RegisterInfor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterInfor; });
var RegisterInfor = (function () {
    function RegisterInfor(username, password) {
        this.username = username;
        this.password = password;
    }
    return RegisterInfor;
}());



/***/ }),

/***/ "./src/app/bean/RegisterOrLogin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RegisterOrLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OKOrNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESULT_OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return S_CONSTANT; });
var RegisterOrLogin;
(function (RegisterOrLogin) {
    RegisterOrLogin[RegisterOrLogin["REGISTER"] = 0] = "REGISTER";
    RegisterOrLogin[RegisterOrLogin["LOGIN"] = 1] = "LOGIN";
    RegisterOrLogin[RegisterOrLogin["NOLOGIN"] = 2] = "NOLOGIN";
    RegisterOrLogin[RegisterOrLogin["SUBMITTED"] = 3] = "SUBMITTED";
})(RegisterOrLogin || (RegisterOrLogin = {}));
;
var OKOrNo;
(function (OKOrNo) {
    OKOrNo[OKOrNo["Yes"] = 0] = "Yes";
    OKOrNo[OKOrNo["NO"] = 1] = "NO";
    OKOrNo[OKOrNo["ERROR"] = 2] = "ERROR";
})(OKOrNo || (OKOrNo = {}));
;
var RESULT_OK;
(function (RESULT_OK) {
    RESULT_OK[RESULT_OK["NO"] = 0] = "NO";
    RESULT_OK[RESULT_OK["YES"] = 1] = "YES";
    RESULT_OK[RESULT_OK["ERRO"] = 2] = "ERRO";
})(RESULT_OK || (RESULT_OK = {}));
;
var S_CONSTANT;
(function (S_CONSTANT) {
    S_CONSTANT[S_CONSTANT["USER"] = 0] = "USER";
})(S_CONSTANT || (S_CONSTANT = {}));
;


/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/***/ (function(module, exports) {

module.exports = ".carousel-inner {\r\n    border-radius: 15px;\r\n}\r\n.carousel {\r\n    /* background-color: #93999f; */\r\n    border-radius: 15px;\r\n    -webkit-box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);\r\n            box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);\r\n}\r\n.carousel-control.right {\r\n    border-radius: 15px;\r\n}\r\n.carousel-control.left {\r\n    border-radius: 15px;\r\n}\r\n.page-header {\r\n    border-bottom: none;\r\n}"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- 轮播开始 -->\n<div class=\"carousel slide\" id=\"carousel-99981\">\n\n  <ol class=\"carousel-indicators\">\n    <li *ngFor=\"let carouselinfor of carouselinfors; let i = index;\" [class.active]=\"i==0\"\n        data-target=\"#carousel-99981\">\n    </li>\n  </ol>\n\n  <div class=\"carousel-inner\">\n    <!-- 轮播切换的一帧 -->\n    <div class=\"item\" *ngFor=\"let carouselinfor of carouselinfors; let i = index;\" [class.active]=\"i==0\">\n      <a  target=\"_Blank\" [href] =\"carouselinfor?.content_url\">\n        <img [alt]=\"carouselinfor?.photo_url\" [src]=\"carouselinfor?.photo_url\"/>\n      </a>\n      <!-- 占位符的作用 -->\n      <!-- <div *ngIf=\"isshowcarousel\" style=\"width:800px;height:300px; background-color:#f00\"></div> -->\n      <!-- <div class=\"carousel-caption\">\n        <h4>{{carouselinfor?.title}}</h4>\n        <p>{{carouselinfor?.descr}}</p>\n      </div> -->\n    </div>\n    <!-- /轮播切换的一帧 -->\n  </div>\n  <a class=\"left carousel-control\" href=\"#carousel-99981\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-99981\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n  </a>\n</div>\n<!-- /轮播开始 -->\n\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = (function () {
    /* 显示一张图片占位  */
    // isshowcarousel = true;
    function CarouselComponent(ps) {
        var _this = this;
        this.ps = ps;
        this.carouselinfors = [{ content_url: "https://www.baidu.com", photo_url: "assets/1.jpg" }];
        this.ps.getCarouselInformation().subscribe(function (date) {
            console.log(date);
            /* 去除占位图片 */
            // this.isshowcarousel = false;
            _this.carouselinfors = null;
            _this.carouselinfors = date;
        });
    }
    CarouselComponent.prototype.ngOnInit = function () { };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/charts/ChartsModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/_@angular_platform-browser@5.2.9@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.9@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChartsRouting__ = __webpack_require__("./src/app/charts/ChartsRouting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__ = __webpack_require__("./node_modules/_ngx-echarts@2.1.0@ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__position_chart_position_chart_component__ = __webpack_require__("./src/app/charts/position-chart/position-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_seeker_chart_job_seeker_chart_component__ = __webpack_require__("./src/app/charts/job-seeker-chart/job-seeker-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__charts_component__ = __webpack_require__("./src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enterprise_chart_enterprise_chart_component__ = __webpack_require__("./src/app/charts/enterprise-chart/enterprise-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__ChartsRouting__["a" /* ChartsRouting */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__["a" /* NgxEchartsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__position_chart_position_chart_component__["a" /* PositionChartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__job_seeker_chart_job_seeker_chart_component__["a" /* JobSeekerChartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__enterprise_chart_enterprise_chart_component__["a" /* EnterpriseChartComponent */]
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/charts/ChartsRouting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_component__ = __webpack_require__("./src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_chart_position_chart_component__ = __webpack_require__("./src/app/charts/position-chart/position-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_seeker_chart_job_seeker_chart_component__ = __webpack_require__("./src/app/charts/job-seeker-chart/job-seeker-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enterprise_chart_enterprise_chart_component__ = __webpack_require__("./src/app/charts/enterprise-chart/enterprise-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routeConfig = [{
        path: 'charts',
        component: __WEBPACK_IMPORTED_MODULE_2__charts_component__["a" /* ChartsComponent */],
        children: [
            { path: 'position-charts', component: __WEBPACK_IMPORTED_MODULE_3__position_chart_position_chart_component__["a" /* PositionChartComponent */] },
            { path: 'jobseeker-charts', component: __WEBPACK_IMPORTED_MODULE_4__job_seeker_chart_job_seeker_chart_component__["a" /* JobSeekerChartComponent */] },
            { path: 'enterprise-charts', component: __WEBPACK_IMPORTED_MODULE_5__enterprise_chart_enterprise_chart_component__["a" /* EnterpriseChartComponent */] },
            { path: '', redirectTo: '/charts/position-charts', pathMatch: 'full' },
        ]
    }
];
var ChartsRouting = (function () {
    function ChartsRouting() {
    }
    ChartsRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routeConfig)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ChartsRouting);
    return ChartsRouting;
}());



/***/ }),

/***/ "./src/app/charts/charts.component.css":
/***/ (function(module, exports) {

module.exports = "ul.nav {\r\n    padding: 10px 0;\r\n    margin-bottom: 14px;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    color: #666;\r\n}\r\n\r\n.nav-pills>li.active>a{\r\n    color: #1296db;\r\n    background: none;\r\n    font-weight: 700;\r\n}\r\n\r\nh4 i.fa {\r\n    color: #d8a93e;\r\n}"

/***/ }),

/***/ "./src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\n  <div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"row\" style=\" margin-top: 40px; \">\n      <!-- 侧边栏 -->\n      <ul class=\"nav nav-pills\">\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/charts/position-charts\">\n            <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n            岗位分析\n          </a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/charts/jobseeker-charts\">\n            <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n            用户画像\n          </a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/charts/enterprise-charts\">\n            <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n            企业画像\n          </a>\n        </li>\n      </ul>\n      <!-- /侧边栏 -->\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  <div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsComponent = (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () { };
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-charts',
            template: __webpack_require__("./src/app/charts/charts.component.html"),
            styles: [__webpack_require__("./src/app/charts/charts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/charts/enterprise-chart/enterprise-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"row analysis\">\n      <div class=\"col-md-10 col-md-offset-1 title clearfix\">\n        <div class=\"pull-left\">\n          <h4>\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>\n            企业画像分析\n            <small class=\"text-muted\">基于招聘信息分析所得</small>\n          </h4>\n        </div>\n        <div class=\"pull-right\">\n        </div>\n      </div>\n\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div echarts [options]=\"option\" style=\"height:400px;\"></div>\n        <div class=\"s-l\"></div>\n      </div>\n\n      <!-- 切换按钮组 -->\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"s\"></div>\n        <h4>\n          <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>\n          更多图表\n        </h4>\n        <div class=\"s\"></div>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(0)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/company.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">公司类型</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(1)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/compscale.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">公司分布</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(2)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/scale.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">薪资分布</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(3)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/field.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">行业分布</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(4)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/edu.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">学历需求</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(5)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/exper.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">经验需求</h5>\n            </a>\n          </div>\n        </div>\n      </div>\n      <!-- 两张图表&一张图表模型 -->\n      <div class=\"col-md-10 col-md-offset-1 clearfix\">\n        <div class=\"s-l\"></div>\n        <!-- 对于一张图 -->\n        <div *ngIf=\"flag != 0\" echarts [options]=\"eTempt\" style=\"height:400px;z-index:10\"></div>\n        <!-- 对于两张图 -->\n        <div *ngIf=\"flag == 0\">\n          <div class=\"pull-left\" style=\"width:50%\">\n            <div echarts [options]=\"eUserExper\" style=\"height:400px;\"></div>\n          </div>\n          <div class=\"pull-right\" style=\"width:50%\">\n            <div echarts [options]=\"eUserEdu\" style=\"height:400px;\"></div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/charts/enterprise-chart/enterprise-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_visualdata_service__ = __webpack_require__("./src/app/shared/visualdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnterpriseChartComponent = (function () {
    function EnterpriseChartComponent(vd) {
        this.vd = vd;
        this.titleColor = "#666";
        this.subTitleColor = "#666";
        this.labelColor = "#666";
        this.lineColor = "#efefef";
        this.xColor = "#666";
        /* 图表类型 */
        this.flag = 1;
        this.setDefaultEchart();
    }
    EnterpriseChartComponent.prototype.ngOnInit = function () { };
    /* 点击按钮切换 图表 */
    EnterpriseChartComponent.prototype.changeOption = function (num) {
        var _this = this;
        switch (num) {
            /*公司类型占比 (饼状图)*/
            case 0:
                this.vd.getCompType().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var majortype = [];
                        majortype = data['data']['chart'].compType;
                        _this.eTempt = {
                            title: {
                                text: '公司类型占比',
                                subtext: "根据公司信息计算所得",
                                left: 'center',
                                top: 10,
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b} <br/> {c} ({d}%)"
                            },
                            series: [
                                {
                                    name: '公司数量与城市',
                                    type: 'pie',
                                    radius: '55%',
                                    center: ['50%', '58%'],
                                    data: majortype.sort(function (a, b) {
                                        return a.value - b.value;
                                    }),
                                    roseType: 'radius',
                                }
                            ]
                        };
                    }
                });
                break;
            /* 某一个城市大中小公司数量 */
            case 1:
                this.vd.getCityCompScale().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var xCitys = data['data']['chart'].city;
                        var legendData = data['data']['chart'].comptype;
                        var serieData = [];
                        var metaDate = data['data']['chart'].metaDate;
                        var colors = [
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#f7734e' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e12945' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#96d668' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#01babc' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#1a98f8' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#7049f0' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }
                        ];
                        for (var v = 0; v < legendData.length; v++) {
                            var serie = {
                                name: legendData[v],
                                type: 'line',
                                symbol: "circle",
                                symbolSize: 5,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [5, 5, 0, 0],
                                        color: colors[v],
                                    },
                                },
                                data: metaDate[v]
                            };
                            serieData.push(serie);
                        }
                        _this.eTempt = {
                            // // backgroundColor: "#2d3548",
                            title: {
                                text: '公司规模城市分布',
                                subtext: '数据来自招聘信息',
                                x: "center",
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            legend: {
                                right: 10,
                                top: 0,
                                itemGap: 16,
                                itemWidth: 18,
                                itemHeight: 10,
                                orient: "vertical",
                                data: [{
                                        name: '中等规模公司',
                                    },
                                    {
                                        name: '小规模公司',
                                    },
                                    {
                                        name: '大规模公司',
                                    }
                                ],
                                textStyle: {
                                    color: _this.labelColor,
                                }
                            },
                            grid: {
                                left: '2%',
                                bottom: "5%",
                                right: "5%",
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'axis',
                            },
                            xAxis: [{
                                    type: 'category',
                                    boundaryGap: true,
                                    data: xCitys,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.titleColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }],
                            yAxis: [{
                                    name: "公司数量 /",
                                    nameTextStyle: { color: _this.labelColor },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.06
                                        }
                                    }
                                }],
                            series: serieData
                        };
                    }
                });
                break;
            /* 公司规模和发布职位数量 */
            case 2:
                this.vd.getDifcompScaleJobNum().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var temp = void 0;
                        temp = data['data']['chart'].compscalejobnum;
                        var scaletype = [];
                        var sjobnum = [];
                        for (var i = 0; i < temp.length; i++) {
                            scaletype.push(temp[i].name);
                            sjobnum.push(temp[i].value);
                        }
                        _this.eTempt = {
                            // backgroundColor: "#2d3548",
                            title: {
                                text: '公司规模和发布职位数量',
                                subtext: '数据来自招聘信息',
                                x: "center",
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                formatter: '{b}<br />{a0}: {c0}',
                                textStyle: {
                                    color: "#fff"
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '10%',
                                bottom: '6%',
                                padding: '0 0 10 0',
                                containLabel: true,
                            },
                            xAxis: [{
                                    type: 'category',
                                    boundaryGap: true,
                                    name: "/ 公司规模",
                                    data: scaletype,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.titleColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: '#fff',
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }],
                            yAxis: [{
                                    type: 'value',
                                    name: "发布职位数量 /",
                                    nameTextStyle: { color: _this.labelColor },
                                    splitNumber: 5,
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.06
                                        }
                                    }
                                }],
                            series: [
                                {
                                    name: '小规模公司',
                                    type: 'bar',
                                    data: sjobnum.sort(),
                                    barWidth: 18,
                                    barGap: 0.1,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'top',
                                            textStyle: {
                                                color: _this.labelColor,
                                            },
                                        },
                                    },
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: [5, 5, 0, 0],
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                        offset: 0,
                                                        color: '#96d668' // 0% 处的颜色
                                                    }, {
                                                        offset: 1,
                                                        color: '#01babc' // 100% 处的颜色
                                                    }],
                                                globalCoord: false,
                                            },
                                        },
                                    },
                                }
                            ]
                        };
                    }
                });
                break;
            case 3:
                this.vd.getCityIndustryCompNum().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var xCitys = data['data']['chart'].industry;
                        var legendData = data['data']['chart'].city;
                        var serieData = [];
                        var metaDate = data['data']['chart'].metaDate;
                        var colors = [
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#f7734e' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e12945' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#96d668' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#01babc' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#1a98f8' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#7049f0' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }
                        ];
                        for (var v = 0; v < legendData.length; v++) {
                            var serie = {
                                name: legendData[v],
                                type: 'line',
                                symbol: "circle",
                                symbolSize: 5,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [5, 5, 0, 0],
                                        color: colors[v],
                                    },
                                },
                                data: metaDate[v]
                            };
                            serieData.push(serie);
                        }
                        _this.eTempt = {
                            // backgroundColor: "#2d3548",
                            title: {
                                text: '行业分布',
                                subtext: '数据来自招聘信息',
                                x: "center",
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            legend: {
                                right: 10,
                                top: 0,
                                itemGap: 16,
                                itemWidth: 18,
                                itemHeight: 10,
                                orient: "vertical",
                                data: [{
                                        name: '上海',
                                    },
                                    {
                                        name: '深圳',
                                    },
                                    {
                                        name: '北京',
                                    }
                                ],
                                textStyle: {
                                    color: _this.labelColor,
                                }
                            },
                            grid: {
                                left: '2%',
                                bottom: "5%",
                                right: "5%",
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'axis',
                            },
                            xAxis: [{
                                    type: 'category',
                                    name: "行业类型",
                                    boundaryGap: true,
                                    data: xCitys,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.titleColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }],
                            yAxis: [{
                                    name: "公司数量 /",
                                    nameTextStyle: { color: _this.labelColor },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.06
                                        }
                                    }
                                }],
                            series: serieData
                        };
                    }
                });
                break;
            case 4:
                this.vd.getDifCompScaleEdu().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var xCitys = data['data']['chart'].compscale;
                        var legendData = data['data']['chart'].edu;
                        var serieData = [];
                        var metaDate = data['data']['chart'].metaDate;
                        var colors = [
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#f7734e' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e12945' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#96d668' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#01babc' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#1a98f8' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#7049f0' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            },
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#70ffac' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }
                        ];
                        for (var v = 0; v < legendData.length; v++) {
                            var serie = {
                                name: legendData[v],
                                type: 'line',
                                symbol: "circle",
                                symbolSize: 5,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [5, 5, 0, 0],
                                        color: colors[v],
                                    },
                                },
                                data: metaDate[v]
                            };
                            serieData.push(serie);
                        }
                        _this.eTempt = {
                            // backgroundColor: "#2d3548",
                            title: {
                                text: '公司规模与学历',
                                subtext: '数据来自招聘信息',
                                x: "center",
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            legend: {
                                right: 10,
                                top: 0,
                                itemGap: 16,
                                itemWidth: 18,
                                itemHeight: 10,
                                orient: "vertical",
                                data: [{
                                        name: '本科',
                                    },
                                    {
                                        name: '专科',
                                    },
                                    {
                                        name: '硕士',
                                    },
                                    {
                                        name: '博士',
                                    }
                                ],
                                textStyle: {
                                    color: _this.titleColor,
                                }
                            },
                            grid: {
                                left: '2%',
                                bottom: "5%",
                                right: "10%",
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'axis',
                            },
                            xAxis: [{
                                    type: 'category',
                                    name: "/ 公司规模",
                                    nameTextStyle: { color: _this.labelColor },
                                    boundaryGap: true,
                                    data: xCitys,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }],
                            yAxis: [{
                                    name: "招聘数量 /",
                                    nameTextStyle: { color: _this.labelColor },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.06
                                        }
                                    }
                                }],
                            series: serieData
                        };
                    }
                });
                break;
            case 5:
                this.vd.getDifCompScaleExper().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var xCitys = data['data']['chart'].compscale;
                        var legendData = data['data']['chart'].exper;
                        var serieData = [];
                        var metaDate = data['data']['chart'].metaDate;
                        var colors = [
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#f7734e' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e12945' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#96d668' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#01babc' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#1a98f8' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#7049f0' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            },
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#70ffac' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }
                        ];
                        for (var v = 0; v < legendData.length; v++) {
                            var serie = {
                                name: legendData[v],
                                type: 'line',
                                symbol: "circle",
                                symbolSize: 5,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [5, 5, 0, 0],
                                        color: colors[v],
                                    },
                                },
                                data: metaDate[v]
                            };
                            serieData.push(serie);
                        }
                        _this.eTempt = {
                            // backgroundColor: "#2d3548",
                            title: {
                                text: '公司规模与经验',
                                subtext: '数据来自招聘信息',
                                x: "center",
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            legend: {
                                right: 10,
                                top: 0,
                                itemGap: 16,
                                itemWidth: 18,
                                itemHeight: 10,
                                orient: "vertical",
                                data: [{
                                        name: '3年-4年',
                                    },
                                    {
                                        name: '2年以下',
                                    },
                                    {
                                        name: '5年',
                                    },
                                    {
                                        name: '博士',
                                    }
                                ],
                                textStyle: {
                                    color: _this.titleColor,
                                }
                            },
                            grid: {
                                left: '2%',
                                bottom: "5%",
                                right: "10%",
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'axis',
                            },
                            xAxis: [{
                                    type: 'category',
                                    name: "/ 公司规模",
                                    nameTextStyle: { color: _this.labelColor },
                                    boundaryGap: true,
                                    data: xCitys,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }],
                            yAxis: [{
                                    name: "招聘数量 /",
                                    nameTextStyle: { color: _this.labelColor },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.06
                                        }
                                    }
                                }],
                            series: serieData
                        };
                    }
                });
                break;
            default:
                console.log("enterprise num is error");
                break;
        }
    };
    /* 默认加载图表 */
    EnterpriseChartComponent.prototype.setDefaultEchart = function () {
        var _this = this;
        /* 顶部 公司规模和人才需求量（柱状图） */
        this.vd.getCompScaleNum().subscribe(function (data) {
            if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                var xScale = [];
                var yScaleNeed = [];
                var iCompScale = data['data']['chart'].compscale;
                for (var i = 0; i < iCompScale.length; i++) {
                    xScale.push(iCompScale[i].name);
                    yScaleNeed.push(iCompScale[i].value);
                }
                _this.option = {
                    // // backgroundColor: '#011c3a',
                    /*  legend: {
                       data: ["公司规模"],
                       right: '5%',
                       textStyle: {
                         color: "#fff"
                       }
                     }, */
                    xAxis: [{
                            data: xScale,
                            type: 'category',
                            name: "/ 公司规模",
                            nameTextStyle: { color: _this.labelColor },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: _this.labelColor
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }],
                    yAxis: {
                        type: 'category',
                        name: "公司数量 /",
                        nameTextStyle: { color: _this.labelColor },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: _this.labelColor
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: _this.lineColor
                            }
                        },
                        axisLine: {
                            show: false,
                        },
                    },
                    series: [{
                            name: '公司规模',
                            type: 'bar',
                            barWidth: 18,
                            itemStyle: {
                                normal: {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                                offset: 0,
                                                color: '#821eff'
                                            },
                                            {
                                                offset: 1,
                                                color: '#204fff'
                                            }
                                        ]
                                    },
                                    shadowBlur: 10,
                                }
                            },
                            data: yScaleNeed,
                        }]
                };
            }
        });
        /* 底部默认 图表 */
        this.changeOption(0);
    };
    EnterpriseChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-enterprise-chart',
            template: __webpack_require__("./src/app/charts/enterprise-chart/enterprise-chart.component.html"),
            styles: [__webpack_require__("./src/app/charts/position-chart/position-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_visualdata_service__["a" /* VisualData */]])
    ], EnterpriseChartComponent);
    return EnterpriseChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/job-seeker-chart/job-seeker-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"row analysis\">\n      <div class=\"col-md-10 col-md-offset-1 title clearfix\">\n        <div class=\"pull-left\">\n          <h4>\n            <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\n            用户画像分析\n            <small class=\"text-muted\">基于用户信息分析所得</small>\n          </h4>\n        </div>\n        <div class=\"pull-right\">\n        </div>\n      </div>\n\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"s\"></div>\n        <div id=\"option3\" echarts [options]=\"option3\" style=\"height:400px;\"></div>\n        <div class=\"s-l\"></div>\n        <h4>\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          分析报告\n        </h4>\n        <div class=\"s-l\"></div>\n        <div class=\"table-responsive\">\n          <table class=\"table\" id=\"mytable\">\n            <thead>\n              <tr>\n                <th>学历</th>\n                <th>用户占比</th>\n                <th>招聘出现</th>\n                <th title=\"300-500人公司招聘时提及次数\">\n                  大公司相关\n                  <i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i>\n                </th>\n                <th>平均薪资</th>\n                <th>城市分布</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  专科\n                  <small class=\"text-muted\">\n                    1400\n                  </small>\n\n                </td>\n                <td>\n                  1000\n                </td>\n                <td>\n                  2000\n                </td>\n                <td>\n                  20%\n                </td>\n                <td>\n                  2%\n                  <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  2/11/2018\n                </td>\n              </tr>\n              <tr>\n                <td>本科\n                  <small class=\"text-muted\">\n                    1302\n                  </small>\n                </td>\n                <td>1200</td>\n                <td>2300</td>\n                <td>21%</td>\n                <td>3%\n                  <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n              <tr>\n                <td>硕士研究生\n                  <small class=\"text-muted\">\n                    1300\n                  </small>\n                </td>\n                <td>1300</td>\n                <td>2300</td>\n                <td>10%</td>\n                <td>8%\n                  <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n              <tr>\n                <td>博士研究生\n                  <small class=\"text-muted\">\n                    1200\n                  </small>\n                </td>\n                <td>998</td>\n                <td>1987</td>\n                <td>10%</td>\n                <td>4%\n                  <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"s\"></div>\n      </div>\n      <!-- 切换按钮组 -->\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"s\"></div>\n        <h4>\n          <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>\n          更多图表\n        </h4>\n        <div class=\"s\"></div>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-3 column\">\n            <a (click)=\"changeOption(0)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/jobseeker/education.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">教育水平</h5>\n            </a>\n          </div>\n          <div class=\"col-md-3 column\">\n            <a (click)=\"changeOption(1)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/jobseeker/position.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">偏爱岗位</h5>\n            </a>\n          </div>\n          <div class=\"col-md-3 column\">\n            <a (click)=\"changeOption(2)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/jobseeker/city.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">向往城市</h5>\n            </a>\n          </div>\n          <div class=\"col-md-3 column\">\n            <a (click)=\"changeOption(3)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/jobseeker/job.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">性别分布</h5>\n            </a>\n          </div>\n        </div>\n      </div>\n      <!-- 两张图表&一张图表模型 -->\n      <div class=\"col-md-10 col-md-offset-1 clearfix\" style=\" min-height: 400px; \">\n        <div class=\"s-l\"></div>\n        <!-- 对于一张图 -->\n        <div *ngIf=\"flag != 0\" echarts [options]=\"option\"></div>\n        <!-- 对于两张图 -->\n        <div *ngIf=\"flag == 0\">\n          <div class=\"pull-left\" style=\"width:50%\">\n            <div echarts [options]=\"eUserExper\" style=\"height:400px;\"></div>\n          </div>\n          <div class=\"pull-right\" style=\"width:50%\">\n            <div echarts [options]=\"eUserEdu\" style=\"height:400px;\"></div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/charts/job-seeker-chart/job-seeker-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSeekerChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_visualdata_service__ = __webpack_require__("./src/app/shared/visualdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobSeekerChartComponent = (function () {
    function JobSeekerChartComponent(vd) {
        this.vd = vd;
        this.titleColor = "#404040";
        this.subColor = "#666";
        this.lineColor = "#efefef";
        this.labelColor = "#666";
        /* 切换 两个各个按钮 */
        this.flag = 0;
        /* 默认展示 */
        this.defaultShowEcharts();
    }
    JobSeekerChartComponent.prototype.ngOnInit = function () { };
    JobSeekerChartComponent.prototype.changeOption = function (num) {
        var _this = this;
        /* 默认显示一张图表 */
        this.flag = 1;
        switch (num) {
            /* 用户学历（圆环图）&工作经验（饼图） */
            case 0:
                this.flag = 0;
                this.vd.getUserEduExper().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var userEdu = void 0;
                        var userExper = void 0;
                        userEdu = data['data']['chart'].useredu;
                        userExper = data['data']['chart'].userexper;
                        _this.eUserExper = {
                            title: {
                                text: '用户经验',
                                subtext: '根据用户信息分析所得',
                                left: 'center',
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}用户 : {c}<br/>约占({d}%)"
                            },
                            series: [{
                                    name: '',
                                    type: 'pie',
                                    radius: [0, 120],
                                    center: ['50%', '50%'],
                                    clockwise: false,
                                    data: userEdu,
                                    label: {
                                        normal: {
                                            show: true,
                                            textStyle: {
                                                color: _this.labelColor,
                                                fontSize: 14,
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            borderWidth: 0,
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }],
                            color: ['#ad46f3', '#44aff0', '#f6d54a', '#f69846', '#6f81da', '#ad46f3'],
                        };
                        _this.eUserEdu = {
                            title: {
                                text: '用户教育经历',
                                subtext: '根据用户信息分析所得',
                                left: 'center',
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}用户 : {c}<br/>约占({d}%)"
                            },
                            grid: {
                                left: "1%"
                            },
                            series: [{
                                    name: '',
                                    type: 'pie',
                                    radius: [100, 120],
                                    center: ['50%', '50%'],
                                    clockwise: false,
                                    data: userExper,
                                    label: {
                                        normal: {
                                            show: true,
                                            textStyle: {
                                                color: _this.labelColor,
                                                fontSize: 14,
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            borderWidth: 0,
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }],
                            color: ['#ad46f3', '#44aff0', '#f6d54a', '#f69846', '#6f81da', '#ad46f3'],
                        };
                    }
                });
                break;
            /* 用户偏爱岗位(折线图) */
            case 1:
                this.vd.getUserFavJob().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var iJob = data['data']['chart'].favJob;
                        /* 最受求职者欢迎的岗位 x 岗位 y 数量 */
                        var xJob = [];
                        var yJobNum = [];
                        for (var k = 0; k < iJob.length; k++) {
                            xJob.push(iJob[k].name);
                            yJobNum.push(iJob[k].value);
                        }
                        _this.option = {
                            // backgroundColor: '#293042',
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: <br/> {c}"
                            },
                            title: {
                                text: "求职者喜爱岗位",
                                subtext: "根据搜索分析所得",
                                x: 'center',
                                top: 10,
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            grid: {
                                left: '4%',
                                top: '25%',
                                bottom: '1%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: _this.lineColor
                                    },
                                    onZero: true
                                },
                                axisLabel: {
                                    fontSize: 11,
                                    margin: 10,
                                    color: _this.labelColor,
                                    interval: 0,
                                    rotate: 25
                                },
                                splitLine: {
                                    show: false
                                },
                                data: xJob
                            },
                            yAxis: {
                                type: 'value',
                                name: "喜爱人数 /",
                                nameTextStyle: {
                                    color: _this.labelColor
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: _this.lineColor
                                    },
                                    onZero: false
                                },
                                axisLabel: {
                                    color: _this.labelColor
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: 'dotted',
                                        color: _this.lineColor
                                    }
                                },
                                scale: true
                            },
                            series: [{
                                    name: '',
                                    type: 'line',
                                    symbolSize: 5,
                                    symbol: 'circle',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                formatter: function (params) {
                                                    return 100 - params.value;
                                                },
                                                fontSize: 40,
                                                padding: [90, 0, 0, 0],
                                                color: _this.labelColor,
                                                textStyle: {
                                                    baseline: 'top'
                                                }
                                            },
                                            color: _this.labelColor,
                                            borderColor: 'rgba(255, 234, 0, 0.5)',
                                            borderWidth: 10
                                        }
                                    },
                                    data: yJobNum
                                }]
                        };
                    }
                });
                break;
            /* 用户喜爱城市(饼图) */
            case 2:
                this.vd.getUserFavCity().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var userFavCity = data['data']['chart'].favCity;
                        _this.option = {
                            // backgroundColor: "#eee",
                            title: {
                                text: '求职者喜爱城市',
                                subtext: '根据搜索分析所得',
                                left: 'center',
                                top: 20,
                                textStyle: {
                                    color: _this.titleColor
                                },
                            },
                            color: ['#ad46f3', '#44aff0', '#f6d54a', '#f69846', '#6f81da', '#ad46f3'],
                            tooltip: {
                                trigger: 'item',
                                formatter: "喜爱{b}人数: {c}<br/>占比约({d}%)"
                            },
                            calculable: true,
                            series: [
                                {
                                    name: 'tt',
                                    type: 'pie',
                                    radius: '55%',
                                    center: ['50%', '60%'],
                                    data: userFavCity,
                                }
                            ]
                        };
                    }
                });
                break;
            /* 用户 性别分布(环状图) TODO: 性别数据接口*/
            case 3:
                this.vd.getUserSex().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var echartData = data['data']['chart'].usersex;
                        var rich = {
                            yellow: {
                                color: "#ffc72b",
                                fontSize: 30,
                                padding: [5, 4],
                                align: 'center'
                            },
                            total: {
                                color: "#ffc72b",
                                fontSize: 40,
                                align: 'center'
                            },
                            white: {
                                color: "this.titleColor",
                                align: 'center',
                                fontSize: 14,
                                padding: [21, 0]
                            },
                            blue: {
                                color: '#49dff0',
                                fontSize: 16,
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#0b5263',
                                width: '100%',
                                borderWidth: 1,
                                height: 0,
                            }
                        };
                        _this.option = {
                            // backgroundColor: '#2d3548',
                            title: {
                                text: '性别分布',
                                subtext: "根据用户信息分析所得",
                                left: 'center',
                                padding: [24, 0],
                                textStyle: {
                                    color: _this.titleColor,
                                    fontSize: 18,
                                    align: 'center'
                                }
                            },
                            legend: {
                                selectedMode: false,
                                formatter: function (name) {
                                    var total = 0; //各科正确率总和
                                    var averagePercent; //综合正确率
                                    echartData.forEach(function (value, index, array) {
                                        total += value.value;
                                    });
                                    return "总数 \n" + '{total|' + total + '}';
                                },
                                data: [echartData[0].name],
                                // data: ['高等教育学'],
                                // itemGap: 50,
                                left: 'center',
                                top: 'center',
                                icon: 'none',
                                align: 'center',
                                textStyle: {
                                    color: "this.titleColor",
                                    fontSize: 16,
                                    rich: rich
                                },
                            },
                            series: [{
                                    name: '总数',
                                    type: 'pie',
                                    radius: ['42%', '50%'],
                                    hoverAnimation: false,
                                    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                                    label: {
                                        normal: {
                                            formatter: function (params, ticket, callback) {
                                                var total = 0; //考生总数量
                                                var percent; //考生占比
                                                echartData.forEach(function (value, index, array) {
                                                    total += value.value;
                                                });
                                                percent = ((params.value / total) * 100).toFixed(1);
                                                return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                                            },
                                            rich: rich
                                        },
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 55,
                                            length2: 0,
                                            lineStyle: {
                                                color: '#0b5263'
                                            }
                                        }
                                    },
                                    data: echartData
                                }]
                        };
                    }
                });
                break;
        }
    };
    JobSeekerChartComponent.prototype.defaultShowEcharts = function () {
        var _this = this;
        /* 底部 eUserEdu eUserExper 两个图表  */
        this.changeOption(0);
        /* 顶部 用户年龄分布（折线图）*/
        this.vd.getUserAge().subscribe(function (data) {
            if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                /* x年龄 y年龄阶段对应数量 */
                var xAge = [];
                var yNum = [];
                var temp = data['data']['chart'].userage;
                for (var i = 0; i < temp.length; i++) {
                    xAge.push(temp[i].name);
                    yNum.push(temp[i].value);
                }
                _this.option3 = {
                    // backgroundColor: "#2d3548",
                    tooltip: {
                        trigger: 'axis',
                        formatter: '{b}' + '岁' + '<br/> {a}' + '共: ' + '{c}' + '位',
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    },
                    /* legend: {
                      data: ['求职者'],
                      right: '4%',
                      textStyle: {
                        fontSize: 12,
                        color: '#F1F1F3'
                      }
                    }, */
                    grid: {
                        left: '3%',
                        right: '5%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                            type: 'category',
                            name: '/ 岁',
                            nameTextStyle: {
                                color: _this.labelColor
                            },
                            boundaryGap: false,
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: _this.labelColor
                                }
                            },
                            data: xAge,
                        }],
                    yAxis: [{
                            type: 'value',
                            name: '人数 /',
                            nameTextStyle: {
                                color: _this.labelColor
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                margin: 10,
                                textStyle: {
                                    color: _this.labelColor
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: _this.lineColor
                                }
                            }
                        }],
                    series: [{
                            name: '求职者',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 5,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [
                                            {
                                                offset: 0,
                                                color: 'rgba(0, 136, 212, 0.3)'
                                            },
                                            {
                                                offset: 0.8,
                                                color: 'rgba(0, 136, 212, 0)'
                                            }
                                        ]
                                    },
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgb(0,136,212)',
                                    borderColor: 'rgba(0,136,212,0.2)',
                                    borderWidth: 12
                                }
                            },
                            data: yNum,
                        },]
                };
            }
        });
    };
    JobSeekerChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-seeker-chart',
            template: __webpack_require__("./src/app/charts/job-seeker-chart/job-seeker-chart.component.html"),
            styles: [__webpack_require__("./src/app/charts/position-chart/position-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_visualdata_service__["a" /* VisualData */]])
    ], JobSeekerChartComponent);
    return JobSeekerChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/position-chart/position-chart.component.css":
/***/ (function(module, exports) {

module.exports = "/* 画像分析 */\r\n.dot{\r\n    border-bottom: 3px dotted #3b445fcc;\r\n}\r\n.s-l {\r\n    /* margin: 30px 0; */\r\n    height: 40px;\r\n}\r\n#mytable thead tr th {\r\n    padding-bottom: 20px;\r\n}\r\n/* 图表合集 */\r\na:hover {\r\n    text-decoration: none;\r\n}\r\na.changeChart{\r\n    cursor: pointer;\r\n}\r\na.changeChart:active{\r\n    color: #d8a93e;\r\n}\r\n/* 小图标的颜色 */\r\nh4 .fa{\r\n    color: #1296db;\r\n}\r\n/* 图表总体 */\r\n.analysis {\r\n    border-top-right-radius: 4px;\r\n    border-top-left-radius: 4px;\r\n    /* background-color: #293042; */\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    letter-spacing: 1px;\r\n}\r\n#datalist select.form-control {\r\n    border-color: rgba(82, 168, 236, 0.8);\r\n    outline: 0;\r\n    outline: thin dotted \\9;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);\r\n}\r\n.analysis .list-group-item {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #efefef;\r\n    padding-top: 30px;\r\n    padding-bottom: 20px;\r\n}\r\n/* #mytable tr {\r\n    color: #999;\r\n    font-size: 14px;\r\n} */\r\n#mytable tbody tr:nth-child(2) {\r\n    color: #f17a52;\r\n}\r\n#mytable tbody tr td {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n}\r\n#mytable thead tr th {\r\n    letter-spacing: 1px;\r\n}\r\n#mytable tbody tr {\r\n    border-bottom: 2px solid #b5b6bbcc;\r\n}\r\n#mytable thead {\r\n    border-bottom: 3px solid #c3c4c8;\r\n}\r\n.dotted {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border: 0;\r\n    border-top: 1px solid #2f364acc;\r\n}\r\n#mytable td i.fa {\r\n    font-size: 14px;\r\n    padding-left: 5px;\r\n}\r\n.s {\r\n    height: 30px;\r\n}\r\n.media-body a {\r\n    color: #999;\r\n}\r\ni.fa.fa-chevron-circle-right {\r\n    color: #821eff;\r\n}\r\na h4.media-heading:hover {\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/charts/position-chart/position-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"row analysis\">\n      <div class=\"col-md-11 col-md-offset-1 title clearfix\">\n        <div class=\"pull-left\">\n          <h4>\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>\n            岗位画像分析\n            <small class=\"text-muted\">基于招聘信息分析所得</small>\n          </h4>\n        </div>\n        <div class=\"pull-right\">\n\n          <form role=\"form\">\n            <div id=\"datalist\">\n              <select class=\"form-control\" [formControl]=\"jobType\">\n                <option *ngFor=\"let item of language\">{{item}}</option>\n              </select>\n\n            </div>\n          </form>\n        </div>\n\n      </div>\n\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"s-l\"></div>\n        \n        <div echarts [options]=\"option\" style=\"height:400px;\"></div>\n        <h5 class=\"text-center\">薪资分布\n          <small>根据招聘信息分析所得</small>\n        </h5>\n        <div class=\"s-l\"></div>\n        <h4>\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          分析报告\n        </h4>\n        <div class=\"s-l\"></div>\n        <div class=\"table-responsive\">\n          <table class=\"table\" id=\"mytable\">\n            <!-- <caption>响应式表格布局</caption> -->\n            <thead>\n              <tr>\n                <th></th>\n                <th>招聘数量</th>\n                <th>关键词数</th>\n                <th>占比率</th>\n                <th>趋势</th>\n                <th>时间</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n\n                  Java\n                  <small class=\"text-muted\">\n                    1400\n                  </small>\n\n                </td>\n                <td>\n                  1000\n                </td>\n                <td>\n                  2000\n                </td>\n                <td>\n                  20%\n                </td>\n                <td>\n                  2%\n                  <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  2/11/2018\n                </td>\n              </tr>\n              <tr>\n                <td>Python\n                  <small class=\"text-muted\">\n                    1302\n                  </small>\n                </td>\n                <td>1200</td>\n                <td>2300</td>\n                <td>21%</td>\n                <td>3%\n                  <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n              <tr>\n                <td>SQL\n                  <small class=\"text-muted\">\n                    1300\n                  </small>\n                </td>\n                <td>1300</td>\n                <td>2300</td>\n                <td>10%</td>\n                <td>8%\n                  <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n              <tr>\n                <td>Ruby\n                  <small class=\"text-muted\">\n                    1200\n                  </small>\n                </td>\n                <td>998</td>\n                <td>1987</td>\n                <td>10%</td>\n                <td>4%\n                  <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n              <tr>\n                <td>C\n                  <small class=\"text-muted\">\n                    994\n                  </small>\n                </td>\n                <td>1580</td>\n                <td>1020</td>\n                <td>20%</td>\n                <td>2%\n                  <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n              <tr>\n                <td>Angular\n                  <small class=\"text-muted\">\n                    874\n                  </small>\n                </td>\n                <td>800</td>\n                <td>780</td>\n                <td>15%</td>\n                <td>8%\n                  <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n                </td>\n                <td>2/11/2018</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"s\"></div>\n      </div>\n\n      <!-- 切换按钮组 -->\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"s\"></div>\n        <h4>\n          <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>\n          更多图表\n        </h4>\n        <div class=\"s\"></div>\n        <div class=\"row clearfix\" style=\"padding-top: 20px;\">\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(0)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/skillneed.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">岗位数量</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(1)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/jobneed.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">岗位需求</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(2)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/jobseeker/city.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">城市分析</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(3)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/welfare.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">福利待遇</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(4)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/field.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">开发语言</h5>\n            </a>\n          </div>\n          <div class=\"col-md-2 column\">\n            <a class=\"changeChart\" (click)=\"changeOption(5)\">\n              <img alt=\"140x140\" src=\"../../../static/assets/position/money.png\" class=\" center-block img-circlee\" />\n              <h5 class=\"text-center\">薪资分析</h5>\n            </a>\n          </div>\n        </div>\n      </div>\n      <!-- 两张图表&一张图表模型 -->\n      <div class=\"col-md-10 col-md-offset-1 clearfix\">\n        <div class=\"s-l\"></div>\n        <!-- 对于一张图 -->\n        <div *ngIf=\"flag != 0\" echarts [options]=\"eTempt\" \n        style=\"height:400px;\"></div>\n        <!-- 对于两张图 -->\n        <div *ngIf=\"flag == 0\">\n          <div class=\"pull-left\" style=\"width:50%\">\n            <div echarts [options]=\"eUserExper\" style=\"height:400px;\"></div>\n          </div>\n          <div class=\"pull-right\" style=\"width:50%\">\n            <div echarts [options]=\"eUserEdu\" style=\"height:400px;\"></div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/charts/position-chart/position-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_visualdata_service__ = __webpack_require__("./src/app/shared/visualdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionChartComponent = (function () {
    function PositionChartComponent(vd) {
        this.vd = vd;
        this.jobType = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.titleColor = "#666";
        this.subTitleColor = "#666";
        this.labelColor = "#666";
        this.lineColor = "#eee";
        this.xColor = "#666";
        /* 图表类型 */
        this.flag = 1;
        /* 供选择的变量 */
        this.language = ['java', 'mysql', 'python', 'tomcat'];
        this.setDefaultEchart();
        this.chooseJob();
    }
    PositionChartComponent.prototype.ngOnInit = function () { };
    PositionChartComponent.prototype.chooseJob = function () {
        var _this = this;
        this.jobType.valueChanges
            .debounceTime(100)
            .subscribe(function (value) {
            _this.vd.postJob({ jobtype: value }).subscribe(function (data) {
                /* 更新四个图表 */
                if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                    var yName = data['data']['chart'].salarygap;
                    var salarystatu = data['data']['chart'].salarystatu;
                    var mTitle = [salarystatu[0].title, salarystatu[1].title, salarystatu[2].title, salarystatu[3].title];
                    // this.showloading = false;
                    _this.option = {
                        title: [
                            {
                                text: mTitle[0],
                                left: "70%",
                                top: "3%",
                                textStyle: {
                                    color: _this.titleColor,
                                    fontSize: "14"
                                }
                            }, {
                                left: "25%",
                                top: "3%",
                                text: mTitle[1],
                                textStyle: {
                                    color: _this.titleColor,
                                    fontSize: "14"
                                }
                            },
                            {
                                text: mTitle[2],
                                left: "70%",
                                top: "53%",
                                textStyle: {
                                    color: _this.titleColor,
                                    fontSize: "14"
                                }
                            }, {
                                left: "25%",
                                top: "53%",
                                text: mTitle[3],
                                textStyle: {
                                    color: _this.titleColor,
                                    fontSize: "14"
                                }
                            }
                        ],
                        tooltip: {},
                        grid: [
                            {
                                x: '8%',
                                y: '8%',
                                width: '40%',
                                height: "40%",
                                containLabel: true
                            },
                            {
                                x2: '8%',
                                y: '8%',
                                width: '40%',
                                height: "40%",
                                containLabel: true
                            },
                            {
                                x: '8%',
                                y2: '0',
                                width: '40%',
                                height: "40%",
                                containLabel: true
                            },
                            {
                                x2: '8%',
                                y2: '0',
                                width: '40%',
                                height: "40%",
                                containLabel: true
                            },
                        ],
                        xAxis: [
                            {
                                gridIndex: 0,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            {
                                gridIndex: 1,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            {
                                gridIndex: 2,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            {
                                gridIndex: 3,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                        ],
                        yAxis: [
                            {
                                gridIndex: 0,
                                interval: 0,
                                data: yName,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: _this.titleColor
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }, {
                                gridIndex: 1,
                                interval: 0,
                                data: yName,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: _this.titleColor
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            },
                            {
                                gridIndex: 2,
                                interval: 0,
                                data: yName,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: _this.titleColor
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }, {
                                gridIndex: 3,
                                interval: 0,
                                data: yName,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: _this.titleColor
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }
                        ],
                        series: [
                            {
                                name: mTitle[0],
                                type: 'bar',
                                xAxisIndex: 0,
                                yAxisIndex: 0,
                                itemStyle: {
                                    // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                    normal: {
                                        barBorderRadius: [0, 8, 8, 0],
                                        borderWidth: 0,
                                        borderColor: '#fff',
                                        label: {
                                            show: true,
                                            position: 'right',
                                            formatter: function (v) {
                                                return v.value + "%";
                                            },
                                        },
                                        color: function (params) {
                                            // build a color map as your need.
                                            var colorList = [
                                                '#b250ff',
                                                '#4849b5',
                                                '#ffa800',
                                                '#E5C37D',
                                                '#7f80e1b3', '#5c6d9ab3',
                                                '#837e86',
                                                '#fdc86a'
                                            ];
                                            return colorList[params.dataIndex];
                                        },
                                        shadowBlur: 5,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                barGap: '0',
                                barWidth: '20',
                                barCategoryGap: '5%',
                                data: salarystatu[0].value,
                            },
                            {
                                name: mTitle[1],
                                type: 'bar',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                itemStyle: {
                                    // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                    normal: {
                                        barBorderRadius: [0, 8, 8, 0],
                                        borderWidth: 0,
                                        borderColor: '#fff',
                                        label: {
                                            show: true,
                                            position: 'right',
                                            formatter: function (v) {
                                                return v.value + "%";
                                            },
                                        },
                                        color: function (params) {
                                            // build a color map as your need.
                                            var colorList = [
                                                '#b250ff',
                                                '#4849b5',
                                                '#ffa800',
                                                '#E5C37D',
                                                '#7f80e1b3', '#5c6d9ab3',
                                                '#837e86',
                                                '#fdc86a'
                                            ];
                                            return colorList[params.dataIndex];
                                        },
                                        shadowBlur: 5,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                barGap: '0',
                                barWidth: '20',
                                barCategoryGap: '5%',
                                data: salarystatu[1].value,
                            },
                            {
                                name: mTitle[2],
                                type: 'bar',
                                xAxisIndex: 2,
                                yAxisIndex: 2,
                                itemStyle: {
                                    // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                    normal: {
                                        barBorderRadius: [0, 8, 8, 0],
                                        borderWidth: 0,
                                        borderColor: '#fff',
                                        label: {
                                            show: true,
                                            position: 'right',
                                            formatter: function (v) {
                                                return v.value + "%";
                                            },
                                        },
                                        color: function (params) {
                                            // build a color map as your need.
                                            var colorList = [
                                                '#b250ff',
                                                '#4849b5',
                                                '#ffa800',
                                                '#E5C37D',
                                                '#7f80e1b3', '#5c6d9ab3',
                                                '#837e86',
                                                '#fdc86a'
                                            ];
                                            return colorList[params.dataIndex];
                                        },
                                        shadowBlur: 5,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                barGap: '0',
                                barWidth: '20',
                                barCategoryGap: '5%',
                                data: salarystatu[2].value,
                            },
                            {
                                name: mTitle[3],
                                type: 'bar',
                                xAxisIndex: 3,
                                yAxisIndex: 3,
                                itemStyle: {
                                    // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                    normal: {
                                        barBorderRadius: [0, 8, 8, 0],
                                        borderWidth: 0,
                                        borderColor: '#fff',
                                        label: {
                                            show: true,
                                            position: 'right',
                                            formatter: function (v) {
                                                return v.value + "%";
                                            },
                                        },
                                        color: function (params) {
                                            // build a color map as your need.
                                            var colorList = [
                                                '#b250ff',
                                                '#4849b5',
                                                '#ffa800',
                                                '#E5C37D',
                                                '#7f80e1b3', '#5c6d9ab3',
                                                '#837e86',
                                                '#fdc86a'
                                            ];
                                            return colorList[params.dataIndex];
                                        },
                                        shadowBlur: 5,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                barGap: '0',
                                barWidth: '20',
                                barCategoryGap: '5%',
                                data: salarystatu[3].value,
                            }
                        ]
                    };
                }
            });
        });
    };
    PositionChartComponent.prototype.changeOption = function (num) {
        var _this = this;
        /* 默认使用单一模板 */
        this.flag = 1;
        switch (num) {
            /* 学历 公司规模 经验与岗位需求量 */
            case 0:
                this.vd.getFactorJobNum().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var edu = data['data']['chart'].edu;
                        var eduS = data['data']['chart'].eduS;
                        var comp = data['data']['chart'].comp;
                        var compS = data['data']['chart'].compS;
                        var exper = data['data']['chart'].exper;
                        var experS = data['data']['chart'].experS;
                        var iColor = ['#96d668', '#01babc', '#1a98f8', '#7049f0'];
                        var titles = ["学历与岗位数量", "公司规模与岗位数量", "工作经验与岗位数量"];
                        _this.eTempt = {
                            // backgroundColor: "#2d3548",
                            color: iColor,
                            legend: {
                                orient: 'vertical',
                                bottom: '15%',
                                right: "10%",
                                itemGap: 20,
                                textStyle: { color: _this.titleColor },
                                data: [
                                    '学历', '城市', '经验'
                                ]
                            },
                            toolbox: {
                                right: "3%",
                                bottom: "3%",
                                feature: {
                                    saveAsImage: {
                                        show: true
                                    }
                                }
                            },
                            title: [{
                                    text: titles[1],
                                    left: "70%",
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                }, {
                                    left: "25%",
                                    text: titles[0],
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                }, {
                                    left: "25%",
                                    top: "52%",
                                    text: titles[2],
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                },
                                {
                                    left: "62%",
                                    top: "55%",
                                    text: "岗位能力图谱",
                                    subtext: "根据招聘信息分析所得",
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "24",
                                        align: "center",
                                    }
                                }
                            ],
                            grid: [{
                                    x: '8%',
                                    y: '8%',
                                    width: '40%',
                                    height: "40%",
                                    containLabel: true
                                },
                                {
                                    x2: '8%',
                                    y: '8%',
                                    width: '40%',
                                    height: "40%",
                                    containLabel: true
                                },
                                {
                                    x: '8%',
                                    y2: '8%',
                                    width: '40%',
                                    height: "40%",
                                    bottom: "4%",
                                    containLabel: true
                                },
                            ],
                            tooltip: {
                                formatter: '{b}:<br/> {c}'
                            },
                            xAxis: [
                                {
                                    gridIndex: 0,
                                    type: 'category',
                                    boundaryGap: true,
                                    data: edu,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.xColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                },
                                {
                                    gridIndex: 1,
                                    type: 'category',
                                    boundaryGap: true,
                                    data: comp,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                },
                                {
                                    gridIndex: 2,
                                    type: 'category',
                                    boundaryGap: true,
                                    data: exper,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }
                            ],
                            yAxis: [{
                                    gridIndex: 0,
                                    name: "岗位数量 /",
                                    nameTextStyle: { color: _this.subTitleColor },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.subTitleColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                },
                                {
                                    gridIndex: 1,
                                    name: "岗位数量 /",
                                    nameTextStyle: { color: _this.subTitleColor },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                },
                                {
                                    gridIndex: 2,
                                    name: "岗位数量 /",
                                    nameTextStyle: { color: _this.subTitleColor },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    type: 'line',
                                    name: '学历',
                                    xAxisIndex: 0,
                                    yAxisIndex: 0,
                                    symbolSize: 8,
                                    symbol: 'circle',
                                    data: eduS
                                },
                                {
                                    type: 'line',
                                    name: '城市',
                                    xAxisIndex: 1,
                                    yAxisIndex: 1,
                                    symbolSize: 8,
                                    symbol: 'circle',
                                    data: compS
                                },
                                {
                                    type: 'line',
                                    name: '经验',
                                    xAxisIndex: 2,
                                    yAxisIndex: 2,
                                    symbolSize: 8,
                                    symbol: 'circle',
                                    data: experS
                                }
                            ]
                        };
                    }
                });
                break;
            /* 职业 岗位数量Top（横向柱状图）  平均薪资Top（横向柱状图）  */
            case 1:
                this.vd.getJobNumAndSalaryTop().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var jobNameNum = [];
                        var jobName = [];
                        var jobtop = data['data']['chart'].jobnumtop;
                        for (var l = 0; l < jobtop.length; l++) {
                            jobNameNum.push(jobtop[l].value);
                            jobName.push(jobtop[l].name);
                        }
                        var salarytop = data['data']['chart'].jobsalarytop;
                        var salaryTopX = [];
                        var salaryTopY = [];
                        for (var k = 0; k < salarytop.length; k++) {
                            salaryTopY.push(salarytop[k].name);
                            salaryTopX.push(salarytop[k].value);
                        }
                        _this.eTempt = {
                            /* backgroundColor: "#2d3548", */
                            title: [{
                                    text: "岗位薪资和数量",
                                    x: 'center',
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                },],
                            grid: [{
                                    x: '8%',
                                    y: '10%',
                                    width: '40%',
                                    containLabel: true
                                },
                                {
                                    x2: '8%',
                                    y: '10%',
                                    width: '40%',
                                    containLabel: true
                                },
                            ],
                            tooltip: {
                                formatter: '{a}<br/>{b} ({c})'
                            },
                            toolbox: {
                                right: "3%",
                                bottom: "3%",
                                feature: {
                                    saveAsImage: {
                                        show: true
                                    }
                                }
                            },
                            xAxis: [
                                {
                                    gridIndex: 0,
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    }
                                },
                                {
                                    gridIndex: 1,
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    }
                                },
                            ],
                            yAxis: [
                                {
                                    gridIndex: 0,
                                    interval: 0,
                                    data: salaryTopY,
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: true,
                                        textStyle: {
                                            color: _this.labelColor
                                        }
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: true,
                                        lineStyle: {
                                            color: "#821eff"
                                        }
                                    },
                                }, {
                                    gridIndex: 1,
                                    interval: 0,
                                    data: jobName,
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: true,
                                        textStyle: {
                                            color: _this.labelColor
                                        }
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: true,
                                        lineStyle: {
                                            color: "#4f9aff"
                                        }
                                    },
                                }
                            ],
                            legend: {
                                data: ['平均工资', '岗位数量'],
                                x: "right",
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            series: [
                                {
                                    name: '平均工资',
                                    type: 'bar',
                                    xAxisIndex: 0,
                                    yAxisIndex: 0,
                                    barWidth: '45%',
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: [0, 8, 8, 0],
                                            color: {
                                                type: 'bar',
                                                colorStops: [{
                                                        offset: 0,
                                                        color: '#821eff' // 0% 处的颜色
                                                    }, {
                                                        offset: 1,
                                                        color: '#4f9aff' // 100% 处的颜色
                                                    }],
                                                globalCoord: false,
                                            },
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: "right",
                                            textStyle: {
                                                color: "#9EA7C4"
                                            }
                                        }
                                    },
                                    data: salaryTopX,
                                }, {
                                    name: '岗位数量',
                                    type: 'bar',
                                    xAxisIndex: 1,
                                    yAxisIndex: 1,
                                    barWidth: '45%',
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: [0, 8, 8, 0],
                                            color: {
                                                type: 'bar',
                                                colorStops: [{
                                                        offset: 0,
                                                        color: '#4f9aff' // 0% 处的颜色
                                                    }, {
                                                        offset: 1,
                                                        color: '#4bf3ff' // 100% 处的颜色
                                                    }],
                                                globalCoord: false,
                                            },
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: "right",
                                            textStyle: {
                                                color: "#9EA7C4"
                                            }
                                        }
                                    },
                                    data: jobNameNum,
                                },
                            ]
                        };
                    }
                });
                break;
            /* -**城市x 招聘数量y 薪资y2 (折线图) 和 (柱状图）  */
            case 2:
                this.vd.getCityJobNumAndSalaryAvg().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var citySalaryAvg = [];
                        var cityJobNum = [];
                        var xCitys = [];
                        var jobtop = [];
                        jobtop = data['data']['chart'].cityjobnumandsalaavg;
                        for (var l = 0; l < jobtop.length; l++) {
                            citySalaryAvg.push(jobtop[l].avgsalary / 1000);
                            cityJobNum.push(jobtop[l].jobnum);
                            xCitys.push(jobtop[l].name);
                        }
                        _this.eTempt = {
                            // backgroundColor: '#293042',
                            title: {
                                text: '城市职位数量与平均工资',
                                subtext: '根据招聘信息分析所得',
                                x: "center",
                                textStyle: {
                                    color: _this.titleColor,
                                },
                            },
                            tooltip: {
                                right: '',
                                trigger: 'axis'
                            },
                            toolbox: {
                                right: "3%",
                                bottom: "3%",
                                feature: {
                                    saveAsImage: {
                                        show: true
                                    }
                                }
                            },
                            grid: {
                                containLabel: true
                            },
                            xAxis: [{
                                    type: 'category',
                                    axisTick: {
                                        show: false,
                                    },
                                    data: xCitys,
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.titleColor,
                                        },
                                    }
                                }],
                            yAxis: [{
                                    type: 'value',
                                    name: "职位数量 /",
                                    nameTextStyle: { color: _this.titleColor },
                                    position: 'right',
                                    max: 50,
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.subTitleColor,
                                        },
                                        formatter: function name(value) {
                                            return value + "K";
                                        }
                                    },
                                    axisLine: { show: false },
                                    splitLine: {
                                        show: false,
                                    }
                                }, {
                                    type: 'value',
                                    min: 0,
                                    max: 3000,
                                    name: "薪资 /",
                                    nameTextStyle: { color: _this.titleColor },
                                    position: 'left',
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                        },
                                    },
                                    axisLine: { show: false },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: '#373f52'
                                        }
                                    },
                                }],
                            series: [{
                                    name: '平均工资',
                                    type: 'line',
                                    stack: '总量',
                                    symbol: 'circle',
                                    symbolSize: 8,
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top',
                                            distance: 10,
                                            formatter: '{c}K',
                                            textStyle: {
                                                color: "#204fff",
                                            },
                                        }
                                    },
                                    lineStyle: {
                                        normal: {
                                            width: 3,
                                            "color": {
                                                "type": "linear",
                                                "x": 0,
                                                "y": 0,
                                                "x2": 0,
                                                "y2": 1,
                                                "colorStops": [{
                                                        offset: 0,
                                                        color: '#821eff'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#204fff'
                                                    }
                                                ]
                                            },
                                            shadowColor: 'rgba(0,0,0,0.4)',
                                            shadowBlur: 10,
                                            shadowOffsetY: 10
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            "color": "#821eff"
                                        }
                                    },
                                    data: citySalaryAvg
                                }, {
                                    name: '岗位数量',
                                    type: 'bar',
                                    barWidth: 18,
                                    yAxisIndex: 1,
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top',
                                            textStyle: {
                                                color: "#00b0ff",
                                            },
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                        offset: 0,
                                                        color: '#00b0ff' // 0% 处的颜色
                                                    }, {
                                                        offset: 1,
                                                        color: '#7052f4' // 100% 处的颜色
                                                    }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        },
                                    },
                                    data: cityJobNum
                                }]
                        };
                    }
                });
                break;
            /* 福利待遇（词云图） */
            case 3:
                /* 开启双例模板 */
                this.flag = 0;
                this.vd.getWelfSalaFactor().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var welfare = [];
                        welfare = data['data']['chart'].welfare;
                        _this.eUserExper = {
                            tooltip: {},
                            title: {
                                text: '福利待遇',
                                subtext: '根据招聘信息分析所得',
                                left: 'center',
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            toolbox: {
                                right: "3%",
                                bottom: "3%",
                                feature: {
                                    saveAsImage: {
                                        show: true
                                    }
                                },
                            },
                            series: [
                                {
                                    name: '岗位福利',
                                    type: 'wordCloud',
                                    size: ['9%', '99%'],
                                    sizeRange: [12, 80],
                                    textRotation: [0, 45, 90, -45],
                                    rotationRange: [-45, 90],
                                    shape: 'circle',
                                    textPadding: 0,
                                    autoSize: {
                                        enable: true,
                                        minSize: 6
                                    },
                                    textStyle: {
                                        normal: {
                                            color: function () {
                                                var color = ["#36b76f", "#e42446", "#867fc1", "#337ab7", "#3c763d", "#4b98bd"];
                                                return color[Math.floor(Math.random() * 6)];
                                            },
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowColor: '#333'
                                            }
                                        }
                                    },
                                    data: welfare
                                }
                            ]
                        };
                        /* 薪资影响因素 */
                        var iSalaryFac = data['data']['chart'].salaryfactory;
                        _this.eUserEdu = {
                            // backgroundColor: '#1d2239',
                            title: {
                                text: '岗位薪资影响因素',
                                subtext: '根据招聘信息分析所得',
                                left: 'center',
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}:<br/> {c} ({d}%)"
                            },
                            color: ['#fd9173', '#f36f8a', '#5f71d2', '#42a4eb', '#4ac7f5'],
                            legend: {
                                right: '3%',
                                orient: 'vertical',
                                itemGap: 12,
                                itemWidth: 10,
                                itemHeight: 10,
                                icon: 'rect',
                                data: ['工作经验', '教育水平', '城市', '公司规模'],
                                textStyle: {
                                    color: [],
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 12,
                                }
                            },
                            series: [{
                                    name: '违规次数',
                                    type: 'pie',
                                    clockwise: false,
                                    minAngle: 20,
                                    center: ['50%', '50%'],
                                    radius: [54, 96],
                                    avoidLabelOverlap: true,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#1e2239',
                                            borderWidth: 1.5,
                                        },
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'inside',
                                            formatter: "{d}%",
                                            textStyle: {
                                                color: '#fff',
                                            }
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    data: iSalaryFac
                                }, {
                                    name: '',
                                    type: 'pie',
                                    clockwise: false,
                                    silent: true,
                                    minAngle: 20,
                                    center: ['50%', '50%'],
                                    radius: [0, 49],
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#1e2239',
                                            borderWidth: 1.5,
                                            opacity: 0.21,
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: false,
                                        }
                                    },
                                    data: iSalaryFac
                                }]
                        };
                    }
                });
                break;
            /* 开发语言热度（柱状图） */
            case 4:
                this.vd.getIndustryCityCompnum().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var xCompType = data['data']['chart'].industry;
                        var legendData = data['data']['chart'].city;
                        var serieData = [];
                        var metaDate = data['data']['chart'].metaDate;
                        var colors = [
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#f7734e' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e12945' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#96d668' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#01babc' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }, {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#1a98f8' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#7049f0' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            },
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#70ffac' // 100% 处的颜色
                                    }],
                                globalCoord: false,
                            }
                        ];
                        for (var v = 0; v < legendData.length; v++) {
                            var serie = {
                                name: legendData[v],
                                type: 'line',
                                symbol: "circle",
                                symbolSize: 5,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [5, 5, 0, 0],
                                        color: colors[v],
                                    },
                                },
                                data: metaDate[v]
                            };
                            serieData.push(serie);
                        }
                        _this.eTempt = {
                            // backgroundColor: "#2d3548",
                            title: {
                                text: '行业和职位数量',
                                subtext: '数据来自招聘信息',
                                x: "center",
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            toolbox: {
                                right: "3%",
                                bottom: "3%",
                                feature: {
                                    saveAsImage: {
                                        show: true
                                    }
                                }
                            },
                            legend: {
                                right: 10,
                                top: 0,
                                itemGap: 16,
                                itemWidth: 18,
                                itemHeight: 10,
                                orient: "vertical",
                                data: [{
                                        name: '北京',
                                    },
                                    {
                                        name: '上海',
                                    },
                                    {
                                        name: '广州',
                                    },
                                    {
                                        name: '博士',
                                    }
                                ],
                                textStyle: {
                                    color: _this.titleColor,
                                }
                            },
                            grid: {
                                left: '2%',
                                bottom: "5%",
                                right: "10%",
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'axis',
                            },
                            xAxis: [{
                                    boundaryGap: true,
                                    data: xCompType,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.titleColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.lineColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }],
                            yAxis: [{
                                    name: "招聘数量 /",
                                    nameTextStyle: {
                                        color: _this.titleColor
                                    },
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                }],
                            series: serieData
                        };
                    }
                });
                break;
            /* -**影响平均工资的因素 （四张折线图） */
            case 5:
                this.vd.getFactorSalary().subscribe(function (data) {
                    if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                        var edu = data['data']['chart'].edu;
                        var eduS = data['data']['chart'].eduS;
                        var comp = data['data']['chart'].comp;
                        var compS = data['data']['chart'].compS;
                        var city = data['data']['chart'].city;
                        var cityS = data['data']['chart'].cityS;
                        var exper = data['data']['chart'].exper;
                        var experS = data['data']['chart'].experS;
                        var mColors = ['#96d668', '#01babc', '#1a98f8', '#7049f0'];
                        var mTitle = ["学历与岗位工资", "公司规模与岗位工资", "工作经验与岗位工资", "城市与岗位工资"];
                        _this.eTempt = {
                            // backgroundColor: "#2d3548",
                            title: [
                                {
                                    text: mTitle[1],
                                    left: "70%",
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                }, {
                                    left: "25%",
                                    text: mTitle[0],
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                },
                                {
                                    text: mTitle[3],
                                    left: "70%",
                                    top: "52%",
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                }, {
                                    left: "25%",
                                    top: "52%",
                                    text: mTitle[2],
                                    textStyle: {
                                        color: _this.titleColor,
                                        fontSize: "14"
                                    }
                                }
                            ],
                            grid: [
                                {
                                    x: '8%',
                                    y: '8%',
                                    width: '40%',
                                    height: "40%",
                                    containLabel: true
                                },
                                {
                                    x2: '8%',
                                    y: '8%',
                                    width: '40%',
                                    height: "40%",
                                    containLabel: true
                                },
                                {
                                    x: '8%',
                                    y2: '0',
                                    width: '40%',
                                    height: "40%",
                                    bottom: "2%",
                                    containLabel: true
                                },
                                {
                                    x2: '8%',
                                    y2: '0',
                                    width: '40%',
                                    height: "40%",
                                    bottom: "2%",
                                    containLabel: true
                                },
                            ],
                            tooltip: {
                                formatter: '{b}:<br/> {c}'
                            },
                            toolbox: {
                                right: "3%",
                                bottom: "3%",
                                feature: {
                                    saveAsImage: {
                                        show: true
                                    }
                                }
                            },
                            xAxis: [
                                {
                                    gridIndex: 0,
                                    type: 'category',
                                    boundaryGap: true,
                                    data: edu,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.xColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.xColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                },
                                {
                                    gridIndex: 1,
                                    type: 'category',
                                    boundaryGap: true,
                                    data: comp,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.xColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                },
                                {
                                    gridIndex: 2,
                                    type: 'category',
                                    boundaryGap: true,
                                    data: exper,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.xColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.xColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                },
                                {
                                    gridIndex: 3,
                                    type: 'category',
                                    boundaryGap: true,
                                    data: city,
                                    axisLabel: {
                                        interval: 0,
                                        margin: 15,
                                        textStyle: {
                                            color: _this.xColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: _this.xColor,
                                            opacity: 0.2
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    gridIndex: 0,
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                },
                                {
                                    gridIndex: 1,
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                },
                                {
                                    gridIndex: 2,
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                },
                                {
                                    gridIndex: 3,
                                    axisLabel: {
                                        textStyle: {
                                            color: _this.labelColor,
                                            fontStyle: 'normal',
                                            fontFamily: '微软雅黑',
                                            fontSize: 12,
                                        }
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: _this.lineColor,
                                        }
                                    }
                                },
                            ],
                            series: [
                                {
                                    type: 'line',
                                    xAxisIndex: 0,
                                    yAxisIndex: 0,
                                    itemStyle: {
                                        normal: {
                                            color: mColors[3],
                                        },
                                    },
                                    data: eduS
                                },
                                {
                                    type: 'line',
                                    xAxisIndex: 1,
                                    yAxisIndex: 1,
                                    itemStyle: {
                                        normal: {
                                            color: mColors[2],
                                        },
                                    },
                                    data: compS
                                },
                                {
                                    type: 'line',
                                    xAxisIndex: 2,
                                    yAxisIndex: 2,
                                    itemStyle: {
                                        normal: {
                                            color: mColors[1],
                                        },
                                    },
                                    data: experS
                                },
                                {
                                    type: 'line',
                                    xAxisIndex: 3,
                                    yAxisIndex: 3,
                                    itemStyle: {
                                        normal: {
                                            color: mColors[0],
                                        },
                                    },
                                    data: cityS
                                }
                            ]
                        };
                    }
                });
                break;
            default:
                console.log("Position Chart num error");
                break;
        }
    };
    /* 默认加载 */
    PositionChartComponent.prototype.setDefaultEchart = function () {
        var _this = this;
        /* 底部 图表  技能要求*/
        this.changeOption(0);
        /* 顶部 图表， 申请参数刷新 */
        this.vd.getPostPortrait().subscribe(function (data) {
            if (data['statu'] == __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["b" /* RESULT_OK */].YES) {
                var yName = data['data']['chart'].salarygap;
                var salarystatu = data['data']['chart'].salarystatu;
                var mTitle = [salarystatu[0].title, salarystatu[1].title, salarystatu[2].title, salarystatu[3].title];
                // this.showloading = false;
                _this.option = {
                    title: [
                        {
                            text: mTitle[0],
                            left: "70%",
                            top: "3%",
                            textStyle: {
                                color: _this.titleColor,
                                fontSize: "14"
                            }
                        }, {
                            left: "25%",
                            top: "3%",
                            text: mTitle[1],
                            textStyle: {
                                color: _this.titleColor,
                                fontSize: "14"
                            }
                        },
                        {
                            text: mTitle[2],
                            left: "70%",
                            top: "53%",
                            textStyle: {
                                color: _this.titleColor,
                                fontSize: "14"
                            }
                        }, {
                            left: "25%",
                            top: "53%",
                            text: mTitle[3],
                            textStyle: {
                                color: _this.titleColor,
                                fontSize: "14"
                            }
                        }
                    ],
                    tooltip: {},
                    grid: [
                        {
                            x: '8%',
                            y: '8%',
                            width: '40%',
                            height: "40%",
                            containLabel: true
                        },
                        {
                            x2: '8%',
                            y: '8%',
                            width: '40%',
                            height: "40%",
                            containLabel: true
                        },
                        {
                            x: '8%',
                            y2: '0',
                            width: '40%',
                            height: "40%",
                            containLabel: true
                        },
                        {
                            x2: '8%',
                            y2: '0',
                            width: '40%',
                            height: "40%",
                            containLabel: true
                        },
                    ],
                    toolbox: {
                        right: "3%",
                        bottom: "3%",
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    xAxis: [
                        {
                            gridIndex: 0,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        {
                            gridIndex: 1,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        {
                            gridIndex: 2,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        {
                            gridIndex: 3,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                    ],
                    yAxis: [
                        {
                            gridIndex: 0,
                            interval: 0,
                            data: yName,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        }, {
                            gridIndex: 1,
                            interval: 0,
                            data: yName,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        },
                        {
                            gridIndex: 2,
                            interval: 0,
                            data: yName,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        }, {
                            gridIndex: 3,
                            interval: 0,
                            data: yName,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: _this.titleColor
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        }
                    ],
                    series: [
                        {
                            name: mTitle[0],
                            type: 'bar',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            itemStyle: {
                                // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                normal: {
                                    barBorderRadius: [0, 8, 8, 0],
                                    borderWidth: 0,
                                    borderColor: '#fff',
                                    label: {
                                        show: true,
                                        position: 'right',
                                        formatter: function (v) {
                                            return v.value + "%";
                                        },
                                    },
                                    color: function (params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#b250ff',
                                            '#4849b5',
                                            '#ffa800',
                                            '#E5C37D',
                                            '#7f80e1b3', '#5c6d9ab3',
                                            '#837e86',
                                            '#fdc86a'
                                        ];
                                        return colorList[params.dataIndex];
                                    },
                                }
                            },
                            barGap: '0',
                            barWidth: '20',
                            barCategoryGap: '5%',
                            data: salarystatu[0].value,
                        },
                        {
                            name: mTitle[1],
                            type: 'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            itemStyle: {
                                // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                normal: {
                                    barBorderRadius: [0, 8, 8, 0],
                                    borderWidth: 0,
                                    borderColor: '#fff',
                                    label: {
                                        show: true,
                                        position: 'right',
                                        formatter: function (v) {
                                            return v.value + "%";
                                        },
                                    },
                                    color: function (params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#b250ff',
                                            '#4849b5',
                                            '#ffa800',
                                            '#E5C37D',
                                            '#7f80e1b3', '#5c6d9ab3',
                                            '#837e86',
                                            '#fdc86a'
                                        ];
                                        return colorList[params.dataIndex];
                                    },
                                }
                            },
                            barGap: '0',
                            barWidth: '20',
                            barCategoryGap: '5%',
                            data: salarystatu[1].value,
                        },
                        {
                            name: mTitle[2],
                            type: 'bar',
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            itemStyle: {
                                // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                normal: {
                                    barBorderRadius: [0, 8, 8, 0],
                                    borderWidth: 0,
                                    borderColor: '#fff',
                                    label: {
                                        show: true,
                                        position: 'right',
                                        formatter: function (v) {
                                            return v.value + "%";
                                        },
                                    },
                                    color: function (params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#b250ff',
                                            '#4849b5',
                                            '#ffa800',
                                            '#E5C37D',
                                            '#7f80e1b3', '#5c6d9ab3',
                                            '#837e86',
                                            '#fdc86a'
                                        ];
                                        return colorList[params.dataIndex];
                                    },
                                }
                            },
                            barGap: '0',
                            barWidth: '20',
                            barCategoryGap: '5%',
                            data: salarystatu[2].value,
                        },
                        {
                            name: mTitle[3],
                            type: 'bar',
                            xAxisIndex: 3,
                            yAxisIndex: 3,
                            itemStyle: {
                                // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                                normal: {
                                    barBorderRadius: [0, 8, 8, 0],
                                    borderWidth: 0,
                                    borderColor: '#fff',
                                    label: {
                                        show: true,
                                        position: 'right',
                                        formatter: function (v) {
                                            return v.value + "%";
                                        },
                                    },
                                    color: function (params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#b250ff',
                                            '#4849b5',
                                            '#ffa800',
                                            '#E5C37D',
                                            '#7f80e1b3', '#5c6d9ab3',
                                            '#837e86',
                                            '#fdc86a'
                                        ];
                                        return colorList[params.dataIndex];
                                    },
                                }
                            },
                            barGap: '0',
                            barWidth: '20',
                            barCategoryGap: '5%',
                            data: salarystatu[3].value,
                        }
                    ]
                };
            }
        });
    };
    PositionChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position-chart',
            template: __webpack_require__("./src/app/charts/position-chart/position-chart.component.html"),
            styles: [__webpack_require__("./src/app/charts/position-chart/position-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_visualdata_service__["a" /* VisualData */]])
    ], PositionChartComponent);
    return PositionChartComponent;
}());



/***/ }),

/***/ "./src/app/descr/descr.component.css":
/***/ (function(module, exports) {

module.exports = "        a,\r\n        div,\r\n        p {\r\n            color: #666;\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            color: #666;\r\n        }\r\n\r\n        .text-m a,\r\n        .text-m {\r\n            font-size: 18px;\r\n        }\r\n\r\n        span.cinfor {\r\n            font-weight: 700;\r\n            padding-left: 15px;\r\n        }\r\n\r\n        .list-group-item {\r\n            border: none;\r\n        }\r\n\r\n        .comIntro h5,\r\n        .comIntro h6,\r\n        .comIntro .data,\r\n        .comIntro h4 {\r\n            color: #404040;\r\n        }\r\n\r\n        span.label-m {\r\n            color: #666;\r\n            border: 1px solid #666;\r\n            border-radius: 4px;\r\n            padding: 0.5rem;\r\n            display: inline-block;\r\n            font-weight: 700;\r\n        }\r\n\r\n        .fa {\r\n            color: #999;\r\n        }"

/***/ }),

/***/ "./src/app/descr/descr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row clearfix\">\n    <div class=\"col-md-12 column\" style=\"padding-top:50px\">\n      <div class=\"row clearfix\">\n        <div class=\"col-md-12 column\">\n          <h2>\n            网贷之家\n<!--             {{comId}}\n -->            <a class=\"btn\" target=\"_blank\" href=\"https://www.lagou.com/gongsi/8523.html\">            \n            <i class=\"fa fa-link\" aria-hidden=\"true\"></i>\n            </a>\n          </h2>\n          <p class=\"text-m\">\n            网贷之家是中国首家、最大、最权威的P2P网络借贷行业门户网站。\n            <a class=\"btn\" target=\"_blank\" href=\"https://www.lagou.com/gongsi/8523.html\">更多 \n                <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n            </a>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div echarts [options]=\"option\"></div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-md-6 column\">\n\n          <div class=\"list-group\">\n\n            <div class=\"list-group-item\">\n              <h4>\n                偏好分析\n              </h4>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n                学历要求\n              </span>\n              <span class=\"cinfor\">\n                计算机相关专业本科以上学历\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-hourglass-start\" aria-hidden=\"true\"></i>\n                工作经验\n              </span>\n              <span class=\"cinfor\">\n                有数据统计分析、数据挖掘、机器学习经验者优先\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-group\" aria-hidden=\"true\"></i>\n                年龄要求\n              </span>\n              <span class=\"cinfor\">\n                23岁-28岁\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-magnet\" aria-hidden=\"true\"></i>\n                行业偏好\n              </span>\n              <span class=\"cinfor\">\n                负责公司各类数据产品数据抽取、清洗，以及数据算法与存储的设计和优化\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"list-group\">\n\n            <div class=\"list-group-item\">\n              <h4>\n                基本信息\n              </h4>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-building\" aria-hidden=\"true\"></i>\n                公司规模\n              </span>\n              <span class=\"cinfor\">\n                150-500人\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-bank\" aria-hidden=\"true\"></i>\n                公司福利\n              </span>\n              <span class=\"cinfor\">\n                攻城狮氛围,D轮+,弹性工作,大数据平台\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-keyboard-o\" aria-hidden=\"true\"></i>\n                公司性质\n              </span>\n              <span class=\"cinfor\">\n                B轮融资\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\n                公司地点\n              </span>\n              <span class=\"cinfor\">\n                深圳 - 南山区 - 南头 - 智恒产业园16栋2楼\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/descr/descr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescrComponent = (function () {
    function DescrComponent(activatedRout) {
        this.activatedRout = activatedRout;
    }
    DescrComponent.prototype.ngOnInit = function () {
        this.option = {
            title: [{
                    text: '企业分析',
                    left: '8%',
                    top: "30%",
                },
                {
                    text: "综合评分: 73",
                    textStyle: {
                        color: "#f00"
                    },
                    left: '8%',
                    top: "45%",
                },
            ],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['网贷之家'],
                top: "5%",
                left: "8%",
            },
            radar: {
                indicator: [{
                        text: '公司福利',
                        max: 100
                    }, {
                        text: '岗位数量',
                        max: 100
                    }, {
                        text: '面试评分',
                        max: 100
                    }, {
                        text: '公司规模',
                        max: 100
                    }, {
                        text: '地理位置',
                        max: 100
                    },],
                splitNumber: 4,
                name: {
                    textStyle: {
                        color: '#201E1F'
                    }
                },
                axisLine: {
                    lineStyle: {},
                },
                splitLine: {
                    lineStyle: {}
                },
                splitArea: {
                    areaStyle: {
                        color: ['#B3DBF5', '#FAFAFA']
                    }
                }
            },
            series: [{
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },
                    symbol: 'circle',
                    symbolSize: 5,
                    itemStyle: {
                        normal: {
                            areaStyle: { type: 'default' },
                            color: '#48D1CC',
                            borderColor: '#5ac3bd',
                            shadowColor: 'rgba(0,0,0,0.5)'
                        }
                    },
                    data: [{
                            value: [60, 78, 90, 50, 89, 87],
                            name: '网贷之家'
                        }]
                },]
        };
        /* 获取传入的公司 id */
        this.comId = this.activatedRout.snapshot.params['id'];
    };
    DescrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-descr',
            template: __webpack_require__("./src/app/descr/descr.component.html"),
            styles: [__webpack_require__("./src/app/descr/descr.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DescrComponent);
    return DescrComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {\r\n    background: #131829;\r\n    color: #888888;\r\n    padding: 35px 0;\r\n    line-height: 30px;\r\n    margin-top: 40px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"division\">\n      <span>\n        <em>SOTS团队</em></span>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
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

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--home 模块的大小以及内容自行决定，\n  app中的router-outlet仅仅占位中间内容-->\n<div class=\"row\" style=\" padding-top: 40px; \">\n  <div class=\"col-md-8 col-md-offset-2\">\n    <app-carousel></app-carousel>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10 col-md-offset-1\">\n    <app-recommend></app-recommend>\n    <app-hot-jobs></app-hot-jobs>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* routeAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/hot-jobs/hot-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hot-jobs/hot-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" *ngIf=\"ishow\">\n    <h4>\n        <i _ngcontent-c8=\"\" class=\"fa fa-spin fa-fire fa-rotate-10\"></i>\n        {{title}}\n        <small>{{subTitle}}</small>\n    </h4>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let infor of infors\">\n        <!-- <a target=\"_Blank\" [href]=\"infor.recruitmentSources\"> -->\n            <div class=\"panel panel-d\">\n                <div class=\"panel-body panel-body-d\">\n                    <p [routerLink]=\"['/position', infor.posid]\"\n                      class=\"position\">\n                        {{infor.compPosition}}\n                        <span class=\"salary\">{{infor.compSalary}}</span>\n                    </p>\n                    <p  [routerLink]=\"['/descr', infor.comid]\"\n                     class=\"company\">{{infor.compName}}</p>\n                    <p class=\"place \">\n                        {{infor.compPlace}}\n                        <span class=\"time\">{{infor.compPublish}}</span>\n                    </p>\n                </div>\n            </div>\n        <!-- </a> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/hot-jobs/hot-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotJobsComponent = (function () {
    function HotJobsComponent(productService) {
        this.productService = productService;
        this.title = '最热职位';
        this.subTitle = '根据搜索推荐';
        this.ishow = false;
    }
    HotJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getHotJobs().subscribe(function (date) {
            _this.ishow = true;
            _this.infors = date;
        });
    };
    HotJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hot-jobs',
            template: __webpack_require__("./src/app/hot-jobs/hot-jobs.component.html"),
            styles: [__webpack_require__("./src/app/hot-jobs/hot-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], HotJobsComponent);
    return HotJobsComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-footer {\r\n    border-top: none;\r\n    /* background-color: rgba(0,0,0,.1); */\r\n}\r\n/* .head-success {\r\n    background-color: #009688;\r\n} */"

/***/ }),

/***/ "./src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" [ngClass]=\"headStyle\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <!-- <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> -->\n  </button>\n</div>\n<div class=\"modal-body\">\n  <h3 class=\"text-center\" *ngIf=\"message!=null\" >\n    {{message}}\n  </h3>\n  <h2  class=\"text-center\" *ngIf=\"waiting\" >\n    <i class=\"fa fa-spinner fa-spin\"></i>\n  </h2>\n</div>\n<!-- <div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirm()\" *ngIf=\"btnOK != 'null'\">{{btnOK}}</button>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"decline()\" *ngIf=\"btnNo != 'null'\">{{btnNO}}</button>\n</div> -->"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    /* btnOK: string;
    btnNO: string; */
    function ModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.closeModal = function (time) {
        var _this = this;
        if (time > 0) {
            var t_1 = setTimeout(function () {
                /* 关闭提示框 */
                _this.bsModalRef.hide();
                clearTimeout(t_1);
            }, time * 1000);
        }
        else if (time = 0) {
            /* 关闭提示框 */
            this.bsModalRef.hide();
            console.log('小于 0 直接隐藏不延迟');
        }
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav>li>a:focus, .nav>li>a:hover{\r\n    background: none;\r\n}\r\n/* 导航栏颜色 */\r\nnav.navbar.navbar-lighter {\r\n    /* background: #293042; */\r\nbackground: #fff;\r\n    border-bottom: 1px solid #eee;\r\n    margin-bottom: 24px;\r\n    height: 80px;\r\n    padding-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-lighter\">\n  <!-- container-fluid navbar-fixed-top -->\n  <div class=\"container\">\n    <!-- 折叠按钮  -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a class=\"navbar-brand\" href=\"#\">\n        SOTS\n      </a> -->\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"static/assets/nav-img.png\" class=\"img-responsive\" alt=\"sots\">\n      </a>\n    </div>\n    <!--/折叠按钮-->\n    <!-- 导航栏 -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/home\"  href=\"#\">\n            <span class=\"glyphicon glyphicon-home\"></span> 首页\n          </a>\n        </li>\n        <li routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/charts\" href=\"#\">\n            <i class=\"fa fa-pie-chart\"></i> 图表\n          </a>\n        </li>\n        <li *ngIf=\"!iComp\" routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/searchhome\" href=\"#\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i> 搜岗位\n          </a>\n        </li>\n        <li *ngIf=\"iComp\" routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/searchresume\" href=\"#\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i> 搜简历\n          </a>\n        </li>\n      </ul>\n      <!-- 导航栏 右侧 -->\n      <ul class=\"nav navbar-nav navbar-right\">\n       <!--  <li>\n          <a (click)='openModalRegister()'>\n            <i class=\"fa fa-user-plus\"></i> 测试注册框\n          </a>\n        </li>\n        <li>\n          <a (click)='openModalSignIn()'>\n            <i class=\"fa fa-user-plus\"></i> 测试登录框\n          </a>\n        </li> -->\n        <!-- <li>\n          <a (click)='openModalWithComponent()'>\n            <i class=\"fa fa-user-plus\"></i> 测试弹出框\n          </a>\n        </li> -->\n        <li *ngIf=\"!isLoginOrRegister\"  (click)='openModalRegister()'>\n          <a><i class=\"fa fa-user-plus\"></i> 注册</a>\n        </li>\n        <li *ngIf=\"!isLoginOrRegister\" (click)='openModalSignIn()'>\n          <a><i class=\"fa fa-user-circle\"></i> 登录</a>\n        </li>\n        <!-- <li *ngIf=\"!isLoginOrRegister\" routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/register\" href=\"#\"><i class=\"fa fa-user-plus\"></i> 注册</a>\n        </li>\n        <li *ngIf=\"!isLoginOrRegister\" routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/login\" href=\"#\"><i class=\"fa fa-user-circle\"></i> 登录</a>\n        </li> -->\n        <li  (click)='clickSignOut()' *ngIf=\"isLoginOrRegister\" routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a><i class=\"fa fa-sign-out\"></i> 退出登录</a>\n        </li>\n        <li *ngIf=\"isLoginOrRegister && !iComp\" routerLinkActive=\"navActive\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/person\" href=\"#\">\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> 个人中心\n          </a>\n        </li>\n      </ul>\n      <!-- /导航栏 右侧-->\n    </div><!-- /导航栏 -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modal_service__ = __webpack_require__("./src/app/shared/modal-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    /* 弹出框 */
    function NavbarComponent(router, activateroute, cs, route, ps, ms) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.cs = cs;
        this.route = route;
        this.ps = ps;
        this.ms = ms;
        /* 控制个人中心，登录，注册等显隐 */
        this.isLoginOrRegister = false;
        this.iComp = false;
        /* 监视 登录 和 注册 */
        this.ps.isLogin.subscribe(function (data) {
            console.log('监视登录和注册和企业：');
            console.log(data);
            /* 是登陆 或者 注册 */
            if (data == __WEBPACK_IMPORTED_MODULE_4__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][0] || data == __WEBPACK_IMPORTED_MODULE_4__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][1]) {
                /* 如果是登录 或 注册 */
                _this.isLoginOrRegister = true;
            }
            else if (data == __WEBPACK_IMPORTED_MODULE_4__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][2]) {
                /* 如果是退出登录 */
                _this.isLoginOrRegister = false;
            }
            else if (data == "IS_COMP") {
                _this.iComp = true;
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    /* 点击 退出登录 */
    NavbarComponent.prototype.clickSignOut = function () {
        var _this = this;
        /* 先跳到首页，可以出发路由守卫，否则有 bug */
        // let isTOHome = this.router.navigate(['/home']);   
        this.router.navigate(['/home']).then(function (value) {
            console.log(value);
            console.log('导航到首页返回值：');
            /* 如果可以正常导航到首页，则发送广播 */
            if (value == true) {
                /*
                  navBar isLogin控制登录和注册按钮的显隐
                */
                _this.ps.isLogin.emit(__WEBPACK_IMPORTED_MODULE_4__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][2]);
                _this.cs.removeAllCookie();
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    /* login modal */
    NavbarComponent.prototype.openModalSignIn = function () {
        /* 弹框提示 */
        var initialState = {
            title: 'SOTS',
            message: '测试使用',
            headStyle: { 'head-success': true },
            btnOK: '登录',
            btnNO: '退出'
        };
        this.ms.openModalWithSignIn(initialState, 0);
    };
    /* register modal */
    NavbarComponent.prototype.openModalRegister = function () {
        /* 弹框提示 */
        var initialState = {
            title: '注册',
            message: '测试使用',
            headStyle: { 'head-success': true },
            btnOK: '登录',
            btnNO: '退出'
        };
        this.ms.openModalWithRegister(initialState, 0);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_mycookie_service__["a" /* MycookieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_modal_service__["a" /* ModalService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/nopage/nopage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nopage/nopage.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">\n  页面未找到404.\n</h2>\n<h4 class=\"text-right\">SOTS</h4>\n"

/***/ }),

/***/ "./src/app/nopage/nopage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NopageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NopageComponent = (function () {
    function NopageComponent() {
    }
    NopageComponent.prototype.ngOnInit = function () {
    };
    NopageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nopage',
            template: __webpack_require__("./src/app/nopage/nopage.component.html"),
            styles: [__webpack_require__("./src/app/nopage/nopage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NopageComponent);
    return NopageComponent;
}());



/***/ }),

/***/ "./src/app/personal-center/browsing-history/browsing-history.component.css":
/***/ (function(module, exports) {

module.exports = ".col-md-4 .panel {\r\n    border: 1px solid #efefef;\r\n}"

/***/ }),

/***/ "./src/app/personal-center/browsing-history/browsing-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\r\n  <!--标题说明 start-->\r\n  <div class=\"page-header\" style=\"padding-left:15px\">\r\n    <h4>\r\n      {{title}}\r\n    </h4>\r\n  </div>\r\n  <!--标题说明 end-->\r\n  <!--推荐信息模板 start-->\r\n  <div class=\"col-md-4\"  *ngFor=\"let infor of infors\">\r\n  <div class=\"panel panel-warning\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"clearfix\">\r\n        <p class=\"pull-left position \" routerLink=\"/position\">{{infor.compPosition}}</p>\r\n        <span class=\"salary\">{{infor.compSalary}}</span>\r\n      </div>\r\n      <p class=\"company\" routerLink=\"/descr\">{{infor.compName}}</p>\r\n      <div class=\"clearfix\">\r\n        <p class=\"pull-left place \">{{infor.compPlace}}</p>\r\n        <span class=\"time\">{{infor.compPublish}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <!--推荐信息模板 end-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/personal-center/browsing-history/browsing-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowsingHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowsingHistoryComponent = (function () {
    function BrowsingHistoryComponent(productService) {
        this.productService = productService;
    }
    BrowsingHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = '根据搜索推荐';
        this.productService.getRecommendInformation().subscribe(function (data) { _this.infors = data; });
    };
    BrowsingHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-browsing-history',
            template: __webpack_require__("./src/app/personal-center/browsing-history/browsing-history.component.html"),
            styles: [__webpack_require__("./src/app/personal-center/browsing-history/browsing-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], BrowsingHistoryComponent);
    return BrowsingHistoryComponent;
}());



/***/ }),

/***/ "./src/app/personal-center/collection/collection.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-body {\r\n  border-color: #dcdad6;\r\n}\r\n.col-md-4 .panel {\r\n    border: 1px solid #6a8d9c;\r\n}"

/***/ }),

/***/ "./src/app/personal-center/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/personal-center/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionComponent = (function () {
    function CollectionComponent() {
    }
    CollectionComponent.prototype.ngOnInit = function () {
    };
    CollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-collection',
            template: __webpack_require__("./src/app/personal-center/collection/collection.component.html"),
            styles: [__webpack_require__("./src/app/personal-center/collection/collection.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/personal-center/matching-records/matching-records.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-body {\r\n    border: 1px solid #efefef;\r\n}"

/***/ }),

/***/ "./src/app/personal-center/matching-records/matching-records.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix match-record\">\n  <!--标题说明 start-->\n  <div class=\"page-header\" style=\"padding-left:15px\">\n  </div>\n  <!--标题说明 end-->\n  <!--推荐信息模板 start-->\n  <div class=\"col-md-4\"  *ngFor=\"let infor of infors\">\n    <div class=\"panel\">\n      <div class=\"panel-body\">\n        <div class=\"clearfix\" routerLink=\"/position\">\n          <p class=\"pull-left position \">{{infor?.compPosition}}</p>\n          <span class=\"salary\">{{infor?.compSalary}}</span>\n        </div>\n        <p class=\"company\" routerLink=\"/descr\">{{infor?.compName}}</p>\n        <div class=\"clearfix\">\n          <p class=\"pull-left place \">{{infor?.compPlace}}</p>\n          <span class=\"time\">{{infor?.compPublish}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--推荐信息模板 end-->\n</div>\n"

/***/ }),

/***/ "./src/app/personal-center/matching-records/matching-records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchingRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatchingRecordsComponent = (function () {
    function MatchingRecordsComponent(productService) {
        this.productService = productService;
        this.title = '匹配记录';
    }
    MatchingRecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getRecommendInformation().subscribe(function (data) { _this.infors = data; });
    };
    MatchingRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-matching-records',
            template: __webpack_require__("./src/app/personal-center/matching-records/matching-records.component.html"),
            styles: [__webpack_require__("./src/app/personal-center/matching-records/matching-records.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], MatchingRecordsComponent);
    return MatchingRecordsComponent;
}());



/***/ }),

/***/ "./src/app/personal-center/personal-center-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalCenterRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_information_personal_information_component__ = __webpack_require__("./src/app/personal-center/personal-information/personal-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_collection_component__ = __webpack_require__("./src/app/personal-center/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matching_records_matching_records_component__ = __webpack_require__("./src/app/personal-center/matching-records/matching-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browsing_history_browsing_history_component__ = __webpack_require__("./src/app/personal-center/browsing-history/browsing-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_center_component__ = __webpack_require__("./src/app/personal-center/personal-center.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routeConfig = [{
        path: 'personOK',
        component: __WEBPACK_IMPORTED_MODULE_6__personal_center_component__["a" /* PersonalCenterComponent */],
        children: [
            { path: 'personal-information', component: __WEBPACK_IMPORTED_MODULE_2__personal_information_personal_information_component__["a" /* PersonalInformationComponent */] },
            { path: 'collection', component: __WEBPACK_IMPORTED_MODULE_3__collection_collection_component__["a" /* CollectionComponent */] },
            { path: 'matching-records', component: __WEBPACK_IMPORTED_MODULE_4__matching_records_matching_records_component__["a" /* MatchingRecordsComponent */] },
            { path: 'browsing-history', component: __WEBPACK_IMPORTED_MODULE_5__browsing_history_browsing_history_component__["a" /* BrowsingHistoryComponent */] },
            { path: '', redirectTo: '/person/personal-information', pathMatch: 'full' },
        ]
    }
];
var PersonalCenterRouting = (function () {
    function PersonalCenterRouting() {
    }
    PersonalCenterRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routeConfig)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], PersonalCenterRouting);
    return PersonalCenterRouting;
}());



/***/ }),

/***/ "./src/app/personal-center/personal-center.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-pills>li.active>a{\r\n    background: none;\r\n    color: #404040;\r\n    font-weight: 700;\r\n}\r\n.col-md-4 .panel {\r\n    border: 1px solid #6a8d9c;\r\n}\r\nli,a{\r\n    background: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/personal-center/personal-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--二级导航 start-->\n    <div class=\"col-lg-10 col-md-10 col-lg-offset-1\" \n    style=\"padding-top: 40px; \">\n\n      <ul class=\"nav nav-pills\" style=\" border-bottom: 1px solid #efefef; \">\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/personOK/personal-information\">基本信息</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/personOK/browsing-history\"> 浏览记录\n          </a>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/personOK/matching-records\">推荐匹配记录</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/personOK/collection\">收藏夹\n          </a>\n        </li>\n      </ul>\n      <router-outlet></router-outlet>\n    </div>\n\n    <!--猜你喜欢 - 内容开始-->\n    <!-- <div class=\"col-lg-3 col-md-3\">\n      <app-personalized-recommendation></app-personalized-recommendation>\n    </div> -->\n    <!--猜你喜欢 - 内容开始-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/personal-center/personal-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalCenterComponent = (function () {
    function PersonalCenterComponent() {
    }
    PersonalCenterComponent.prototype.ngOnInit = function () {
    };
    PersonalCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/personal-center/personal-center.component.html"),
            styles: [__webpack_require__("./src/app/personal-center/personal-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalCenterComponent);
    return PersonalCenterComponent;
}());



/***/ }),

/***/ "./src/app/personal-center/personal-center.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalCenterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/_@angular_platform-browser@5.2.9@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.9@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browsing_history_browsing_history_component__ = __webpack_require__("./src/app/personal-center/browsing-history/browsing-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_collection_component__ = __webpack_require__("./src/app/personal-center/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__matching_records_matching_records_component__ = __webpack_require__("./src/app/personal-center/matching-records/matching-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__personal_information_personal_information_component__ = __webpack_require__("./src/app/personal-center/personal-information/personal-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__personal_center_routing_module__ = __webpack_require__("./src/app/personal-center/personal-center-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__personal_information_edit_personal_information_edit_component__ = __webpack_require__("./src/app/personal-center/personal-information-edit/personal-information-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__ = __webpack_require__("./node_modules/_ngx-cookie@2.0.1@ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__ = __webpack_require__("./node_modules/_ngx-echarts@2.1.0@ngx-echarts/ngx-echarts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PersonalCenterModule = (function () {
    function PersonalCenterModule() {
    }
    PersonalCenterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__personal_center_routing_module__["a" /* PersonalCenterRouting */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__["a" /* CookieModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__["a" /* NgxEchartsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__browsing_history_browsing_history_component__["a" /* BrowsingHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__collection_collection_component__["a" /* CollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__matching_records_matching_records_component__["a" /* MatchingRecordsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__personal_information_personal_information_component__["a" /* PersonalInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__personal_information_edit_personal_information_edit_component__["a" /* PersonalInformationEditComponent */]
            ]
        })
    ], PersonalCenterModule);
    return PersonalCenterModule;
}());



/***/ }),

/***/ "./src/app/personal-center/personal-information-edit/personal-information-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".personEdit{\r\n    padding-bottom: 20px;\r\n}\r\n.personForm {\r\n    padding-top: 40px;\r\n}\r\n.personForm h4 {\r\n    color: #ff9f20;\r\n    padding-left: 20px;\r\n    margin-bottom: 30px;\r\n}\r\nh3 span {\r\nwidth: 200px;\r\nborder-bottom: 2px solid #404961;\r\npadding-bottom: 7px;\r\n}"

/***/ }),

/***/ "./src/app/personal-center/personal-information-edit/personal-information-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal personEdit\" novalidate [formGroup]=\"formModel\" (submit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-10 col-md-offset-1 personForm\">\n        <h3 class=\"text-center\" style=\"margin-bottom: 20px;padding-bottom: 20px;\">\n          <span>\n            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n            编辑个人信息\n          </span>\n        </h3>\n        <h4 class=\"col-sm-offset-1\">\n          <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n          个人信息\n        </h4>\n        <div class=\"col-md-6\">\n          <div class=\"form-horizontal\" role=\"form\">\n\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-sm-3  col-md-offset-2 control-label\">姓名 *</label>\n              <div class=\"col-md-6\">\n                <input formControlName='name' placeholder=\"姓名\" type=\"text\" class=\"form-control\" id=\"name\">\n                <div class=\"help-block\">\n                  <p [class.hidden]=\"!(formModel.hasError('required', ['name']) && formModel.get('name').touched)\">\n                    姓名为必填选项\n                  </p>\n                  <p [class.hidden]=\"!(formModel.hasError('name', ['name']) && formModel.get('name').touched)\">\n                    请输入中文\n                  </p>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group\">\n              <label for=\"phone\" class=\"col-sm-3  col-md-offset-2 control-label\">手机 *</label>\n              <div class=\"col-md-6\">\n                <input formControlName='phone' id=\"phone\" class=\"form-control\" type=\"text\" placeholder=\"电话\">\n                <div class=\"help-block\">\n                  <p [class.hidden]=\"!(formModel.hasError('required', ['phone']) && formModel.get('phone').touched)\">\n                    手机号码为必填选项\n                  </p>\n                  <p [hidden]=\"!formModel.hasError('mobile',['phone'])\">手机号码格式错误</p>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group\">\n              <label for=\"mailbox\" class=\"col-sm-3  col-md-offset-2 control-label\">邮箱 *</label>\n              <div class=\"col-md-6\">\n                <input id=\"mailbox\" formControlName='email' class=\"form-control\" type=\"email\" placeholder=\"邮箱\">\n                <div class=\"help-blck\">\n                  <p [class.hidden]=\"!(formModel.hasError('required', ['email']) && formModel.get('email').touched)\">\n                    姓名为必填选项\n                  </p>\n                  <p [hidden]=\"!formModel.hasError('username',['email'])\">邮箱格式错误</p>\n                </div>\n              </div>\n            </div>\n\n            <!-- 地点 -->\n            <div class=\"form-group form-inline\">\n              <label for=\"mailbox\" class=\"col-sm-3 col-md-offset-2 control-label\">地点* </label>\n\n              <div class=\"col-sm-3\">\n                <select id=\"place\" class=\"form-control\" [formControl]=\"provinceFilter\">\n                  <option *ngFor=\"let iprovince of provinces\">{{iprovince}}</option>\n                </select>\n              </div>\n              <div class=\"col-sm-3\">\n                <select id=\"city\" class=\"form-control\" formControlName='city'>\n                  <option *ngFor=\"let icity of citys\">{{icity}}</option>\n                </select>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-group\">\n              <label for=\"gender\" class=\"col-sm-3 control-label\">性别 *</label>\n              <div class=\"col-md-6\">\n                <select formControlName='gender' id=\"gender\" class=\"form-control\" type=\"text\">\n                  <option *ngFor=\"let gender of sex\" [value]=\"gender\">{{gender}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"worktime\" class=\"col-sm-3 control-label\">工作年限 *</label>\n              <div class=\"col-md-6\">\n                <select formControlName='workingTime' id=\"worktime\" class=\"form-control\" type=\"text\">\n                  <option *ngFor=\"let iworkt of workTimes\" [value]=\"iworkt\">{{iworkt}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"igraduates\" class=\"col-sm-3 control-label\">应届生 *</label>\n              <div class=\"col-md-6\">\n                <select formControlName='graduates' id=\"igraduates\" class=\"form-control\" type=\"text\">\n                  <option *ngFor=\"let ngraduates of graduates\" [value]=\"ngraduates\">{{ngraduates}}</option>\n                </select>\n              </div>\n            </div>\n\n            <!-- <div class=\"form-group\">\n            <label for=\"lastname\" class=\"col-sm-3 control-label\">居住地 *</label>\n            <div class=\"col-md-6\">\n              <input type=\"text\" class=\"form-control\" id=\"lastname\">\n            </div>\n          </div> -->\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 col-md-offset-1 personForm\" >\n\n        <h4 class=\"col-sm-offset-1\">\n          <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n          教育背景\n        </h4>\n        <div class=\"col-md-6\">\n          <div class=\"form-horizontal\" role=\"form\">\n\n            <div class=\"form-group\">\n              <label for=\"majors\" class=\"col-sm-3 col-md-offset-2 control-label\">专业 *</label>\n              <div class=\"col-md-6\">\n                <input id=\"majors\" formControlName='majors' class=\"form-control\" type=\"majors\" placeholder=\"专业\">\n                <div class=\"help-block\">\n                  <p [class.hidden]=\"!(formModel.hasError('required', ['majors']) && formModel.get('majors').touched)\">\n                    专业为必填选项\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"graduatedSchool\" class=\"col-sm-3 col-md-offset-2 control-label\">毕业学校 *</label>\n              <div class=\"col-md-6\">\n                <input id=\"graduatedSchool\" formControlName='graduatedSchool' class=\"form-control\" type=\"text\" placeholder=\"毕业学校\">\n                <div class=\"help-block\">\n                  <p [class.hidden]=\"!(formModel.hasError('required', ['graduatedSchool']) && formModel.get('graduatedSchool').touched)\">\n                    毕业学校为必填选项\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"degree\" class=\"col-sm-3 col-md-offset-2 control-label\">学位 *</label>\n              <div class=\"col-md-6\">\n                <input id=\"degree\" formControlName='degree' class=\"form-control\" type=\"text\" placeholder=\"学位\" name=\"degree\">\n                <div class=\"help-block\">\n                  <p [class.hidden]=\"!(formModel.hasError('required', ['degree']) && formModel.get('degree').touched)\">\n                    学位为必填选项\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-horizontal\" role=\"form\">\n\n\n            <div class=\"form-group\">\n              <label for=\"lastname\" class=\"col-sm-3 control-label\">学历 *</label>\n              <div class=\"col-md-6\">\n                <select id=\"highestEducation\" formControlName='highestEducation' class=\"form-control\">\n                  <option *ngFor=\"let heducation of edu\" [value]=\"heducation\">{{heducation}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"graduationYear\" class=\"col-sm-3 control-label\">毕业时间 *</label>\n              <div class=\"col-md-6\">\n                <input id=\"graduationYear\" formControlName='graduationYear' class=\"form-control\" type=\"date\" placeholder=\"毕业时间\" name=\"graduationYear\">\n              </div>\n            </div>\n\n            <!-- <div class=\"form-group\">\n            <label for=\"lastname\" class=\"col-sm-3 control-label\">居住地*</label>\n            <div class=\"col-md-6\">\n              <input type=\"text\" class=\"form-control\" id=\"lastname\">\n            </div>\n          </div> -->\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 col-md-offset-1\" style=\"padding-bottom: 20px;\">\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-8\">\n            <input [ngClass]=\" {'btn-danger': !formModel.valid, 'btn-success': formModel.valid}\" [disabled]=\"!formModel.valid\" class=\"btn btn-default btn-login col-sm-4\"\n              type=\"submit\" value=\"提交\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/personal-center/personal-information-edit/personal-information-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInformationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validators_validator__ = __webpack_require__("./src/app/validators/validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PersonalInformationEditComponent = (function () {
    function PersonalInformationEditComponent(fb, ps, cs, router, modalService) {
        var _this = this;
        this.fb = fb;
        this.ps = ps;
        this.cs = cs;
        this.router = router;
        this.modalService = modalService;
        /* 下拉框 数据 */
        this.provinces = [];
        this.citys = ['城市'];
        this.provinceFilter = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.userId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.formModel = fb.group({
            name: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__validators_validator__["b" /* nameValidator */]]],
            gender: ['男', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            phone: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__validators_validator__["c" /* phoneValidator */]]],
            highestEducation: ['本科', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            workingTime: ['2', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__validators_validator__["d" /* usernameValidator */]]],
            majors: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            graduatedSchool: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            graduationYear: ['2015/09/28', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            degree: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            city: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            graduates: ['是', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
        /* 获得表单中的待选项 */
        this.ps.getPersonalEdit().subscribe(function (data) {
            console.log('获得表单中的待选项');
            console.log(data);
            if (data.status == __WEBPACK_IMPORTED_MODULE_6__bean_RegisterOrLogin__["a" /* OKOrNo */][0]) {
                _this.provinces = data.result.provinces;
                _this.sex = data.result.sex;
                _this.workTimes = data.result.workTimes;
                _this.edu = data.result.edu;
                _this.graduates = data.result.graduates;
            }
        });
        /* 选择省份500毫秒后，发送至后台，显示待选市 */
        this.provinceFilter.valueChanges
            .debounceTime(500)
            .subscribe(function (value) {
            _this.ps.postProvinceInfor({ province: value }).subscribe(function (data) {
                _this.citys = data['result'].citys;
            });
        });
    }
    // TODO: 默认值设定 性别默认是 '男' 北京 
    // TODO: 填写个人信息的时候， 退出登录注意提示信息
    PersonalInformationEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formModel.addControl('province', this.provinceFilter);
        var id = this.cs.getCookie("");
        console.log("UserId Value" + id);
        this.userId.setValue(id);
        this.formModel.addControl('userid', this.userId);
        var data = this.formModel.value;
        console.log('个人信息: formModel');
        console.log(data);
        if (this.formModel.valid) {
            /* 异步提交表单 */
            this.ps.postPersonalInformation(data).subscribe(function (data) {
                if (data['isOK'] == 'Yes') {
                    /* 提交个人信息表单成功， 获得已经递交的flag */
                    _this.cs.setStrCookie(__WEBPACK_IMPORTED_MODULE_6__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][3], __WEBPACK_IMPORTED_MODULE_6__bean_RegisterOrLogin__["a" /* OKOrNo */][0]);
                    /* 表单合格, 跳到个人消息展示页面 */
                    _this.router.navigate(['/personOK/personal-information']);
                }
                else {
                    console.log('个人信息 表单 返回 有误');
                    console.log(data);
                    /* 弹出 出错提示 */
                    _this.openModalError();
                }
            });
        }
        else {
            console.log('表单存在错误');
        }
    };
    PersonalInformationEditComponent.prototype.ngOnInit = function () { };
    /* 登录失败 */
    PersonalInformationEditComponent.prototype.openModalError = function () {
        var _this = this;
        /* 弹框提示 */
        var initialState = {
            title: '提示',
            message: '提交未成功',
            headStyle: { 'head-danger': true },
            waiting: false
        };
        var t = setTimeout(function () {
            _this.bsMRError = _this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__modal_modal_component__["a" /* ModalComponent */], {
                backdrop: "static",
                keyboard: false,
                initialState: initialState
            });
            _this.bsMRError.content.closeModal(2);
        }, 600);
    };
    PersonalInformationEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-personal-information-edit',
            template: __webpack_require__("./src/app/personal-center/personal-information-edit/personal-information-edit.component.html"),
            styles: [__webpack_require__("./src/app/personal-center/personal-information-edit/personal-information-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_mycookie_service__["a" /* MycookieService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], PersonalInformationEditComponent);
    return PersonalInformationEditComponent;
}());



/***/ }),

/***/ "./src/app/personal-center/personal-information/personal-information.component.css":
/***/ (function(module, exports) {

module.exports = ".person {\r\n  font-size: 16px;\r\n}\r\n.person em,\r\n.person strong {\r\n  padding-right: 15px;\r\n}\r\n.person i.fa {\r\n    color: #949ca2;\r\n}\r\n.panel-define h4.text-left,\r\n.work-experience h4.text-left {\r\n    border-left: 4px solid #666;\r\n    padding-left: 10px;\r\n}\r\n.person h4 {\r\n    margin-left: 8.3%;\r\n}\r\n/*基本表单的颜色*/\r\n.panel-define>.panel-heading {\r\n    background: none;\r\n    border: none;\r\n}\r\n/*搜索框中的颜色变化*/\r\n.work-experience li.list-group-item.panel-heading-noColor.active{\r\n    background: none;\r\n    border: none;\r\n}\r\n.work-experience li.list-group-item.clearfix {\r\n    border: none;\r\n    background: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/personal-center/personal-information/personal-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\" margin-left: 8%; \">\n  <div class=\"panel panel-define\">\n    <div class=\"panel-body\">\n      <div class=\"person\">\n          <div echarts [options]=\"option\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-define\">\n    <div class=\"panel-heading\">\n      <div class=\"panel-title \">\n        <h4 class=\"text-left\">\n          简介\n          <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n        </h4>\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"person\">\n        <h2 class=\"text-center\">{{personInfor?.name}}</h2>\n        <p class=\"text-center jobdesc\">\n          <em class=\"person editable\">多年从事大数据开发，具有良好的数据概念和团队写作能力</em>\n        </p>\n        <p class=\"text-center\">\n          <span class=\"glyphicon glyphicon-education\" aria-hidden=\"true\"></span>\n          <em  class=\"editable\">{{ personInfor?.gender}}</em>\n          <!-- <strong class=\"editable\">xxxx</strong> -->\n          <em class=\"editable\">工作{{ personInfor?.workingTime}}</em>\n          <span class=\"editable\">{{personInfor?.settledCity}}</span>\n        </p>\n        <p class=\"text-center\">\n          <span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span>\n          <em class=\"editable\">{{ personInfor?.phone}}</em>\n          <span class=\"glyphicon glyphicon-envelope\"></span>\n          <em class=\"editable\">{{ personInfor?.email}} </em>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- 工作经历 -->\n<!--   <ul class=\"list-group work-experience\">\n    <li href=\"#\" class=\"list-group-item panel-heading-noColor active\">\n      <div class=\"list-group-item-heading\">\n        <h4 class=\"text-left\">\n          工作经历\n          <i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>\n        </h4>\n      </div>\n    </li>\n    <li href=\"#\" class=\"list-group-item clearfix text-center\">\n      <h4 class=\"list-group-item-heading\">xxx</h4>\n      <p class=\"list-group-item-text\">\n        xxxxxxxxx\n        <span class=\"\">\n          xxxxxxxxxxxxxxxx\n        </span>\n      </p>\n    </li>\n    <li href=\"#\" class=\"list-group-item clearfix text-center\">\n      <h4 class=\"list-group-item-heading\">xxxxxxxxx</h4>\n      <p class=\"list-group-item-text\">\n        xxxxxxxxxxxxxxx\n        <span class=\"\">\n          xx-xxxxxxxxx-xxx\n        </span>\n      </p>\n    </li>\n  </ul> -->\n\n  <div class=\"panel panel-heading-noColor panel-define\">\n    <div class=\"panel-heading\">\n      <div class=\"panel-title\">\n        <h4 class=\"text-left\">\n          教育水平\n          <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n        </h4>\n      </div>\n    </div>\n    \n    <div class=\"panel-body text-center\">\n      <p class=\"lead\">\n         {{ personInfor?.graduatedSchool}}\n      </p>\n      <p class=\"\">\n        <strong>{{ personInfor?.highestEducation}}</strong>\n         {{ personInfor?.majors}}\n        <span class=\"\">&nbsp;{{ personInfor?.graduationYear}}</span>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/personal-center/personal-information/personal-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalInformationComponent = (function () {
    function PersonalInformationComponent(ps, cs) {
        var _this = this;
        this.ps = ps;
        this.cs = cs;
        /*
          来源：
          使用：
         */
        // this.ps.resultEvent.subscribe(
        //   data => {
        //     console.log('收到从Navbar传来的数据。');
        //     console.log(data);
        //     this.personInfor = data['result'];
        //   }
        // )
        /* 获取个人信息  */
        var userId = this.cs.getCookie(__WEBPACK_IMPORTED_MODULE_2__bean_RegisterOrLogin__["d" /* S_CONSTANT */][0]);
        console.log("UserId" + userId);
        this.ps.getPersonalInformation({ username: userId }).subscribe(function (data) {
            console.log('获取个人信息 ');
            _this.personInfor = data['result'];
            console.log(_this.personInfor);
        });
        /* 个人画像分析 */
        this.personAnalysis();
    }
    PersonalInformationComponent.prototype.ngOnInit = function () { };
    PersonalInformationComponent.prototype.personAnalysis = function () {
        // 颜色设置
        var color = {
            linearYtoG: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: '#f5b44d'
                    }, {
                        offset: 1,
                        color: '#28f8de'
                    }]
            },
            linearGtoB: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                        offset: 0,
                        color: '#43dfa2'
                    }, {
                        offset: 1,
                        color: '#28f8de'
                    }]
            },
            linearBtoG: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                        offset: 0,
                        color: '#1c98e8'
                    }, {
                        offset: 1,
                        color: '#28f8de'
                    }]
            },
            areaBtoG: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: 'rgba(35,184,210,.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(35,184,210,0)'
                    }]
            }
        };
        this.option = {
            title: [{
                    text: '我的能力分析',
                    textStyle: {
                        color: '#404040',
                        fontSize: 32,
                        fontWeight: 'normal'
                    },
                    subtext: '2018/04/08',
                    subtextStyle: {
                        color: '#404040',
                        fontSize: 16,
                    },
                    top: 50,
                    left: 80
                }, {
                    textStyle: {
                        color: '#404040',
                        fontSize: 32,
                        fontWeight: 'normal'
                    },
                    subtext: '您已经打败 86% 的求职者',
                    subtextStyle: {
                        color: '#404040',
                        fontSize: 16,
                    },
                    top: "69%",
                    left: 80
                },
            ],
            legend: {
                top: 220,
                left: 80,
                orient: 'vertical',
                itemGap: 15,
                itemWidth: 12,
                itemHeight: 12,
                data: ['我的能力分布'],
                textStyle: {
                    color: '#404040',
                    fontSize: 14,
                },
            },
            tooltip: {
                trigger: 'item'
            },
            radar: {
                center: ['68%', '30%'],
                radius: '40%',
                name: {
                    color: '#404040'
                },
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        color: color.linearYtoG,
                        opacity: .6
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: color.linearYtoG,
                        opacity: 1
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: '#fff',
                        opacity: 1,
                        shadowBlur: 25,
                        shadowColor: '#000',
                        shadowOffsetX: 0,
                        shadowOffsetY: 5,
                    }
                },
                indicator: [{
                        name: '学历',
                        max: 100
                    }, {
                        name: '工作经验',
                        max: 100
                    }, {
                        name: '年龄',
                        max: 100
                    }, {
                        name: '学校',
                        max: 100
                    }, {
                        name: '技能',
                        max: 100
                    }]
            },
            grid: {
                right: 40,
                top: '65%',
                width: "50%",
            },
            xAxis: {
                data: [],
                type: 'value',
                show: false,
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                show: false,
                axisTick: {
                    show: false
                }
            },
            series: [{
                    name: '每日跑步指标分布与比较',
                    type: 'radar',
                    symbolSize: 0,
                    data: [{
                            value: [88, 95, 54, 69, 80],
                            name: '我的指标',
                            itemStyle: {
                                normal: {
                                    color: '#6ccef8',
                                }
                            },
                            lineStyle: {
                                normal: {
                                    opacity: 0,
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: "#6ccef8",
                                    shadowBlur: 15,
                                    shadowColor: 'rgba(0,0,0,.2)',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 5,
                                    opacity: .8
                                }
                            },
                        }]
                }, {
                    type: 'bar',
                    data: [86],
                    stack: 'income',
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            color: '#6ccef8',
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: function (obj) {
                                return obj.value + '%';
                            }
                        }
                    }
                }, {
                    type: 'bar',
                    data: [14],
                    stack: 'income',
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            color: '#fff',
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    }
                }],
            backgroundColor: '#efefef',
        };
    };
    PersonalInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-personal-information',
            template: __webpack_require__("./src/app/personal-center/personal-information/personal-information.component.html"),
            styles: [__webpack_require__("./src/app/personal-center/personal-information/personal-information.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_mycookie_service__["a" /* MycookieService */]])
    ], PersonalInformationComponent);
    return PersonalInformationComponent;
}());



/***/ }),

/***/ "./src/app/personalized-recommendation/personalized-recommendation.component.css":
/***/ (function(module, exports) {

module.exports = "/*猜你喜欢*/\r\n.recommond .media-body p {\r\n  margin: 0;\r\n  font-size: 16px;\r\n}\r\n.r-salary {\r\n  color: #e5775c;\r\n}\r\n.r-compName {\r\n\r\n}\r\np.r-compPosition {\r\n  color: #999;\r\n}\r\nspan.r-compPlace {\r\n  padding-left: 5px;\r\n  font-style: italic;\r\n}\r\n.panel.recommond {\r\n  border: none;\r\n  background: none;\r\n}\r\n.recommond .panel-heading {\r\n  position: relative;\r\n}\r\n.line {\r\n  border-top: 1px solid #ccc;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 65%;\r\n  right: 0;\r\n}\r\n.recommond .panel-body {\r\n  border-top: none;\r\n  border-bottom: 1px solid #eee;\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  margin-left: 10px;\r\n}\r\n.recommond .panel-heading {\r\n  background: none;\r\n}\r\n.position-relative {\r\n  position: relative;\r\n}\r\n.panel-title span.glyphicon {\r\n  padding: 0 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/personalized-recommendation/personalized-recommendation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel recommond\">\n\n  <div class=\"panel-heading\">\n    <h4 class=\"text-info\">猜你喜欢</h4>\n    <div class=\"line\"></div>\n  </div>\n\n  <div class=\"panel-body\" *ngFor=\"let infor of infors;\">\n    <div class=\"media\">\n      <a class=\"media-left\" href=\"#\">\n        <img class=\"media-object img-circle\" src=\"http://placehold.it/70x70\" alt=\"媒体对象\">\n      </a>\n      <div class=\"media-body\">\n        <p class=\"r-compPosition\">\n          {{infor?.compPosition}}\n        </p>\n        <p class=\"r-salary\">\n         {{infor?.compSalary}}\n        </p>\n        <p class=\"text-muted r-compName pull-left\">\n          {{infor?.compName}}\n        </p>\n        <span class=\"r-compPlace text-muted\">{{infor?.compPlace}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/personalized-recommendation/personalized-recommendation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizedRecommendationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalizedRecommendationComponent = (function () {
    function PersonalizedRecommendationComponent(productService) {
        var _this = this;
        this.productService = productService;
        /* 获得猜你喜欢推荐信息 */
        this.productService.getPersonalizedRecommendation().subscribe(function (data) {
            _this.infors = data;
        });
    }
    PersonalizedRecommendationComponent.prototype.ngOnInit = function () {
    };
    PersonalizedRecommendationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-personalized-recommendation',
            template: __webpack_require__("./src/app/personalized-recommendation/personalized-recommendation.component.html"),
            styles: [__webpack_require__("./src/app/personalized-recommendation/personalized-recommendation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], PersonalizedRecommendationComponent);
    return PersonalizedRecommendationComponent;
}());



/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterField, keyword) {
        if (!filterField || !keyword) {
            return list;
        }
        return list.filter(function (item) {
            var fildValue = item[filterField];
            return fildValue.indexOf(keyword) >= 0;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/position-analysis/position-analysis.component.css":
/***/ (function(module, exports) {

module.exports = "        a,\r\n        div,\r\n        p {\r\n            color: #666;\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            color: #666;\r\n        }\r\n\r\n        .text-m a,\r\n        .text-m {\r\n            font-size: 18px;\r\n        }\r\n\r\n        span.cinfor {\r\n            font-weight: 700;\r\n            padding-left: 15px;\r\n        }\r\n\r\n        .list-group-item {\r\n            border: none;\r\n        }\r\n\r\n        .comIntro h5,\r\n        .comIntro h6,\r\n        .comIntro .data,\r\n        .comIntro h4 {\r\n            color: #404040;\r\n        }\r\n\r\n        span.label-m {\r\n            color: #666;\r\n            border: 1px solid #666;\r\n            border-radius: 4px;\r\n            padding: 0.5rem;\r\n            display: inline-block;\r\n            font-weight: 700;\r\n        }\r\n\r\n        .fa {\r\n            color: #999;\r\n        }"

/***/ }),

/***/ "./src/app/position-analysis/position-analysis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row clearfix\">\n    <div class=\"col-md-12 column\" style=\"padding-top:50px\">\n      <div class=\"row clearfix\">\n        <div class=\"col-md-12 column\">\n          <h2>\n            <!-- 大数据开发主管 -->\n            {{posId}}\n            <a target=\"_bank\" href=\"https://www.lagou.com/jobs/4139821.html?source=home_rec&i=home_rec-1\">\n              <i class=\"fa fa-link\" aria-hidden=\"true\"></i>\n            </a>\n          </h2>\n          <p class=\"text-m\">\n             需求人数\n             <strong>2人</strong>\n            <a class=\"btn\" target=\"_blank\" href=\"https://www.lagou.com/jobs/4139821.html?source=home_rec&i=home_rec-1\">更多\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n            </a>\n          </p>\n        </div>\n      </div>\n          <div class=\"row\">\n            <div echarts [options]=\"option\"></div>\n          </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-md-6 column\">\n          <div class=\"list-group\">\n                \n            <div class=\"list-group-item\">\n              <h4>\n                 偏好分析\n              </h4>\n            </div>\n\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n                 教育水平\n              </span>\n              <span class=\"cinfor\">\n                 本科及以上\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-gavel\" aria-hidden=\"true\"></i>\n                 能力要求\n              </span>\n              <span class=\"cinfor\">\n                 有数据统计分析、数据挖掘、机器学习经验者优先\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-cube\" aria-hidden=\"true\"></i>\n                 所属行业\n              </span>\n              <span class=\"cinfor\">\n                IT\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-compass\" aria-hidden=\"true\"></i>\n                岗位性质\n              </span>\n              <span class=\"cinfor\">\n                数据统计分析\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>\n                平均薪资\n              </span>\n              <span class=\"cinfor\">\n                高于同类\n              </span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"list-group\">\n\n            <div class=\"list-group-item\">\n              <h4>\n                基本信息\n              </h4>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-diamond\" aria-hidden=\"true\"></i>\n                薪资范围\n              </span>\n              <span class=\"cinfor\">\n                30k-45k\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                  <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\n                地点\n              </span>\n              <span class=\"cinfor\">\n                深圳\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-lightbulb-o\" aria-hidden=\"true\"></i>\n                工作经验\n              </span>\n              <span class=\"cinfor\">\n                经验5-10年\n              </span>\n            </div>\n            <div class=\"list-group-item\">\n              <span>\n                <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n                学历\n              </span>\n              <span class=\"cinfor\">\n                本科及以上\n              </span>\n            </div>\n            \n                        <div class=\"list-group-item\">\n                          <span>\n                            <i class=\"fa fa-group\" aria-hidden=\"true\"></i>\n                            所属公司\n                          </span>\n                          <span class=\"cinfor\">\n                            极光数据开发组招聘\n                          </span>\n                        </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/position-analysis/position-analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionAnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionAnalysisComponent = (function () {
    function PositionAnalysisComponent(activatedRout) {
        this.activatedRout = activatedRout;
    }
    PositionAnalysisComponent.prototype.ngOnInit = function () {
        this.option = {
            title: [{
                    text: '大数据开发主管',
                    left: '8%',
                    top: "30%",
                },
                {
                    text: "综合评分: 78.33",
                    textStyle: {
                        color: "#f00"
                    },
                    left: '8%',
                    top: "45%",
                },
            ],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['大数据开发主管'],
                left: '8%',
                top: "55%",
            },
            radar: {
                indicator: [{
                        text: '教育水平',
                        max: 100
                    }, {
                        text: '经验要求',
                        max: 100
                    }, {
                        text: '能力要求',
                        max: 100
                    }, {
                        text: '平均薪资',
                        max: 100
                    }, {
                        text: '所属公司',
                        max: 100
                    }, {
                        text: '福利待遇',
                        max: 100
                    },],
                splitNumber: 4,
                name: {
                    textStyle: {
                        color: '#201E1F'
                    }
                },
                axisLine: {
                    lineStyle: {},
                },
                splitLine: {
                    lineStyle: {}
                },
                splitArea: {}
            },
            series: [{
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },
                    symbol: 'circle',
                    symbolSize: 5,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            },
                            color: '#48D1CC',
                            borderColor: '#5ac3bd',
                            shadowColor: 'rgba(0,0,0,0.5)'
                        }
                    },
                    data: [{
                            value: [60, 78, 90, 80, 73, 89],
                            name: '大数据开发主管'
                        }]
                },]
        };
        /* 获取传入的职位 id */
        this.posId = this.activatedRout.snapshot.params['id'];
    };
    PositionAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position-analysis',
            template: __webpack_require__("./src/app/position-analysis/position-analysis.component.html"),
            styles: [__webpack_require__("./src/app/position-analysis/position-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PositionAnalysisComponent);
    return PositionAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/recommend/recommend.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/recommend/recommend.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\n  <div class=\"page-header\" *ngIf=\"ishow\">\n    <h4>\n      <i class=\"fa fa-spin fa-connectdevelop fa-rotate-10\"></i>\n      {{title}}\n      <small>{{subTitle}}</small>\n    </h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let infor of infors\">\n        <div class=\"panel panel-d\">\n          <div class=\"panel-body panel-body-d\">\n             <!-- posid -->\n            <p  [routerLink]=\"['/position', infor?.compPosition]\" class=\"position \">\n              {{infor?.compPosition}}\n              <span class=\"salary\">{{infor?.compSalary}}</span>\n            </p>\n            <!-- comid -->\n            <p  [routerLink]=\"['/descr', infor?.compName]\" class=\"company\" >\n              {{infor?.compName}}\n              <span class=\"label label-warning\">{{infor?.suitability}}</span>\n            </p>\n            <p class=\"place \">\n              {{infor?.compPlace}}\n              <span class=\"time\">{{infor?.compPublish}}</span>\n            </p>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recommend/recommend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendComponent = (function () {
    function RecommendComponent(productService) {
        this.productService = productService;
        this.title = '智能推荐';
        this.subTitle = '根据大数据推荐';
        this.ishow = false;
    }
    RecommendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getRecommendInformation().subscribe(function (date) {
            _this.ishow = true;
            _this.infors = date;
        });
    };
    RecommendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recommend',
            template: __webpack_require__("./src/app/recommend/recommend.component.html"),
            styles: [__webpack_require__("./src/app/recommend/recommend.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], RecommendComponent);
    return RecommendComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" [ngClass]=\"headStyle\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form class=\"form-horizontal\" novalidate [formGroup]=\"formModel\" (submit)=\"onSubmit()\">\n      <!-- 用户名 -->\n      <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-success': formModel.get('username').valid && formModel.get('username').touched,\n          'has-error': formModel.get('username').invalid && formModel.get('username').touched\n          }\">\n        <!-- <label for=\"ie3\" class=\"col-sm-4 control-label\">用户名</label> -->\n        <div class=\"col-sm-6  col-sm-offset-3\">\n          <input user-async formControlName=\"username\" type=\"email\" class=\"form-control\" id=\"ie3\" placeholder=\"username\">\n          <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" [class.hidden]=\"!formModel.hasError('minlength',['username'])\"></span>\n          <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\" [ngClass]=\"{ 'glyphicon-ok': formModel.get('username').valid && formModel.get('username').touched, 'glyphicon-remove':\n                                            formModel.get('username').invalid && formModel.get('username').touched }\"></span>\n          <!-- <div class=\"help-block\" [class.hidden]=\"!formModel.hasError('username','username')\">\n                {{formModel.getError('username','username')?.errorInfor}}\n              </div> -->\n          <div class=\"help-block\" [hidden]=\"!formModel.hasError('username',['username']) || !formModel.hasError('minlength',['username'])\">\n              <p [class.hidden]=\"!formModel.hasError('usernameLike',['username'])\">{{formModel.getError('usernameLike',['username'])?.errorInfor}}</p>            \n            <p [hidden]=\"!(formModel.hasError('required',['username']) && formModel.get('username').touched)\">用户名为必填选项</p>\n            <p [hidden]=\"!formModel.hasError('minlength',['username'])\">用户名长度过短</p>\n            <p [hidden]=\"!formModel.hasError('maxlength',['username'])\">用户名长度太长</p>\n            <p [hidden]=\"!formModel.hasError('username',['username'])\">用户名格式错误</p>\n          </div>\n        </div>\n      </div>\n      <!-- /用户名 -->\n\n      <!--  两个密码 -->\n      <div formGroupName='passwords'>\n        <!-- 密码 -->\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-success': formModel.get('passwords').get('password').valid && formModel.get('passwords').get('password').touched,\n            'has-error': (formModel.get('passwords').get('password').invalid && formModel.get('passwords').get('password').touched)}\">\n          <!-- <label for=\"ip3\" class=\"col-sm-4 control-label\">密码</label> -->\n          <div class=\"col-sm-6  col-sm-offset-3\">\n            <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"ip3\" placeholder=\"Password\">\n            <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\" [ngClass]=\"{ 'glyphicon-ok': formModel.get('passwords').get('password').valid && formModel.get('passwords').get('password').touched,\n                'glyphicon-remove': formModel.get('passwords').get('password').invalid && formModel.get('passwords').get('password').touched\n                }\"></span>\n            <!-- <div class=\"help-block\" [class.hidden]=\"!formModel.hasError('minlength', ['passwords', 'password']) || !formModel.hasError('required', ['passwords', 'password'])\"> -->\n            <div class=\"help-block\">\n              <p [class.hidden]=\"!(formModel.hasError('required', ['passwords', 'password']) && formModel.get('passwords').get('password').touched)\">\n                密码为必填选项\n              </p>\n              <p [class.hidden]=\"!formModel.hasError('minlength', ['passwords', 'password'])\">\n                密码长度过短\n              </p>\n              <p [class.hidden]=\"!formModel.hasError('maxlength', ['passwords', 'password'])\">\n                密码长度过长\n              </p>\n            </div>\n          </div>\n        </div>\n        <!-- /密码 -->\n        <!-- 确认密码 -->\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-success': formModel.get('passwords').get('confirmPassword').valid && formModel.get('passwords').get('confirmPassword').touched, 'has-error':\n          (formModel.get('passwords').get('confirmPassword').invalid && formModel.get('passwords').get('confirmPassword').touched)}\">\n          <!-- <label for=\"ip4\" class=\"col-sm-4 control-label\">确认密码</label> -->\n          <div class=\"col-sm-6  col-sm-offset-3\">\n            <input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"ip4\" placeholder=\"确认密码\">\n            <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\" [ngClass]=\"{ 'glyphicon-ok': formModel.get('passwords').get('confirmPassword').valid && formModel.get('passwords').get('confirmPassword').touched, 'glyphicon-remove':\n              formModel.get('passwords').get('confirmPassword').invalid && formModel.get('passwords').get('confirmPassword').touched }\"></span>\n            <!-- <div class=\"help-block\" [class.hidden]=\"!formModel.hasError('minlength',['passwords', 'confirmPassword'])\">\n                  <p>请输入至少6个字</p>\n                  <p>请输入至少6个字</p>\n                </div> -->\n            <!-- <div class=\"help-block\" [class.hidden]=\"!formModel.hasError('equal','passwords') && formModel.get('passwords').get('confirmPassword').touched\"> -->\n            <div class=\"help-block\">\n              <p>{{formModel.getError('equal',['passwords'])?.errorInfor}}</p>\n            </div>\n          </div>\n        </div>\n        <!-- /确认密码 -->\n\n      </div>\n      <!--  /两个密码 -->\n      <!-- \n          <div>\n             confirmPassword hasError {{formModel.hasError('minlength','confirmPassword')}}\n          </div>\n          <div>\n             password hasError{{formModel.hasError('minlength','password')}}\n          </div>\n          <div>\n            invalid {{formModel.get('passwords').get('confirmPassword').invalid}}\n          </div>\n          <div>\n            valid {{formModel.get('passwords').get('confirmPassword').valid}}\n          </div>\n          <div>\n            pristine {{formModel.get('passwords').get('confirmPassword').pristine}}\n          </div>\n          <div>\n            dirty {{formModel.get('passwords').get('confirmPassword').dirty}}\n          </div> -->\n      <!-- 登录 -->\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-4 col-sm-6\">\n          <button [ngClass]=\" {'btn-danger': !formModel.valid, 'btn-success': formModel.valid}\"  [disabled]=\"!formModel.valid\" type=\"submit\" class=\"btn btn-default col-sm-6\">注册</button>\n        </div>\n      </div>\n      <!-- /登录 -->\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bean_RegisterInfor__ = __webpack_require__("./src/app/bean/RegisterInfor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_validator__ = __webpack_require__("./src/app/validators/validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
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
    function RegisterComponent(fb, router, ps, cs, bsModalRef, modalService) {
        this.fb = fb;
        this.router = router;
        this.ps = ps;
        this.cs = cs;
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.formModel = fb.group({
            username: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__validators_validator__["d" /* usernameValidator */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(12)]],
            passwords: fb.group({
                password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7)]],
                confirmPassword: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]]
            }, { validator: __WEBPACK_IMPORTED_MODULE_6__validators_validator__["a" /* equalValidator */] })
        });
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formModel.valid) {
            console.log('表单数据：');
            console.log(this.formModel.value);
            var submitData = new __WEBPACK_IMPORTED_MODULE_3__bean_RegisterInfor__["a" /* RegisterInfor */](this.formModel.get('username').value, this.formModel.get('passwords').get('password').value);
            console.log(submitData);
            /* 关闭该登录框， 出现等待框 */
            this.bsModalRef.hide();
            this.openModalWithComponent();
            this.ps.getRegisterInfor(submitData).subscribe(function (data) {
                /* 注册成功 */
                if (data.isOK == __WEBPACK_IMPORTED_MODULE_8__bean_RegisterOrLogin__["a" /* OKOrNo */][0]) {
                    /* 注册后逻辑 */
                    var t_1 = setTimeout(function () {
                        /* 关闭 等待提示框*/
                        _this.bsMRNormal.content.closeModal(1);
                        /* 注册成功， 将已经注册的flag 保存 */
                        _this.cs.setStrCookie(__WEBPACK_IMPORTED_MODULE_8__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][0], 'Yes');
                        /* 跳转至 提交个人信息页面 */
                        _this.router.navigate(['/person']);
                        /* 发出信号， 注册成功了 */
                        _this.ps.isLogin.emit(__WEBPACK_IMPORTED_MODULE_8__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][0]);
                        clearTimeout(t_1);
                    }, 2000);
                }
                else {
                    console.log('注册返回信息');
                    console.log(data);
                    /* 关闭 等待提示框*/
                    _this.bsMRNormal.content.closeModal(1);
                    /* 关闭 等待提示框*/
                    // this.bsMRNormal.content.closeModal(1);
                    _this.openModalError();
                }
            });
        }
        else {
            console.log('校验注册表单，发现错误');
        }
    };
    /* 打开自定义的modal */
    RegisterComponent.prototype.openModalWithComponent = function () {
        /* 弹框提示 */
        var initialState = {
            title: '正在提交',
            message: null,
            headStyle: { 'head-warning': true },
            waiting: true
        };
        this.bsMRNormal = this.modalService.show(__WEBPACK_IMPORTED_MODULE_10__modal_modal_component__["a" /* ModalComponent */], {
            backdrop: "static",
            keyboard: false,
            initialState: initialState
        });
    };
    /* 注册 失败 */
    RegisterComponent.prototype.openModalError = function () {
        var _this = this;
        /* 弹框提示 */
        var initialState = {
            title: '提示',
            message: '注册出错',
            headStyle: { 'head-danger': true },
            waiting: false
        };
        var t = setTimeout(function () {
            _this.bsMRError = _this.modalService.show(__WEBPACK_IMPORTED_MODULE_10__modal_modal_component__["a" /* ModalComponent */], {
                backdrop: "static",
                keyboard: false,
                initialState: initialState
            });
            _this.bsMRError.content.closeModal(2);
        }, 800);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_mycookie_service__["a" /* MycookieService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search-home/search-home.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-body-d {\r\n  border: 1px solid rgba(29,51,121,.5);\r\n}\r\n.row.clearfix.searchPage {\r\n    min-height: 170px;\r\n}\r\n/* 猜你喜欢 */\r\n.recommond-list{\r\n    background: rgb(0, 147, 254);\r\n    color: #fff;\r\n    border-radius: 4px;\r\n}\r\n.recommond-list h4{\r\n    background: rgba(58,123,255,.2);\r\n    height: 48px;\r\n    line-height: 48px;\r\n    padding: 0px 20px 0;\r\n    margin-bottom: 0px;\r\n    margin-top: 0;\r\n    color: rgba(255,255,255,.8);\r\n}\r\n.recommond-list .list-group-item{\r\n    cursor: pointer;\r\n    color: #333;\r\n    overflow: hidden;\r\n}\r\nh4 span{\r\n     font-size: 16px;\r\n     color: #2098ff;\r\n }\r\n/* 单选框 分隔条 */\r\n.searchPage hr {\r\n    border: none;\r\n    margin-bottom: 10px;\r\n}\r\n/*搜索页面 单选框字体 */\r\n.searchPage form span.label {\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    background: none;\r\n   \r\n    /* 标签字体大小 */\r\n}\r\nspan.label.label-info {\r\n    color: #59b8fe;\r\n}\r\nspan.label.label-lighter {\r\n    margin-right: 5px;\r\n    width: 100px;\r\n    font-weight: 400;\r\n    color: #666;\r\n}\r\n.searchPage span.label.label-lighter-c {\r\n    /* background-color: #5cb85c; */\r\n    border: 1px solid #999;\r\n}\r\n/* 去除规定内边距 */\r\n.searchPage label.checkbox-inline {\r\n    padding-left: 0;\r\n    /* 设置和顶部技能的字体厚度一样 */\r\n}\r\n.searchPage .input-group {\r\n    width: 175px;\r\n}\r\n/* /搜索匹配 结果信息 */"

/***/ }),

/***/ "./src/app/search-home/search-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix searchPage\" style=\" padding-top: 40px; \" *ngIf=\"isshow\" >\n  <div class=\"col-md-7 col-md-offset-1\">\n    <form [formGroup]=\"formModel\" novalidate name=\"searchForm\" role=\"form\">\n\n      <div class=\"form-inline\">\n\n        <!-- 职业搜索 -->\n        <div class=\"form-group\">\n          <!-- <label class=\"sr-only\" for=\" \">职业搜索</label> -->\n          <div class=\"input-group\">\n            <input style=\" border-top-left-radius: 4px; border-bottom-left-radius: 4px; \" formControlName=\"position\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"请输入搜索职位\">\n          </div>\n        </div>\n        <!-- /职业搜索 -->\n        <!-- 发布单位 -->\n        <div class=\"form-group\">\n          <!-- <label class=\"sr-only\" for=\" \">发布单位</label> -->\n          <div class=\"input-group\">\n            <input formControlName=\"comp\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"请输入发布单位\">\n          </div>\n        </div>\n        <!-- /发布单位 -->\n\n        <!-- 工作地点 -->\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\" \">工作地点</label>\n          <div class=\"input-group\">\n            <input style=\" border-top-right-radius: 4px; border-bottom-right-radius: 4px; \" formControlName=\"place\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"请输入地点\">\n          </div>\n        </div>\n        <!-- /工作地点 -->\n\n        <!-- /学历水平 -->\n        <button style=\" background: #0093fe; color:#fff\" type=\"button\" (click)=\"onSubmit()\" [disabled]=\"!formModel.valid\" class=\"btn\">\n          <span class=\" glyphicon glyphicon-search\"></span>\n        </button>\n      </div>\n      <div class=\"help-block\"></div>\n      <!-- 掌握技能 -->\n      <hr style=\" margin-bottom: 20px; \">\n      <div class=\"form-group\">\n        <span class=\"label label-info\">语言</span>\n          <span *ngFor=\"let iSkill of sillsInfor, let i=index\" (click)=\"clickItem(iSkill.skillInfor);iSkill.hidden = !iSkill.hidden\"\n            [class.label-lighter-c]=\"(iSkill.hidden)\" class=\"label label-lighter\">\n            {{iSkill.skillInfor}}\n          </span>\n      </div>\n      <hr>\n      <!-- /掌握技能 -->\n      <!-- 工资 -->\n      <div class=\"form-group\">\n        <span class=\"label label-info\">工资</span>\n          <span *ngFor=\"let iSalary of salarys; let i=index\" (click)=\"cSalary=i\" [class.label-lighter-c]=\"(cSalary==i)\" class=\"label label-lighter\">\n            <label class=\"checkbox-inline\">\n              <input formControlName=\"salary\" [class.hidden]=\"true\" type=\"radio\" value={{iSalary}}>{{iSalary}}\n            </label>\n          </span>\n      </div>\n      <hr>\n      <!-- /工资 -->\n      <!-- 工作经验 -->\n      <div class=\"form-group\">\n        <span class=\"label label-info\">经验</span>\n          <span *ngFor=\"let iWTime of workTime; let i=index\" (click)=\"cWork=i\" [class.label-lighter-c]=\"(cWork==i)\" class=\"label label-lighter\">\n            <label class=\"checkbox-inline\">\n              <input formControlName=\"exper\" class=\"\" [class.hidden]=\"true\" type=\"radio\" value={{iWTime}}>{{iWTime}}\n            </label>\n          </span>\n      </div>\n      <hr>\n      <!-- /工作经验 -->\n      <!-- 发布时间 -->\n      <div class=\"form-group\">\n        <span class=\"label label-info\">发布</span>\n          <span *ngFor=\"let iTime of releseTime; let i=index\" (click)=\"cTime=i\" [class.label-lighter-c]=\"(cTime==i)\" class=\"label label-lighter\">\n            <label class=\"checkbox-inline\">\n              <input formControlName=\"time\" class=\"\" [class.hidden]=\"true\" type=\"radio\" value={{iTime}}>{{iTime}}\n            </label>\n          </span>\n      </div>\n      <hr>\n      <!-- /发布时间 -->\n    </form>\n    <!-- /表单 -->\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"recommond-list\">\n      <h4>\n        应届生专栏\n      </h4>\n      <a  target=\"_Blank\" class=\"list-group-item\" *ngFor=\"let item of recommend,let i = index\" [href]=\"item?.url\">\n        \n        <!-- <span class=\"text-danger\" *ngIf=\"i>=3 \">{{item?.index}}</span> -->\n        {{item?.content}}\n        <span class=\"glyphicon glyphicon-fire\" style=\"color: red\" *ngIf=\"item?.hot\"></span>\n        <!-- <span class=\"label label-warning\" *ngIf=\"item?.new\">新</span> -->\n        <!-- <span class=\"label label-danger\" *ngIf=\"item?.hot\">热</span> -->\n      </a>\n      </div>\n  </div>\n</div>\n<div class=\"row clearfix searchPage\">\n  <div class=\"col-md-11 col-md-offset-1\">\n    <!-- 搜索结果 -->\n    <div *ngIf=\"searchResult\">\n      <div class=\"page-header\">\n        <h4>\n          <i class=\"fa fa-spin fa-connectdevelop fa-rotate-10\"></i>\n          匹配如下\n          <small>共{{infors?.length}}条结果</small>\n        </h4>\n      </div>\n      <div class=\"row\">\n        <h4 style=\" margin-left: 40px; margin-bottom: 40px; \">推荐学习路径\n          <span>hadoop</span>\n          <span>数据挖掘</span>\n          <span>机器学习</span>\n          <span>建模</span>\n        </h4>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let infor of infors\">\n          <!--搜索结果 start-->\n          <a [href]=\"infor.recruitmentSources\"  target=\"_Blank\">\n            <div class=\"panel  panel-d\">\n              <div class=\"panel-body panel-body-d\">\n                  <p class=\"position \">\n                    {{infor?.compPosition}}\n                    <span class=\"salary\">{{infor?.compSalary}}</span>\n                  </p>\n                <p class=\"company\">\n                  {{infor?.compName}}\n                </p>\n                  <p class=\"place \">\n                    {{infor?.compPlace}}\n                    <span class=\"time\">{{infor?.compPublish}}</span>\n                  </p>\n              </div>\n            </div>\n          </a>\n          <!--/搜索结果 start-->\n        </div>\n      </div>\n    </div>\n    <!-- /搜索结果 -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-home/search-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bean_InforSkill__ = __webpack_require__("./src/app/bean/InforSkill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_modal_service__ = __webpack_require__("./src/app/shared/modal-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchHomeComponent = (function () {
    function SearchHomeComponent(fb, productService, modalService, ms) {
        var _this = this;
        this.fb = fb;
        this.productService = productService;
        this.modalService = modalService;
        this.ms = ms;
        /* 判断当前选择 单选项 Radio */
        this.cSalary = -1;
        this.cSkill = -1;
        this.cTime = -1;
        this.cWork = -1;
        /* 显示搜索结果 */
        this.searchResult = false;
        this.selected = [];
        /* 是否显示页面 */
        this.isshow = false;
        /* 获得查询参数 */
        this.productService.getSearchParams().subscribe(function (data) {
            /* 展示页面 */
            _this.isshow = true;
            console.log('后台返回候选项');
            console.log(data);
            /* 候选字段 */
            _this.edus = data.education;
            _this.releseTime = data.releaseTime;
            _this.skills = data.skills;
            _this.workTime = data.workExperience;
            _this.salarys = data.salary;
            /* 遍历技能值，创建技能对象 */
            _this.sillsInfor = _this.skills.map(function (str) {
                var obj = new __WEBPACK_IMPORTED_MODULE_3__bean_InforSkill__["a" /* InforSkill */](str, false);
                return obj;
            });
            /* 获得猜你喜欢字段 */
            _this.recommend = data.recommend;
        });
        /* 表单模型结构 */
        this.formModel = fb.group({
            position: [null,
                [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ]
            ],
            comp: [null],
            place: [null],
            salary: [null],
            time: [null],
            exper: [null]
        });
    }
    SearchHomeComponent.prototype.ngOnInit = function () { };
    //   点击时执行
    //  执行增加、删除
    SearchHomeComponent.prototype.clickItem = function (item) {
        console.log(item);
        if (this.selected.indexOf(item) == -1) {
            console.log('执行添加');
            this.selected.push(item);
        }
        else {
            console.log('执行删除');
            this.selected.splice(this.selected.indexOf(item), 1);
        }
        console.log(this.selected);
    };
    /* 点击搜索按钮 */
    SearchHomeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formModel.valid) {
            var result = this.formModel.value;
            console.log(result);
            var postResult = '';
            for (var prop in result) {
                if (result[prop] == null) {
                    console.log(prop);
                    console.log(result[prop]);
                }
                else {
                    postResult = postResult + '\"' + prop + '\"' + ':' + '\"' + result[prop] + '\"\,';
                }
            }
            if (this.selected.length > 0) {
                postResult = '{' + postResult + "\"skills\"" + ":" + '\"' + this.selected + '\"}';
            }
            else {
                var l = postResult.length;
                postResult = '{' + postResult.substring(0, l - 1) + '}';
                console.log('未选中技能');
            }
            console.log(postResult);
            var params = JSON.parse(postResult);
            console.log('上传JSON字段');
            console.log(params);
            // let infor : Skills[]=[];
            // for (let entry of this.selected) {
            //   infor.push(new Skills(entry));
            // }
            // this.formModel.setValue({ 'skills': infor});
            this.openModalWithComponent();
            /* 提交搜索字段 */
            this.productService.search(params).subscribe(function (data) {
                // 清空 输入框数据
                _this.formModel.reset();
                // 清空 单选项
                _this.cWork = _this.cTime = _this.cSkill = _this.cSalary = -1;
                // 清空 多选
                for (var index = 0; index < _this.sillsInfor.length; index++) {
                    _this.sillsInfor[index].hidden = false;
                }
                console.log("后台返回数据：");
                console.log(data);
                if (data.status == 'yes') {
                    _this.searchResult = true;
                    _this.infors = data.result;
                    _this.bsMRNormal.content.closeModal(1);
                }
                else if (data.status == 'no') {
                    console.log('搜索结果出现错误');
                    /* 关闭 等待框 */
                    _this.bsMRNormal.content.closeModal(1);
                    _this.openModalError();
                    _this.searchResult = false;
                }
            });
        }
        else {
            console.log('表单不合格 ： error');
        }
    };
    /* 打开 waiting 的 提示框 */
    SearchHomeComponent.prototype.openModalWithComponent = function () {
        /* 弹框提示 */
        var initialState = {
            title: '正在提交',
            message: null,
            headStyle: { 'head-warning': true },
            waiting: true
        };
        this.bsMRNormal = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__modal_modal_component__["a" /* ModalComponent */], {
            backdrop: "static",
            keyboard: false,
            initialState: initialState
        });
    };
    /* 打开提交出错 */
    SearchHomeComponent.prototype.openModalError = function () {
        var _this = this;
        var t = setTimeout(function () {
            _this.bsModalRef = _this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__modal_modal_component__["a" /* ModalComponent */], {
                initialState: {
                    title: '提示',
                    message: '搜索出错',
                    headStyle: { 'head-danger': true },
                    waiting: false
                }
            });
            _this.bsModalRef.content.closeModal(2);
        }, 800);
    };
    SearchHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-home',
            template: __webpack_require__("./src/app/search-home/search-home.component.html"),
            styles: [__webpack_require__("./src/app/search-home/search-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_modal_service__["a" /* ModalService */]])
    ], SearchHomeComponent);
    return SearchHomeComponent;
}());



/***/ }),

/***/ "./src/app/search-resume/search-resume.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-body-d {\r\n  border: 1px solid rgba(29,51,121,.5);\r\n}\r\n.col-md-3:hover .panel-body {\r\n    background-color: rgba(29,51,121,.5);\r\n}\r\n/* 猜你喜欢 */\r\n.recommond-list{\r\n    background: rgba(29,51,121,.5);\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: 0 0 16px 8px rgba(3,2,8,.1);\r\n            box-shadow: 0 0 16px 8px rgba(3,2,8,.1);\r\n    overflow: hidden;\r\n}\r\n.recommond-list h4{\r\n    background: rgba(58,123,255,.2);\r\n    height: 48px;\r\n    line-height: 48px;\r\n    padding: 0px 20px 0;\r\n    margin-bottom: 0px;\r\n    margin-top: 0;\r\n    color: rgba(255,255,255,.8);\r\n}\r\n.recommond-list .list-group-item{\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 20px 0;\r\n    padding-left: 40px;\r\n    color: #eee;\r\n    background: rgba(29,51,121,.5);\r\n    -webkit-box-shadow: 0 0 16px 8px rgba(3,2,8,.1);\r\n            box-shadow: 0 0 16px 8px rgba(3,2,8,.1);\r\n    overflow: hidden;\r\n}\r\n/* 单选框 分隔条 */\r\n.searchPage hr {\r\n    border: none;\r\n    margin-bottom: 10px;\r\n}\r\n/*搜索页面 单选框字体 */\r\n.searchPage form span.label {\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n    /* 标签字体大小 */\r\n}\r\n.label-info {\r\n    background-color: #357688;\r\n}\r\nspan.label.label-lighter {\r\n    margin-right: 5px;\r\n    width: 100px;\r\n    color: #666;\r\n    font-weight: 400;\r\n}\r\n.searchPage span.label.label-lighter-c {\r\n    /* background-color: #5cb85c; */\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n/* 去除规定内边距 */\r\n.searchPage label.checkbox-inline {\r\n    padding-left: 0;\r\n    /* 设置和顶部技能的字体厚度一样 */\r\n}\r\n.searchPage .input-group {\r\n    width: 175px;\r\n}\r\n/* /搜索匹配 结果信息 */\r\n.s{\r\n    height: 40px;\r\n}\r\n.searchPage span.label.label-lighter-c {\r\n    border: 1px solid #efefef;\r\n    color: #333;\r\n}"

/***/ }),

/***/ "./src/app/search-resume/search-resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix searchPage\" *ngIf=\"isshow\">\n  <div class=\"col-md-10 col-md-offset-1\">\n    <form [formGroup]=\"formModel\" novalidate name=\"searchForm\" role=\"form\">\n      <div style=\"background-color: #fff;padding-top:40px;\">\n     \n      <div class=\"form-inline\" style=\" margin-bottom: 50px; \">\n        <!-- 职位 -->\n        <div class=\"form-group  col-md-6 col-md-offset-2\">\n          <label class=\"sr-only\">职位</label>\n          <div class=\"input-group\" style=\" width: 100%;\">\n            <input style=\" border-top-right-radius: 4px; \n            border-bottom-right-radius: 4px;\n            border-top-left-radius: 4px;\n            border-bottom-left-radius: 4px;\" formControlName=\"position\" type=\"text\" class=\"form-control\" placeholder=\"请输入职位\">\n          </div>\n        </div>\n        <!-- /职位 -->\n\n        <button style=\" background: #0093fe; \" type=\"button\" (click)=\"onSubmit()\" [disabled]=\"!formModel.valid\" class=\"btn\">\n          <span class=\" glyphicon glyphicon-search\"></span>\n        </button>\n      </div>\n        <!-- 工资 -->\n        <div class=\"form-group\">\n          <span class=\"label label-info\">工作经验</span>\n            <span *ngFor=\"let iExper of mExper; \n                      let i=index\" (click)=\"cExper=i\" [class.label-lighter-c]=\"(cExper==i)\" class=\"label label-lighter\">\n              <label class=\"checkbox-inline\">\n                <input formControlName=\"exper\" [class.hidden]=\"true\" type=\"radio\" value={{iExper}}>{{iExper}}\n              </label>\n\n            </span>\n        </div>\n        <hr>\n\n        <!-- 工资 -->\n        <div class=\"form-group\">\n          <span class=\"label label-info\">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历</span>\n            <span *ngFor=\"let iEdu of mEedu; \n                      let i=index\" (click)=\"cEdu=i\" [class.label-lighter-c]=\"(cEdu==i)\" class=\"label label-lighter\">\n              <label class=\"checkbox-inline\">\n                <input formControlName=\"edu\" [class.hidden]=\"true\" type=\"radio\" value={{iEdu}}>{{iEdu}}\n              </label>\n\n            </span>\n        </div>\n        <hr>\n\n        <div class=\"form-group\">\n          <span class=\"label label-info\">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</span>\n            <span *ngFor=\"let iAge of mAge; let i=index\" (click)=\"cAge=i\" [class.label-lighter-c]=\"(cAge==i)\" class=\"label label-lighter\">\n              <label class=\"checkbox-inline\">\n                <input formControlName=\"age\" [class.hidden]=\"true\" type=\"radio\" value={{iAge}}>{{iAge}}\n              </label>\n\n            </span>\n        </div>\n        <hr>\n\n        <div class=\"form-group\">\n          <span class=\"label label-info\">发布时间</span>\n            <span *ngFor=\"let iTime of mTime; let i=index\" (click)=\"cTime=i\" [class.label-lighter-c]=\"(cTime==i)\" class=\"label label-lighter\">\n              <label class=\"checkbox-inline\">\n                <input formControlName=\"time\" [class.hidden]=\"true\" type=\"radio\" value={{iTime}}>{{iTime}}\n              </label>\n\n            </span>\n        </div>\n        <hr>\n\n        <!-- 工资 -->\n        <div class=\"form-group\">\n          <span class=\"label label-info\">工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资</span>\n            <span *ngFor=\"let iSalary of mSalary; let i=index\" (click)=\"cSalary=i\" [class.label-lighter-c]=\"(cSalary==i)\" class=\"label label-lighter\">\n              <label class=\"checkbox-inline\">\n                <input formControlName=\"salary\" [class.hidden]=\"true\" type=\"radio\" value={{iSalary}}>{{iSalary}}\n              </label>\n\n            </span>\n        </div>\n      </div>\n    </form>\n    <!-- /表单 -->\n  </div>\n</div>\n<div class=\"row clearfix searchPage\">\n  <div class=\"col-md-10 col-md-offset-1\" style=\"margin-top: 20px; \">\n    <!-- 搜索结果 -->\n    <div *ngIf=\"searchResult\"  style=\"padding: 4px 30px;\">\n      <div class=\"page-header\">\n        <h3>\n          <i class=\"fa fa-spin fa-connectdevelop fa-rotate-10\"></i>\n          匹配如下\n          <small>共{{resumes?.length}}条结果</small>\n        </h3>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let mResums of resumes\">\n          <!--搜索结果 start-->\n          <!-- <a [href]=\"mResums.recruitmentSources\" target=\"_Blank\"> -->\n          <div class=\"panel  panel-d\">\n            <div class=\"panel-body panel-body-d\">\n              <p class=\"position \">\n                {{mResums?.name}}\n                <span class=\"salary\">{{mResums?.sex}}{{mResums?.age}}</span>\n              </p>\n              <p class=\"company\">\n                {{mResums?.city}} {{mResums?.job}} {{mResums?.time}}\n              </p>\n              <p class=\"place \">\n                {{mResums?.salary}}\n                <span class=\"time\">{{mResums?.edu}}{{mResums?.exper}}</span>\n              </p>\n            </div>\n          </div>\n          <!-- </a> -->\n          <!--/搜索结果 start-->\n        </div>\n      </div>\n    </div>\n    <!-- /搜索结果 -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-resume/search-resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResumeComponent = (function () {
    function SearchResumeComponent(fb, ps) {
        var _this = this;
        this.fb = fb;
        this.ps = ps;
        /* 等候单选选项 */
        /*   mExper: string[] = ["1年经验", "2年经验", "3年经验", "4年经验", "5年经验"];
          mEedu: string[] = ["本科", "硕士", "博士", "专科", "其他"];
          mAge: string[] = ["23-25", "25-30", "30-35", "35-40", "其他"];
          mTime: string[] = ["2天前", "5天前", "7天前", "半月前", "一月前"];
          mSalary: string[] = ["4K-5K", "5K-7K", "7K-8K", "9K-10K", "10K-"]; */
        this.mExper = ['不选'];
        this.mEedu = ['不选'];
        this.mAge = ['不选'];
        this.mTime = ['不选'];
        this.mSalary = ['不选'];
        /* 判断当前选择 单选项 Radio */
        this.cSalary = -1;
        this.cSkill = -1;
        this.cTime = -1;
        this.cWork = -1;
        this.searchResult = false;
        /* 是否显示页面 */
        this.isshow = true;
        this.formModel = fb.group({
            position: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            edu: [null],
            salary: [null],
            time: [null],
            age: [null],
            exper: [null]
        });
        /* 获取待查询的候选参数 */
        this.ps.getResumeSearchParams().subscribe(function (data) {
            if (data['statu'] == "Yes") {
                /* 候选字段 */
                _this.mEedu = data['data']['edu'];
                _this.mAge = data['data']['age'];
                _this.mTime = data['data']['time'];
                _this.mSalary = data['data']['salary'];
                _this.mExper = data['data']['exper'];
            }
        });
    }
    SearchResumeComponent.prototype.ngOnInit = function () { };
    SearchResumeComponent.prototype.onSubmit = function () {
        var _this = this;
        var params = this.formModel.value;
        console.log("待查询的简历信息");
        console.log(params);
        if (this.formModel.valid) {
            /* 提交 待查询的简历信息 */
            this.ps.searchResume(params).subscribe(function (data) {
                if (data['statu'] == 'Yes') {
                    _this.resumes = data['data'];
                    _this.searchResult = true;
                }
            });
        }
    };
    SearchResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-resume',
            template: __webpack_require__("./src/app/search-resume/search-resume.component.html"),
            styles: [__webpack_require__("./src/app/search-resume/search-resume.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */]])
    ], SearchResumeComponent);
    return SearchResumeComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthService = (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/can-active-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called');
        /*  根据Cookie 判断进入 PersonOK Person */
        if (this.cs.getCookie(__WEBPACK_IMPORTED_MODULE_3__bean_RegisterOrLogin__["c" /* RegisterOrLogin */][3]) == __WEBPACK_IMPORTED_MODULE_3__bean_RegisterOrLogin__["a" /* OKOrNo */][0]) {
            /* 进入个人信息 */
            this.router.navigate(['/personOK/personal-information']);
            console.log('导航进入 personOK/personal-information');
            return false;
        } /* else if (this.cs.getCookie(RegisterOrLogin[1]) == OKOrNo[0] || this.cs.getCookie(RegisterOrLogin[0]) == OKOrNo[0]) {
            // 进入个人表单
            this.router.navigate(['/person']);
            console.log('导航进入 person');
            return false;
        } */
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mycookie_service__["a" /* MycookieService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/modal-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("./src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalService = (function () {
    function ModalService(modalService) {
        this.modalService = modalService;
    }
    /* 打开自定义的modal */
    ModalService.prototype.openModalWithComponent = function (initialState, time) {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__modal_modal_component__["a" /* ModalComponent */], initialState);
        this.bsModalRef.content.closeModal(time);
    };
    ModalService.prototype.openModalWithSignIn = function (initialState, time) {
        this.bsModalRefSignIn = this.modalService.show(__WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */], { initialState: initialState });
        // this.bsModalRefSignIn.content.closeModal(time);
    };
    ModalService.prototype.openModalWithRegister = function (initialState, time) {
        this.bsModalRefRegister = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], { initialState: initialState });
        // this.bsModalRefRegister.content.closeModal(time);
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ModalService);
    return ModalService;
}());

var ModalInfor = (function () {
    function ModalInfor(title, message, headStyle) {
        this.title = title;
        this.message = message;
        this.headStyle = headStyle;
    }
    return ModalInfor;
}());
var headStyleInfor = (function () {
    function headStyleInfor(headStyle) {
        this.headStyle = headStyle;
    }
    return headStyleInfor;
}());


/***/ }),

/***/ "./src/app/shared/mycookie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycookieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__("./node_modules/_ngx-cookie@2.0.1@ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MycookieService = (function () {
    function MycookieService(cookieService) {
        this.cookieService = cookieService;
    }
    MycookieService.prototype.getCookie = function (key) {
        return this.cookieService.get(key);
    };
    MycookieService.prototype.setStrCookie = function (key, value) {
        return this.cookieService.put(key, value);
    };
    MycookieService.prototype.setObjCookie = function (key, value) {
        return this.cookieService.putObject(key, value);
    };
    MycookieService.prototype.removeCookie = function (key) {
        return this.cookieService.remove(key);
    };
    MycookieService.prototype.removeAllCookie = function () {
        return this.cookieService.removeAll();
    };
    MycookieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */]])
    ], MycookieService);
    return MycookieService;
}());



/***/ }),

/***/ "./src/app/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/_@angular_common@5.2.9@@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    /*
      监听 用户二级菜单的点击
      string ：
          personal-information
          behavioral-preferences
          group-characteristics
    */
    // public userSecMenu: EventEmitter<number> = new EventEmitter();
    function ProductService(http) {
        this.http = http;
        /*
          states: 个人中心页面返回的数据结果
          user: personal-information。component。ts和 navbar.ts
         */
        this.resultEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /*
          登录页面-发出的信号
          navbar 组件监听该信号
          点击退出登录
        */
        this.isLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /* 个人信息表单，下拉框选择项数据 */
    ProductService.prototype.getPersonalEdit = function () {
        return this.http.get('/sots/personalEdit');
    };
    /* 获得查询结果 */
    ProductService.prototype.search = function (para) {
        /*  const paramSearch = this.encodeParams(para);
         console.log(' 查询参数： ' + paramSearch);
         this.http.post('/sots/information', { params: paramSearch }).subscribe();;  */
        return this.http.post('/sots/searchResult', para);
    };
    /* 获得查询简历结果 */
    ProductService.prototype.searchResume = function (para) {
        /*  const paramSearch = this.encodeParams(para);
         console.log(' 查询参数： ' + paramSearch);
         this.http.post('/sots/information', { params: paramSearch }).subscribe();;  */
        return this.http.post('/sots/searchResumeResult', para);
    };
    /* 获得查询关键字 */
    ProductService.prototype.getSearchParams = function () {
        return this.http.get('/sots/searchKeyword');
    };
    /* 获得简历查询关键字 */
    ProductService.prototype.getResumeSearchParams = function () {
        return this.http.get('/sots/searchResumeKeyword');
    };
    /* 获得图表 */
    ProductService.prototype.getGlyphicon = function () {
        return this.http.get('/sots/glyphicon');
    };
    /* 获得个人信息 */
    ProductService.prototype.getPersonalInformation = function (param) {
        return this.http.post('/sots/getPersonalInformation', param);
    };
    /* 提交个人信息 */
    ProductService.prototype.postPersonalInformation = function (params) {
        return this.http.post('/sots/postPersonalInformation', params);
    };
    /* 提交选中省份 */
    ProductService.prototype.postProvinceInfor = function (param) {
        return this.http.post('/sots/personalCity', param);
    };
    /* 提交登录信息 */
    ProductService.prototype.getLoginInfor = function (param) {
        return this.http.post('/sots/logIn', param);
    };
    /* 提交注册信息 */
    ProductService.prototype.getRegisterInfor = function (param) {
        return this.http.post('/sots/registered', param);
    };
    /* 构建查询参数 */
    ProductService.prototype.encodeParams = function (param) {
        return Object.keys(param).filter(function (key) { return param[key]; })
            .reduce(function (sum, key) {
            if (key == 'skills') {
                for (var index = 0; index < param[key].length; index++) {
                    if (param[key][index]["skillInfor"]) {
                        sum = sum.set('skills' + index, param[key][index]["skillInfor"]);
                    }
                    console.log(key + '***' + param[key][index]["skillInfor"]);
                }
            }
            else {
                sum = sum.set(key, param[key]);
            }
            return sum;
        }, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]());
    };
    /* 轮播数据 */
    ProductService.prototype.getCarouselInformation = function () {
        return this.http.get('/sots/carouselData');
    };
    /* 最热职业 */
    ProductService.prototype.getHotJobs = function () {
        return this.http.get('/sots/hotJob');
    };
    /* 智能推荐信息 */
    ProductService.prototype.getRecommendInformation = function () {
        return this.http.get('/sots/recommendInformation');
    };
    /* 猜你喜欢 */
    ProductService.prototype.getPersonalizedRecommendation = function () {
        return this.http.get('/sots/recommendInformation');
    };
    ProductService.prototype.getAllCategories = function () {
        return ['jjj', 'kkk', 'lll', 'yyy'];
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/visualdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/_@angular_common@5.2.9@@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualData = (function () {
    function VisualData(http) {
        this.http = http;
    }
    /* 用户经验 和 经验 两张图
        返回两个{value:number, name:string}数组
     */
    VisualData.prototype.getUserEduExper = function () {
        return this.http.get('/sots/user/usereduexper');
    };
    /* 求职者喜爱岗位*/
    VisualData.prototype.getUserFavJob = function () {
        return this.http.get('/sots/user/userfavjob');
    };
    /* 求职者 喜爱城市 */
    VisualData.prototype.getUserFavCity = function () {
        return this.http.get('/sots/user/userfavcity');
    };
    /* 求职者 性别分布 */
    VisualData.prototype.getUserSex = function () {
        return this.http.get('/sots/user/usersex');
    };
    VisualData.prototype.getUserAge = function () {
        return this.http.get('/sots/user/userage');
    };
    /* /user chart */
    /* /job chart */
    VisualData.prototype.getPostPortrait = function () {
        return this.http.get('/sots/post/postportrait');
    };
    VisualData.prototype.getFactorJobNum = function () {
        return this.http.get('/sots/post/factorjobnum');
    };
    VisualData.prototype.getTopSalaryJobNum = function () {
        return this.http.get('/sots/post/topsalaryjobnum');
    };
    /* 岗位数量最多 岗位薪资最高 */
    VisualData.prototype.getJobNumAndSalaryTop = function () {
        return this.http.get('/sots/post/topsalaryjobnum');
    };
    // 访问拿到 十个城市 平均薪水 职位数量 
    VisualData.prototype.getCityJobNumAndSalaryAvg = function () {
        return this.http.get('/sots/post/avgsalaryjobnum');
    };
    VisualData.prototype.getWelfSalaFactor = function () {
        return this.http.get('/sots/post/welfaresalaryfactor');
    };
    VisualData.prototype.getIndustryCityCompnum = function () {
        return this.http.get('/sots/post/industrycitycompnum');
    };
    VisualData.prototype.getFactorSalary = function () {
        return this.http.get('/sots/post/factorsalary');
    };
    /* 提交选中职位 */
    VisualData.prototype.postJob = function (param) {
        return this.http.post('/sots/post/jobtype', param);
    };
    /* / 职位画像 */
    /* 公司规模 */
    VisualData.prototype.getCompScaleNum = function () {
        return this.http.get('/sots/corporate/corporateportrait');
    };
    VisualData.prototype.getCompType = function () {
        return this.http.get('/sots/corporate/compkind');
    };
    VisualData.prototype.getCityCompScale = function () {
        return this.http.get('/sots/corporate/citycompscale');
    };
    /* 公司规模与分布职位数量 */
    VisualData.prototype.getDifcompScaleJobNum = function () {
        return this.http.get('/sots/corporate/difcompscalejobnum');
    };
    VisualData.prototype.getCityIndustryCompNum = function () {
        return this.http.get('/sots/corporate/cityindustrycompnum');
    };
    VisualData.prototype.getDifCompScaleEdu = function () {
        return this.http.get('/sots/corporate/difcompscaleedu');
    };
    VisualData.prototype.getDifCompScaleExper = function () {
        return this.http.get('/sots/corporate/difcompscaleexper');
    };
    /* 企业画像 */
    VisualData.prototype.getUserAction = function () {
        return this.http.get('/sots/corporate/corporateportrait');
    };
    VisualData.prototype.getUserAgeNum = function () {
        return this.http.get('/sots/visualanalysis/useragenum');
    };
    VisualData.prototype.getUserFeature = function () {
        return this.http.get('/sots/visualanalysis/userfeature');
    };
    VisualData.prototype.getJobNeed = function () {
        return this.http.get('/sots/visualanalysis/jobneed');
    };
    VisualData.prototype.getJobDetail = function () {
        return this.http.get('/sots/visualanalysis/jobdetail');
    };
    VisualData.prototype.getSalaryAnalysis = function () {
        return this.http.get('/sots/visualanalysis/salaryanalysis');
    };
    VisualData.prototype.getCompScale = function () {
        return this.http.get('/sots/visualanalysis/compscale');
    };
    //TODO:删除
    /*     getCompTypeCity() {
            return this.http.get('/sots/visualanalysis/comptypecity');
        } */
    /* getCompCityNum() {
        return this.http.get('/sots/visualanalysis/compcitynum');
    }  TODO:删除api*/
    VisualData.prototype.getCompSizeNum = function () {
        return this.http.get('/sots/visualanalysis/compsizenum');
    };
    VisualData.prototype.getCompStatu = function () {
        return this.http.get('/sots/visualanalysis/compstatu');
    };
    VisualData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VisualData);
    return VisualData;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"modal-header\" [ngClass]=\"headStyle\" >\n    <h4 class=\"modal-title pull-left\" style=\"color: #fff;\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <!-- 表单form -->\n    <form class=\"form-horizontal\" novalidate [formGroup]=\"formModel\" (submit)=\"onSubmit()\">\n        <!-- 用户名 -->\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-success': formModel.get('username').valid && formModel.get('username').touched,\n              'has-error': formModel.get('username').invalid && formModel.get('username').touched\n              }\">\n          <!-- <label for=\"inputEmail3\" class=\"col-sm-4 control-label\">用户名</label> -->\n          <div class=\"col-sm-6 col-sm-offset-3\">\n            <input formControlName=\"username\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"邮箱\">\n            <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" [class.hidden]=\"!formModel.hasError('username')\"></span>\n            <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\" [ngClass]=\"{ 'glyphicon-ok': formModel.get('username').valid && formModel.get('username').touched, 'glyphicon-remove':\n                                                formModel.get('username').invalid && formModel.get('username').touched }\"></span>\n            <!-- <div class=\"help-block\" [class.hidden]=\"!formModel.hasError('username','username')\">\n                    {{formModel.getError('username','username')?.errorInfor}}\n                  </div> -->\n            <!-- <div class=\"help-block\" [hidden]=\"formModel.get('username').valid && formModel.get('username').untouched\"> -->\n               <!-- [hidden]=\"!formModel.hasError('username','username') || !formModel.hasError('minlength','username')\" -->\n            <div class=\"help-block\">\n              <p [class.hidden]=\"!(formModel.hasError('required',['username']) && formModel.get('username').touched)\">用户名为必填选项</p>\n              <p [class.hidden]=\"!formModel.hasError('minlength',['username'])\">用户名长度过短</p>\n              <p [class.hidden]=\"!formModel.hasError('maxlength',['username'])\">用户名长度太长</p>\n              <p [class.hidden]=\"!formModel.hasError('username',['username'])\">邮箱格式错误</p>\n            </div>\n          </div>\n        </div>\n        <!-- /用户名 -->\n    \n        <!-- 密码 -->\n        <div class=\"form-group has-feedback\" [ngClass]=\"{ 'has-success': formModel.get('password').valid && formModel.get('password').touched,\n                'has-error': formModel.get('password').invalid && formModel.get('password').touched\n                }\">\n          <!-- <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">密码</label> -->\n          <div class=\"col-sm-6 col-sm-offset-3\">\n            <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n            <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\" [ngClass]=\"{ 'glyphicon-ok': formModel.get('password').valid && formModel.get('password').touched, 'glyphicon-remove':\n                                  this.formModel.get('password').invalid && formModel.get('password').touched }\"></span>\n            <div class=\"help-block\">              \n              <p [class.hidden]=\"!formModel.hasError('minlength', ['password'])\">请输入至少6个字</p>\n            </div>\n          </div>\n        </div>\n        <!-- /密码 -->\n\n        <!-- 是否公司 -->\n          <div class=\"form-group\">\n            <div class=\"col-sm-6 col-sm-offset-3\">\n              <label style=\"color:#666\">\n                <input formControlName=\"iscomp\" type=\"checkbox\">&nbsp;企业用户\n              </label>\n            </div>\n          </div>\n        <!-- /是否公司 -->\n    \n        <!-- 登录 -->\n        <div class=\"form-group\">\n          <div class=\"col-sm-6 col-sm-offset-4\">\n            <button type=\"submit\" [ngClass]=\" {'btn-danger': !formModel.valid, 'btn-success': formModel.valid}\"  class=\"btn btn-danger col-sm-7\" [disabled]=\"!formModel.valid\" *ngIf=\"btnOK != 'null'\" >{{btnOK}}</button>           \n          </div>\n        </div>\n        <!-- /登录 -->\n    </form>\n    <!-- /表单form -->\n  </div>\n<!--   <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirm()\" *ngIf=\"btnOK != 'null'\" >{{btnOK}}</button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"decline()\" *ngIf=\"btnNO != 'null'\">{{btnNO}}</button>\n  </div> -->"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.9@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_validator__ = __webpack_require__("./src/app/validators/validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bean_RegisterOrLogin__ = __webpack_require__("./src/app/bean/RegisterOrLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_mycookie_service__ = __webpack_require__("./src/app/shared/mycookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/_ngx-bootstrap@2.0.3@ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SigninComponent = (function () {
    function SigninComponent(bsModalRef, fb, ps, router, cs, modalService) {
        this.bsModalRef = bsModalRef;
        this.fb = fb;
        this.ps = ps;
        this.router = router;
        this.cs = cs;
        this.modalService = modalService;
        this.formModel = fb.group({
            username: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_validator__["d" /* usernameValidator */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(18), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            iscomp: [null],
        });
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        /* 表单合法 */
        if (this.formModel.valid) {
            console.log('提交以下登录表单数据  ：');
            console.log(this.formModel.value);
            /* 关闭该登录框， 出现等待框 */
            this.bsModalRef.hide();
            this.openModalWithComponent();
            this.ps.getLoginInfor(this.formModel.value).subscribe(function (data) {
                /* 登录成功 */
                if (data.isOK == 'Yes') {
                    /* 展示注册成功 */
                    // this.modalRef = this.modalService.show(registerOK);
                    var t_1 = setTimeout(function () {
                        /* 关闭 等待提示框*/
                        _this.bsMRNormal.content.closeModal(1);
                        /* 登录成功，保存cookie */
                        //this.cs.setStrCookie(RegisterOrLogin[1], 'Yes');
                        var status = data.status;
                        var id = data.username;
                        console.log(__WEBPACK_IMPORTED_MODULE_6__bean_RegisterOrLogin__["d" /* S_CONSTANT */][0]);
                        console.log(id + " -- " + __WEBPACK_IMPORTED_MODULE_6__bean_RegisterOrLogin__["d" /* S_CONSTANT */][0]);
                        _this.cs.setStrCookie("USER", id);
                        _this.cs.setStrCookie(status, 'Yes');
                        /* 登录成功，跳到个人中心界面 */
                        console.log("Choose remmber:");
                        console.log(_this.formModel.get('iscomp'));
                        /* 如果选择了我是企业，发送隐藏搜企业 */
                        if (_this.formModel.get('iscomp').value) {
                            _this.ps.isLogin.emit("IS_COMP");
                            _this.router.navigate(['/searchresume']);
                        }
                        else {
                            /* 我是用户 */
                            _this.router.navigate(['/person']);
                        }
                        /* 发出信号， 登录成功，隐藏登录注册按钮 */
                        _this.ps.isLogin.emit(status);
                        clearTimeout(t_1);
                    }, 2000);
                }
                else {
                    console.log('登录失败，返回结果为：');
                    console.log(data);
                    /* 关闭 等待提示框*/
                    _this.bsMRNormal.content.closeModal(1);
                    _this.openModalError();
                }
            });
            // 
        }
        else {
            console.log('登录表单存在错误');
        }
    };
    /* 打开自定义的modal */
    SigninComponent.prototype.openModalWithComponent = function () {
        /* 弹框提示 */
        var initialState = {
            title: '正在提交',
            message: null,
            headStyle: { 'head-warning': true },
            waiting: true
        };
        this.bsMRNormal = this.modalService.show(__WEBPACK_IMPORTED_MODULE_9__modal_modal_component__["a" /* ModalComponent */], {
            backdrop: "static",
            keyboard: false,
            initialState: initialState
        });
    };
    /* 登录失败 */
    SigninComponent.prototype.openModalError = function () {
        var _this = this;
        /* 弹框提示 */
        var initialState = {
            title: '提示',
            message: '登录出错',
            headStyle: { 'head-danger': true },
            waiting: false
        };
        var t = setTimeout(function () {
            _this.bsMRError = _this.modalService.show(__WEBPACK_IMPORTED_MODULE_9__modal_modal_component__["a" /* ModalComponent */], {
                backdrop: "static",
                keyboard: false,
                initialState: initialState
            });
            _this.bsMRError.content.closeModal(2);
        }, 800);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__shared_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__shared_mycookie_service__["a" /* MycookieService */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/validators/UserMobileDirective .ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAsyncDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.9@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/_@angular_common@5.2.9@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_first__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/first.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UserAsyncDirective = (function () {
    function UserAsyncDirective(http) {
        this.http = http;
    }
    UserAsyncDirective_1 = UserAsyncDirective;
    UserAsyncDirective.prototype.validate = function (c) {
        var _this = this;
        return c.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .flatMap(function (value) {
            var result = '';
            // this.http.post('/sots/postuserName', { 'username': value }).subscribe(
            //     data => {
            //         result = data['msg'];
            //     }
            // );
            return _this.http.post('/sots/postuserName', { 'username': value });
            // console.log(result);
            // if (result != null) {
            //     console.log('改名字已经注册 :' + value);
            //     return Observable.of({
            //         mobile: {
            //             msg: '手机号为黑名',
            //             actualValue: value
            //         }
            //     });
            // }
            // console.log('校验成功');
            // return null;
        })
            .first();
    };
    UserAsyncDirective = UserAsyncDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[user-async]',
            exportAs: 'userAsync',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_ASYNC_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return UserAsyncDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UserAsyncDirective);
    return UserAsyncDirective;
    var UserAsyncDirective_1;
}());



/***/ }),

/***/ "./src/app/validators/validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validator */
/* unused harmony export usernameAsyncValidate1 */
/* harmony export (immutable) */ __webpack_exports__["d"] = usernameValidator;
/* harmony export (immutable) */ __webpack_exports__["c"] = phoneValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = nameValidator;
/* harmony export (immutable) */ __webpack_exports__["a"] = equalValidator;
/* unused harmony export positiveNumberValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first__ = __webpack_require__("./node_modules/_rxjs@5.5.8@rxjs/_esm5/add/operator/first.js");








var validator = (function () {
    function validator() {
    }
    return validator;
}());

/* 异步校验用户名 */
// export function usernameAsyncValidate(): ValidatorFn {
//     return (control: AbstractControl) => {
//         const c = control.value;
//         if (c.value == 'qq@qq.com') {      
//             return new Promise(resolve => {
//                 resolve({ 'error': { c } });
//             });
//         } else {
//             return new Promise(resolve => {
//                 resolve({ 'error': { c } });
//             });
//         }
//     };
// }
/* 异步校验用户名 */
function usernameAsyncValidate1(c) {
    return c.valueChanges
        .debounceTime(300)
        .distinctUntilChanged()
        .flatMap(function (value) { return value; })
        .first();
}
/*  校验邮编 和 校验电话*/
function usernameValidator(control) {
    if (!control.value)
        return null;
    var emailReq = /\w@\w*\.\w/;
    // var mobileReq = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
    var emaiValid = emailReq.test(control.value);
    // let mobileValid = mobileReq.test(control.value);
    // if (emaiValid)
    console.log('邮箱校验' + emaiValid);
    return emaiValid ? null : { 'username': { errorInfor: '邮箱 格式错误' } };
    // else (mobileValid)
    //   return mobileValid ? null : { mobile: { error: '电话号码错误' } };
}
function phoneValidator(control) {
    if (!control.value)
        return null;
    var mobileReq = /^1[35789]\d{9}$/;
    var mobileValid = mobileReq.test(control.value);
    return mobileValid ? null : { mobile: { error: '电话号码错误' } };
}
function nameValidator(control) {
    if (!control.value)
        return null;
    var nameReq = /^[\u4e00-\u9fa5]{2,4}$/;
    var name = nameReq.test(control.value);
    return name ? null : { name: { error: '姓名输入错误' } };
}
/*  校验前后两次输入密码正确  */
function equalValidator(group) {
    var password = group.get('password').value;
    var pConfirm = group.get('confirmPassword').value;
    var validEqual = (password === pConfirm);
    console.log('两次输入密码比较' + validEqual);
    return validEqual ? null : { 'equal': { errorInfor: '前后两次输入密码不同' } };
}
/*验证输入数值是否为正数*/
function positiveNumberValidator(control) {
    if (!control.value) {
        return null;
    }
    var prices = parseInt(control.value, 10);
    if (prices > 0) {
        return null;
    }
    else {
        return { positiveNumber: true };
    }
}
/* 异步验证登录名是否重复 */
// export function 
/*  校验邮编 和 校验电话*/
// usernameValidator(control: FormControl): any {
//   if (!control.value)
//     return null;
//   var emailReq = /\w@\w*\.\w/;
//   // var mobileReq = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
//   let emaiValid = emailReq.test(control.value);
//   // let mobileValid = mobileReq.test(control.value);
//   // if (emaiValid)
//   console.log('邮箱校验' + emaiValid);
//   return emaiValid ?  null : { 'username': { errorInfor: '邮箱格式错误' } };
//   // else (mobileValid)
//   //   return mobileValid ? null : { mobile: { error: '电话号码错误' } };
// }


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.9@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/_@angular_platform-browser-dynamic@5.2.9@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map