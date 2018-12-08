import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';
import { ModalController } from 'ionic-angular';
import { TransactionlistService } from '../../services/transactionlist.service';
import firebase from 'firebase';
import { EditTransactionPage } from '../edit-transaction/edit-transaction';
import { CategorylistService } from '../../services/categorylist.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = [];
  categoryList = [];
  userId: string;

  balance: number;
  expense: number;
  income: number;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController, public alertCtrl: AlertController,
    private transactionListService: TransactionlistService,
    private categoryListService: CategorylistService) {
    this.userId = firebase.auth().currentUser.uid;
  }

  newTransaction() {
    this.navCtrl.push(TransactionPage);
  }

  ionViewWillEnter() {
    this.transactionListService.getTransactionList().then((res: any) => {
      this.list = res;
    })
    this.calculateOverview();

    this.categoryListService.getCategoryList().then((res: any) => {
      this.categoryList = res;
      if (res.length == 0) {
        this.initializeDefaultCategories();
      }
    })
  }

  calculateOverview() {
    this.transactionListService.calculateExpense().then((res: any) => {
      this.expense = res;
    })
    this.transactionListService.calculateIncome().then((res: any) => {
      this.income = res;
    })
    this.transactionListService.calculateBalance().then((res: any) => {
      this.balance = res;
    })
  }

  //TODO
  editTransaction(item) {
    this.navCtrl.push(EditTransactionPage, { item: item });
  }

  deleteTransaction(item) {
    console.log(item.key);
    const alert = this.alertCtrl.create({
      title: 'Are you sure to delete this transaction?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            firebase.database().ref('users/' + this.userId + '/transaction-list').child(item.key).remove();
            this.calculateOverview();
            this.transactionListService.getTransactionList().then((res: any) => {
              this.list = res;
            })
          }
        },
        { text: 'CANCEL' }
      ]
    });
    alert.present();
  }

  /**
   * Ideally I wanted users to be able to add their own customized catagories, 
   * and these are the default ones that are added when users first created the account.
   * However it didn't work out and I had to put it here so that evertime when user logged in, 
   * if there wasn't any categories yet, the default one are added.
   * The code looks really long and redundant but I couldn't think of a better way of doing it.
   */
  initializeDefaultCategories() {
    const ref1 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Food & Drinks",
      icon: "restaurant",
      type: false
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref1).update({
      key: ref1
    });

    console.log(this.userId);

    const ref2 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Rents & Bills",
      icon: "flash",
      type: false
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref2).update({
      key: ref2
    });

    const ref3 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Shopping & Groceries",
      icon: "cart",
      type: false
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref3).update({
      key: ref3
    });

    const ref4 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Transport",
      icon: "bus",
      type: false
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref4).update({
      key: ref4
    });

    const ref5 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Entertainment",
      icon: "game-controller-b",
      type: false
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref5).update({
      key: ref5
    });

    const ref6 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Healthcare",
      icon: "heart",
      type: false
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref6).update({
      key: ref6
    });

    const ref7 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Others",
      icon: "pricetag",
      type: false
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref7).update({
      key: ref7
    });

    const ref8 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Salary",
      icon: "briefcase",
      type: true
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref8).update({
      key: ref8
    });

    const ref9 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Interests",
      icon: "card",
      type: true
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref9).update({
      key: ref9
    });

    const ref10 = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name: "Others",
      icon: "apps",
      type: true
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref10).update({
      key: ref10
    });
  }
}



