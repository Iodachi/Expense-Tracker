import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import firebase from 'firebase';
import { bloomAdd } from '../../../node_modules/@angular/core/src/render3/di';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  /**
   * User login, redirect to tabs page if successful
   */
  async login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
      this.toastCtrl.create({
        message: 'Successfully logged in',
        duration: 3000
      }).present();
      this.navCtrl.setRoot(TabsPage);
    }).catch(error => {
      this.toastCtrl.create({
        message: 'Could not find authentication details',
        duration: 3000
      }).present();
      console.error(error);
    });
  }

  /**
   * Navigate to the register page
   */
  register() {
    this.navCtrl.push(RegisterPage);
  }

  facebook() {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(result => {
      // this.toastCtrl.create({
      //   message: 'Successfully logged in',
      //   duration: 3000
      // }).present();
      // this.navCtrl.push(TabsPage);
    }).catch(function (error) {
      alert(JSON.stringify(error))
      console.log("fail");
    });
  }

  google(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(result => {

    }).catch(function(error) {

    });
  }
}
