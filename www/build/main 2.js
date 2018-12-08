webpackJsonp([9],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionEditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransactionEditService = /** @class */ (function () {
    function TransactionEditService() {
    }
    TransactionEditService.prototype.setType = function (type) {
        if (type == "income")
            return true;
        else
            return false;
    };
    TransactionEditService.prototype.setIconName = function (category, type) {
        if (!type) {
            if (category == "Food & Drinks")
                return "restaurant";
            else if (category == "Rents & Bills")
                return "flash";
            else if (category == "Shopping & Groceries")
                return "cart";
            else if (category == "Transport")
                return "bus";
            else if (category == "Entertainment")
                return "game-controller-b";
            else if (category == "Healthcare")
                return "heart";
            else if (category == "Others")
                return "pricetag";
            else
                return "help";
        }
        else {
            if (category == "Salary")
                return "briefcase";
            else if (category == "Interests")
                return "card";
            else if (category == "Others")
                return "apps";
            else
                return "help";
        }
    };
    TransactionEditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TransactionEditService);
    return TransactionEditService;
}());

//# sourceMappingURL=transactionedit.service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__overview_overview__["a" /* OverviewPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__categories_categories__["a" /* CategoriesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Overview" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Categories" tabIcon="list"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_transaction__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_transactionlist_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_transaction_edit_transaction__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_categorylist_service__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl, transactionListService, categoryListService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.transactionListService = transactionListService;
        this.categoryListService = categoryListService;
        this.list = [];
        this.categoryList = [];
        this.userId = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
    }
    HomePage.prototype.newTransaction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transaction_transaction__["a" /* TransactionPage */]);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.transactionListService.getTransactionList().then(function (res) {
            _this.list = res;
        });
        this.calculateOverview();
        this.categoryListService.getCategoryList().then(function (res) {
            _this.categoryList = res;
            if (res.length == 0) {
                _this.initializeDefaultCategories();
            }
        });
    };
    HomePage.prototype.calculateOverview = function () {
        var _this = this;
        this.transactionListService.calculateExpense().then(function (res) {
            _this.expense = res;
        });
        this.transactionListService.calculateIncome().then(function (res) {
            _this.income = res;
        });
        this.transactionListService.calculateBalance().then(function (res) {
            _this.balance = res;
        });
    };
    //TODO
    HomePage.prototype.editTransaction = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_transaction_edit_transaction__["a" /* EditTransactionPage */], { item: item });
    };
    HomePage.prototype.deleteTransaction = function (item) {
        var _this = this;
        console.log(item.key);
        var alert = this.alertCtrl.create({
            title: 'Are you sure to delete this transaction?',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + _this.userId + '/transaction-list').child(item.key).remove();
                        _this.calculateOverview();
                        _this.transactionListService.getTransactionList().then(function (res) {
                            _this.list = res;
                        });
                    }
                },
                { text: 'CANCEL' }
            ]
        });
        alert.present();
    };
    /**
     * Ideally I wanted users to be able to add their own customized catagories,
     * and these are the default ones that are added when users first created the account.
     * However it didn't work out and I had to put it here so that evertime when user logged in,
     * if there wasn't any categories yet, the default one are added.
     * The code looks really long and redundant but I couldn't think of a better way of doing it.
     */
    HomePage.prototype.initializeDefaultCategories = function () {
        var ref1 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Food & Drinks",
            icon: "restaurant",
            type: false
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref1).update({
            key: ref1
        });
        console.log(this.userId);
        var ref2 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Rents & Bills",
            icon: "flash",
            type: false
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref2).update({
            key: ref2
        });
        var ref3 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Shopping & Groceries",
            icon: "cart",
            type: false
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref3).update({
            key: ref3
        });
        var ref4 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Transport",
            icon: "bus",
            type: false
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref4).update({
            key: ref4
        });
        var ref5 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Entertainment",
            icon: "game-controller-b",
            type: false
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref5).update({
            key: ref5
        });
        var ref6 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Healthcare",
            icon: "heart",
            type: false
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref6).update({
            key: ref6
        });
        var ref7 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Others",
            icon: "pricetag",
            type: false
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref7).update({
            key: ref7
        });
        var ref8 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Salary",
            icon: "briefcase",
            type: true
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref8).update({
            key: ref8
        });
        var ref9 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Interests",
            icon: "card",
            type: true
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref9).update({
            key: ref9
        });
        var ref10 = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: "Others",
            icon: "apps",
            type: true
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref10).update({
            key: ref10
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Spendlist</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="newTransaction()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <ion-title>Overview</ion-title>\n      <ion-item>\n       <ion-icon name = "cash" item-start></ion-icon>\n        Balance\n        <ion-badge item-end>$ {{balance}}</ion-badge>\n     </ion-item>\n\n      <ion-item>\n        <ion-icon name = "trending-down" item-start></ion-icon>\n        Expense\n        <ion-badge item-end color="danger">$ {{expense}}</ion-badge>\n       </ion-item>\n\n      <ion-item>\n        <ion-icon name = "trending-up" item-start></ion-icon>\n        Income\n        <ion-badge item-end color="secondary">$ {{income}}</ion-badge>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-title>Transactions</ion-title>\n      <ion-item-sliding *ngFor="let item of list">\n        \n      <ion-item>\n          <ion-icon [name]= "item.icon" item-start></ion-icon>\n          {{item.description}}\n          <ion-badge item-end [color]= "item.type ? \'secondary\':\'danger\'">$ {{item.amount}}</ion-badge>\n      </ion-item>\n\n      <ion-item-options>\n          <button ion-button icon-only (click)="editTransaction(item)" color ="light">\n              <ion-icon name="paper"></ion-icon>\n          </button>\n          <button ion-button icon-only (click)="deleteTransaction(item)" color ="danger">\n              <ion-icon name="trash"></ion-icon>\n          </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__services_transactionlist_service__["a" /* TransactionlistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_categorylist_service__["a" /* CategorylistService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categorylist_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_category_new_category__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, navParams, categoryListService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoryListService = categoryListService;
        this.alertCtrl = alertCtrl;
        this.expenseCategories = [];
        this.incomeCategories = [];
    }
    CategoriesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.categoryListService.getExpenseCategory().then(function (res) {
            _this.expenseCategories = res;
        });
        this.categoryListService.getIncomeCategory().then(function (res) {
            _this.incomeCategories = res;
        });
    };
    CategoriesPage.prototype.deleteCategory = function (item) {
        //unfinished function
    };
    CategoriesPage.prototype.newCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_category_new_category__["a" /* NewCategoryPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Categories</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="newCategory()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Expense Categories\n    </ion-card-header>\n\n    <ion-list *ngFor="let item of expenseCategories">\n      <ion-item-sliding>\n        <button ion-item>\n          <ion-icon [name]="item.icon" item-start></ion-icon>\n          {{item.name}}\n        </button>\n\n        <ion-item-options>\n          <button ion-button icon-only (click)="deleteCategory(item)" color="danger">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Income Categories\n    </ion-card-header>\n\n    <ion-list *ngFor="let item of incomeCategories">\n      <ion-item-sliding>\n        <button ion-item>\n          <ion-icon [name]="item.icon" item-start></ion-icon>\n          {{item.name}}\n        </button>\n\n        <ion-item-options>\n          <button ion-button icon-only (click)="deleteCategory(item)" color="danger">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__services_categorylist_service__["a" /* CategorylistService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categorylist_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewCategoryPage = /** @class */ (function () {
    function NewCategoryPage(navCtrl, navParams, formBuilder, categoryListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.categoryListService = categoryListService;
        this.type = false;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Please enter a name.' }
            ]
        };
        this.validations_form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.userId = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
    }
    NewCategoryPage.prototype.newCategory = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').push({
            name: this.validations_form.controls['name'].value,
            icon: "help",
            type: this.type
        }).key;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/category-list').child(ref).update({
            key: ref
        });
        this.navCtrl.pop();
    };
    NewCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-category',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/new-category/new-category.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>New Category</ion-title>\n  <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="newCategory()">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </button>\n  </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-label>Name</ion-label>\n  <form [formGroup]="validations_form">\n    <ion-item>\n     <ion-input formControlName="name" placeholder = "Enter category name" type ="text" ion-text></ion-input>\n    </ion-item>\n\n    <ng-container *ngFor="let validation of validation_messages.name">\n        <div *ngIf= "validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n         {{validation.message}}\n       </div>\n    </ng-container>\n  </form>\n\n    <ion-item>\n        <ion-label>Expense / Income</ion-label>\n        <ion-toggle [(ngModel)]="type"></ion-toggle>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/new-category/new-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__services_categorylist_service__["a" /* CategorylistService */]])
    ], NewCategoryPage);
    return NewCategoryPage;
}());

//# sourceMappingURL=new-category.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_transactionedit_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_categorylist_service__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditTransactionPage = /** @class */ (function () {
    function EditTransactionPage(navCtrl, navParams, alertCtrl, modalCtrl, formBuilder, transactionEditService, categoryListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.transactionEditService = transactionEditService;
        this.categoryListService = categoryListService;
        this.date = new Date().toISOString().substring(0, 10);
        this.type = "Expense";
        this.expenseCategory = [];
        this.incomeCategory = [];
        this.validation_messages = {
            'amount': [
                { type: 'min', message: 'Please enter a valid number > 0.' },
                { type: 'required', message: 'Please enter the amount.' }
            ],
            'description': [
                { type: 'required', message: 'Please enter a description.' }
            ]
        };
        this.item = navParams.get('item');
        this.category = this.item.category;
        this.type = this.item.type ? "Income" : "expense";
        this.date = this.item.date;
        this.amount = this.item.amount;
        this.description = this.item.description;
        this.validations_form = this.formBuilder.group({
            amount: [this.amount, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].min(0)])],
            description: [this.description, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.userId = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
    }
    EditTransactionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.categoryListService.getExpenseCategory().then(function (res) {
            _this.expenseCategory = res;
        });
        this.categoryListService.getIncomeCategory().then(function (res) {
            _this.incomeCategory = res;
        });
    };
    EditTransactionPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            title: 'Select Date',
            canBackwardsSelected: true
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            if (type == "done") {
                _this.date = date.string;
            }
        });
    };
    EditTransactionPage.prototype.editTransaction = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('users/' + this.userId + '/transaction-list').child(this.item.key).update({
            amount: Number(this.validations_form.controls['amount'].value),
            category: this.category,
            date: this.date,
            description: this.validations_form.controls['description'].value,
            icon: this.transactionEditService.setIconName(this.category, this.transactionEditService.setType(this.type)),
            type: this.transactionEditService.setType(this.type)
        });
        this.navCtrl.pop();
    };
    EditTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-transaction',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/edit-transaction/edit-transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Transaction</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" [disabled]="validations_form.invalid" (click)="editTransaction()">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div padding>\n    <ion-segment [(ngModel)]="type">\n      <ion-segment-button value="expense">\n        Expense\n      </ion-segment-button>\n      <ion-segment-button value="income">\n        Income\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <ion-list>\n\n    <div [ngSwitch]="type">\n      <ion-list *ngSwitchCase="\'expense\'">\n        <ion-label>Category</ion-label>\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-list [(ngModel)]="category" radio-group>\n          <ion-item *ngFor="let item of expenseCategory">\n            <ion-icon [name]="item.icon" item-start></ion-icon>\n            <ion-label>{{item.name}}</ion-label>\n            <ion-radio [value]="item.name"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'income\'">\n        <ion-label>Category</ion-label>\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-list [(ngModel)]="category" radio-group>\n          <ion-item *ngFor="let item of incomeCategory">\n            <ion-icon [name]="item.icon" item-start></ion-icon>\n            <ion-label>{{item.name}}</ion-label>\n            <ion-radio [value]="item.name"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-list>\n    </div>\n\n    <form [formGroup]="validations_form">\n      <ion-label>Amount</ion-label>\n      <ion-item>\n        <ion-icon name="logo-usd" item-start></ion-icon>\n        <ion-input formControlName="amount" placeholder="Enter amount" type="number"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.amount">\n        <div *ngIf="validations_form.get(\'amount\').hasError(validation.type) && (validations_form.get(\'amount\').dirty || validations_form.get(\'amount\').touched)">\n          {{validation.message}}\n        </div>\n      </ng-container>\n\n\n      <ion-label>Date</ion-label>\n      <ion-item>\n        <ion-icon name="time" item-start></ion-icon>\n        {{date}}\n        <button ion-button (click)="openCalendar()" item-end>Choose</button>\n      </ion-item>\n\n      <ion-label>Description</ion-label>\n      <ion-item>\n        <ion-icon name="book" item-start></ion-icon>\n        <ion-input formControlName="description" placeholder="Enter description" type="text" ion-text></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.description">\n        <div *ngIf="validations_form.get(\'description\').hasError(validation.type) && (validations_form.get(\'description\').dirty || validations_form.get(\'description\').touched)">\n          {{validation.message}}\n        </div>\n      </ng-container>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/edit-transaction/edit-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_transactionedit_service__["a" /* TransactionEditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_transactionedit_service__["a" /* TransactionEditService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_categorylist_service__["a" /* CategorylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_categorylist_service__["a" /* CategorylistService */]) === "function" && _g || Object])
    ], EditTransactionPage);
    return EditTransactionPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=edit-transaction.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_transactionlist_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpensePage = /** @class */ (function () {
    function ExpensePage(navCtrl, navParams, transactionListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionListService = transactionListService;
        this.groupedList = [];
    }
    ExpensePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.transactionListService.getExpenseList().then(function (res) {
            _this.groupList(res);
        });
    };
    ExpensePage.prototype.groupList = function (list) {
        var _this = this;
        var sortedList = list.sort(function (a, b) {
            if (new Date(a.date) > new Date(b.date))
                return -1;
            if (new Date(a.date) < new Date(b.date))
                return 1;
            return 0;
        });
        var currentDate = false;
        var currentList = [];
        sortedList.forEach(function (value, index) {
            if (value.date != currentDate) {
                currentDate = value.date;
                var newGroup = {
                    date: currentDate,
                    valueList: []
                };
                currentList = newGroup.valueList;
                _this.groupedList.push(newGroup);
            }
            currentList.push(value);
        });
    };
    ExpensePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            var filterList = [];
            this.groupedList.filter(function (item) {
                item.valueList.forEach(function (value, index) {
                    if (value.description.toLowerCase().indexOf(val.toLowerCase()) > -1)
                        filterList.push(item);
                });
            });
            this.groupedList = [];
            this.groupedList = filterList;
        }
    };
    ExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expense',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/expense/expense.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Expense</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item-group *ngFor="let group of groupedList">\n      <ion-item-divider sticky light>{{group.date}}</ion-item-divider>\n      <ion-item *ngFor="let value of group.valueList">\n        <ion-icon [name]="value.icon" item-start></ion-icon>\n        {{value.description}}\n        <ion-badge item-end color="danger">$ {{value.amount}}</ion-badge>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/expense/expense.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__services_transactionlist_service__["a" /* TransactionlistService */]])
    ], ExpensePage);
    return ExpensePage;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.showMap();
        this.getLocation();
    };
    MapPage.prototype.showMap = function () {
        var options = {
            zoom: 15
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    };
    MapPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map.setCenter(latLng);
            // this.map.addMarker({
            //   position: latLng,
            //   visible: true
            // })
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    MapPage.prototype.done = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], MapPage.prototype, "mapRef", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>View Location</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="done()">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_transactionlist_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncomePage = /** @class */ (function () {
    function IncomePage(navCtrl, navParams, transactionListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionListService = transactionListService;
        this.list = [];
        this.groupedList = [];
    }
    IncomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.transactionListService.getIncomeList().then(function (res) {
            _this.list = res;
            _this.groupList(_this.list);
        });
    };
    IncomePage.prototype.groupList = function (list) {
        var _this = this;
        var sortedList = list.sort(function (a, b) {
            if (new Date(a.date) > new Date(b.date))
                return -1;
            if (new Date(a.date) < new Date(b.date))
                return 1;
            return 0;
        });
        var currentDate = false;
        var currentList = [];
        sortedList.forEach(function (value, index) {
            if (value.date != currentDate) {
                currentDate = value.date;
                var newGroup = {
                    date: currentDate,
                    valueList: []
                };
                currentList = newGroup.valueList;
                _this.groupedList.push(newGroup);
            }
            currentList.push(value);
        });
    };
    IncomePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            var filterList = [];
            this.groupedList.filter(function (item) {
                item.valueList.forEach(function (value, index) {
                    if (value.description.toLowerCase().indexOf(val.toLowerCase()) > -1)
                        filterList.push(item);
                });
            });
            this.groupedList = [];
            this.groupedList = filterList;
        }
    };
    IncomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-income',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/income/income.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>Income</ion-title>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item-group *ngFor="let group of groupedList">\n        <ion-item-divider sticky light>{{group.date}}</ion-item-divider>\n        <ion-item *ngFor="let value of group.valueList">\n          <ion-icon [name]="value.icon" item-start></ion-icon>\n          {{value.description}}\n          <ion-badge item-end color="secondary">$ {{value.amount}}</ion-badge>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/income/income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__services_transactionlist_service__["a" /* TransactionlistService */]])
    ], IncomePage);
    return IncomePage;
}());

//# sourceMappingURL=income.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    /**
     * User login, redirect to tabs page if successful
     */
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(this.email, this.password).then(function (user) {
                    _this.toastCtrl.create({
                        message: 'Successfully logged in',
                        duration: 3000
                    }).present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }).catch(function (error) {
                    _this.toastCtrl.create({
                        message: 'Could not find authentication details',
                        duration: 3000
                    }).present();
                    console.error(error);
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Navigate to the register page
     */
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.facebook = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provider);
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
            // this.toastCtrl.create({
            //   message: 'Successfully logged in',
            //   duration: 3000
            // }).present();
            // this.navCtrl.push(TabsPage);
        }).catch(function (error) {
            alert(JSON.stringify(error));
            console.log("fail");
        });
    };
    LoginPage.prototype.google = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provider);
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
        }).catch(function (error) {
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n<ion-item>\n  <ion-label floating>Email Address</ion-label>\n  <ion-input type="text" [(ngModel)] = "email"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)] = "password"></ion-input>\n</ion-item>\n\n<button ion-button full (click) ="login()">LOGIN</button>\n<button ion-button color = "facebook" full (click) = "facebook()">\n    <ion-icon name= "logo-facebook"></ion-icon> \n      | LOGIN WITH FACEBOOK\n</button>\n<button ion-button color = "google" full (click) = "google()">\n    <ion-icon name= "logo-google">  </ion-icon> \n      | LOGIN WITH GOOGLE\n</button>\n<button ion-button full color ="light" (click) ="register()">REGISTER</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_transactionedit_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_categorylist_service__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TransactionPage = /** @class */ (function () {
    function TransactionPage(navCtrl, navParams, alertCtrl, modalCtrl, formBuilder, transactionEditService, geolocation, categoryListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.transactionEditService = transactionEditService;
        this.geolocation = geolocation;
        this.categoryListService = categoryListService;
        this.date = new Date().toISOString().substring(0, 10);
        this.category = "Others";
        this.type = "expense";
        this.expenseCategory = [];
        this.incomeCategory = [];
        this.validation_messages = {
            'amount': [
                { type: 'min', message: 'Please enter a valid number > 0.' },
                { type: 'required', message: 'Please enter the amount.' }
            ],
            'description': [
                { type: 'required', message: 'Please enter a description.' }
            ]
        };
        this.validations_form = this.formBuilder.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].min(0)])],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.userId = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid;
        this.getLocation();
    }
    TransactionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.categoryListService.getExpenseCategory().then(function (res) {
            _this.expenseCategory = res;
        });
        this.categoryListService.getIncomeCategory().then(function (res) {
            _this.incomeCategory = res;
        });
    };
    TransactionPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            title: 'Select Date',
            canBackwardsSelected: true
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
            if (type == "done") {
                _this.date = date.string;
            }
        });
    };
    TransactionPage.prototype.newTransaction = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('users/' + this.userId + '/transaction-list').push({
            amount: Number(this.validations_form.controls['amount'].value),
            category: this.category,
            date: this.date,
            description: this.validations_form.controls['description'].value,
            icon: this.transactionEditService.setIconName(this.category, this.transactionEditService.setType(this.type)),
            type: this.transactionEditService.setType(this.type),
            lat: this.lat,
            long: this.long
        }).key;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('users/' + this.userId + '/transaction-list').child(ref).update({
            key: ref
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    TransactionPage.prototype.viewMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */]);
    };
    TransactionPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/transaction/transaction.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>New Transaction</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only color="royal" [disabled]="validations_form.invalid" (click)="newTransaction()">\n            <ion-icon name="checkmark-circle-outline"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n    \n    \n  <ion-content padding>\n    <div padding>\n      <ion-segment [(ngModel)]="type">\n        <ion-segment-button value="expense">\n          Expense\n        </ion-segment-button>\n        <ion-segment-button value="income">\n          Income\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <ion-list>\n    \n    <div [ngSwitch]="type" >\n       <ion-list *ngSwitchCase="\'expense\'">\n        <ion-label>Category</ion-label>\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-list [(ngModel)]="category" radio-group>\n          <ion-item *ngFor="let item of expenseCategory">\n              <ion-icon [name]="item.icon" item-start></ion-icon>\n              <ion-label>{{item.name}}</ion-label>\n              <ion-radio [value]="item.name"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-list>\n\n          <ion-list *ngSwitchCase="\'income\'">\n            <ion-label>Category</ion-label>\n              <ion-icon name="list" item-start></ion-icon>\n              <ion-list [(ngModel)]="category" radio-group>\n                <ion-item *ngFor="let item of incomeCategory">\n                  <ion-icon [name]="item.icon" item-start></ion-icon>\n                  <ion-label>{{item.name}}</ion-label>\n                  <ion-radio [value]="item.name"></ion-radio>\n              </ion-item>\n              </ion-list>\n          </ion-list>\n      </div>\n  \n    <form [formGroup]="validations_form">\n      <ion-label>Amount</ion-label>\n        <ion-item>\n          <ion-icon name="logo-usd" item-start></ion-icon>\n            <ion-input formControlName="amount" placeholder = "Enter amount" type="number"></ion-input>\n         </ion-item>\n         <ng-container *ngFor="let validation of validation_messages.amount">\n            <div *ngIf= "validations_form.get(\'amount\').hasError(validation.type) && (validations_form.get(\'amount\').dirty || validations_form.get(\'amount\').touched)">\n             {{validation.message}}\n           </div>\n        </ng-container>\n  \n\n      <ion-label>Date</ion-label>\n        <ion-item>\n          <ion-icon name="time" item-start></ion-icon>\n          {{date}}\n        <button ion-button (click)="openCalendar()" item-end>Choose</button>\n        </ion-item>\n\n      <ion-label>Description</ion-label>\n         <ion-item>\n          <ion-icon name="book" item-start></ion-icon>\n          <ion-input formControlName="description" placeholder = "Enter description" type ="text" ion-text></ion-input>\n         </ion-item>\n         <ng-container *ngFor="let validation of validation_messages.description">\n            <div *ngIf= "validations_form.get(\'description\').hasError(validation.type) && (validations_form.get(\'description\').dirty || validations_form.get(\'description\').touched)">\n             {{validation.message}}\n           </div>\n        </ng-container>\n  </form>\n\n  <ion-label>Location</ion-label>\n  <ion-item>\n    <ion-icon name="pin" item-start></ion-icon>\n    {{lat}} , {{long}}\n    <button ion-button (click) = "viewMap()" item-end>View Map</button>\n  </ion-item>\n</ion-list>\n  </ion-content>\n    \n  \n'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_transactionedit_service__["a" /* TransactionEditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_transactionedit_service__["a" /* TransactionEditService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__services_categorylist_service__["a" /* CategorylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_categorylist_service__["a" /* CategorylistService */]) === "function" && _h || Object])
    ], TransactionPage);
    return TransactionPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_transactionlist_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXPENSE_CATEGORIES = ["Food & Drinks", "Rents & Bills", "Shopping & Groceries", "Transport", "Entertainment", "Healthcare", "Others"];
var INCOME_CATEGORIES = ["Salary", "Interests", "Others"];
var OverviewPage = /** @class */ (function () {
    function OverviewPage(navCtrl, navParams, transactionListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionListService = transactionListService;
        this.expenseList = [];
        this.incomeList = [];
    }
    OverviewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.transactionListService.getExpenseList().then(function (res) {
            _this.expenseList = res;
            var groupedBy = __WEBPACK_IMPORTED_MODULE_3_lodash___default()(_this.expenseList)
                .groupBy('category')
                .map(function (objs, key) { return (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.sumBy(objs, 'amount')); })
                .value();
            _this.spendingGraph = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.spendingGraphElement.nativeElement, {
                type: 'doughnut',
                options: {
                    legend: {
                        display: false
                    }
                },
                data: {
                    labels: EXPENSE_CATEGORIES,
                    datasets: [{
                            label: 'precentage of spending',
                            data: groupedBy,
                            backgroundColor: [
                                'rgba(189, 171, 195, 0.8)',
                                'rgba(220, 179, 187, 0.8)',
                                'rgba(237, 211, 180, 0.8)',
                                'rgba(250, 242, 185, 0.8)',
                                'rgba(203, 228, 234, 0.8)',
                                'rgba(157, 207, 213, 0.8)',
                                'rgba(125, 190, 182, 0.8)',
                            ],
                            hoverBackgroundColor: [
                                'rgba(189, 171, 195, 1)',
                                'rgba(220, 179, 187, 1)',
                                'rgba(237, 211, 180, 1)',
                                'rgba(250, 242, 185, 1)',
                                'rgba(203, 228, 234, 1)',
                                'rgba(157, 207, 213, 1)',
                                'rgba(125, 190, 182, 1)',
                            ]
                        }],
                }
            });
        });
        this.transactionListService.getIncomeList().then(function (res) {
            _this.incomeList = res;
            var groupedBy = __WEBPACK_IMPORTED_MODULE_3_lodash___default()(_this.incomeList)
                .groupBy('category')
                .map(function (objs, key) { return (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.sumBy(objs, 'amount')); })
                .value();
            _this.incomeGraph = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.incomeGraphElement.nativeElement, {
                type: 'doughnut',
                options: {
                    legend: {
                        display: false
                    }
                },
                data: {
                    labels: INCOME_CATEGORIES,
                    datasets: [{
                            label: 'precentage of spending',
                            data: groupedBy,
                            backgroundColor: [
                                'rgba(203, 228, 234, 0.8)',
                                'rgba(157, 207, 213, 0.8)',
                                'rgba(125, 190, 182, 0.8)',
                            ],
                            hoverBackgroundColor: [
                                'rgba(203, 228, 234, 1)',
                                'rgba(157, 207, 213, 1)',
                                'rgba(125, 190, 182, 1)',
                            ]
                        }],
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('spendingGraphElement'),
        __metadata("design:type", Object)
    ], OverviewPage.prototype, "spendingGraphElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('incomeGraphElement'),
        __metadata("design:type", Object)
    ], OverviewPage.prototype, "incomeGraphElement", void 0);
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-overview',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/overview/overview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Overview</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-title>Expense</ion-title>\n    <canvas #spendingGraphElement></canvas>  \n\n    <ion-title>Income</ion-title>\n    <canvas #incomeGraphElement></canvas>   \n</ion-content>\n'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/overview/overview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__services_transactionlist_service__["a" /* TransactionlistService */]])
    ], OverviewPage);
    return OverviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 216:
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
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categories/categories.module": [
		695,
		0
	],
	"../pages/edit-transaction/edit-transaction.module": [
		696,
		8
	],
	"../pages/expense/expense.module": [
		697,
		7
	],
	"../pages/income/income.module": [
		699,
		6
	],
	"../pages/login/login.module": [
		700,
		5
	],
	"../pages/map/map.module": [
		698,
		4
	],
	"../pages/new-category/new-category.module": [
		701,
		3
	],
	"../pages/overview/overview.module": [
		702,
		2
	],
	"../pages/register/register.module": [
		397
	],
	"../pages/transaction/transaction.module": [
		703,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.validation_messages = {
            'email': [
                { type: 'pattern', message: 'Please enter a valid email.' },
                { type: 'required', message: 'Email cannot be empty.' }
            ],
            'password': [
                { type: 'minlength', message: 'Password must at least be 6 characters long.' },
                { type: 'required', message: 'Password cannot be empty.' },
                { type: 'pattern', message: 'Password must contain letters(both uppercase and lowercase) and numbers.' }
            ]
        };
        this.validations_form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
        });
        //this.userId = firebase.auth().currentUser.uid;
    }
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().createUserWithEmailAndPassword(this.validations_form.controls['email'].value, this.validations_form.controls['password'].value).then(function (user) {
                    _this.toast.create({
                        message: 'Successfully registered',
                        duration: 3000
                    }).present();
                    _this.navCtrl.pop();
                }).catch(function (error) {
                    _this.toast.create({
                        message: 'Failed to register, please try again',
                        duration: 3000
                    }).present();
                });
                return [2 /*return*/];
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <form [formGroup]="validations_form">\n    <ion-item>\n        <ion-label floating>Email Address</ion-label>\n        <ion-input type="text" formControlName="email"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.email">\n          <div *ngIf= "validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n           {{validation.message}}\n         </div>\n      </ng-container>\n      \n      <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.password">\n          <div *ngIf= "validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n           {{validation.message}}\n         </div>\n      </ng-container>\n\n      <button ion-button full [disabled]="validations_form.invalid" (click)="register()">Register</button>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCjAXgcjKrCqhDNBIwamh-eCLIl-uGUc40",
    authDomain: "swen325-484be.firebaseapp.com",
    databaseURL: "https://swen325-484be.firebaseio.com",
    projectId: "swen325-484be",
    storageBucket: "swen325-484be.appspot.com",
    messagingSenderId: "493661778758"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(570);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angularfire2_database__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_firebase_config__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transaction_transaction__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_transactionlist_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_categorylist_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_new_category_new_category__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_transactionedit_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_transaction_edit_transaction__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_map_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_expense_expense__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_income_income__ = __webpack_require__(180);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_transaction_edit_transaction__["a" /* EditTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_new_category_new_category__["a" /* NewCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_expense_expense__["a" /* ExpensePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_income_income__["a" /* IncomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-transaction/edit-transaction.module#EditTransactionPageModule', name: 'EditTransactionPage', segment: 'edit-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/expense.module#ExpensePageModule', name: 'ExpensePage', segment: 'expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income/income.module#IncomePageModule', name: 'IncomePage', segment: 'income', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-category/new-category.module#NewCategoryPageModule', name: 'NewCategoryPage', segment: 'new-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/overview/overview.module#OverviewPageModule', name: 'OverviewPage', segment: 'overview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_transaction_edit_transaction__["a" /* EditTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_new_category_new_category__["a" /* NewCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_expense_expense__["a" /* ExpensePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_income_income__["a" /* IncomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_transactionlist_service__["a" /* TransactionlistService */],
                __WEBPACK_IMPORTED_MODULE_21__services_transactionedit_service__["a" /* TransactionEditService */],
                __WEBPACK_IMPORTED_MODULE_19__services_categorylist_service__["a" /* CategorylistService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 262,
	"./af.js": 262,
	"./ar": 263,
	"./ar-dz": 264,
	"./ar-dz.js": 264,
	"./ar-kw": 265,
	"./ar-kw.js": 265,
	"./ar-ly": 266,
	"./ar-ly.js": 266,
	"./ar-ma": 267,
	"./ar-ma.js": 267,
	"./ar-sa": 268,
	"./ar-sa.js": 268,
	"./ar-tn": 269,
	"./ar-tn.js": 269,
	"./ar.js": 263,
	"./az": 270,
	"./az.js": 270,
	"./be": 271,
	"./be.js": 271,
	"./bg": 272,
	"./bg.js": 272,
	"./bm": 273,
	"./bm.js": 273,
	"./bn": 274,
	"./bn.js": 274,
	"./bo": 275,
	"./bo.js": 275,
	"./br": 276,
	"./br.js": 276,
	"./bs": 277,
	"./bs.js": 277,
	"./ca": 278,
	"./ca.js": 278,
	"./cs": 279,
	"./cs.js": 279,
	"./cv": 280,
	"./cv.js": 280,
	"./cy": 281,
	"./cy.js": 281,
	"./da": 282,
	"./da.js": 282,
	"./de": 283,
	"./de-at": 284,
	"./de-at.js": 284,
	"./de-ch": 285,
	"./de-ch.js": 285,
	"./de.js": 283,
	"./dv": 286,
	"./dv.js": 286,
	"./el": 287,
	"./el.js": 287,
	"./en-au": 288,
	"./en-au.js": 288,
	"./en-ca": 289,
	"./en-ca.js": 289,
	"./en-gb": 290,
	"./en-gb.js": 290,
	"./en-ie": 291,
	"./en-ie.js": 291,
	"./en-il": 292,
	"./en-il.js": 292,
	"./en-nz": 293,
	"./en-nz.js": 293,
	"./eo": 294,
	"./eo.js": 294,
	"./es": 295,
	"./es-do": 296,
	"./es-do.js": 296,
	"./es-us": 297,
	"./es-us.js": 297,
	"./es.js": 295,
	"./et": 298,
	"./et.js": 298,
	"./eu": 299,
	"./eu.js": 299,
	"./fa": 300,
	"./fa.js": 300,
	"./fi": 301,
	"./fi.js": 301,
	"./fo": 302,
	"./fo.js": 302,
	"./fr": 303,
	"./fr-ca": 304,
	"./fr-ca.js": 304,
	"./fr-ch": 305,
	"./fr-ch.js": 305,
	"./fr.js": 303,
	"./fy": 306,
	"./fy.js": 306,
	"./gd": 307,
	"./gd.js": 307,
	"./gl": 308,
	"./gl.js": 308,
	"./gom-latn": 309,
	"./gom-latn.js": 309,
	"./gu": 310,
	"./gu.js": 310,
	"./he": 311,
	"./he.js": 311,
	"./hi": 312,
	"./hi.js": 312,
	"./hr": 313,
	"./hr.js": 313,
	"./hu": 314,
	"./hu.js": 314,
	"./hy-am": 315,
	"./hy-am.js": 315,
	"./id": 316,
	"./id.js": 316,
	"./is": 317,
	"./is.js": 317,
	"./it": 318,
	"./it.js": 318,
	"./ja": 319,
	"./ja.js": 319,
	"./jv": 320,
	"./jv.js": 320,
	"./ka": 321,
	"./ka.js": 321,
	"./kk": 322,
	"./kk.js": 322,
	"./km": 323,
	"./km.js": 323,
	"./kn": 324,
	"./kn.js": 324,
	"./ko": 325,
	"./ko.js": 325,
	"./ky": 326,
	"./ky.js": 326,
	"./lb": 327,
	"./lb.js": 327,
	"./lo": 328,
	"./lo.js": 328,
	"./lt": 329,
	"./lt.js": 329,
	"./lv": 330,
	"./lv.js": 330,
	"./me": 331,
	"./me.js": 331,
	"./mi": 332,
	"./mi.js": 332,
	"./mk": 333,
	"./mk.js": 333,
	"./ml": 334,
	"./ml.js": 334,
	"./mn": 335,
	"./mn.js": 335,
	"./mr": 336,
	"./mr.js": 336,
	"./ms": 337,
	"./ms-my": 338,
	"./ms-my.js": 338,
	"./ms.js": 337,
	"./mt": 339,
	"./mt.js": 339,
	"./my": 340,
	"./my.js": 340,
	"./nb": 341,
	"./nb.js": 341,
	"./ne": 342,
	"./ne.js": 342,
	"./nl": 343,
	"./nl-be": 344,
	"./nl-be.js": 344,
	"./nl.js": 343,
	"./nn": 345,
	"./nn.js": 345,
	"./pa-in": 346,
	"./pa-in.js": 346,
	"./pl": 347,
	"./pl.js": 347,
	"./pt": 348,
	"./pt-br": 349,
	"./pt-br.js": 349,
	"./pt.js": 348,
	"./ro": 350,
	"./ro.js": 350,
	"./ru": 351,
	"./ru.js": 351,
	"./sd": 352,
	"./sd.js": 352,
	"./se": 353,
	"./se.js": 353,
	"./si": 354,
	"./si.js": 354,
	"./sk": 355,
	"./sk.js": 355,
	"./sl": 356,
	"./sl.js": 356,
	"./sq": 357,
	"./sq.js": 357,
	"./sr": 358,
	"./sr-cyrl": 359,
	"./sr-cyrl.js": 359,
	"./sr.js": 358,
	"./ss": 360,
	"./ss.js": 360,
	"./sv": 361,
	"./sv.js": 361,
	"./sw": 362,
	"./sw.js": 362,
	"./ta": 363,
	"./ta.js": 363,
	"./te": 364,
	"./te.js": 364,
	"./tet": 365,
	"./tet.js": 365,
	"./tg": 366,
	"./tg.js": 366,
	"./th": 367,
	"./th.js": 367,
	"./tl-ph": 368,
	"./tl-ph.js": 368,
	"./tlh": 369,
	"./tlh.js": 369,
	"./tr": 370,
	"./tr.js": 370,
	"./tzl": 371,
	"./tzl.js": 371,
	"./tzm": 372,
	"./tzm-latn": 373,
	"./tzm-latn.js": 373,
	"./tzm.js": 372,
	"./ug-cn": 374,
	"./ug-cn.js": 374,
	"./uk": 375,
	"./uk.js": 375,
	"./ur": 376,
	"./ur.js": 376,
	"./uz": 377,
	"./uz-latn": 378,
	"./uz-latn.js": 378,
	"./uz.js": 377,
	"./vi": 379,
	"./vi.js": 379,
	"./x-pseudo": 380,
	"./x-pseudo.js": 380,
	"./yo": 381,
	"./yo.js": 381,
	"./zh-cn": 382,
	"./zh-cn.js": 382,
	"./zh-hk": 383,
	"./zh-hk.js": 383,
	"./zh-tw": 384,
	"./zh-tw.js": 384
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 604;

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_firebase_config__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_expense_expense__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_income_income__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_6__node_modules_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_7__app_firebase_config__["a" /* FIREBASE_CONFIG */]);
    }
    MyApp.prototype.openTab = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.openExpense = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_expense_expense__["a" /* ExpensePage */]);
    };
    MyApp.prototype.openIncome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_income_income__["a" /* IncomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose (click) = "openTab()">\n                Home\n            </button>\n            <button ion-item menuClose (click) = "openExpense()">\n                Expenses\n            </button>\n            <button ion-item menuClose (click) = "openIncome()">\n                Incomes\n            </button>\n            <button ion-item menuClose>\n                Close Menu\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/stella/Desktop/bla/SWEN325/swen325_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionlistService = /** @class */ (function () {
    function TransactionlistService() {
        this.userId = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
    }
    TransactionlistService.prototype.getTransactionList = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/transaction-list')
                .once('value', function (snapshot) {
                var trans = snapshot.val();
                var temparr = [];
                for (var key in trans) {
                    temparr.push(trans[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    TransactionlistService.prototype.getExpenseList = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/transaction-list')
                .once('value', function (snapshot) {
                var trans = snapshot.val();
                var temparr = [];
                for (var key in trans) {
                    if (!trans[key].type)
                        temparr.push(trans[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    TransactionlistService.prototype.getIncomeList = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/transaction-list')
                .once('value', function (snapshot) {
                var trans = snapshot.val();
                var temparr = [];
                for (var key in trans) {
                    if (trans[key].type)
                        temparr.push(trans[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    TransactionlistService.prototype.calculateExpense = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var expense = 0;
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/transaction-list')
                .once('value').then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var type = childSnapshot.child("type").val();
                    var amount = childSnapshot.child("amount").val();
                    if (!type) {
                        expense -= amount;
                    }
                });
                resolve(expense);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    TransactionlistService.prototype.calculateIncome = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var income = 0;
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/transaction-list')
                .once('value').then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var type = childSnapshot.child("type").val();
                    var amount = childSnapshot.child("amount").val();
                    if (type) {
                        income += amount;
                    }
                });
                resolve(income);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    TransactionlistService.prototype.calculateBalance = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var balance = 0;
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/transaction-list')
                .once('value').then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var type = childSnapshot.child("type").val();
                    var amount = childSnapshot.child("amount").val();
                    if (type) {
                        balance += amount;
                    }
                    else {
                        balance -= amount;
                    }
                });
                resolve(balance);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    TransactionlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TransactionlistService);
    return TransactionlistService;
}());

//# sourceMappingURL=transactionlist.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategorylistService = /** @class */ (function () {
    function CategorylistService() {
        this.userId = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
    }
    CategorylistService.prototype.getCategoryList = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/category-list')
                .once('value', function (snapshot) {
                var trans = snapshot.val();
                var temparr = [];
                for (var key in trans) {
                    temparr.push(trans[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    CategorylistService.prototype.getExpenseCategory = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/category-list')
                .once('value', function (snapshot) {
                var trans = snapshot.val();
                var temparr = [];
                for (var key in trans) {
                    if (!trans[key].type)
                        temparr.push(trans[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    CategorylistService.prototype.getIncomeCategory = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('users/' + _this.userId + '/category-list')
                .once('value', function (snapshot) {
                var trans = snapshot.val();
                var temparr = [];
                for (var key in trans) {
                    if (trans[key].type)
                        temparr.push(trans[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    CategorylistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CategorylistService);
    return CategorylistService;
}());

//# sourceMappingURL=categorylist.service.js.map

/***/ })

},[447]);
//# sourceMappingURL=main.js.map