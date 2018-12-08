import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactionPage } from '../pages/transaction/transaction';
import { OverviewPage } from '../pages/overview/overview';
import { CategoriesPage } from '../pages/categories/categories';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CalendarModule } from "ion2-calendar";

import { RegisterPageModule } from '../pages/register/register.module';
import { TransactionlistService } from '../services/transactionlist.service';
import { CategorylistService } from '../services/categorylist.service';
import { NewCategoryPage } from '../pages/new-category/new-category';
import { TransactionEditService } from '../services/transactionedit.service';
import { EditTransactionPage } from '../pages/edit-transaction/edit-transaction';
import { MapPage } from '../pages/map/map';
import { Geolocation } from '@ionic-native/geolocation';
import { ExpensePage } from '../pages/expense/expense';
import { IncomePage } from '../pages/income/income';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverviewPage,
    CategoriesPage,
    TransactionPage,
    EditTransactionPage,
    TabsPage,
    LoginPage,
    MapPage,
    NewCategoryPage,
    ExpensePage,
    IncomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    RegisterPageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverviewPage,
    CategoriesPage,
    TransactionPage,
    EditTransactionPage,
    TabsPage,
    LoginPage,
    MapPage,
    NewCategoryPage,
    ExpensePage,
    IncomePage
  ],
  providers: [
    TransactionlistService,
    TransactionEditService,
    CategorylistService,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
