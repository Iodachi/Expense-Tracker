import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import firebase from '../../node_modules/firebase';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { ExpensePage } from '../pages/expense/expense';
import { IncomePage } from '../pages/income/income';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(FIREBASE_CONFIG)
  }

  openTab(){
    this.nav.setRoot(TabsPage);
  }

  openExpense(){
    this.nav.setRoot(ExpensePage);
  }

  openIncome(){
    this.nav.setRoot(IncomePage);
  }
}
